(ns ^:figwheel-hooks typing-racer-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as r]
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(def is-waiting (r/atom false))

(defn mount-element [id body]
  (r/render-component [(fn [] body)] (gdom/getElement id)))

(defn title [] [:div {:class ["heading"]} "Typing racer"])

(defn start-race [] (http/post "http://localhost:9002/start-race" {:with-credentials? false}))

(defn end-race [typed-text]
  (http/post "http://localhost:9002/end-race"
		   {:with-credentials? false
		    :form-params       {:words-count (if (= 0 (count typed-text))
									    0
									    (count (str/split typed-text #" ")))}}))

(defn typing-area
  [typed-text]
  [:div [:input {:type     "text" :value @typed-text
			  :onChange #(reset! typed-text (.-value (.-target %)))}]])

(defn show-race [para game-id]
  (mount-element "main"
                 (let [typed-text (atom "")]
                   [:div
                    [:h3 (str "Race Id : " game-id)]
                    [:div {:class "paragraph"} [:p para]]
                    [typing-area typed-text]
                    [:button {:onClick start-race} "start"]
                    [:button {:onClick #(end-race @typed-text)} "end"]])))

(defn set-cookie [cookie]
  (-> js/document
      (.-cookie)
      (set! cookie)))

(defn parse-body [res]
  (js->clj (.parse js/JSON (:body res))))

(defn host-game []
  (go (let [response (<! (http/post "http://localhost:9002/host" {:with-credentials? false}))]
        (set-cookie (str "player-id=" ((parse-body response) "player-id")))
        (set-cookie (str "race-id=" ((parse-body response) "race-id")))
        (show-race ((parse-body response) "paragraph") ((parse-body response) "race-id")))))

(defn waiting-component []
  (when @is-waiting
    [:div "Waiting for other players to join..."]))

(defn join-race
  [name race-id]
  (go
    (let [_ (<! (http/post "http://localhost:9002/join-race"
					  {:with-credentials? false
					   :form-params       {:name name :race-id race-id}}))]
	 (reset! is-waiting true))))

(defn join-race-details
  []
  (let [name (r/atom "") race-id (r/atom "")]
    (fn [] (when (not @is-waiting)
		   [:div {:class ["player-detail"]}
		    [:input {:type "text" :placeholder "Name" :onChange #(reset! name (.-value (.-target %)))}]
		    [:input {:type "text" :placeholder "Race Id" :onChange #(reset! race-id (.-value (.-target %)))}]
		    [:button { :class ["btn"] :onClick #(join-race @name @race-id)} "Submit"]
		    [:div {:id "waiting-component"}]]))))

(defn join-race-component []
  (let [clicked (r/atom false)]
    (fn []
	 (if (not @clicked)
	    [:button
		{:class ["btn"] :onClick #(reset! clicked true)}
		"Join Race"]
	   join-race-details))))

(defn main []
  (mount-element "app"
			  [:div
			   [:button {:onClick host-game} "Host"]])
  (mount-element "app" [:<>
				    [title]
				    [:div {:class ["container"]} [join-race-component] [waiting-component]]]))

(main)

(defn ^:after-load on-reload [] (main))
