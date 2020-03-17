(ns ^:figwheel-hooks typing-racer-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(defn hello-world []
  [:div
   [:h1 "Hello World!"]])

(go (let [response (<! (http/get "http://localhost:9002/"))]
      (prn (:status response))
      (prn (map :login (:body response)))))

(defn mount-app-element []
  (reagent/render-component [hello-world] (gdom/getElement "app")))

(mount-app-element)

(defn ^:after-load on-reload [] (mount-app-element))
