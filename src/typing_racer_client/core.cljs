(ns ^:figwheel-hooks typing-racer-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(def title [:div [:h1 "Typing racer"] [:div {:id "main"}]])

(defn mount-element [id body]
  (reagent/render-component [(fn [] body)] (gdom/getElement id)))

(defn start-race []
  (http/post "http://localhost:9002/start-race" {:with-credentials? false}))

(defn end-race []
  (http/post "http://localhost:9002/end-race" {:with-credentials? false}))

(go (let [response (<! (http/get "http://localhost:9002/paragraph" {:with-credentials? false}))]
      (mount-element "main"
                     [:div
                      [:div {:class "paragraph"} [:p (:body response)]]
                      [:div [:input]]
                      [:button {:onClick start-race} "start"]
                      [:button {:onClick end-race} "end"]])))

(mount-element "app" title)

(defn ^:after-load on-reload [] (mount-element "app" title))
