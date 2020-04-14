(ns ^:figwheel-hooks typing-racer-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as r]
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :as async]))

(def host "localhost")

(def port 9002)

(def race-id (r/atom nil))

(def para (r/atom ""))

(def typed-words (r/atom ""))

(def current-typed (r/atom ""))

(def player-id (r/atom nil))

(def is-waiting (r/atom nil))

(defn create-url [route] (str "http://" host ":" port route))

(defn request
  ([method route] (request method route {}))
  ([method route headers]
   (condp = method
	:get (http/get (create-url route) (merge {:with-credentials? false} headers))
	:post (http/post (create-url route) (merge {:with-credentials? false} headers)))))

(defn mount-element [id body]
  (r/render-component [(fn [] body)] (gdom/getElement id)))

(defn set-cookie [cookie]
  (-> js/document
	 (.-cookie)
	 (set! cookie)))

(defn parse-body [res]
  (js->clj (.parse js/JSON (:body res)) :keywordize-keys true))

(defn calculate-words [text]
  (count (str/split text #" ")))

(defn end-race [typed-text]
  (request :post "/end-race"
		 {:form-params {:words-count (calculate-words typed-text)}}))

(defn set-value [id value]
  (-> js/document
      (.getElementById id)
      (.-value)
      (set! value)))

(defn focus [id]
  (-> js/document
      (.getElementById id)
      (.focus)))

(defn split-identical [string1 string2]
  (split-with (partial apply =) (map vector string1 string2)))

(defn join-first-elements [coll]
  (str/join "" (map first coll)))

(defn sort-out-words [para typed]
  (let [grouping (split-identical para typed)]
    {:correct   (join-first-elements (first grouping))
     :wrong     (join-first-elements (second grouping))
     :remaining (subs para (count typed))}))

(defn input-component
  ([side-effect-atom] (input-component side-effect-atom {}))
  ([side-effect-atom props]
   [:input (merge {:type     "text"
			    :onChange #(reset! side-effect-atom (.-value (.-target %)))} props)]))

(defn show-remaining-time [time]
  (mount-element
    "remaining-time"
    (str "Remaining time : " (dec time) " Secs")))

(defn append-word [typed word]
  (let [words (str/split typed #" " -1)
	   index (dec (count words))]
    (str/join " " (assoc words index word))))

(defn wrong? [para typed]
  (not (= (subs para 0 (count typed)) typed)))

(defn end-race?
  [para typed]
  (and (= (count typed) (count para))
	  (not (wrong? para typed))))

(defn type [event]
  (let [word (.-value (.-target event))]
    (if
	 (not (wrong? @para (append-word @typed-words @current-typed)))
	 (reset! current-typed (last (str/split word #" " -1)))
	 (reset! current-typed word))
    (when
	 (not (wrong? @para (append-word @typed-words @current-typed)))
	 (swap! typed-words #(append-word % word)))
    (when
	 (end-race? @para @typed-words)
	 (end-race @typed-words))))

(defn allow-typing [para]
  (focus "typing-area-input"))

(defn start-race [para]
  (request :post "/start-race")
  (allow-typing para))

(defn should-start-typing
  [para time-to-start]
  (if (zero? time-to-start)
    (start-race para)
    (js/setTimeout
      #(do (should-start-typing para (dec time-to-start))
           (show-remaining-time time-to-start)) 1000)))

(defn players-component [players]
  [:div {:class "joined-player"}
   [:ul "Joined players"
    (for [player players]
	 [:li {:key (player :name)} (player :name)])]])

(defn typing-area [para]
  [:input
   {:type     "text"
    :value    (if (wrong? para (append-word @typed-words @current-typed))
			 @current-typed
			 (last (str/split @typed-words #" " -1)))
    :id       "typing-area-input"
    :class    ["typing-input"]
    :onChange type}])

(defn paragraph [para]
  (let [sorted-out-words (sort-out-words para (append-word @typed-words @current-typed))]
    [:div
	[:span {:class "typed"} (:correct sorted-out-words)]
	[:span {:class "wrong"} (:wrong sorted-out-words)]
	[:span {:class "paragraph"} (:remaining sorted-out-words)]]))

(defn race-component [para players]
  (mount-element "container"
			  [:div
			   [:div {:id "remaining-time"} "Remaining Time"]
			   [players-component players]
			   [paragraph para]
			   [typing-area para]])
  (should-start-typing para 3))

(defn show-race [race-id]
  (go (let [response (<! (request :get (str "/race?race-id=" race-id)))
		  parsed-body (parse-body response)
		  paragraph (parsed-body :paragraph)
		  players (parsed-body :players)]
	   (reset! para paragraph)
	   (race-component paragraph players))))

(defn waiting-page [race-id]
  (mount-element
    "container"
    [:div
	[:div {:class ["waiting"]} "Waiting for other players to join..."]
	[:div {:class ["waiting"]} (str "Race Id ->  " race-id)]]))

(defn wait-for-join [race-id]
  (async/go (let [response (async/<! (request :get "/wait-status" {:with-credentials? false
													  :query-params      {:race-id race-id}}))]
		    (if ((parse-body response) :hasAllJoined)
			 (show-race race-id)
			 (js/setTimeout #(wait-for-join race-id) 1000)))))

(defn host-game [host no-of-players]
  (async/go (let [response (async/<! (request :post (str "/host?host=" host "&&number-of-players=" no-of-players)))
			   player-id ((parse-body response) :player-id)
			   race-id ((parse-body response) :race-id)]
		    (set-cookie (str "player-id=" player-id))
		    (set-cookie (str "race-id=" race-id))
		    (waiting-page race-id)
		    (wait-for-join race-id))))

(defn update-players-number [previous number]
  (if (empty? number)
    (set-value "no-of-player" @previous)
    (do (reset! previous number) (set-value "no-of-player" number))))

(defn host-page []
  (let [name (r/atom "") no-of-players (r/atom 1)]
    (mount-element
	 "container"
	 [:div {:class ["player-detail"]}
	  [input-component name {:placeholder "Name"}]
	  [:input {:id          "no-of-player"
			 :type        "number"
			 :placeholder "Number of players"
			 :onChange    #(update-players-number no-of-players (.-value (.-target %)))}]
	  [:button {:class ["btn"] :onClick #(host-game @name @no-of-players)} "Submit"]])))

(defn waiting-component []
  (r/create-class
    {:component-did-mount
	(fn []
	  (async/go-loop
	    [response (async/<! (http/get "http://localhost:9002/wait-status" {:with-credentials? false
															 :query-params      {:race-id @race-id}}))]
	    (async/<! (async/timeout 1000))
	    (if (true? (:hasAllJoined (parse-body response)))
		 (show-race @race-id)
		 (recur (async/<! (http/get "http://localhost:9002/wait-status" {:with-credentials? false
															:query-params      {:race-id @race-id}}))))))

	:reagent-render
	(fn []
	  (when @is-waiting
	    [:div {:class ["waiting"]} "Waiting for other players to join..."
		[:div (str "Race-Id	:- 	" @race-id)]]))}))

(defn join-race
  [name id]
  (async/go
    (let [response (async/<! (http/post "http://localhost:9002/join-race"
								{:with-credentials? false
								 :form-params       {:name name :race-id id}}))
		body (parse-body response)]
	 (do
	   (if (= (:status response) 200)
		(do (reset! race-id (:race-id body))
		    (reset! para (:paragraph body))
		    (reset! player-id (:player-id body))
		    (reset! is-waiting true)
		    (mount-element "container" waiting-component))
		(mount-element "error-msg" "Error"))))))

(defn join-race-details []
  (let [name (r/atom "") race-id (r/atom "")]
    (mount-element
	 "container"
	 [:<>
	  [:div {:id "error-msg"}]
	  [:div {:class ["player-detail"]}
	   [input-component name {:placeholder "Name"}]
	   [input-component race-id {:placeholder "Race Id"}]
	   [:button {:class ["btn"] :onClick #(join-race @name @race-id)} "Submit"]]])))

(defn join-race-component []
  [:div {:class ["player-detail"]}
   [:button {:class ["btn"] :onClick host-page} "Host Race"]
   [:button {:class ["btn"] :onClick join-race-details} "Join Race"]])

(defn correct-cookie? [cookies]
  (every? (partial contains? cookies) ["race-id" "player-id"]))

(defn create-map [cookies]
  (if (empty? cookies)
    {} (into (sorted-map) (map #(str/split % #"=") (str/split cookies #"; ")))))

(defn join-game-if-has-cookie [cookies]
  (let [cookies-map (create-map cookies)]
    (when (correct-cookie? cookies-map)
      (show-race (cookies-map "race-id")))))

(defn check-if-already-joined []
  (-> js/document
	 (.-cookie)
	 (join-game-if-has-cookie)))

(defn main []
  (when-not (check-if-already-joined)
    (mount-element
	 "container"
	 (join-race-component))))

(main)

(defn ^:after-load on-reload [] (main))
