(ns ^:figwheel-hooks typing-racer-client.utils
  (:require
    [cljs-http.client :as http]
    [reagent.core :as r]
    [goog.dom :as gdom]
    [typing-racer-client.constants :refer :all]))

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

(defn set-value-of-dom-element [id value]
  (-> js/document
      (.getElementById id)
      (.-value)
      (set! value)))

(defn focus [id]
  (-> js/document
      (.getElementById id)
      (.focus)))
