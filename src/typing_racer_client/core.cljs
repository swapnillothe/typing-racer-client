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
  (mount-element "container"
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

(defn waiting-component []
  (when @is-waiting
    [:div {:class ["waiting"]} "Waiting for other players to join..."]))

(defn waiting-page [race-id]
  [:div
   [:div {:class ["waiting"]} "Waiting for other players to join..."]
   [:div {:class ["waiting"]} (str "Race Id ->  " race-id)]])

(defn wait-for-join [race-id]
  (go (let [response (<! (http/get (str "http://localhost:9002/race?race-id=" race-id) {:with-credentials? false}))]
        (if (= 2 (count ((parse-body response) "players")))
          (show-race ((parse-body response) "paragraph") race-id)
          (js/setTimeout #(wait-for-join race-id) 1000)))))

(defn host-game [host]
  (go (let [response (<! (http/post (str "http://localhost:9002/host?host=" host) {:with-credentials? false}))
            player-id ((parse-body response) "player-id")
            race-id ((parse-body response) "race-id")]
        (set-cookie (str "player-id=" player-id))
        (set-cookie (str "race-id=" race-id))
        (mount-element "container" (waiting-page race-id))
        (wait-for-join race-id))))

(defn join-race
  [name race-id]
  (go (let [response (<! (http/post "http://localhost:9002/join-race"
                                    {:with-credentials? false
                                     :form-params       {:name name :race-id race-id}}))
            parsed-body (parse-body response)
            race-id (parsed-body "race-id")
            para (parsed-body "paragraph")]
        (show-race para race-id))))

(defn join-race-details []
  (let [name (r/atom "") race-id (r/atom "")]
    (mount-element
      "container"
      [:div {:class ["player-detail"]}
       [:input {:type "text" :placeholder "Name" :onChange #(reset! name (.-value (.-target %)))}]
       [:input {:type "text" :placeholder "Race Id" :onChange #(reset! race-id (.-value (.-target %)))}]
       [:button {:class ["btn"] :onClick #(join-race @name @race-id)} "Submit"]
       [:div {:id "waiting-component"}]])))

(defn host-page []
  (let [name (r/atom "")]
    (mount-element
      "container"
      [:div {:class ["player-detail"]}
       [:input {:type "text" :placeholder "Name" :onChange #(reset! name (.-value (.-target %)))}]
       [:button {:class ["btn"] :onClick #(host-game @name)} "Submit"]])))

(defn join-race-component []
  [:div {:class ["player-detail"]}
   [:button {:class ["btn"] :onClick host-page} "Host Race"]
   [:button {:class ["btn"] :onClick join-race-details} "Join Race"]])

(defn main []
  (mount-element
    "app"
    [:<> [title]
     [:div {:id "container" :class ["container"]}
      [join-race-component] [waiting-component]]]))

(main)

(defn ^:after-load on-reload [] (main))
