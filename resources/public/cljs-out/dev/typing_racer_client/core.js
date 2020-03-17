// Compiled by ClojureScript 1.10.520 {}
goog.provide('typing_racer_client.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
typing_racer_client.core.hello_world = (function typing_racer_client$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello World!"], null)], null);
});
var c__15573__auto___15669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15573__auto___15669){
return (function (){
var f__15574__auto__ = (function (){var switch__15550__auto__ = ((function (c__15573__auto___15669){
return (function (state_15662){
var state_val_15663 = (state_15662[(1)]);
if((state_val_15663 === (1))){
var inst_15653 = cljs_http.client.get.call(null,"http://localhost:9002/");
var state_15662__$1 = state_15662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15662__$1,(2),inst_15653);
} else {
if((state_val_15663 === (2))){
var inst_15655 = (state_15662[(2)]);
var inst_15656 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_15655);
var inst_15657 = cljs.core.prn.call(null,inst_15656);
var inst_15658 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_15655);
var inst_15659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_15658);
var inst_15660 = cljs.core.prn.call(null,inst_15659);
var state_15662__$1 = (function (){var statearr_15664 = state_15662;
(statearr_15664[(7)] = inst_15657);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15662__$1,inst_15660);
} else {
return null;
}
}
});})(c__15573__auto___15669))
;
return ((function (switch__15550__auto__,c__15573__auto___15669){
return (function() {
var typing_racer_client$core$state_machine__15551__auto__ = null;
var typing_racer_client$core$state_machine__15551__auto____0 = (function (){
var statearr_15665 = [null,null,null,null,null,null,null,null];
(statearr_15665[(0)] = typing_racer_client$core$state_machine__15551__auto__);

(statearr_15665[(1)] = (1));

return statearr_15665;
});
var typing_racer_client$core$state_machine__15551__auto____1 = (function (state_15662){
while(true){
var ret_value__15552__auto__ = (function (){try{while(true){
var result__15553__auto__ = switch__15550__auto__.call(null,state_15662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15553__auto__;
}
break;
}
}catch (e15666){if((e15666 instanceof Object)){
var ex__15554__auto__ = e15666;
var statearr_15667_15670 = state_15662;
(statearr_15667_15670[(5)] = ex__15554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15671 = state_15662;
state_15662 = G__15671;
continue;
} else {
return ret_value__15552__auto__;
}
break;
}
});
typing_racer_client$core$state_machine__15551__auto__ = function(state_15662){
switch(arguments.length){
case 0:
return typing_racer_client$core$state_machine__15551__auto____0.call(this);
case 1:
return typing_racer_client$core$state_machine__15551__auto____1.call(this,state_15662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
typing_racer_client$core$state_machine__15551__auto__.cljs$core$IFn$_invoke$arity$0 = typing_racer_client$core$state_machine__15551__auto____0;
typing_racer_client$core$state_machine__15551__auto__.cljs$core$IFn$_invoke$arity$1 = typing_racer_client$core$state_machine__15551__auto____1;
return typing_racer_client$core$state_machine__15551__auto__;
})()
;})(switch__15550__auto__,c__15573__auto___15669))
})();
var state__15575__auto__ = (function (){var statearr_15668 = f__15574__auto__.call(null);
(statearr_15668[(6)] = c__15573__auto___15669);

return statearr_15668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15575__auto__);
});})(c__15573__auto___15669))
);

typing_racer_client.core.mount_app_element = (function typing_racer_client$core$mount_app_element(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [typing_racer_client.core.hello_world], null),goog.dom.getElement("app"));
});
typing_racer_client.core.mount_app_element.call(null);
typing_racer_client.core.on_reload = (function typing_racer_client$core$on_reload(){
return typing_racer_client.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
