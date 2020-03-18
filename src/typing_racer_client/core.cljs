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

(go (let [response (<! (http/get "http://localhost:9002/paragraph" {:with-credentials? false}))]
      (mount-element "main"
                     [:div
                    [:div {:style #js {:background "aqua"}} [:p (:body response)]]
                    [:div [:input]]])))

(mount-element "app" title)

(defn ^:after-load on-reload [] (mount-element "app" title))
