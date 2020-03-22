(ns ^:figwheel-hooks typing-racer-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(def title [:div [:h1 "Typing racer"] [:div {:id "main"}]])

(defn mount-element [id body]
  (reagent/render-component [(fn [] body)] (gdom/getElement id)))

(defn start-race []
  (http/post "http://localhost:9002/start-race" {:with-credentials? false}))

(defn end-race [typed-text]
  (http/post "http://localhost:9002/end-race"
             {:with-credentials? false
              :form-params       {:words-count (if
                                                 (= 0 (count typed-text))
                                                 0
                                                 (count (str/split typed-text #" ")))}}))

(defn typing-area
  [typed-text]
  [:div [:input {:type     "text" :value @typed-text
                 :onChange #(reset! typed-text (.-value (.-target %)))}]])

(defn show-race []
  (go (let [response (<! (http/get "http://localhost:9002/paragraph" {:with-credentials? false}))]
        (mount-element "main"
                       (let [typed-text (atom "")]
                         [:div
                          [:div {:class "paragraph"} [:p (:body response)]]
                          [typing-area typed-text]
                          [:button {:onClick start-race} "start"]
                          [:button {:onClick #(end-race @typed-text)} "end"]])))))

(defn set-cookie [cookie]
  (-> js/document
      (.-cookie)
      (set! cookie)))


(defn host-game []
  (go (let [response (<! (http/post "http://localhost:9002/host" {:with-credentials? false}))]
        (doall (map set-cookie (.parse js/JSON (:body response))))
        (show-race))))

(defn main []
  (mount-element "app" title)
  (mount-element "main"
                 [:div
                  [:button {:onClick host-game} "Host"]
                  [:button "Join"]]))

(main)

(defn ^:after-load on-reload [] (main))
