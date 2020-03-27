(ns ^:figwheel-hooks typing-racer-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as r]
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(def host "localhost")
(def port 9002)

(defn create-link [route] (str "http://" host ":" port route))

; If new method comes add here.
(defn request
  ([method route] (request method route {}))
  ([method route headers]
   (condp = method
     :get (http/get (create-link route) (merge {:with-credentials? false} headers))
     :post (http/post (create-link route) (merge {:with-credentials? false} headers)))))

(defn set-cookie [cookie]
  (-> js/document
      (.-cookie)
      (set! cookie)))

(defn parse-body [res]
  (js->clj (.parse js/JSON (:body res))))

(defn mount-element [id body]
  (r/render-component [(fn [] body)] (gdom/getElement id)))

(defn calculate-words [text]
  (count (str/split text #" ")))

(defn end-race [typed-text]
  (request :post "/end-race"
           {:form-params {:words-count (calculate-words typed-text)}}))

(defn mount-empty-input [id]
  (mount-element id [:div [:input {:type "text" :value ""}]]))

(defn input-component
  ([side-effect-atom] (input-component side-effect-atom {}))
  ([side-effect-atom props]
   [:input (merge {:type     "text"
                   :onChange #(reset! side-effect-atom (.-value (.-target %)))} props)]))

(defn show-remaining-time [time]
  (mount-element
    "remaining-time"
    (str "Remaining time : " (dec time) " Secs")))

(defn typing-area
  ([text] (mount-empty-input "typing-area") (typing-area text 10))
  ([text time-to-start]
   (if (zero? time-to-start)
     (mount-element "typing-area" [:div [input-component text]])
     (js/setTimeout
       #(do (typing-area text (dec time-to-start))
            (show-remaining-time time-to-start)) 1000))))

(defn players-component [players]
  [:div {:class "joined-player"}
   [:ul "Joined players"
    (for [player players]
      [:li {:key (player "name")} (player "name")])]])

(defn race-component [race-id para players typed-text]
  (mount-element "container"
                 [:div
                  [:h3 (str "Race Id : " race-id)]
                  [:div {:id "remaining-time"}]
                  [:div {:class "paragraph"} [:p para]]
                  [players-component players]
                  [:div {:id "typing-area"}]
                  [:button {:onClick #(request :post "/start-race")} "start"]
                  [:button {:onClick #(end-race @typed-text)} "end"]]))

(defn show-race [race-id]
  (go (let [response (<! (request :get (str "/race?race-id=" race-id)))
            parsed-body (parse-body response)
            para (parsed-body "paragraph")
            players (parsed-body "players")
            typed-text (atom "")]
        (race-component race-id para players typed-text)
        (typing-area typed-text))))

(defn waiting-page [race-id]
  (mount-element
    "container"
    [:div
     [:div {:class ["waiting"]} "Waiting for other players to join..."]
     [:div {:class ["waiting"]} (str "Race Id ->  " race-id)]]))

(defn wait-for-join [race-id]
  (go (let [response (<! (request :get (str "/race?race-id=" race-id)))]
        (if (= 2 (count ((parse-body response) "players")))
          (show-race race-id)
          (js/setTimeout #(wait-for-join race-id) 1000)))))

(defn host-game [host]
  (go (let [response (<! (request :post (str "/host?host=" host)))
            player-id ((parse-body response) "player-id")
            race-id ((parse-body response) "race-id")]
        (set-cookie (str "player-id=" player-id))
        (set-cookie (str "race-id=" race-id))
        (waiting-page race-id)
        (wait-for-join race-id))))

(defn join-race
  [name race-id]
  (go (let [response (<! (request :post "/join-race" {:form-params {:name name :race-id race-id}}))
            parsed-body (parse-body response)
            player-id (parsed-body "player-id")]
        (set-cookie (str "player-id=" player-id))
        (set-cookie (str "race-id=" race-id))
        (show-race race-id))))

(defn join-race-details []
  (let [name (r/atom "") race-id (r/atom "")]
    (mount-element
      "container"
      [:div {:class ["player-detail"]}
       [input-component name {:placeholder "Name"}]
       [input-component race-id {:placeholder "Race Id"}]
       [:button {:class ["btn"] :onClick #(join-race @name @race-id)} "Submit"]
       [:div {:id "waiting-component"}]])))

(defn host-page []
  (let [name (r/atom "")]
    (mount-element
      "container"
      [:div {:class ["player-detail"]}
       [input-component name {:placeholder "Name"}]
       [:button {:class ["btn"] :onClick #(host-game @name)} "Submit"]])))

(defn join-race-component []
  [:div {:class ["player-detail"]}
   [:button {:class ["btn"] :onClick host-page} "Host Race"]
   [:button {:class ["btn"] :onClick join-race-details} "Join Race"]])

(defn has-correct-cookie [cookies]
  (every? (partial contains? cookies) ["race-id" "player-id"]))

(defn create-map [cookies]
  (if (empty? cookies)
    {} (into (sorted-map) (map #(str/split % #"=") (str/split cookies #"; ")))))

(defn join-game-if-has-cookie [cookies]
  (let [cookies-map (create-map cookies)]
    (when (has-correct-cookie cookies-map)
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
