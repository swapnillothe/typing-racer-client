// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11073 = arguments.length;
switch (G__11073) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11074 = (function (f,blockable,meta11075){
this.f = f;
this.blockable = blockable;
this.meta11075 = meta11075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11076,meta11075__$1){
var self__ = this;
var _11076__$1 = this;
return (new cljs.core.async.t_cljs$core$async11074(self__.f,self__.blockable,meta11075__$1));
});

cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11076){
var self__ = this;
var _11076__$1 = this;
return self__.meta11075;
});

cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11075","meta11075",1332548768,null)], null);
});

cljs.core.async.t_cljs$core$async11074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11074";

cljs.core.async.t_cljs$core$async11074.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11074");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11074.
 */
cljs.core.async.__GT_t_cljs$core$async11074 = (function cljs$core$async$__GT_t_cljs$core$async11074(f__$1,blockable__$1,meta11075){
return (new cljs.core.async.t_cljs$core$async11074(f__$1,blockable__$1,meta11075));
});

}

return (new cljs.core.async.t_cljs$core$async11074(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11080 = arguments.length;
switch (G__11080) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11083 = arguments.length;
switch (G__11083) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11086 = arguments.length;
switch (G__11086) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11088 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11088);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11088,ret){
return (function (){
return fn1.call(null,val_11088);
});})(val_11088,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11090 = arguments.length;
switch (G__11090) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___11092 = n;
var x_11093 = (0);
while(true){
if((x_11093 < n__4607__auto___11092)){
(a[x_11093] = (0));

var G__11094 = (x_11093 + (1));
x_11093 = G__11094;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11095 = (i + (1));
i = G__11095;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11096 = (function (flag,meta11097){
this.flag = flag;
this.meta11097 = meta11097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11098,meta11097__$1){
var self__ = this;
var _11098__$1 = this;
return (new cljs.core.async.t_cljs$core$async11096(self__.flag,meta11097__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11098){
var self__ = this;
var _11098__$1 = this;
return self__.meta11097;
});})(flag))
;

cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11096.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11097","meta11097",-1156480948,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11096";

cljs.core.async.t_cljs$core$async11096.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11096");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11096.
 */
cljs.core.async.__GT_t_cljs$core$async11096 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11096(flag__$1,meta11097){
return (new cljs.core.async.t_cljs$core$async11096(flag__$1,meta11097));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11096(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11099 = (function (flag,cb,meta11100){
this.flag = flag;
this.cb = cb;
this.meta11100 = meta11100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11101,meta11100__$1){
var self__ = this;
var _11101__$1 = this;
return (new cljs.core.async.t_cljs$core$async11099(self__.flag,self__.cb,meta11100__$1));
});

cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11101){
var self__ = this;
var _11101__$1 = this;
return self__.meta11100;
});

cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11100","meta11100",782212582,null)], null);
});

cljs.core.async.t_cljs$core$async11099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11099";

cljs.core.async.t_cljs$core$async11099.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11099");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11099.
 */
cljs.core.async.__GT_t_cljs$core$async11099 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11099(flag__$1,cb__$1,meta11100){
return (new cljs.core.async.t_cljs$core$async11099(flag__$1,cb__$1,meta11100));
});

}

return (new cljs.core.async.t_cljs$core$async11099(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11102_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11102_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11103_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11103_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11104 = (i + (1));
i = G__11104;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11110 = arguments.length;
var i__4731__auto___11111 = (0);
while(true){
if((i__4731__auto___11111 < len__4730__auto___11110)){
args__4736__auto__.push((arguments[i__4731__auto___11111]));

var G__11112 = (i__4731__auto___11111 + (1));
i__4731__auto___11111 = G__11112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11107){
var map__11108 = p__11107;
var map__11108__$1 = (((((!((map__11108 == null))))?(((((map__11108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11108):map__11108);
var opts = map__11108__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11105){
var G__11106 = cljs.core.first.call(null,seq11105);
var seq11105__$1 = cljs.core.next.call(null,seq11105);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11106,seq11105__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11114 = arguments.length;
switch (G__11114) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11013__auto___11160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___11160){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___11160){
return (function (state_11138){
var state_val_11139 = (state_11138[(1)]);
if((state_val_11139 === (7))){
var inst_11134 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
var statearr_11140_11161 = state_11138__$1;
(statearr_11140_11161[(2)] = inst_11134);

(statearr_11140_11161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (1))){
var state_11138__$1 = state_11138;
var statearr_11141_11162 = state_11138__$1;
(statearr_11141_11162[(2)] = null);

(statearr_11141_11162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (4))){
var inst_11117 = (state_11138[(7)]);
var inst_11117__$1 = (state_11138[(2)]);
var inst_11118 = (inst_11117__$1 == null);
var state_11138__$1 = (function (){var statearr_11142 = state_11138;
(statearr_11142[(7)] = inst_11117__$1);

return statearr_11142;
})();
if(cljs.core.truth_(inst_11118)){
var statearr_11143_11163 = state_11138__$1;
(statearr_11143_11163[(1)] = (5));

} else {
var statearr_11144_11164 = state_11138__$1;
(statearr_11144_11164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (13))){
var state_11138__$1 = state_11138;
var statearr_11145_11165 = state_11138__$1;
(statearr_11145_11165[(2)] = null);

(statearr_11145_11165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (6))){
var inst_11117 = (state_11138[(7)]);
var state_11138__$1 = state_11138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11138__$1,(11),to,inst_11117);
} else {
if((state_val_11139 === (3))){
var inst_11136 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11138__$1,inst_11136);
} else {
if((state_val_11139 === (12))){
var state_11138__$1 = state_11138;
var statearr_11146_11166 = state_11138__$1;
(statearr_11146_11166[(2)] = null);

(statearr_11146_11166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (2))){
var state_11138__$1 = state_11138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11138__$1,(4),from);
} else {
if((state_val_11139 === (11))){
var inst_11127 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
if(cljs.core.truth_(inst_11127)){
var statearr_11147_11167 = state_11138__$1;
(statearr_11147_11167[(1)] = (12));

} else {
var statearr_11148_11168 = state_11138__$1;
(statearr_11148_11168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (9))){
var state_11138__$1 = state_11138;
var statearr_11149_11169 = state_11138__$1;
(statearr_11149_11169[(2)] = null);

(statearr_11149_11169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (5))){
var state_11138__$1 = state_11138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11150_11170 = state_11138__$1;
(statearr_11150_11170[(1)] = (8));

} else {
var statearr_11151_11171 = state_11138__$1;
(statearr_11151_11171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (14))){
var inst_11132 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
var statearr_11152_11172 = state_11138__$1;
(statearr_11152_11172[(2)] = inst_11132);

(statearr_11152_11172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (10))){
var inst_11124 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
var statearr_11153_11173 = state_11138__$1;
(statearr_11153_11173[(2)] = inst_11124);

(statearr_11153_11173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (8))){
var inst_11121 = cljs.core.async.close_BANG_.call(null,to);
var state_11138__$1 = state_11138;
var statearr_11154_11174 = state_11138__$1;
(statearr_11154_11174[(2)] = inst_11121);

(statearr_11154_11174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___11160))
;
return ((function (switch__10918__auto__,c__11013__auto___11160){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_11155 = [null,null,null,null,null,null,null,null];
(statearr_11155[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_11155[(1)] = (1));

return statearr_11155;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_11138){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11156){if((e11156 instanceof Object)){
var ex__10922__auto__ = e11156;
var statearr_11157_11175 = state_11138;
(statearr_11157_11175[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11176 = state_11138;
state_11138 = G__11176;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_11138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_11138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___11160))
})();
var state__11015__auto__ = (function (){var statearr_11158 = f__11014__auto__.call(null);
(statearr_11158[(6)] = c__11013__auto___11160);

return statearr_11158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___11160))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11177){
var vec__11178 = p__11177;
var v = cljs.core.nth.call(null,vec__11178,(0),null);
var p = cljs.core.nth.call(null,vec__11178,(1),null);
var job = vec__11178;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11013__auto___11349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___11349,res,vec__11178,v,p,job,jobs,results){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___11349,res,vec__11178,v,p,job,jobs,results){
return (function (state_11185){
var state_val_11186 = (state_11185[(1)]);
if((state_val_11186 === (1))){
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11185__$1,(2),res,v);
} else {
if((state_val_11186 === (2))){
var inst_11182 = (state_11185[(2)]);
var inst_11183 = cljs.core.async.close_BANG_.call(null,res);
var state_11185__$1 = (function (){var statearr_11187 = state_11185;
(statearr_11187[(7)] = inst_11182);

return statearr_11187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11185__$1,inst_11183);
} else {
return null;
}
}
});})(c__11013__auto___11349,res,vec__11178,v,p,job,jobs,results))
;
return ((function (switch__10918__auto__,c__11013__auto___11349,res,vec__11178,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11188 = [null,null,null,null,null,null,null,null];
(statearr_11188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11188[(1)] = (1));

return statearr_11188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11185){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11189){if((e11189 instanceof Object)){
var ex__10922__auto__ = e11189;
var statearr_11190_11350 = state_11185;
(statearr_11190_11350[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11351 = state_11185;
state_11185 = G__11351;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___11349,res,vec__11178,v,p,job,jobs,results))
})();
var state__11015__auto__ = (function (){var statearr_11191 = f__11014__auto__.call(null);
(statearr_11191[(6)] = c__11013__auto___11349);

return statearr_11191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___11349,res,vec__11178,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11192){
var vec__11193 = p__11192;
var v = cljs.core.nth.call(null,vec__11193,(0),null);
var p = cljs.core.nth.call(null,vec__11193,(1),null);
var job = vec__11193;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___11352 = n;
var __11353 = (0);
while(true){
if((__11353 < n__4607__auto___11352)){
var G__11196_11354 = type;
var G__11196_11355__$1 = (((G__11196_11354 instanceof cljs.core.Keyword))?G__11196_11354.fqn:null);
switch (G__11196_11355__$1) {
case "compute":
var c__11013__auto___11357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async){
return (function (state_11209){
var state_val_11210 = (state_11209[(1)]);
if((state_val_11210 === (1))){
var state_11209__$1 = state_11209;
var statearr_11211_11358 = state_11209__$1;
(statearr_11211_11358[(2)] = null);

(statearr_11211_11358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (2))){
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11209__$1,(4),jobs);
} else {
if((state_val_11210 === (3))){
var inst_11207 = (state_11209[(2)]);
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11209__$1,inst_11207);
} else {
if((state_val_11210 === (4))){
var inst_11199 = (state_11209[(2)]);
var inst_11200 = process.call(null,inst_11199);
var state_11209__$1 = state_11209;
if(cljs.core.truth_(inst_11200)){
var statearr_11212_11359 = state_11209__$1;
(statearr_11212_11359[(1)] = (5));

} else {
var statearr_11213_11360 = state_11209__$1;
(statearr_11213_11360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (5))){
var state_11209__$1 = state_11209;
var statearr_11214_11361 = state_11209__$1;
(statearr_11214_11361[(2)] = null);

(statearr_11214_11361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (6))){
var state_11209__$1 = state_11209;
var statearr_11215_11362 = state_11209__$1;
(statearr_11215_11362[(2)] = null);

(statearr_11215_11362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (7))){
var inst_11205 = (state_11209[(2)]);
var state_11209__$1 = state_11209;
var statearr_11216_11363 = state_11209__$1;
(statearr_11216_11363[(2)] = inst_11205);

(statearr_11216_11363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async))
;
return ((function (__11353,switch__10918__auto__,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11217 = [null,null,null,null,null,null,null];
(statearr_11217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11217[(1)] = (1));

return statearr_11217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11209){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11218){if((e11218 instanceof Object)){
var ex__10922__auto__ = e11218;
var statearr_11219_11364 = state_11209;
(statearr_11219_11364[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11365 = state_11209;
state_11209 = G__11365;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(__11353,switch__10918__auto__,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async))
})();
var state__11015__auto__ = (function (){var statearr_11220 = f__11014__auto__.call(null);
(statearr_11220[(6)] = c__11013__auto___11357);

return statearr_11220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async))
);


break;
case "async":
var c__11013__auto___11366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async){
return (function (state_11233){
var state_val_11234 = (state_11233[(1)]);
if((state_val_11234 === (1))){
var state_11233__$1 = state_11233;
var statearr_11235_11367 = state_11233__$1;
(statearr_11235_11367[(2)] = null);

(statearr_11235_11367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (2))){
var state_11233__$1 = state_11233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11233__$1,(4),jobs);
} else {
if((state_val_11234 === (3))){
var inst_11231 = (state_11233[(2)]);
var state_11233__$1 = state_11233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11233__$1,inst_11231);
} else {
if((state_val_11234 === (4))){
var inst_11223 = (state_11233[(2)]);
var inst_11224 = async.call(null,inst_11223);
var state_11233__$1 = state_11233;
if(cljs.core.truth_(inst_11224)){
var statearr_11236_11368 = state_11233__$1;
(statearr_11236_11368[(1)] = (5));

} else {
var statearr_11237_11369 = state_11233__$1;
(statearr_11237_11369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (5))){
var state_11233__$1 = state_11233;
var statearr_11238_11370 = state_11233__$1;
(statearr_11238_11370[(2)] = null);

(statearr_11238_11370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (6))){
var state_11233__$1 = state_11233;
var statearr_11239_11371 = state_11233__$1;
(statearr_11239_11371[(2)] = null);

(statearr_11239_11371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (7))){
var inst_11229 = (state_11233[(2)]);
var state_11233__$1 = state_11233;
var statearr_11240_11372 = state_11233__$1;
(statearr_11240_11372[(2)] = inst_11229);

(statearr_11240_11372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async))
;
return ((function (__11353,switch__10918__auto__,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11241 = [null,null,null,null,null,null,null];
(statearr_11241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11241[(1)] = (1));

return statearr_11241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11233){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11242){if((e11242 instanceof Object)){
var ex__10922__auto__ = e11242;
var statearr_11243_11373 = state_11233;
(statearr_11243_11373[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11374 = state_11233;
state_11233 = G__11374;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(__11353,switch__10918__auto__,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async))
})();
var state__11015__auto__ = (function (){var statearr_11244 = f__11014__auto__.call(null);
(statearr_11244[(6)] = c__11013__auto___11366);

return statearr_11244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4607__auto___11352,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11196_11355__$1)].join('')));

}

var G__11375 = (__11353 + (1));
__11353 = G__11375;
continue;
} else {
}
break;
}

var c__11013__auto___11376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___11376,jobs,results,process,async){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___11376,jobs,results,process,async){
return (function (state_11266){
var state_val_11267 = (state_11266[(1)]);
if((state_val_11267 === (1))){
var state_11266__$1 = state_11266;
var statearr_11268_11377 = state_11266__$1;
(statearr_11268_11377[(2)] = null);

(statearr_11268_11377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (2))){
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11266__$1,(4),from);
} else {
if((state_val_11267 === (3))){
var inst_11264 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11266__$1,inst_11264);
} else {
if((state_val_11267 === (4))){
var inst_11247 = (state_11266[(7)]);
var inst_11247__$1 = (state_11266[(2)]);
var inst_11248 = (inst_11247__$1 == null);
var state_11266__$1 = (function (){var statearr_11269 = state_11266;
(statearr_11269[(7)] = inst_11247__$1);

return statearr_11269;
})();
if(cljs.core.truth_(inst_11248)){
var statearr_11270_11378 = state_11266__$1;
(statearr_11270_11378[(1)] = (5));

} else {
var statearr_11271_11379 = state_11266__$1;
(statearr_11271_11379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (5))){
var inst_11250 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11266__$1 = state_11266;
var statearr_11272_11380 = state_11266__$1;
(statearr_11272_11380[(2)] = inst_11250);

(statearr_11272_11380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (6))){
var inst_11252 = (state_11266[(8)]);
var inst_11247 = (state_11266[(7)]);
var inst_11252__$1 = cljs.core.async.chan.call(null,(1));
var inst_11253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11254 = [inst_11247,inst_11252__$1];
var inst_11255 = (new cljs.core.PersistentVector(null,2,(5),inst_11253,inst_11254,null));
var state_11266__$1 = (function (){var statearr_11273 = state_11266;
(statearr_11273[(8)] = inst_11252__$1);

return statearr_11273;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11266__$1,(8),jobs,inst_11255);
} else {
if((state_val_11267 === (7))){
var inst_11262 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11274_11381 = state_11266__$1;
(statearr_11274_11381[(2)] = inst_11262);

(statearr_11274_11381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (8))){
var inst_11252 = (state_11266[(8)]);
var inst_11257 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11275 = state_11266;
(statearr_11275[(9)] = inst_11257);

return statearr_11275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11266__$1,(9),results,inst_11252);
} else {
if((state_val_11267 === (9))){
var inst_11259 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11276 = state_11266;
(statearr_11276[(10)] = inst_11259);

return statearr_11276;
})();
var statearr_11277_11382 = state_11266__$1;
(statearr_11277_11382[(2)] = null);

(statearr_11277_11382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___11376,jobs,results,process,async))
;
return ((function (switch__10918__auto__,c__11013__auto___11376,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11278[(1)] = (1));

return statearr_11278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11266){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11279){if((e11279 instanceof Object)){
var ex__10922__auto__ = e11279;
var statearr_11280_11383 = state_11266;
(statearr_11280_11383[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11384 = state_11266;
state_11266 = G__11384;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___11376,jobs,results,process,async))
})();
var state__11015__auto__ = (function (){var statearr_11281 = f__11014__auto__.call(null);
(statearr_11281[(6)] = c__11013__auto___11376);

return statearr_11281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___11376,jobs,results,process,async))
);


var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto__,jobs,results,process,async){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto__,jobs,results,process,async){
return (function (state_11319){
var state_val_11320 = (state_11319[(1)]);
if((state_val_11320 === (7))){
var inst_11315 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11321_11385 = state_11319__$1;
(statearr_11321_11385[(2)] = inst_11315);

(statearr_11321_11385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (20))){
var state_11319__$1 = state_11319;
var statearr_11322_11386 = state_11319__$1;
(statearr_11322_11386[(2)] = null);

(statearr_11322_11386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (1))){
var state_11319__$1 = state_11319;
var statearr_11323_11387 = state_11319__$1;
(statearr_11323_11387[(2)] = null);

(statearr_11323_11387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (4))){
var inst_11284 = (state_11319[(7)]);
var inst_11284__$1 = (state_11319[(2)]);
var inst_11285 = (inst_11284__$1 == null);
var state_11319__$1 = (function (){var statearr_11324 = state_11319;
(statearr_11324[(7)] = inst_11284__$1);

return statearr_11324;
})();
if(cljs.core.truth_(inst_11285)){
var statearr_11325_11388 = state_11319__$1;
(statearr_11325_11388[(1)] = (5));

} else {
var statearr_11326_11389 = state_11319__$1;
(statearr_11326_11389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (15))){
var inst_11297 = (state_11319[(8)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11319__$1,(18),to,inst_11297);
} else {
if((state_val_11320 === (21))){
var inst_11310 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11327_11390 = state_11319__$1;
(statearr_11327_11390[(2)] = inst_11310);

(statearr_11327_11390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (13))){
var inst_11312 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11328 = state_11319;
(statearr_11328[(9)] = inst_11312);

return statearr_11328;
})();
var statearr_11329_11391 = state_11319__$1;
(statearr_11329_11391[(2)] = null);

(statearr_11329_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (6))){
var inst_11284 = (state_11319[(7)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(11),inst_11284);
} else {
if((state_val_11320 === (17))){
var inst_11305 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
if(cljs.core.truth_(inst_11305)){
var statearr_11330_11392 = state_11319__$1;
(statearr_11330_11392[(1)] = (19));

} else {
var statearr_11331_11393 = state_11319__$1;
(statearr_11331_11393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (3))){
var inst_11317 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11319__$1,inst_11317);
} else {
if((state_val_11320 === (12))){
var inst_11294 = (state_11319[(10)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(14),inst_11294);
} else {
if((state_val_11320 === (2))){
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(4),results);
} else {
if((state_val_11320 === (19))){
var state_11319__$1 = state_11319;
var statearr_11332_11394 = state_11319__$1;
(statearr_11332_11394[(2)] = null);

(statearr_11332_11394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (11))){
var inst_11294 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11333 = state_11319;
(statearr_11333[(10)] = inst_11294);

return statearr_11333;
})();
var statearr_11334_11395 = state_11319__$1;
(statearr_11334_11395[(2)] = null);

(statearr_11334_11395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (9))){
var state_11319__$1 = state_11319;
var statearr_11335_11396 = state_11319__$1;
(statearr_11335_11396[(2)] = null);

(statearr_11335_11396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (5))){
var state_11319__$1 = state_11319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11336_11397 = state_11319__$1;
(statearr_11336_11397[(1)] = (8));

} else {
var statearr_11337_11398 = state_11319__$1;
(statearr_11337_11398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (14))){
var inst_11297 = (state_11319[(8)]);
var inst_11299 = (state_11319[(11)]);
var inst_11297__$1 = (state_11319[(2)]);
var inst_11298 = (inst_11297__$1 == null);
var inst_11299__$1 = cljs.core.not.call(null,inst_11298);
var state_11319__$1 = (function (){var statearr_11338 = state_11319;
(statearr_11338[(8)] = inst_11297__$1);

(statearr_11338[(11)] = inst_11299__$1);

return statearr_11338;
})();
if(inst_11299__$1){
var statearr_11339_11399 = state_11319__$1;
(statearr_11339_11399[(1)] = (15));

} else {
var statearr_11340_11400 = state_11319__$1;
(statearr_11340_11400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (16))){
var inst_11299 = (state_11319[(11)]);
var state_11319__$1 = state_11319;
var statearr_11341_11401 = state_11319__$1;
(statearr_11341_11401[(2)] = inst_11299);

(statearr_11341_11401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (10))){
var inst_11291 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11342_11402 = state_11319__$1;
(statearr_11342_11402[(2)] = inst_11291);

(statearr_11342_11402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (18))){
var inst_11302 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11343_11403 = state_11319__$1;
(statearr_11343_11403[(2)] = inst_11302);

(statearr_11343_11403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (8))){
var inst_11288 = cljs.core.async.close_BANG_.call(null,to);
var state_11319__$1 = state_11319;
var statearr_11344_11404 = state_11319__$1;
(statearr_11344_11404[(2)] = inst_11288);

(statearr_11344_11404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto__,jobs,results,process,async))
;
return ((function (switch__10918__auto__,c__11013__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11345[(1)] = (1));

return statearr_11345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11319){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11346){if((e11346 instanceof Object)){
var ex__10922__auto__ = e11346;
var statearr_11347_11405 = state_11319;
(statearr_11347_11405[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11406 = state_11319;
state_11319 = G__11406;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto__,jobs,results,process,async))
})();
var state__11015__auto__ = (function (){var statearr_11348 = f__11014__auto__.call(null);
(statearr_11348[(6)] = c__11013__auto__);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto__,jobs,results,process,async))
);

return c__11013__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11408 = arguments.length;
switch (G__11408) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11411 = arguments.length;
switch (G__11411) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11414 = arguments.length;
switch (G__11414) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11013__auto___11463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___11463,tc,fc){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___11463,tc,fc){
return (function (state_11440){
var state_val_11441 = (state_11440[(1)]);
if((state_val_11441 === (7))){
var inst_11436 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
var statearr_11442_11464 = state_11440__$1;
(statearr_11442_11464[(2)] = inst_11436);

(statearr_11442_11464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (1))){
var state_11440__$1 = state_11440;
var statearr_11443_11465 = state_11440__$1;
(statearr_11443_11465[(2)] = null);

(statearr_11443_11465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (4))){
var inst_11417 = (state_11440[(7)]);
var inst_11417__$1 = (state_11440[(2)]);
var inst_11418 = (inst_11417__$1 == null);
var state_11440__$1 = (function (){var statearr_11444 = state_11440;
(statearr_11444[(7)] = inst_11417__$1);

return statearr_11444;
})();
if(cljs.core.truth_(inst_11418)){
var statearr_11445_11466 = state_11440__$1;
(statearr_11445_11466[(1)] = (5));

} else {
var statearr_11446_11467 = state_11440__$1;
(statearr_11446_11467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (13))){
var state_11440__$1 = state_11440;
var statearr_11447_11468 = state_11440__$1;
(statearr_11447_11468[(2)] = null);

(statearr_11447_11468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (6))){
var inst_11417 = (state_11440[(7)]);
var inst_11423 = p.call(null,inst_11417);
var state_11440__$1 = state_11440;
if(cljs.core.truth_(inst_11423)){
var statearr_11448_11469 = state_11440__$1;
(statearr_11448_11469[(1)] = (9));

} else {
var statearr_11449_11470 = state_11440__$1;
(statearr_11449_11470[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (3))){
var inst_11438 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11440__$1,inst_11438);
} else {
if((state_val_11441 === (12))){
var state_11440__$1 = state_11440;
var statearr_11450_11471 = state_11440__$1;
(statearr_11450_11471[(2)] = null);

(statearr_11450_11471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (2))){
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11440__$1,(4),ch);
} else {
if((state_val_11441 === (11))){
var inst_11417 = (state_11440[(7)]);
var inst_11427 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11440__$1,(8),inst_11427,inst_11417);
} else {
if((state_val_11441 === (9))){
var state_11440__$1 = state_11440;
var statearr_11451_11472 = state_11440__$1;
(statearr_11451_11472[(2)] = tc);

(statearr_11451_11472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (5))){
var inst_11420 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11421 = cljs.core.async.close_BANG_.call(null,fc);
var state_11440__$1 = (function (){var statearr_11452 = state_11440;
(statearr_11452[(8)] = inst_11420);

return statearr_11452;
})();
var statearr_11453_11473 = state_11440__$1;
(statearr_11453_11473[(2)] = inst_11421);

(statearr_11453_11473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (14))){
var inst_11434 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
var statearr_11454_11474 = state_11440__$1;
(statearr_11454_11474[(2)] = inst_11434);

(statearr_11454_11474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (10))){
var state_11440__$1 = state_11440;
var statearr_11455_11475 = state_11440__$1;
(statearr_11455_11475[(2)] = fc);

(statearr_11455_11475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (8))){
var inst_11429 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
if(cljs.core.truth_(inst_11429)){
var statearr_11456_11476 = state_11440__$1;
(statearr_11456_11476[(1)] = (12));

} else {
var statearr_11457_11477 = state_11440__$1;
(statearr_11457_11477[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___11463,tc,fc))
;
return ((function (switch__10918__auto__,c__11013__auto___11463,tc,fc){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_11458 = [null,null,null,null,null,null,null,null,null];
(statearr_11458[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_11458[(1)] = (1));

return statearr_11458;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_11440){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11459){if((e11459 instanceof Object)){
var ex__10922__auto__ = e11459;
var statearr_11460_11478 = state_11440;
(statearr_11460_11478[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11479 = state_11440;
state_11440 = G__11479;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_11440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_11440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___11463,tc,fc))
})();
var state__11015__auto__ = (function (){var statearr_11461 = f__11014__auto__.call(null);
(statearr_11461[(6)] = c__11013__auto___11463);

return statearr_11461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___11463,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto__){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto__){
return (function (state_11500){
var state_val_11501 = (state_11500[(1)]);
if((state_val_11501 === (7))){
var inst_11496 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
var statearr_11502_11520 = state_11500__$1;
(statearr_11502_11520[(2)] = inst_11496);

(statearr_11502_11520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (1))){
var inst_11480 = init;
var state_11500__$1 = (function (){var statearr_11503 = state_11500;
(statearr_11503[(7)] = inst_11480);

return statearr_11503;
})();
var statearr_11504_11521 = state_11500__$1;
(statearr_11504_11521[(2)] = null);

(statearr_11504_11521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (4))){
var inst_11483 = (state_11500[(8)]);
var inst_11483__$1 = (state_11500[(2)]);
var inst_11484 = (inst_11483__$1 == null);
var state_11500__$1 = (function (){var statearr_11505 = state_11500;
(statearr_11505[(8)] = inst_11483__$1);

return statearr_11505;
})();
if(cljs.core.truth_(inst_11484)){
var statearr_11506_11522 = state_11500__$1;
(statearr_11506_11522[(1)] = (5));

} else {
var statearr_11507_11523 = state_11500__$1;
(statearr_11507_11523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (6))){
var inst_11480 = (state_11500[(7)]);
var inst_11487 = (state_11500[(9)]);
var inst_11483 = (state_11500[(8)]);
var inst_11487__$1 = f.call(null,inst_11480,inst_11483);
var inst_11488 = cljs.core.reduced_QMARK_.call(null,inst_11487__$1);
var state_11500__$1 = (function (){var statearr_11508 = state_11500;
(statearr_11508[(9)] = inst_11487__$1);

return statearr_11508;
})();
if(inst_11488){
var statearr_11509_11524 = state_11500__$1;
(statearr_11509_11524[(1)] = (8));

} else {
var statearr_11510_11525 = state_11500__$1;
(statearr_11510_11525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (3))){
var inst_11498 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11500__$1,inst_11498);
} else {
if((state_val_11501 === (2))){
var state_11500__$1 = state_11500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11500__$1,(4),ch);
} else {
if((state_val_11501 === (9))){
var inst_11487 = (state_11500[(9)]);
var inst_11480 = inst_11487;
var state_11500__$1 = (function (){var statearr_11511 = state_11500;
(statearr_11511[(7)] = inst_11480);

return statearr_11511;
})();
var statearr_11512_11526 = state_11500__$1;
(statearr_11512_11526[(2)] = null);

(statearr_11512_11526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (5))){
var inst_11480 = (state_11500[(7)]);
var state_11500__$1 = state_11500;
var statearr_11513_11527 = state_11500__$1;
(statearr_11513_11527[(2)] = inst_11480);

(statearr_11513_11527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (10))){
var inst_11494 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
var statearr_11514_11528 = state_11500__$1;
(statearr_11514_11528[(2)] = inst_11494);

(statearr_11514_11528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (8))){
var inst_11487 = (state_11500[(9)]);
var inst_11490 = cljs.core.deref.call(null,inst_11487);
var state_11500__$1 = state_11500;
var statearr_11515_11529 = state_11500__$1;
(statearr_11515_11529[(2)] = inst_11490);

(statearr_11515_11529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto__))
;
return ((function (switch__10918__auto__,c__11013__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10919__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10919__auto____0 = (function (){
var statearr_11516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11516[(0)] = cljs$core$async$reduce_$_state_machine__10919__auto__);

(statearr_11516[(1)] = (1));

return statearr_11516;
});
var cljs$core$async$reduce_$_state_machine__10919__auto____1 = (function (state_11500){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11517){if((e11517 instanceof Object)){
var ex__10922__auto__ = e11517;
var statearr_11518_11530 = state_11500;
(statearr_11518_11530[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11531 = state_11500;
state_11500 = G__11531;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10919__auto__ = function(state_11500){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10919__auto____1.call(this,state_11500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10919__auto____0;
cljs$core$async$reduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10919__auto____1;
return cljs$core$async$reduce_$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto__))
})();
var state__11015__auto__ = (function (){var statearr_11519 = f__11014__auto__.call(null);
(statearr_11519[(6)] = c__11013__auto__);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto__))
);

return c__11013__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto__,f__$1){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto__,f__$1){
return (function (state_11537){
var state_val_11538 = (state_11537[(1)]);
if((state_val_11538 === (1))){
var inst_11532 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11537__$1 = state_11537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11537__$1,(2),inst_11532);
} else {
if((state_val_11538 === (2))){
var inst_11534 = (state_11537[(2)]);
var inst_11535 = f__$1.call(null,inst_11534);
var state_11537__$1 = state_11537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11537__$1,inst_11535);
} else {
return null;
}
}
});})(c__11013__auto__,f__$1))
;
return ((function (switch__10918__auto__,c__11013__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10919__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10919__auto____0 = (function (){
var statearr_11539 = [null,null,null,null,null,null,null];
(statearr_11539[(0)] = cljs$core$async$transduce_$_state_machine__10919__auto__);

(statearr_11539[(1)] = (1));

return statearr_11539;
});
var cljs$core$async$transduce_$_state_machine__10919__auto____1 = (function (state_11537){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11540){if((e11540 instanceof Object)){
var ex__10922__auto__ = e11540;
var statearr_11541_11543 = state_11537;
(statearr_11541_11543[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11544 = state_11537;
state_11537 = G__11544;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10919__auto__ = function(state_11537){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10919__auto____1.call(this,state_11537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10919__auto____0;
cljs$core$async$transduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10919__auto____1;
return cljs$core$async$transduce_$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto__,f__$1))
})();
var state__11015__auto__ = (function (){var statearr_11542 = f__11014__auto__.call(null);
(statearr_11542[(6)] = c__11013__auto__);

return statearr_11542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto__,f__$1))
);

return c__11013__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11546 = arguments.length;
switch (G__11546) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto__){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto__){
return (function (state_11571){
var state_val_11572 = (state_11571[(1)]);
if((state_val_11572 === (7))){
var inst_11553 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11573_11594 = state_11571__$1;
(statearr_11573_11594[(2)] = inst_11553);

(statearr_11573_11594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (1))){
var inst_11547 = cljs.core.seq.call(null,coll);
var inst_11548 = inst_11547;
var state_11571__$1 = (function (){var statearr_11574 = state_11571;
(statearr_11574[(7)] = inst_11548);

return statearr_11574;
})();
var statearr_11575_11595 = state_11571__$1;
(statearr_11575_11595[(2)] = null);

(statearr_11575_11595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (4))){
var inst_11548 = (state_11571[(7)]);
var inst_11551 = cljs.core.first.call(null,inst_11548);
var state_11571__$1 = state_11571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11571__$1,(7),ch,inst_11551);
} else {
if((state_val_11572 === (13))){
var inst_11565 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11576_11596 = state_11571__$1;
(statearr_11576_11596[(2)] = inst_11565);

(statearr_11576_11596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (6))){
var inst_11556 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
if(cljs.core.truth_(inst_11556)){
var statearr_11577_11597 = state_11571__$1;
(statearr_11577_11597[(1)] = (8));

} else {
var statearr_11578_11598 = state_11571__$1;
(statearr_11578_11598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (3))){
var inst_11569 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11571__$1,inst_11569);
} else {
if((state_val_11572 === (12))){
var state_11571__$1 = state_11571;
var statearr_11579_11599 = state_11571__$1;
(statearr_11579_11599[(2)] = null);

(statearr_11579_11599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (2))){
var inst_11548 = (state_11571[(7)]);
var state_11571__$1 = state_11571;
if(cljs.core.truth_(inst_11548)){
var statearr_11580_11600 = state_11571__$1;
(statearr_11580_11600[(1)] = (4));

} else {
var statearr_11581_11601 = state_11571__$1;
(statearr_11581_11601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (11))){
var inst_11562 = cljs.core.async.close_BANG_.call(null,ch);
var state_11571__$1 = state_11571;
var statearr_11582_11602 = state_11571__$1;
(statearr_11582_11602[(2)] = inst_11562);

(statearr_11582_11602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (9))){
var state_11571__$1 = state_11571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11583_11603 = state_11571__$1;
(statearr_11583_11603[(1)] = (11));

} else {
var statearr_11584_11604 = state_11571__$1;
(statearr_11584_11604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (5))){
var inst_11548 = (state_11571[(7)]);
var state_11571__$1 = state_11571;
var statearr_11585_11605 = state_11571__$1;
(statearr_11585_11605[(2)] = inst_11548);

(statearr_11585_11605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (10))){
var inst_11567 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11586_11606 = state_11571__$1;
(statearr_11586_11606[(2)] = inst_11567);

(statearr_11586_11606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (8))){
var inst_11548 = (state_11571[(7)]);
var inst_11558 = cljs.core.next.call(null,inst_11548);
var inst_11548__$1 = inst_11558;
var state_11571__$1 = (function (){var statearr_11587 = state_11571;
(statearr_11587[(7)] = inst_11548__$1);

return statearr_11587;
})();
var statearr_11588_11607 = state_11571__$1;
(statearr_11588_11607[(2)] = null);

(statearr_11588_11607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto__))
;
return ((function (switch__10918__auto__,c__11013__auto__){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_11589 = [null,null,null,null,null,null,null,null];
(statearr_11589[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_11589[(1)] = (1));

return statearr_11589;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_11571){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11590){if((e11590 instanceof Object)){
var ex__10922__auto__ = e11590;
var statearr_11591_11608 = state_11571;
(statearr_11591_11608[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11609 = state_11571;
state_11571 = G__11609;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_11571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_11571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto__))
})();
var state__11015__auto__ = (function (){var statearr_11592 = f__11014__auto__.call(null);
(statearr_11592[(6)] = c__11013__auto__);

return statearr_11592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto__))
);

return c__11013__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11610 = (function (ch,cs,meta11611){
this.ch = ch;
this.cs = cs;
this.meta11611 = meta11611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11612,meta11611__$1){
var self__ = this;
var _11612__$1 = this;
return (new cljs.core.async.t_cljs$core$async11610(self__.ch,self__.cs,meta11611__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11612){
var self__ = this;
var _11612__$1 = this;
return self__.meta11611;
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11611","meta11611",-633669417,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11610";

cljs.core.async.t_cljs$core$async11610.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11610");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11610.
 */
cljs.core.async.__GT_t_cljs$core$async11610 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11610(ch__$1,cs__$1,meta11611){
return (new cljs.core.async.t_cljs$core$async11610(ch__$1,cs__$1,meta11611));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11610(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11013__auto___11832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___11832,cs,m,dchan,dctr,done){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___11832,cs,m,dchan,dctr,done){
return (function (state_11747){
var state_val_11748 = (state_11747[(1)]);
if((state_val_11748 === (7))){
var inst_11743 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11749_11833 = state_11747__$1;
(statearr_11749_11833[(2)] = inst_11743);

(statearr_11749_11833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (20))){
var inst_11646 = (state_11747[(7)]);
var inst_11658 = cljs.core.first.call(null,inst_11646);
var inst_11659 = cljs.core.nth.call(null,inst_11658,(0),null);
var inst_11660 = cljs.core.nth.call(null,inst_11658,(1),null);
var state_11747__$1 = (function (){var statearr_11750 = state_11747;
(statearr_11750[(8)] = inst_11659);

return statearr_11750;
})();
if(cljs.core.truth_(inst_11660)){
var statearr_11751_11834 = state_11747__$1;
(statearr_11751_11834[(1)] = (22));

} else {
var statearr_11752_11835 = state_11747__$1;
(statearr_11752_11835[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (27))){
var inst_11688 = (state_11747[(9)]);
var inst_11615 = (state_11747[(10)]);
var inst_11690 = (state_11747[(11)]);
var inst_11695 = (state_11747[(12)]);
var inst_11695__$1 = cljs.core._nth.call(null,inst_11688,inst_11690);
var inst_11696 = cljs.core.async.put_BANG_.call(null,inst_11695__$1,inst_11615,done);
var state_11747__$1 = (function (){var statearr_11753 = state_11747;
(statearr_11753[(12)] = inst_11695__$1);

return statearr_11753;
})();
if(cljs.core.truth_(inst_11696)){
var statearr_11754_11836 = state_11747__$1;
(statearr_11754_11836[(1)] = (30));

} else {
var statearr_11755_11837 = state_11747__$1;
(statearr_11755_11837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (1))){
var state_11747__$1 = state_11747;
var statearr_11756_11838 = state_11747__$1;
(statearr_11756_11838[(2)] = null);

(statearr_11756_11838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (24))){
var inst_11646 = (state_11747[(7)]);
var inst_11665 = (state_11747[(2)]);
var inst_11666 = cljs.core.next.call(null,inst_11646);
var inst_11624 = inst_11666;
var inst_11625 = null;
var inst_11626 = (0);
var inst_11627 = (0);
var state_11747__$1 = (function (){var statearr_11757 = state_11747;
(statearr_11757[(13)] = inst_11624);

(statearr_11757[(14)] = inst_11625);

(statearr_11757[(15)] = inst_11665);

(statearr_11757[(16)] = inst_11626);

(statearr_11757[(17)] = inst_11627);

return statearr_11757;
})();
var statearr_11758_11839 = state_11747__$1;
(statearr_11758_11839[(2)] = null);

(statearr_11758_11839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (39))){
var state_11747__$1 = state_11747;
var statearr_11762_11840 = state_11747__$1;
(statearr_11762_11840[(2)] = null);

(statearr_11762_11840[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (4))){
var inst_11615 = (state_11747[(10)]);
var inst_11615__$1 = (state_11747[(2)]);
var inst_11616 = (inst_11615__$1 == null);
var state_11747__$1 = (function (){var statearr_11763 = state_11747;
(statearr_11763[(10)] = inst_11615__$1);

return statearr_11763;
})();
if(cljs.core.truth_(inst_11616)){
var statearr_11764_11841 = state_11747__$1;
(statearr_11764_11841[(1)] = (5));

} else {
var statearr_11765_11842 = state_11747__$1;
(statearr_11765_11842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (15))){
var inst_11624 = (state_11747[(13)]);
var inst_11625 = (state_11747[(14)]);
var inst_11626 = (state_11747[(16)]);
var inst_11627 = (state_11747[(17)]);
var inst_11642 = (state_11747[(2)]);
var inst_11643 = (inst_11627 + (1));
var tmp11759 = inst_11624;
var tmp11760 = inst_11625;
var tmp11761 = inst_11626;
var inst_11624__$1 = tmp11759;
var inst_11625__$1 = tmp11760;
var inst_11626__$1 = tmp11761;
var inst_11627__$1 = inst_11643;
var state_11747__$1 = (function (){var statearr_11766 = state_11747;
(statearr_11766[(13)] = inst_11624__$1);

(statearr_11766[(14)] = inst_11625__$1);

(statearr_11766[(18)] = inst_11642);

(statearr_11766[(16)] = inst_11626__$1);

(statearr_11766[(17)] = inst_11627__$1);

return statearr_11766;
})();
var statearr_11767_11843 = state_11747__$1;
(statearr_11767_11843[(2)] = null);

(statearr_11767_11843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (21))){
var inst_11669 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11771_11844 = state_11747__$1;
(statearr_11771_11844[(2)] = inst_11669);

(statearr_11771_11844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (31))){
var inst_11695 = (state_11747[(12)]);
var inst_11699 = done.call(null,null);
var inst_11700 = cljs.core.async.untap_STAR_.call(null,m,inst_11695);
var state_11747__$1 = (function (){var statearr_11772 = state_11747;
(statearr_11772[(19)] = inst_11699);

return statearr_11772;
})();
var statearr_11773_11845 = state_11747__$1;
(statearr_11773_11845[(2)] = inst_11700);

(statearr_11773_11845[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (32))){
var inst_11689 = (state_11747[(20)]);
var inst_11688 = (state_11747[(9)]);
var inst_11687 = (state_11747[(21)]);
var inst_11690 = (state_11747[(11)]);
var inst_11702 = (state_11747[(2)]);
var inst_11703 = (inst_11690 + (1));
var tmp11768 = inst_11689;
var tmp11769 = inst_11688;
var tmp11770 = inst_11687;
var inst_11687__$1 = tmp11770;
var inst_11688__$1 = tmp11769;
var inst_11689__$1 = tmp11768;
var inst_11690__$1 = inst_11703;
var state_11747__$1 = (function (){var statearr_11774 = state_11747;
(statearr_11774[(20)] = inst_11689__$1);

(statearr_11774[(9)] = inst_11688__$1);

(statearr_11774[(21)] = inst_11687__$1);

(statearr_11774[(11)] = inst_11690__$1);

(statearr_11774[(22)] = inst_11702);

return statearr_11774;
})();
var statearr_11775_11846 = state_11747__$1;
(statearr_11775_11846[(2)] = null);

(statearr_11775_11846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (40))){
var inst_11715 = (state_11747[(23)]);
var inst_11719 = done.call(null,null);
var inst_11720 = cljs.core.async.untap_STAR_.call(null,m,inst_11715);
var state_11747__$1 = (function (){var statearr_11776 = state_11747;
(statearr_11776[(24)] = inst_11719);

return statearr_11776;
})();
var statearr_11777_11847 = state_11747__$1;
(statearr_11777_11847[(2)] = inst_11720);

(statearr_11777_11847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (33))){
var inst_11706 = (state_11747[(25)]);
var inst_11708 = cljs.core.chunked_seq_QMARK_.call(null,inst_11706);
var state_11747__$1 = state_11747;
if(inst_11708){
var statearr_11778_11848 = state_11747__$1;
(statearr_11778_11848[(1)] = (36));

} else {
var statearr_11779_11849 = state_11747__$1;
(statearr_11779_11849[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (13))){
var inst_11636 = (state_11747[(26)]);
var inst_11639 = cljs.core.async.close_BANG_.call(null,inst_11636);
var state_11747__$1 = state_11747;
var statearr_11780_11850 = state_11747__$1;
(statearr_11780_11850[(2)] = inst_11639);

(statearr_11780_11850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (22))){
var inst_11659 = (state_11747[(8)]);
var inst_11662 = cljs.core.async.close_BANG_.call(null,inst_11659);
var state_11747__$1 = state_11747;
var statearr_11781_11851 = state_11747__$1;
(statearr_11781_11851[(2)] = inst_11662);

(statearr_11781_11851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (36))){
var inst_11706 = (state_11747[(25)]);
var inst_11710 = cljs.core.chunk_first.call(null,inst_11706);
var inst_11711 = cljs.core.chunk_rest.call(null,inst_11706);
var inst_11712 = cljs.core.count.call(null,inst_11710);
var inst_11687 = inst_11711;
var inst_11688 = inst_11710;
var inst_11689 = inst_11712;
var inst_11690 = (0);
var state_11747__$1 = (function (){var statearr_11782 = state_11747;
(statearr_11782[(20)] = inst_11689);

(statearr_11782[(9)] = inst_11688);

(statearr_11782[(21)] = inst_11687);

(statearr_11782[(11)] = inst_11690);

return statearr_11782;
})();
var statearr_11783_11852 = state_11747__$1;
(statearr_11783_11852[(2)] = null);

(statearr_11783_11852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (41))){
var inst_11706 = (state_11747[(25)]);
var inst_11722 = (state_11747[(2)]);
var inst_11723 = cljs.core.next.call(null,inst_11706);
var inst_11687 = inst_11723;
var inst_11688 = null;
var inst_11689 = (0);
var inst_11690 = (0);
var state_11747__$1 = (function (){var statearr_11784 = state_11747;
(statearr_11784[(20)] = inst_11689);

(statearr_11784[(9)] = inst_11688);

(statearr_11784[(21)] = inst_11687);

(statearr_11784[(27)] = inst_11722);

(statearr_11784[(11)] = inst_11690);

return statearr_11784;
})();
var statearr_11785_11853 = state_11747__$1;
(statearr_11785_11853[(2)] = null);

(statearr_11785_11853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (43))){
var state_11747__$1 = state_11747;
var statearr_11786_11854 = state_11747__$1;
(statearr_11786_11854[(2)] = null);

(statearr_11786_11854[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (29))){
var inst_11731 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11787_11855 = state_11747__$1;
(statearr_11787_11855[(2)] = inst_11731);

(statearr_11787_11855[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (44))){
var inst_11740 = (state_11747[(2)]);
var state_11747__$1 = (function (){var statearr_11788 = state_11747;
(statearr_11788[(28)] = inst_11740);

return statearr_11788;
})();
var statearr_11789_11856 = state_11747__$1;
(statearr_11789_11856[(2)] = null);

(statearr_11789_11856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (6))){
var inst_11679 = (state_11747[(29)]);
var inst_11678 = cljs.core.deref.call(null,cs);
var inst_11679__$1 = cljs.core.keys.call(null,inst_11678);
var inst_11680 = cljs.core.count.call(null,inst_11679__$1);
var inst_11681 = cljs.core.reset_BANG_.call(null,dctr,inst_11680);
var inst_11686 = cljs.core.seq.call(null,inst_11679__$1);
var inst_11687 = inst_11686;
var inst_11688 = null;
var inst_11689 = (0);
var inst_11690 = (0);
var state_11747__$1 = (function (){var statearr_11790 = state_11747;
(statearr_11790[(20)] = inst_11689);

(statearr_11790[(9)] = inst_11688);

(statearr_11790[(21)] = inst_11687);

(statearr_11790[(30)] = inst_11681);

(statearr_11790[(11)] = inst_11690);

(statearr_11790[(29)] = inst_11679__$1);

return statearr_11790;
})();
var statearr_11791_11857 = state_11747__$1;
(statearr_11791_11857[(2)] = null);

(statearr_11791_11857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (28))){
var inst_11687 = (state_11747[(21)]);
var inst_11706 = (state_11747[(25)]);
var inst_11706__$1 = cljs.core.seq.call(null,inst_11687);
var state_11747__$1 = (function (){var statearr_11792 = state_11747;
(statearr_11792[(25)] = inst_11706__$1);

return statearr_11792;
})();
if(inst_11706__$1){
var statearr_11793_11858 = state_11747__$1;
(statearr_11793_11858[(1)] = (33));

} else {
var statearr_11794_11859 = state_11747__$1;
(statearr_11794_11859[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (25))){
var inst_11689 = (state_11747[(20)]);
var inst_11690 = (state_11747[(11)]);
var inst_11692 = (inst_11690 < inst_11689);
var inst_11693 = inst_11692;
var state_11747__$1 = state_11747;
if(cljs.core.truth_(inst_11693)){
var statearr_11795_11860 = state_11747__$1;
(statearr_11795_11860[(1)] = (27));

} else {
var statearr_11796_11861 = state_11747__$1;
(statearr_11796_11861[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (34))){
var state_11747__$1 = state_11747;
var statearr_11797_11862 = state_11747__$1;
(statearr_11797_11862[(2)] = null);

(statearr_11797_11862[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (17))){
var state_11747__$1 = state_11747;
var statearr_11798_11863 = state_11747__$1;
(statearr_11798_11863[(2)] = null);

(statearr_11798_11863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (3))){
var inst_11745 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11747__$1,inst_11745);
} else {
if((state_val_11748 === (12))){
var inst_11674 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11799_11864 = state_11747__$1;
(statearr_11799_11864[(2)] = inst_11674);

(statearr_11799_11864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (2))){
var state_11747__$1 = state_11747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11747__$1,(4),ch);
} else {
if((state_val_11748 === (23))){
var state_11747__$1 = state_11747;
var statearr_11800_11865 = state_11747__$1;
(statearr_11800_11865[(2)] = null);

(statearr_11800_11865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (35))){
var inst_11729 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11801_11866 = state_11747__$1;
(statearr_11801_11866[(2)] = inst_11729);

(statearr_11801_11866[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (19))){
var inst_11646 = (state_11747[(7)]);
var inst_11650 = cljs.core.chunk_first.call(null,inst_11646);
var inst_11651 = cljs.core.chunk_rest.call(null,inst_11646);
var inst_11652 = cljs.core.count.call(null,inst_11650);
var inst_11624 = inst_11651;
var inst_11625 = inst_11650;
var inst_11626 = inst_11652;
var inst_11627 = (0);
var state_11747__$1 = (function (){var statearr_11802 = state_11747;
(statearr_11802[(13)] = inst_11624);

(statearr_11802[(14)] = inst_11625);

(statearr_11802[(16)] = inst_11626);

(statearr_11802[(17)] = inst_11627);

return statearr_11802;
})();
var statearr_11803_11867 = state_11747__$1;
(statearr_11803_11867[(2)] = null);

(statearr_11803_11867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (11))){
var inst_11624 = (state_11747[(13)]);
var inst_11646 = (state_11747[(7)]);
var inst_11646__$1 = cljs.core.seq.call(null,inst_11624);
var state_11747__$1 = (function (){var statearr_11804 = state_11747;
(statearr_11804[(7)] = inst_11646__$1);

return statearr_11804;
})();
if(inst_11646__$1){
var statearr_11805_11868 = state_11747__$1;
(statearr_11805_11868[(1)] = (16));

} else {
var statearr_11806_11869 = state_11747__$1;
(statearr_11806_11869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (9))){
var inst_11676 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11807_11870 = state_11747__$1;
(statearr_11807_11870[(2)] = inst_11676);

(statearr_11807_11870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (5))){
var inst_11622 = cljs.core.deref.call(null,cs);
var inst_11623 = cljs.core.seq.call(null,inst_11622);
var inst_11624 = inst_11623;
var inst_11625 = null;
var inst_11626 = (0);
var inst_11627 = (0);
var state_11747__$1 = (function (){var statearr_11808 = state_11747;
(statearr_11808[(13)] = inst_11624);

(statearr_11808[(14)] = inst_11625);

(statearr_11808[(16)] = inst_11626);

(statearr_11808[(17)] = inst_11627);

return statearr_11808;
})();
var statearr_11809_11871 = state_11747__$1;
(statearr_11809_11871[(2)] = null);

(statearr_11809_11871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (14))){
var state_11747__$1 = state_11747;
var statearr_11810_11872 = state_11747__$1;
(statearr_11810_11872[(2)] = null);

(statearr_11810_11872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (45))){
var inst_11737 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11811_11873 = state_11747__$1;
(statearr_11811_11873[(2)] = inst_11737);

(statearr_11811_11873[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (26))){
var inst_11679 = (state_11747[(29)]);
var inst_11733 = (state_11747[(2)]);
var inst_11734 = cljs.core.seq.call(null,inst_11679);
var state_11747__$1 = (function (){var statearr_11812 = state_11747;
(statearr_11812[(31)] = inst_11733);

return statearr_11812;
})();
if(inst_11734){
var statearr_11813_11874 = state_11747__$1;
(statearr_11813_11874[(1)] = (42));

} else {
var statearr_11814_11875 = state_11747__$1;
(statearr_11814_11875[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (16))){
var inst_11646 = (state_11747[(7)]);
var inst_11648 = cljs.core.chunked_seq_QMARK_.call(null,inst_11646);
var state_11747__$1 = state_11747;
if(inst_11648){
var statearr_11815_11876 = state_11747__$1;
(statearr_11815_11876[(1)] = (19));

} else {
var statearr_11816_11877 = state_11747__$1;
(statearr_11816_11877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (38))){
var inst_11726 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11817_11878 = state_11747__$1;
(statearr_11817_11878[(2)] = inst_11726);

(statearr_11817_11878[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (30))){
var state_11747__$1 = state_11747;
var statearr_11818_11879 = state_11747__$1;
(statearr_11818_11879[(2)] = null);

(statearr_11818_11879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (10))){
var inst_11625 = (state_11747[(14)]);
var inst_11627 = (state_11747[(17)]);
var inst_11635 = cljs.core._nth.call(null,inst_11625,inst_11627);
var inst_11636 = cljs.core.nth.call(null,inst_11635,(0),null);
var inst_11637 = cljs.core.nth.call(null,inst_11635,(1),null);
var state_11747__$1 = (function (){var statearr_11819 = state_11747;
(statearr_11819[(26)] = inst_11636);

return statearr_11819;
})();
if(cljs.core.truth_(inst_11637)){
var statearr_11820_11880 = state_11747__$1;
(statearr_11820_11880[(1)] = (13));

} else {
var statearr_11821_11881 = state_11747__$1;
(statearr_11821_11881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (18))){
var inst_11672 = (state_11747[(2)]);
var state_11747__$1 = state_11747;
var statearr_11822_11882 = state_11747__$1;
(statearr_11822_11882[(2)] = inst_11672);

(statearr_11822_11882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (42))){
var state_11747__$1 = state_11747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11747__$1,(45),dchan);
} else {
if((state_val_11748 === (37))){
var inst_11706 = (state_11747[(25)]);
var inst_11615 = (state_11747[(10)]);
var inst_11715 = (state_11747[(23)]);
var inst_11715__$1 = cljs.core.first.call(null,inst_11706);
var inst_11716 = cljs.core.async.put_BANG_.call(null,inst_11715__$1,inst_11615,done);
var state_11747__$1 = (function (){var statearr_11823 = state_11747;
(statearr_11823[(23)] = inst_11715__$1);

return statearr_11823;
})();
if(cljs.core.truth_(inst_11716)){
var statearr_11824_11883 = state_11747__$1;
(statearr_11824_11883[(1)] = (39));

} else {
var statearr_11825_11884 = state_11747__$1;
(statearr_11825_11884[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11748 === (8))){
var inst_11626 = (state_11747[(16)]);
var inst_11627 = (state_11747[(17)]);
var inst_11629 = (inst_11627 < inst_11626);
var inst_11630 = inst_11629;
var state_11747__$1 = state_11747;
if(cljs.core.truth_(inst_11630)){
var statearr_11826_11885 = state_11747__$1;
(statearr_11826_11885[(1)] = (10));

} else {
var statearr_11827_11886 = state_11747__$1;
(statearr_11827_11886[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___11832,cs,m,dchan,dctr,done))
;
return ((function (switch__10918__auto__,c__11013__auto___11832,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10919__auto__ = null;
var cljs$core$async$mult_$_state_machine__10919__auto____0 = (function (){
var statearr_11828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11828[(0)] = cljs$core$async$mult_$_state_machine__10919__auto__);

(statearr_11828[(1)] = (1));

return statearr_11828;
});
var cljs$core$async$mult_$_state_machine__10919__auto____1 = (function (state_11747){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object)){
var ex__10922__auto__ = e11829;
var statearr_11830_11887 = state_11747;
(statearr_11830_11887[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11888 = state_11747;
state_11747 = G__11888;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10919__auto__ = function(state_11747){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10919__auto____1.call(this,state_11747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10919__auto____0;
cljs$core$async$mult_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10919__auto____1;
return cljs$core$async$mult_$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___11832,cs,m,dchan,dctr,done))
})();
var state__11015__auto__ = (function (){var statearr_11831 = f__11014__auto__.call(null);
(statearr_11831[(6)] = c__11013__auto___11832);

return statearr_11831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___11832,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11890 = arguments.length;
switch (G__11890) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11902 = arguments.length;
var i__4731__auto___11903 = (0);
while(true){
if((i__4731__auto___11903 < len__4730__auto___11902)){
args__4736__auto__.push((arguments[i__4731__auto___11903]));

var G__11904 = (i__4731__auto___11903 + (1));
i__4731__auto___11903 = G__11904;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11896){
var map__11897 = p__11896;
var map__11897__$1 = (((((!((map__11897 == null))))?(((((map__11897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11897):map__11897);
var opts = map__11897__$1;
var statearr_11899_11905 = state;
(statearr_11899_11905[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__11897,map__11897__$1,opts){
return (function (val){
var statearr_11900_11906 = state;
(statearr_11900_11906[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11897,map__11897__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_11901_11907 = state;
(statearr_11901_11907[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11892){
var G__11893 = cljs.core.first.call(null,seq11892);
var seq11892__$1 = cljs.core.next.call(null,seq11892);
var G__11894 = cljs.core.first.call(null,seq11892__$1);
var seq11892__$2 = cljs.core.next.call(null,seq11892__$1);
var G__11895 = cljs.core.first.call(null,seq11892__$2);
var seq11892__$3 = cljs.core.next.call(null,seq11892__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11893,G__11894,G__11895,seq11892__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11908 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11909){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11909 = meta11909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11910,meta11909__$1){
var self__ = this;
var _11910__$1 = this;
return (new cljs.core.async.t_cljs$core$async11908(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11909__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11910){
var self__ = this;
var _11910__$1 = this;
return self__.meta11909;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11909","meta11909",1001847909,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11908";

cljs.core.async.t_cljs$core$async11908.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11908");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11908.
 */
cljs.core.async.__GT_t_cljs$core$async11908 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11908(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11909){
return (new cljs.core.async.t_cljs$core$async11908(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11909));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11908(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11013__auto___12072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12012){
var state_val_12013 = (state_12012[(1)]);
if((state_val_12013 === (7))){
var inst_11927 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12014_12073 = state_12012__$1;
(statearr_12014_12073[(2)] = inst_11927);

(statearr_12014_12073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (20))){
var inst_11939 = (state_12012[(7)]);
var state_12012__$1 = state_12012;
var statearr_12015_12074 = state_12012__$1;
(statearr_12015_12074[(2)] = inst_11939);

(statearr_12015_12074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (27))){
var state_12012__$1 = state_12012;
var statearr_12016_12075 = state_12012__$1;
(statearr_12016_12075[(2)] = null);

(statearr_12016_12075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (1))){
var inst_11914 = (state_12012[(8)]);
var inst_11914__$1 = calc_state.call(null);
var inst_11916 = (inst_11914__$1 == null);
var inst_11917 = cljs.core.not.call(null,inst_11916);
var state_12012__$1 = (function (){var statearr_12017 = state_12012;
(statearr_12017[(8)] = inst_11914__$1);

return statearr_12017;
})();
if(inst_11917){
var statearr_12018_12076 = state_12012__$1;
(statearr_12018_12076[(1)] = (2));

} else {
var statearr_12019_12077 = state_12012__$1;
(statearr_12019_12077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (24))){
var inst_11972 = (state_12012[(9)]);
var inst_11963 = (state_12012[(10)]);
var inst_11986 = (state_12012[(11)]);
var inst_11986__$1 = inst_11963.call(null,inst_11972);
var state_12012__$1 = (function (){var statearr_12020 = state_12012;
(statearr_12020[(11)] = inst_11986__$1);

return statearr_12020;
})();
if(cljs.core.truth_(inst_11986__$1)){
var statearr_12021_12078 = state_12012__$1;
(statearr_12021_12078[(1)] = (29));

} else {
var statearr_12022_12079 = state_12012__$1;
(statearr_12022_12079[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (4))){
var inst_11930 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11930)){
var statearr_12023_12080 = state_12012__$1;
(statearr_12023_12080[(1)] = (8));

} else {
var statearr_12024_12081 = state_12012__$1;
(statearr_12024_12081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (15))){
var inst_11957 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11957)){
var statearr_12025_12082 = state_12012__$1;
(statearr_12025_12082[(1)] = (19));

} else {
var statearr_12026_12083 = state_12012__$1;
(statearr_12026_12083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (21))){
var inst_11962 = (state_12012[(12)]);
var inst_11962__$1 = (state_12012[(2)]);
var inst_11963 = cljs.core.get.call(null,inst_11962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11964 = cljs.core.get.call(null,inst_11962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11965 = cljs.core.get.call(null,inst_11962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12012__$1 = (function (){var statearr_12027 = state_12012;
(statearr_12027[(13)] = inst_11964);

(statearr_12027[(10)] = inst_11963);

(statearr_12027[(12)] = inst_11962__$1);

return statearr_12027;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12012__$1,(22),inst_11965);
} else {
if((state_val_12013 === (31))){
var inst_11994 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11994)){
var statearr_12028_12084 = state_12012__$1;
(statearr_12028_12084[(1)] = (32));

} else {
var statearr_12029_12085 = state_12012__$1;
(statearr_12029_12085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (32))){
var inst_11971 = (state_12012[(14)]);
var state_12012__$1 = state_12012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12012__$1,(35),out,inst_11971);
} else {
if((state_val_12013 === (33))){
var inst_11962 = (state_12012[(12)]);
var inst_11939 = inst_11962;
var state_12012__$1 = (function (){var statearr_12030 = state_12012;
(statearr_12030[(7)] = inst_11939);

return statearr_12030;
})();
var statearr_12031_12086 = state_12012__$1;
(statearr_12031_12086[(2)] = null);

(statearr_12031_12086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (13))){
var inst_11939 = (state_12012[(7)]);
var inst_11946 = inst_11939.cljs$lang$protocol_mask$partition0$;
var inst_11947 = (inst_11946 & (64));
var inst_11948 = inst_11939.cljs$core$ISeq$;
var inst_11949 = (cljs.core.PROTOCOL_SENTINEL === inst_11948);
var inst_11950 = ((inst_11947) || (inst_11949));
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11950)){
var statearr_12032_12087 = state_12012__$1;
(statearr_12032_12087[(1)] = (16));

} else {
var statearr_12033_12088 = state_12012__$1;
(statearr_12033_12088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (22))){
var inst_11972 = (state_12012[(9)]);
var inst_11971 = (state_12012[(14)]);
var inst_11970 = (state_12012[(2)]);
var inst_11971__$1 = cljs.core.nth.call(null,inst_11970,(0),null);
var inst_11972__$1 = cljs.core.nth.call(null,inst_11970,(1),null);
var inst_11973 = (inst_11971__$1 == null);
var inst_11974 = cljs.core._EQ_.call(null,inst_11972__$1,change);
var inst_11975 = ((inst_11973) || (inst_11974));
var state_12012__$1 = (function (){var statearr_12034 = state_12012;
(statearr_12034[(9)] = inst_11972__$1);

(statearr_12034[(14)] = inst_11971__$1);

return statearr_12034;
})();
if(cljs.core.truth_(inst_11975)){
var statearr_12035_12089 = state_12012__$1;
(statearr_12035_12089[(1)] = (23));

} else {
var statearr_12036_12090 = state_12012__$1;
(statearr_12036_12090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (36))){
var inst_11962 = (state_12012[(12)]);
var inst_11939 = inst_11962;
var state_12012__$1 = (function (){var statearr_12037 = state_12012;
(statearr_12037[(7)] = inst_11939);

return statearr_12037;
})();
var statearr_12038_12091 = state_12012__$1;
(statearr_12038_12091[(2)] = null);

(statearr_12038_12091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (29))){
var inst_11986 = (state_12012[(11)]);
var state_12012__$1 = state_12012;
var statearr_12039_12092 = state_12012__$1;
(statearr_12039_12092[(2)] = inst_11986);

(statearr_12039_12092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (6))){
var state_12012__$1 = state_12012;
var statearr_12040_12093 = state_12012__$1;
(statearr_12040_12093[(2)] = false);

(statearr_12040_12093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (28))){
var inst_11982 = (state_12012[(2)]);
var inst_11983 = calc_state.call(null);
var inst_11939 = inst_11983;
var state_12012__$1 = (function (){var statearr_12041 = state_12012;
(statearr_12041[(7)] = inst_11939);

(statearr_12041[(15)] = inst_11982);

return statearr_12041;
})();
var statearr_12042_12094 = state_12012__$1;
(statearr_12042_12094[(2)] = null);

(statearr_12042_12094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (25))){
var inst_12008 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12043_12095 = state_12012__$1;
(statearr_12043_12095[(2)] = inst_12008);

(statearr_12043_12095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (34))){
var inst_12006 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12044_12096 = state_12012__$1;
(statearr_12044_12096[(2)] = inst_12006);

(statearr_12044_12096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (17))){
var state_12012__$1 = state_12012;
var statearr_12045_12097 = state_12012__$1;
(statearr_12045_12097[(2)] = false);

(statearr_12045_12097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (3))){
var state_12012__$1 = state_12012;
var statearr_12046_12098 = state_12012__$1;
(statearr_12046_12098[(2)] = false);

(statearr_12046_12098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (12))){
var inst_12010 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12012__$1,inst_12010);
} else {
if((state_val_12013 === (2))){
var inst_11914 = (state_12012[(8)]);
var inst_11919 = inst_11914.cljs$lang$protocol_mask$partition0$;
var inst_11920 = (inst_11919 & (64));
var inst_11921 = inst_11914.cljs$core$ISeq$;
var inst_11922 = (cljs.core.PROTOCOL_SENTINEL === inst_11921);
var inst_11923 = ((inst_11920) || (inst_11922));
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11923)){
var statearr_12047_12099 = state_12012__$1;
(statearr_12047_12099[(1)] = (5));

} else {
var statearr_12048_12100 = state_12012__$1;
(statearr_12048_12100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (23))){
var inst_11971 = (state_12012[(14)]);
var inst_11977 = (inst_11971 == null);
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11977)){
var statearr_12049_12101 = state_12012__$1;
(statearr_12049_12101[(1)] = (26));

} else {
var statearr_12050_12102 = state_12012__$1;
(statearr_12050_12102[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (35))){
var inst_11997 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11997)){
var statearr_12051_12103 = state_12012__$1;
(statearr_12051_12103[(1)] = (36));

} else {
var statearr_12052_12104 = state_12012__$1;
(statearr_12052_12104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (19))){
var inst_11939 = (state_12012[(7)]);
var inst_11959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11939);
var state_12012__$1 = state_12012;
var statearr_12053_12105 = state_12012__$1;
(statearr_12053_12105[(2)] = inst_11959);

(statearr_12053_12105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (11))){
var inst_11939 = (state_12012[(7)]);
var inst_11943 = (inst_11939 == null);
var inst_11944 = cljs.core.not.call(null,inst_11943);
var state_12012__$1 = state_12012;
if(inst_11944){
var statearr_12054_12106 = state_12012__$1;
(statearr_12054_12106[(1)] = (13));

} else {
var statearr_12055_12107 = state_12012__$1;
(statearr_12055_12107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (9))){
var inst_11914 = (state_12012[(8)]);
var state_12012__$1 = state_12012;
var statearr_12056_12108 = state_12012__$1;
(statearr_12056_12108[(2)] = inst_11914);

(statearr_12056_12108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (5))){
var state_12012__$1 = state_12012;
var statearr_12057_12109 = state_12012__$1;
(statearr_12057_12109[(2)] = true);

(statearr_12057_12109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (14))){
var state_12012__$1 = state_12012;
var statearr_12058_12110 = state_12012__$1;
(statearr_12058_12110[(2)] = false);

(statearr_12058_12110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (26))){
var inst_11972 = (state_12012[(9)]);
var inst_11979 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11972);
var state_12012__$1 = state_12012;
var statearr_12059_12111 = state_12012__$1;
(statearr_12059_12111[(2)] = inst_11979);

(statearr_12059_12111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (16))){
var state_12012__$1 = state_12012;
var statearr_12060_12112 = state_12012__$1;
(statearr_12060_12112[(2)] = true);

(statearr_12060_12112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (38))){
var inst_12002 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12061_12113 = state_12012__$1;
(statearr_12061_12113[(2)] = inst_12002);

(statearr_12061_12113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (30))){
var inst_11972 = (state_12012[(9)]);
var inst_11964 = (state_12012[(13)]);
var inst_11963 = (state_12012[(10)]);
var inst_11989 = cljs.core.empty_QMARK_.call(null,inst_11963);
var inst_11990 = inst_11964.call(null,inst_11972);
var inst_11991 = cljs.core.not.call(null,inst_11990);
var inst_11992 = ((inst_11989) && (inst_11991));
var state_12012__$1 = state_12012;
var statearr_12062_12114 = state_12012__$1;
(statearr_12062_12114[(2)] = inst_11992);

(statearr_12062_12114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (10))){
var inst_11914 = (state_12012[(8)]);
var inst_11935 = (state_12012[(2)]);
var inst_11936 = cljs.core.get.call(null,inst_11935,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11937 = cljs.core.get.call(null,inst_11935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11938 = cljs.core.get.call(null,inst_11935,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11939 = inst_11914;
var state_12012__$1 = (function (){var statearr_12063 = state_12012;
(statearr_12063[(16)] = inst_11936);

(statearr_12063[(17)] = inst_11937);

(statearr_12063[(7)] = inst_11939);

(statearr_12063[(18)] = inst_11938);

return statearr_12063;
})();
var statearr_12064_12115 = state_12012__$1;
(statearr_12064_12115[(2)] = null);

(statearr_12064_12115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (18))){
var inst_11954 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12065_12116 = state_12012__$1;
(statearr_12065_12116[(2)] = inst_11954);

(statearr_12065_12116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (37))){
var state_12012__$1 = state_12012;
var statearr_12066_12117 = state_12012__$1;
(statearr_12066_12117[(2)] = null);

(statearr_12066_12117[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (8))){
var inst_11914 = (state_12012[(8)]);
var inst_11932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11914);
var state_12012__$1 = state_12012;
var statearr_12067_12118 = state_12012__$1;
(statearr_12067_12118[(2)] = inst_11932);

(statearr_12067_12118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10918__auto__,c__11013__auto___12072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10919__auto__ = null;
var cljs$core$async$mix_$_state_machine__10919__auto____0 = (function (){
var statearr_12068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12068[(0)] = cljs$core$async$mix_$_state_machine__10919__auto__);

(statearr_12068[(1)] = (1));

return statearr_12068;
});
var cljs$core$async$mix_$_state_machine__10919__auto____1 = (function (state_12012){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12069){if((e12069 instanceof Object)){
var ex__10922__auto__ = e12069;
var statearr_12070_12119 = state_12012;
(statearr_12070_12119[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12120 = state_12012;
state_12012 = G__12120;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10919__auto__ = function(state_12012){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10919__auto____1.call(this,state_12012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10919__auto____0;
cljs$core$async$mix_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10919__auto____1;
return cljs$core$async$mix_$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11015__auto__ = (function (){var statearr_12071 = f__11014__auto__.call(null);
(statearr_12071[(6)] = c__11013__auto___12072);

return statearr_12071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12122 = arguments.length;
switch (G__12122) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12126 = arguments.length;
switch (G__12126) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__12124_SHARP_){
if(cljs.core.truth_(p1__12124_SHARP_.call(null,topic))){
return p1__12124_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12124_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12127 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12128){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12128 = meta12128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12129,meta12128__$1){
var self__ = this;
var _12129__$1 = this;
return (new cljs.core.async.t_cljs$core$async12127(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12128__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12129){
var self__ = this;
var _12129__$1 = this;
return self__.meta12128;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12128","meta12128",1738465433,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12127";

cljs.core.async.t_cljs$core$async12127.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12127");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12127.
 */
cljs.core.async.__GT_t_cljs$core$async12127 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12128){
return (new cljs.core.async.t_cljs$core$async12127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12128));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12127(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11013__auto___12247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12247,mults,ensure_mult,p){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12247,mults,ensure_mult,p){
return (function (state_12201){
var state_val_12202 = (state_12201[(1)]);
if((state_val_12202 === (7))){
var inst_12197 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12203_12248 = state_12201__$1;
(statearr_12203_12248[(2)] = inst_12197);

(statearr_12203_12248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (20))){
var state_12201__$1 = state_12201;
var statearr_12204_12249 = state_12201__$1;
(statearr_12204_12249[(2)] = null);

(statearr_12204_12249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (1))){
var state_12201__$1 = state_12201;
var statearr_12205_12250 = state_12201__$1;
(statearr_12205_12250[(2)] = null);

(statearr_12205_12250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (24))){
var inst_12180 = (state_12201[(7)]);
var inst_12189 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12180);
var state_12201__$1 = state_12201;
var statearr_12206_12251 = state_12201__$1;
(statearr_12206_12251[(2)] = inst_12189);

(statearr_12206_12251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (4))){
var inst_12132 = (state_12201[(8)]);
var inst_12132__$1 = (state_12201[(2)]);
var inst_12133 = (inst_12132__$1 == null);
var state_12201__$1 = (function (){var statearr_12207 = state_12201;
(statearr_12207[(8)] = inst_12132__$1);

return statearr_12207;
})();
if(cljs.core.truth_(inst_12133)){
var statearr_12208_12252 = state_12201__$1;
(statearr_12208_12252[(1)] = (5));

} else {
var statearr_12209_12253 = state_12201__$1;
(statearr_12209_12253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (15))){
var inst_12174 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12210_12254 = state_12201__$1;
(statearr_12210_12254[(2)] = inst_12174);

(statearr_12210_12254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (21))){
var inst_12194 = (state_12201[(2)]);
var state_12201__$1 = (function (){var statearr_12211 = state_12201;
(statearr_12211[(9)] = inst_12194);

return statearr_12211;
})();
var statearr_12212_12255 = state_12201__$1;
(statearr_12212_12255[(2)] = null);

(statearr_12212_12255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (13))){
var inst_12156 = (state_12201[(10)]);
var inst_12158 = cljs.core.chunked_seq_QMARK_.call(null,inst_12156);
var state_12201__$1 = state_12201;
if(inst_12158){
var statearr_12213_12256 = state_12201__$1;
(statearr_12213_12256[(1)] = (16));

} else {
var statearr_12214_12257 = state_12201__$1;
(statearr_12214_12257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (22))){
var inst_12186 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
if(cljs.core.truth_(inst_12186)){
var statearr_12215_12258 = state_12201__$1;
(statearr_12215_12258[(1)] = (23));

} else {
var statearr_12216_12259 = state_12201__$1;
(statearr_12216_12259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (6))){
var inst_12182 = (state_12201[(11)]);
var inst_12132 = (state_12201[(8)]);
var inst_12180 = (state_12201[(7)]);
var inst_12180__$1 = topic_fn.call(null,inst_12132);
var inst_12181 = cljs.core.deref.call(null,mults);
var inst_12182__$1 = cljs.core.get.call(null,inst_12181,inst_12180__$1);
var state_12201__$1 = (function (){var statearr_12217 = state_12201;
(statearr_12217[(11)] = inst_12182__$1);

(statearr_12217[(7)] = inst_12180__$1);

return statearr_12217;
})();
if(cljs.core.truth_(inst_12182__$1)){
var statearr_12218_12260 = state_12201__$1;
(statearr_12218_12260[(1)] = (19));

} else {
var statearr_12219_12261 = state_12201__$1;
(statearr_12219_12261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (25))){
var inst_12191 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12220_12262 = state_12201__$1;
(statearr_12220_12262[(2)] = inst_12191);

(statearr_12220_12262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (17))){
var inst_12156 = (state_12201[(10)]);
var inst_12165 = cljs.core.first.call(null,inst_12156);
var inst_12166 = cljs.core.async.muxch_STAR_.call(null,inst_12165);
var inst_12167 = cljs.core.async.close_BANG_.call(null,inst_12166);
var inst_12168 = cljs.core.next.call(null,inst_12156);
var inst_12142 = inst_12168;
var inst_12143 = null;
var inst_12144 = (0);
var inst_12145 = (0);
var state_12201__$1 = (function (){var statearr_12221 = state_12201;
(statearr_12221[(12)] = inst_12145);

(statearr_12221[(13)] = inst_12143);

(statearr_12221[(14)] = inst_12142);

(statearr_12221[(15)] = inst_12144);

(statearr_12221[(16)] = inst_12167);

return statearr_12221;
})();
var statearr_12222_12263 = state_12201__$1;
(statearr_12222_12263[(2)] = null);

(statearr_12222_12263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (3))){
var inst_12199 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12201__$1,inst_12199);
} else {
if((state_val_12202 === (12))){
var inst_12176 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12223_12264 = state_12201__$1;
(statearr_12223_12264[(2)] = inst_12176);

(statearr_12223_12264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (2))){
var state_12201__$1 = state_12201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12201__$1,(4),ch);
} else {
if((state_val_12202 === (23))){
var state_12201__$1 = state_12201;
var statearr_12224_12265 = state_12201__$1;
(statearr_12224_12265[(2)] = null);

(statearr_12224_12265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (19))){
var inst_12182 = (state_12201[(11)]);
var inst_12132 = (state_12201[(8)]);
var inst_12184 = cljs.core.async.muxch_STAR_.call(null,inst_12182);
var state_12201__$1 = state_12201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12201__$1,(22),inst_12184,inst_12132);
} else {
if((state_val_12202 === (11))){
var inst_12156 = (state_12201[(10)]);
var inst_12142 = (state_12201[(14)]);
var inst_12156__$1 = cljs.core.seq.call(null,inst_12142);
var state_12201__$1 = (function (){var statearr_12225 = state_12201;
(statearr_12225[(10)] = inst_12156__$1);

return statearr_12225;
})();
if(inst_12156__$1){
var statearr_12226_12266 = state_12201__$1;
(statearr_12226_12266[(1)] = (13));

} else {
var statearr_12227_12267 = state_12201__$1;
(statearr_12227_12267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (9))){
var inst_12178 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12228_12268 = state_12201__$1;
(statearr_12228_12268[(2)] = inst_12178);

(statearr_12228_12268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (5))){
var inst_12139 = cljs.core.deref.call(null,mults);
var inst_12140 = cljs.core.vals.call(null,inst_12139);
var inst_12141 = cljs.core.seq.call(null,inst_12140);
var inst_12142 = inst_12141;
var inst_12143 = null;
var inst_12144 = (0);
var inst_12145 = (0);
var state_12201__$1 = (function (){var statearr_12229 = state_12201;
(statearr_12229[(12)] = inst_12145);

(statearr_12229[(13)] = inst_12143);

(statearr_12229[(14)] = inst_12142);

(statearr_12229[(15)] = inst_12144);

return statearr_12229;
})();
var statearr_12230_12269 = state_12201__$1;
(statearr_12230_12269[(2)] = null);

(statearr_12230_12269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (14))){
var state_12201__$1 = state_12201;
var statearr_12234_12270 = state_12201__$1;
(statearr_12234_12270[(2)] = null);

(statearr_12234_12270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (16))){
var inst_12156 = (state_12201[(10)]);
var inst_12160 = cljs.core.chunk_first.call(null,inst_12156);
var inst_12161 = cljs.core.chunk_rest.call(null,inst_12156);
var inst_12162 = cljs.core.count.call(null,inst_12160);
var inst_12142 = inst_12161;
var inst_12143 = inst_12160;
var inst_12144 = inst_12162;
var inst_12145 = (0);
var state_12201__$1 = (function (){var statearr_12235 = state_12201;
(statearr_12235[(12)] = inst_12145);

(statearr_12235[(13)] = inst_12143);

(statearr_12235[(14)] = inst_12142);

(statearr_12235[(15)] = inst_12144);

return statearr_12235;
})();
var statearr_12236_12271 = state_12201__$1;
(statearr_12236_12271[(2)] = null);

(statearr_12236_12271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (10))){
var inst_12145 = (state_12201[(12)]);
var inst_12143 = (state_12201[(13)]);
var inst_12142 = (state_12201[(14)]);
var inst_12144 = (state_12201[(15)]);
var inst_12150 = cljs.core._nth.call(null,inst_12143,inst_12145);
var inst_12151 = cljs.core.async.muxch_STAR_.call(null,inst_12150);
var inst_12152 = cljs.core.async.close_BANG_.call(null,inst_12151);
var inst_12153 = (inst_12145 + (1));
var tmp12231 = inst_12143;
var tmp12232 = inst_12142;
var tmp12233 = inst_12144;
var inst_12142__$1 = tmp12232;
var inst_12143__$1 = tmp12231;
var inst_12144__$1 = tmp12233;
var inst_12145__$1 = inst_12153;
var state_12201__$1 = (function (){var statearr_12237 = state_12201;
(statearr_12237[(12)] = inst_12145__$1);

(statearr_12237[(13)] = inst_12143__$1);

(statearr_12237[(17)] = inst_12152);

(statearr_12237[(14)] = inst_12142__$1);

(statearr_12237[(15)] = inst_12144__$1);

return statearr_12237;
})();
var statearr_12238_12272 = state_12201__$1;
(statearr_12238_12272[(2)] = null);

(statearr_12238_12272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (18))){
var inst_12171 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12239_12273 = state_12201__$1;
(statearr_12239_12273[(2)] = inst_12171);

(statearr_12239_12273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (8))){
var inst_12145 = (state_12201[(12)]);
var inst_12144 = (state_12201[(15)]);
var inst_12147 = (inst_12145 < inst_12144);
var inst_12148 = inst_12147;
var state_12201__$1 = state_12201;
if(cljs.core.truth_(inst_12148)){
var statearr_12240_12274 = state_12201__$1;
(statearr_12240_12274[(1)] = (10));

} else {
var statearr_12241_12275 = state_12201__$1;
(statearr_12241_12275[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12247,mults,ensure_mult,p))
;
return ((function (switch__10918__auto__,c__11013__auto___12247,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12201){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12243){if((e12243 instanceof Object)){
var ex__10922__auto__ = e12243;
var statearr_12244_12276 = state_12201;
(statearr_12244_12276[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12277 = state_12201;
state_12201 = G__12277;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12247,mults,ensure_mult,p))
})();
var state__11015__auto__ = (function (){var statearr_12245 = f__11014__auto__.call(null);
(statearr_12245[(6)] = c__11013__auto___12247);

return statearr_12245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12247,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__12279 = arguments.length;
switch (G__12279) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__12282 = arguments.length;
switch (G__12282) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__12285 = arguments.length;
switch (G__12285) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11013__auto___12352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12352,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12352,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12324){
var state_val_12325 = (state_12324[(1)]);
if((state_val_12325 === (7))){
var state_12324__$1 = state_12324;
var statearr_12326_12353 = state_12324__$1;
(statearr_12326_12353[(2)] = null);

(statearr_12326_12353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (1))){
var state_12324__$1 = state_12324;
var statearr_12327_12354 = state_12324__$1;
(statearr_12327_12354[(2)] = null);

(statearr_12327_12354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (4))){
var inst_12288 = (state_12324[(7)]);
var inst_12290 = (inst_12288 < cnt);
var state_12324__$1 = state_12324;
if(cljs.core.truth_(inst_12290)){
var statearr_12328_12355 = state_12324__$1;
(statearr_12328_12355[(1)] = (6));

} else {
var statearr_12329_12356 = state_12324__$1;
(statearr_12329_12356[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (15))){
var inst_12320 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12330_12357 = state_12324__$1;
(statearr_12330_12357[(2)] = inst_12320);

(statearr_12330_12357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (13))){
var inst_12313 = cljs.core.async.close_BANG_.call(null,out);
var state_12324__$1 = state_12324;
var statearr_12331_12358 = state_12324__$1;
(statearr_12331_12358[(2)] = inst_12313);

(statearr_12331_12358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (6))){
var state_12324__$1 = state_12324;
var statearr_12332_12359 = state_12324__$1;
(statearr_12332_12359[(2)] = null);

(statearr_12332_12359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (3))){
var inst_12322 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12324__$1,inst_12322);
} else {
if((state_val_12325 === (12))){
var inst_12310 = (state_12324[(8)]);
var inst_12310__$1 = (state_12324[(2)]);
var inst_12311 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12310__$1);
var state_12324__$1 = (function (){var statearr_12333 = state_12324;
(statearr_12333[(8)] = inst_12310__$1);

return statearr_12333;
})();
if(cljs.core.truth_(inst_12311)){
var statearr_12334_12360 = state_12324__$1;
(statearr_12334_12360[(1)] = (13));

} else {
var statearr_12335_12361 = state_12324__$1;
(statearr_12335_12361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (2))){
var inst_12287 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12288 = (0);
var state_12324__$1 = (function (){var statearr_12336 = state_12324;
(statearr_12336[(7)] = inst_12288);

(statearr_12336[(9)] = inst_12287);

return statearr_12336;
})();
var statearr_12337_12362 = state_12324__$1;
(statearr_12337_12362[(2)] = null);

(statearr_12337_12362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (11))){
var inst_12288 = (state_12324[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12324,(10),Object,null,(9));
var inst_12297 = chs__$1.call(null,inst_12288);
var inst_12298 = done.call(null,inst_12288);
var inst_12299 = cljs.core.async.take_BANG_.call(null,inst_12297,inst_12298);
var state_12324__$1 = state_12324;
var statearr_12338_12363 = state_12324__$1;
(statearr_12338_12363[(2)] = inst_12299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (9))){
var inst_12288 = (state_12324[(7)]);
var inst_12301 = (state_12324[(2)]);
var inst_12302 = (inst_12288 + (1));
var inst_12288__$1 = inst_12302;
var state_12324__$1 = (function (){var statearr_12339 = state_12324;
(statearr_12339[(7)] = inst_12288__$1);

(statearr_12339[(10)] = inst_12301);

return statearr_12339;
})();
var statearr_12340_12364 = state_12324__$1;
(statearr_12340_12364[(2)] = null);

(statearr_12340_12364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (5))){
var inst_12308 = (state_12324[(2)]);
var state_12324__$1 = (function (){var statearr_12341 = state_12324;
(statearr_12341[(11)] = inst_12308);

return statearr_12341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12324__$1,(12),dchan);
} else {
if((state_val_12325 === (14))){
var inst_12310 = (state_12324[(8)]);
var inst_12315 = cljs.core.apply.call(null,f,inst_12310);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12324__$1,(16),out,inst_12315);
} else {
if((state_val_12325 === (16))){
var inst_12317 = (state_12324[(2)]);
var state_12324__$1 = (function (){var statearr_12342 = state_12324;
(statearr_12342[(12)] = inst_12317);

return statearr_12342;
})();
var statearr_12343_12365 = state_12324__$1;
(statearr_12343_12365[(2)] = null);

(statearr_12343_12365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (10))){
var inst_12292 = (state_12324[(2)]);
var inst_12293 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12324__$1 = (function (){var statearr_12344 = state_12324;
(statearr_12344[(13)] = inst_12292);

return statearr_12344;
})();
var statearr_12345_12366 = state_12324__$1;
(statearr_12345_12366[(2)] = inst_12293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (8))){
var inst_12306 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12346_12367 = state_12324__$1;
(statearr_12346_12367[(2)] = inst_12306);

(statearr_12346_12367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12352,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10918__auto__,c__11013__auto___12352,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12347[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12347[(1)] = (1));

return statearr_12347;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12324){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12348){if((e12348 instanceof Object)){
var ex__10922__auto__ = e12348;
var statearr_12349_12368 = state_12324;
(statearr_12349_12368[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12369 = state_12324;
state_12324 = G__12369;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12352,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11015__auto__ = (function (){var statearr_12350 = f__11014__auto__.call(null);
(statearr_12350[(6)] = c__11013__auto___12352);

return statearr_12350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12352,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12372 = arguments.length;
switch (G__12372) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11013__auto___12426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12426,out){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12426,out){
return (function (state_12404){
var state_val_12405 = (state_12404[(1)]);
if((state_val_12405 === (7))){
var inst_12383 = (state_12404[(7)]);
var inst_12384 = (state_12404[(8)]);
var inst_12383__$1 = (state_12404[(2)]);
var inst_12384__$1 = cljs.core.nth.call(null,inst_12383__$1,(0),null);
var inst_12385 = cljs.core.nth.call(null,inst_12383__$1,(1),null);
var inst_12386 = (inst_12384__$1 == null);
var state_12404__$1 = (function (){var statearr_12406 = state_12404;
(statearr_12406[(7)] = inst_12383__$1);

(statearr_12406[(9)] = inst_12385);

(statearr_12406[(8)] = inst_12384__$1);

return statearr_12406;
})();
if(cljs.core.truth_(inst_12386)){
var statearr_12407_12427 = state_12404__$1;
(statearr_12407_12427[(1)] = (8));

} else {
var statearr_12408_12428 = state_12404__$1;
(statearr_12408_12428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (1))){
var inst_12373 = cljs.core.vec.call(null,chs);
var inst_12374 = inst_12373;
var state_12404__$1 = (function (){var statearr_12409 = state_12404;
(statearr_12409[(10)] = inst_12374);

return statearr_12409;
})();
var statearr_12410_12429 = state_12404__$1;
(statearr_12410_12429[(2)] = null);

(statearr_12410_12429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (4))){
var inst_12374 = (state_12404[(10)]);
var state_12404__$1 = state_12404;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12404__$1,(7),inst_12374);
} else {
if((state_val_12405 === (6))){
var inst_12400 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12411_12430 = state_12404__$1;
(statearr_12411_12430[(2)] = inst_12400);

(statearr_12411_12430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (3))){
var inst_12402 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12404__$1,inst_12402);
} else {
if((state_val_12405 === (2))){
var inst_12374 = (state_12404[(10)]);
var inst_12376 = cljs.core.count.call(null,inst_12374);
var inst_12377 = (inst_12376 > (0));
var state_12404__$1 = state_12404;
if(cljs.core.truth_(inst_12377)){
var statearr_12413_12431 = state_12404__$1;
(statearr_12413_12431[(1)] = (4));

} else {
var statearr_12414_12432 = state_12404__$1;
(statearr_12414_12432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (11))){
var inst_12374 = (state_12404[(10)]);
var inst_12393 = (state_12404[(2)]);
var tmp12412 = inst_12374;
var inst_12374__$1 = tmp12412;
var state_12404__$1 = (function (){var statearr_12415 = state_12404;
(statearr_12415[(10)] = inst_12374__$1);

(statearr_12415[(11)] = inst_12393);

return statearr_12415;
})();
var statearr_12416_12433 = state_12404__$1;
(statearr_12416_12433[(2)] = null);

(statearr_12416_12433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (9))){
var inst_12384 = (state_12404[(8)]);
var state_12404__$1 = state_12404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12404__$1,(11),out,inst_12384);
} else {
if((state_val_12405 === (5))){
var inst_12398 = cljs.core.async.close_BANG_.call(null,out);
var state_12404__$1 = state_12404;
var statearr_12417_12434 = state_12404__$1;
(statearr_12417_12434[(2)] = inst_12398);

(statearr_12417_12434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (10))){
var inst_12396 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12418_12435 = state_12404__$1;
(statearr_12418_12435[(2)] = inst_12396);

(statearr_12418_12435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (8))){
var inst_12383 = (state_12404[(7)]);
var inst_12374 = (state_12404[(10)]);
var inst_12385 = (state_12404[(9)]);
var inst_12384 = (state_12404[(8)]);
var inst_12388 = (function (){var cs = inst_12374;
var vec__12379 = inst_12383;
var v = inst_12384;
var c = inst_12385;
return ((function (cs,vec__12379,v,c,inst_12383,inst_12374,inst_12385,inst_12384,state_val_12405,c__11013__auto___12426,out){
return (function (p1__12370_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12370_SHARP_);
});
;})(cs,vec__12379,v,c,inst_12383,inst_12374,inst_12385,inst_12384,state_val_12405,c__11013__auto___12426,out))
})();
var inst_12389 = cljs.core.filterv.call(null,inst_12388,inst_12374);
var inst_12374__$1 = inst_12389;
var state_12404__$1 = (function (){var statearr_12419 = state_12404;
(statearr_12419[(10)] = inst_12374__$1);

return statearr_12419;
})();
var statearr_12420_12436 = state_12404__$1;
(statearr_12420_12436[(2)] = null);

(statearr_12420_12436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12426,out))
;
return ((function (switch__10918__auto__,c__11013__auto___12426,out){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12421[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12421[(1)] = (1));

return statearr_12421;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12404){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12422){if((e12422 instanceof Object)){
var ex__10922__auto__ = e12422;
var statearr_12423_12437 = state_12404;
(statearr_12423_12437[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12438 = state_12404;
state_12404 = G__12438;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12426,out))
})();
var state__11015__auto__ = (function (){var statearr_12424 = f__11014__auto__.call(null);
(statearr_12424[(6)] = c__11013__auto___12426);

return statearr_12424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12426,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12440 = arguments.length;
switch (G__12440) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11013__auto___12485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12485,out){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12485,out){
return (function (state_12464){
var state_val_12465 = (state_12464[(1)]);
if((state_val_12465 === (7))){
var inst_12446 = (state_12464[(7)]);
var inst_12446__$1 = (state_12464[(2)]);
var inst_12447 = (inst_12446__$1 == null);
var inst_12448 = cljs.core.not.call(null,inst_12447);
var state_12464__$1 = (function (){var statearr_12466 = state_12464;
(statearr_12466[(7)] = inst_12446__$1);

return statearr_12466;
})();
if(inst_12448){
var statearr_12467_12486 = state_12464__$1;
(statearr_12467_12486[(1)] = (8));

} else {
var statearr_12468_12487 = state_12464__$1;
(statearr_12468_12487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (1))){
var inst_12441 = (0);
var state_12464__$1 = (function (){var statearr_12469 = state_12464;
(statearr_12469[(8)] = inst_12441);

return statearr_12469;
})();
var statearr_12470_12488 = state_12464__$1;
(statearr_12470_12488[(2)] = null);

(statearr_12470_12488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (4))){
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12464__$1,(7),ch);
} else {
if((state_val_12465 === (6))){
var inst_12459 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
var statearr_12471_12489 = state_12464__$1;
(statearr_12471_12489[(2)] = inst_12459);

(statearr_12471_12489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (3))){
var inst_12461 = (state_12464[(2)]);
var inst_12462 = cljs.core.async.close_BANG_.call(null,out);
var state_12464__$1 = (function (){var statearr_12472 = state_12464;
(statearr_12472[(9)] = inst_12461);

return statearr_12472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12464__$1,inst_12462);
} else {
if((state_val_12465 === (2))){
var inst_12441 = (state_12464[(8)]);
var inst_12443 = (inst_12441 < n);
var state_12464__$1 = state_12464;
if(cljs.core.truth_(inst_12443)){
var statearr_12473_12490 = state_12464__$1;
(statearr_12473_12490[(1)] = (4));

} else {
var statearr_12474_12491 = state_12464__$1;
(statearr_12474_12491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (11))){
var inst_12441 = (state_12464[(8)]);
var inst_12451 = (state_12464[(2)]);
var inst_12452 = (inst_12441 + (1));
var inst_12441__$1 = inst_12452;
var state_12464__$1 = (function (){var statearr_12475 = state_12464;
(statearr_12475[(10)] = inst_12451);

(statearr_12475[(8)] = inst_12441__$1);

return statearr_12475;
})();
var statearr_12476_12492 = state_12464__$1;
(statearr_12476_12492[(2)] = null);

(statearr_12476_12492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (9))){
var state_12464__$1 = state_12464;
var statearr_12477_12493 = state_12464__$1;
(statearr_12477_12493[(2)] = null);

(statearr_12477_12493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (5))){
var state_12464__$1 = state_12464;
var statearr_12478_12494 = state_12464__$1;
(statearr_12478_12494[(2)] = null);

(statearr_12478_12494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (10))){
var inst_12456 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
var statearr_12479_12495 = state_12464__$1;
(statearr_12479_12495[(2)] = inst_12456);

(statearr_12479_12495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (8))){
var inst_12446 = (state_12464[(7)]);
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12464__$1,(11),out,inst_12446);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12485,out))
;
return ((function (switch__10918__auto__,c__11013__auto___12485,out){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12480[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12480[(1)] = (1));

return statearr_12480;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12464){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12481){if((e12481 instanceof Object)){
var ex__10922__auto__ = e12481;
var statearr_12482_12496 = state_12464;
(statearr_12482_12496[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12497 = state_12464;
state_12464 = G__12497;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12485,out))
})();
var state__11015__auto__ = (function (){var statearr_12483 = f__11014__auto__.call(null);
(statearr_12483[(6)] = c__11013__auto___12485);

return statearr_12483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12485,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12499 = (function (f,ch,meta12500){
this.f = f;
this.ch = ch;
this.meta12500 = meta12500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12501,meta12500__$1){
var self__ = this;
var _12501__$1 = this;
return (new cljs.core.async.t_cljs$core$async12499(self__.f,self__.ch,meta12500__$1));
});

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12501){
var self__ = this;
var _12501__$1 = this;
return self__.meta12500;
});

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12502 = (function (f,ch,meta12500,_,fn1,meta12503){
this.f = f;
this.ch = ch;
this.meta12500 = meta12500;
this._ = _;
this.fn1 = fn1;
this.meta12503 = meta12503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12504,meta12503__$1){
var self__ = this;
var _12504__$1 = this;
return (new cljs.core.async.t_cljs$core$async12502(self__.f,self__.ch,self__.meta12500,self__._,self__.fn1,meta12503__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12504){
var self__ = this;
var _12504__$1 = this;
return self__.meta12503;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12498_SHARP_){
return f1.call(null,(((p1__12498_SHARP_ == null))?null:self__.f.call(null,p1__12498_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12502.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12500","meta12500",-1199561887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12499","cljs.core.async/t_cljs$core$async12499",-2110380809,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12503","meta12503",163156336,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12502";

cljs.core.async.t_cljs$core$async12502.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12502");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12502.
 */
cljs.core.async.__GT_t_cljs$core$async12502 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12502(f__$1,ch__$1,meta12500__$1,___$2,fn1__$1,meta12503){
return (new cljs.core.async.t_cljs$core$async12502(f__$1,ch__$1,meta12500__$1,___$2,fn1__$1,meta12503));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12502(self__.f,self__.ch,self__.meta12500,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12500","meta12500",-1199561887,null)], null);
});

cljs.core.async.t_cljs$core$async12499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12499";

cljs.core.async.t_cljs$core$async12499.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12499");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12499.
 */
cljs.core.async.__GT_t_cljs$core$async12499 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12499(f__$1,ch__$1,meta12500){
return (new cljs.core.async.t_cljs$core$async12499(f__$1,ch__$1,meta12500));
});

}

return (new cljs.core.async.t_cljs$core$async12499(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12505 = (function (f,ch,meta12506){
this.f = f;
this.ch = ch;
this.meta12506 = meta12506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12507,meta12506__$1){
var self__ = this;
var _12507__$1 = this;
return (new cljs.core.async.t_cljs$core$async12505(self__.f,self__.ch,meta12506__$1));
});

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12507){
var self__ = this;
var _12507__$1 = this;
return self__.meta12506;
});

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12506","meta12506",-1679805556,null)], null);
});

cljs.core.async.t_cljs$core$async12505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12505";

cljs.core.async.t_cljs$core$async12505.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12505");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12505.
 */
cljs.core.async.__GT_t_cljs$core$async12505 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12505(f__$1,ch__$1,meta12506){
return (new cljs.core.async.t_cljs$core$async12505(f__$1,ch__$1,meta12506));
});

}

return (new cljs.core.async.t_cljs$core$async12505(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12508 = (function (p,ch,meta12509){
this.p = p;
this.ch = ch;
this.meta12509 = meta12509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12510,meta12509__$1){
var self__ = this;
var _12510__$1 = this;
return (new cljs.core.async.t_cljs$core$async12508(self__.p,self__.ch,meta12509__$1));
});

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12510){
var self__ = this;
var _12510__$1 = this;
return self__.meta12509;
});

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12509","meta12509",823953787,null)], null);
});

cljs.core.async.t_cljs$core$async12508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12508";

cljs.core.async.t_cljs$core$async12508.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12508");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12508.
 */
cljs.core.async.__GT_t_cljs$core$async12508 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12508(p__$1,ch__$1,meta12509){
return (new cljs.core.async.t_cljs$core$async12508(p__$1,ch__$1,meta12509));
});

}

return (new cljs.core.async.t_cljs$core$async12508(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12512 = arguments.length;
switch (G__12512) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11013__auto___12552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12552,out){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12552,out){
return (function (state_12533){
var state_val_12534 = (state_12533[(1)]);
if((state_val_12534 === (7))){
var inst_12529 = (state_12533[(2)]);
var state_12533__$1 = state_12533;
var statearr_12535_12553 = state_12533__$1;
(statearr_12535_12553[(2)] = inst_12529);

(statearr_12535_12553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (1))){
var state_12533__$1 = state_12533;
var statearr_12536_12554 = state_12533__$1;
(statearr_12536_12554[(2)] = null);

(statearr_12536_12554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (4))){
var inst_12515 = (state_12533[(7)]);
var inst_12515__$1 = (state_12533[(2)]);
var inst_12516 = (inst_12515__$1 == null);
var state_12533__$1 = (function (){var statearr_12537 = state_12533;
(statearr_12537[(7)] = inst_12515__$1);

return statearr_12537;
})();
if(cljs.core.truth_(inst_12516)){
var statearr_12538_12555 = state_12533__$1;
(statearr_12538_12555[(1)] = (5));

} else {
var statearr_12539_12556 = state_12533__$1;
(statearr_12539_12556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (6))){
var inst_12515 = (state_12533[(7)]);
var inst_12520 = p.call(null,inst_12515);
var state_12533__$1 = state_12533;
if(cljs.core.truth_(inst_12520)){
var statearr_12540_12557 = state_12533__$1;
(statearr_12540_12557[(1)] = (8));

} else {
var statearr_12541_12558 = state_12533__$1;
(statearr_12541_12558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (3))){
var inst_12531 = (state_12533[(2)]);
var state_12533__$1 = state_12533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12533__$1,inst_12531);
} else {
if((state_val_12534 === (2))){
var state_12533__$1 = state_12533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12533__$1,(4),ch);
} else {
if((state_val_12534 === (11))){
var inst_12523 = (state_12533[(2)]);
var state_12533__$1 = state_12533;
var statearr_12542_12559 = state_12533__$1;
(statearr_12542_12559[(2)] = inst_12523);

(statearr_12542_12559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (9))){
var state_12533__$1 = state_12533;
var statearr_12543_12560 = state_12533__$1;
(statearr_12543_12560[(2)] = null);

(statearr_12543_12560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (5))){
var inst_12518 = cljs.core.async.close_BANG_.call(null,out);
var state_12533__$1 = state_12533;
var statearr_12544_12561 = state_12533__$1;
(statearr_12544_12561[(2)] = inst_12518);

(statearr_12544_12561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (10))){
var inst_12526 = (state_12533[(2)]);
var state_12533__$1 = (function (){var statearr_12545 = state_12533;
(statearr_12545[(8)] = inst_12526);

return statearr_12545;
})();
var statearr_12546_12562 = state_12533__$1;
(statearr_12546_12562[(2)] = null);

(statearr_12546_12562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12534 === (8))){
var inst_12515 = (state_12533[(7)]);
var state_12533__$1 = state_12533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12533__$1,(11),out,inst_12515);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12552,out))
;
return ((function (switch__10918__auto__,c__11013__auto___12552,out){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12547 = [null,null,null,null,null,null,null,null,null];
(statearr_12547[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12547[(1)] = (1));

return statearr_12547;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12533){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12548){if((e12548 instanceof Object)){
var ex__10922__auto__ = e12548;
var statearr_12549_12563 = state_12533;
(statearr_12549_12563[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12564 = state_12533;
state_12533 = G__12564;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12552,out))
})();
var state__11015__auto__ = (function (){var statearr_12550 = f__11014__auto__.call(null);
(statearr_12550[(6)] = c__11013__auto___12552);

return statearr_12550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12552,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12566 = arguments.length;
switch (G__12566) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto__){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto__){
return (function (state_12629){
var state_val_12630 = (state_12629[(1)]);
if((state_val_12630 === (7))){
var inst_12625 = (state_12629[(2)]);
var state_12629__$1 = state_12629;
var statearr_12631_12669 = state_12629__$1;
(statearr_12631_12669[(2)] = inst_12625);

(statearr_12631_12669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (20))){
var inst_12595 = (state_12629[(7)]);
var inst_12606 = (state_12629[(2)]);
var inst_12607 = cljs.core.next.call(null,inst_12595);
var inst_12581 = inst_12607;
var inst_12582 = null;
var inst_12583 = (0);
var inst_12584 = (0);
var state_12629__$1 = (function (){var statearr_12632 = state_12629;
(statearr_12632[(8)] = inst_12582);

(statearr_12632[(9)] = inst_12581);

(statearr_12632[(10)] = inst_12583);

(statearr_12632[(11)] = inst_12584);

(statearr_12632[(12)] = inst_12606);

return statearr_12632;
})();
var statearr_12633_12670 = state_12629__$1;
(statearr_12633_12670[(2)] = null);

(statearr_12633_12670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (1))){
var state_12629__$1 = state_12629;
var statearr_12634_12671 = state_12629__$1;
(statearr_12634_12671[(2)] = null);

(statearr_12634_12671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (4))){
var inst_12570 = (state_12629[(13)]);
var inst_12570__$1 = (state_12629[(2)]);
var inst_12571 = (inst_12570__$1 == null);
var state_12629__$1 = (function (){var statearr_12635 = state_12629;
(statearr_12635[(13)] = inst_12570__$1);

return statearr_12635;
})();
if(cljs.core.truth_(inst_12571)){
var statearr_12636_12672 = state_12629__$1;
(statearr_12636_12672[(1)] = (5));

} else {
var statearr_12637_12673 = state_12629__$1;
(statearr_12637_12673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (15))){
var state_12629__$1 = state_12629;
var statearr_12641_12674 = state_12629__$1;
(statearr_12641_12674[(2)] = null);

(statearr_12641_12674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (21))){
var state_12629__$1 = state_12629;
var statearr_12642_12675 = state_12629__$1;
(statearr_12642_12675[(2)] = null);

(statearr_12642_12675[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (13))){
var inst_12582 = (state_12629[(8)]);
var inst_12581 = (state_12629[(9)]);
var inst_12583 = (state_12629[(10)]);
var inst_12584 = (state_12629[(11)]);
var inst_12591 = (state_12629[(2)]);
var inst_12592 = (inst_12584 + (1));
var tmp12638 = inst_12582;
var tmp12639 = inst_12581;
var tmp12640 = inst_12583;
var inst_12581__$1 = tmp12639;
var inst_12582__$1 = tmp12638;
var inst_12583__$1 = tmp12640;
var inst_12584__$1 = inst_12592;
var state_12629__$1 = (function (){var statearr_12643 = state_12629;
(statearr_12643[(8)] = inst_12582__$1);

(statearr_12643[(14)] = inst_12591);

(statearr_12643[(9)] = inst_12581__$1);

(statearr_12643[(10)] = inst_12583__$1);

(statearr_12643[(11)] = inst_12584__$1);

return statearr_12643;
})();
var statearr_12644_12676 = state_12629__$1;
(statearr_12644_12676[(2)] = null);

(statearr_12644_12676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (22))){
var state_12629__$1 = state_12629;
var statearr_12645_12677 = state_12629__$1;
(statearr_12645_12677[(2)] = null);

(statearr_12645_12677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (6))){
var inst_12570 = (state_12629[(13)]);
var inst_12579 = f.call(null,inst_12570);
var inst_12580 = cljs.core.seq.call(null,inst_12579);
var inst_12581 = inst_12580;
var inst_12582 = null;
var inst_12583 = (0);
var inst_12584 = (0);
var state_12629__$1 = (function (){var statearr_12646 = state_12629;
(statearr_12646[(8)] = inst_12582);

(statearr_12646[(9)] = inst_12581);

(statearr_12646[(10)] = inst_12583);

(statearr_12646[(11)] = inst_12584);

return statearr_12646;
})();
var statearr_12647_12678 = state_12629__$1;
(statearr_12647_12678[(2)] = null);

(statearr_12647_12678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (17))){
var inst_12595 = (state_12629[(7)]);
var inst_12599 = cljs.core.chunk_first.call(null,inst_12595);
var inst_12600 = cljs.core.chunk_rest.call(null,inst_12595);
var inst_12601 = cljs.core.count.call(null,inst_12599);
var inst_12581 = inst_12600;
var inst_12582 = inst_12599;
var inst_12583 = inst_12601;
var inst_12584 = (0);
var state_12629__$1 = (function (){var statearr_12648 = state_12629;
(statearr_12648[(8)] = inst_12582);

(statearr_12648[(9)] = inst_12581);

(statearr_12648[(10)] = inst_12583);

(statearr_12648[(11)] = inst_12584);

return statearr_12648;
})();
var statearr_12649_12679 = state_12629__$1;
(statearr_12649_12679[(2)] = null);

(statearr_12649_12679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (3))){
var inst_12627 = (state_12629[(2)]);
var state_12629__$1 = state_12629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12629__$1,inst_12627);
} else {
if((state_val_12630 === (12))){
var inst_12615 = (state_12629[(2)]);
var state_12629__$1 = state_12629;
var statearr_12650_12680 = state_12629__$1;
(statearr_12650_12680[(2)] = inst_12615);

(statearr_12650_12680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (2))){
var state_12629__$1 = state_12629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12629__$1,(4),in$);
} else {
if((state_val_12630 === (23))){
var inst_12623 = (state_12629[(2)]);
var state_12629__$1 = state_12629;
var statearr_12651_12681 = state_12629__$1;
(statearr_12651_12681[(2)] = inst_12623);

(statearr_12651_12681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (19))){
var inst_12610 = (state_12629[(2)]);
var state_12629__$1 = state_12629;
var statearr_12652_12682 = state_12629__$1;
(statearr_12652_12682[(2)] = inst_12610);

(statearr_12652_12682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (11))){
var inst_12595 = (state_12629[(7)]);
var inst_12581 = (state_12629[(9)]);
var inst_12595__$1 = cljs.core.seq.call(null,inst_12581);
var state_12629__$1 = (function (){var statearr_12653 = state_12629;
(statearr_12653[(7)] = inst_12595__$1);

return statearr_12653;
})();
if(inst_12595__$1){
var statearr_12654_12683 = state_12629__$1;
(statearr_12654_12683[(1)] = (14));

} else {
var statearr_12655_12684 = state_12629__$1;
(statearr_12655_12684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (9))){
var inst_12617 = (state_12629[(2)]);
var inst_12618 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12629__$1 = (function (){var statearr_12656 = state_12629;
(statearr_12656[(15)] = inst_12617);

return statearr_12656;
})();
if(cljs.core.truth_(inst_12618)){
var statearr_12657_12685 = state_12629__$1;
(statearr_12657_12685[(1)] = (21));

} else {
var statearr_12658_12686 = state_12629__$1;
(statearr_12658_12686[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (5))){
var inst_12573 = cljs.core.async.close_BANG_.call(null,out);
var state_12629__$1 = state_12629;
var statearr_12659_12687 = state_12629__$1;
(statearr_12659_12687[(2)] = inst_12573);

(statearr_12659_12687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (14))){
var inst_12595 = (state_12629[(7)]);
var inst_12597 = cljs.core.chunked_seq_QMARK_.call(null,inst_12595);
var state_12629__$1 = state_12629;
if(inst_12597){
var statearr_12660_12688 = state_12629__$1;
(statearr_12660_12688[(1)] = (17));

} else {
var statearr_12661_12689 = state_12629__$1;
(statearr_12661_12689[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (16))){
var inst_12613 = (state_12629[(2)]);
var state_12629__$1 = state_12629;
var statearr_12662_12690 = state_12629__$1;
(statearr_12662_12690[(2)] = inst_12613);

(statearr_12662_12690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12630 === (10))){
var inst_12582 = (state_12629[(8)]);
var inst_12584 = (state_12629[(11)]);
var inst_12589 = cljs.core._nth.call(null,inst_12582,inst_12584);
var state_12629__$1 = state_12629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12629__$1,(13),out,inst_12589);
} else {
if((state_val_12630 === (18))){
var inst_12595 = (state_12629[(7)]);
var inst_12604 = cljs.core.first.call(null,inst_12595);
var state_12629__$1 = state_12629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12629__$1,(20),out,inst_12604);
} else {
if((state_val_12630 === (8))){
var inst_12583 = (state_12629[(10)]);
var inst_12584 = (state_12629[(11)]);
var inst_12586 = (inst_12584 < inst_12583);
var inst_12587 = inst_12586;
var state_12629__$1 = state_12629;
if(cljs.core.truth_(inst_12587)){
var statearr_12663_12691 = state_12629__$1;
(statearr_12663_12691[(1)] = (10));

} else {
var statearr_12664_12692 = state_12629__$1;
(statearr_12664_12692[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto__))
;
return ((function (switch__10918__auto__,c__11013__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_12665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12665[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__);

(statearr_12665[(1)] = (1));

return statearr_12665;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____1 = (function (state_12629){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12666){if((e12666 instanceof Object)){
var ex__10922__auto__ = e12666;
var statearr_12667_12693 = state_12629;
(statearr_12667_12693[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12694 = state_12629;
state_12629 = G__12694;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__ = function(state_12629){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____1.call(this,state_12629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto__))
})();
var state__11015__auto__ = (function (){var statearr_12668 = f__11014__auto__.call(null);
(statearr_12668[(6)] = c__11013__auto__);

return statearr_12668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto__))
);

return c__11013__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12696 = arguments.length;
switch (G__12696) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12699 = arguments.length;
switch (G__12699) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12702 = arguments.length;
switch (G__12702) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11013__auto___12749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12749,out){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12749,out){
return (function (state_12726){
var state_val_12727 = (state_12726[(1)]);
if((state_val_12727 === (7))){
var inst_12721 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12728_12750 = state_12726__$1;
(statearr_12728_12750[(2)] = inst_12721);

(statearr_12728_12750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (1))){
var inst_12703 = null;
var state_12726__$1 = (function (){var statearr_12729 = state_12726;
(statearr_12729[(7)] = inst_12703);

return statearr_12729;
})();
var statearr_12730_12751 = state_12726__$1;
(statearr_12730_12751[(2)] = null);

(statearr_12730_12751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (4))){
var inst_12706 = (state_12726[(8)]);
var inst_12706__$1 = (state_12726[(2)]);
var inst_12707 = (inst_12706__$1 == null);
var inst_12708 = cljs.core.not.call(null,inst_12707);
var state_12726__$1 = (function (){var statearr_12731 = state_12726;
(statearr_12731[(8)] = inst_12706__$1);

return statearr_12731;
})();
if(inst_12708){
var statearr_12732_12752 = state_12726__$1;
(statearr_12732_12752[(1)] = (5));

} else {
var statearr_12733_12753 = state_12726__$1;
(statearr_12733_12753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (6))){
var state_12726__$1 = state_12726;
var statearr_12734_12754 = state_12726__$1;
(statearr_12734_12754[(2)] = null);

(statearr_12734_12754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (3))){
var inst_12723 = (state_12726[(2)]);
var inst_12724 = cljs.core.async.close_BANG_.call(null,out);
var state_12726__$1 = (function (){var statearr_12735 = state_12726;
(statearr_12735[(9)] = inst_12723);

return statearr_12735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12726__$1,inst_12724);
} else {
if((state_val_12727 === (2))){
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12726__$1,(4),ch);
} else {
if((state_val_12727 === (11))){
var inst_12706 = (state_12726[(8)]);
var inst_12715 = (state_12726[(2)]);
var inst_12703 = inst_12706;
var state_12726__$1 = (function (){var statearr_12736 = state_12726;
(statearr_12736[(10)] = inst_12715);

(statearr_12736[(7)] = inst_12703);

return statearr_12736;
})();
var statearr_12737_12755 = state_12726__$1;
(statearr_12737_12755[(2)] = null);

(statearr_12737_12755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (9))){
var inst_12706 = (state_12726[(8)]);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12726__$1,(11),out,inst_12706);
} else {
if((state_val_12727 === (5))){
var inst_12706 = (state_12726[(8)]);
var inst_12703 = (state_12726[(7)]);
var inst_12710 = cljs.core._EQ_.call(null,inst_12706,inst_12703);
var state_12726__$1 = state_12726;
if(inst_12710){
var statearr_12739_12756 = state_12726__$1;
(statearr_12739_12756[(1)] = (8));

} else {
var statearr_12740_12757 = state_12726__$1;
(statearr_12740_12757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (10))){
var inst_12718 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12741_12758 = state_12726__$1;
(statearr_12741_12758[(2)] = inst_12718);

(statearr_12741_12758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (8))){
var inst_12703 = (state_12726[(7)]);
var tmp12738 = inst_12703;
var inst_12703__$1 = tmp12738;
var state_12726__$1 = (function (){var statearr_12742 = state_12726;
(statearr_12742[(7)] = inst_12703__$1);

return statearr_12742;
})();
var statearr_12743_12759 = state_12726__$1;
(statearr_12743_12759[(2)] = null);

(statearr_12743_12759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12749,out))
;
return ((function (switch__10918__auto__,c__11013__auto___12749,out){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12744[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12744[(1)] = (1));

return statearr_12744;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12726){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12745){if((e12745 instanceof Object)){
var ex__10922__auto__ = e12745;
var statearr_12746_12760 = state_12726;
(statearr_12746_12760[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12761 = state_12726;
state_12726 = G__12761;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12749,out))
})();
var state__11015__auto__ = (function (){var statearr_12747 = f__11014__auto__.call(null);
(statearr_12747[(6)] = c__11013__auto___12749);

return statearr_12747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12749,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12763 = arguments.length;
switch (G__12763) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11013__auto___12829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12829,out){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12829,out){
return (function (state_12801){
var state_val_12802 = (state_12801[(1)]);
if((state_val_12802 === (7))){
var inst_12797 = (state_12801[(2)]);
var state_12801__$1 = state_12801;
var statearr_12803_12830 = state_12801__$1;
(statearr_12803_12830[(2)] = inst_12797);

(statearr_12803_12830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (1))){
var inst_12764 = (new Array(n));
var inst_12765 = inst_12764;
var inst_12766 = (0);
var state_12801__$1 = (function (){var statearr_12804 = state_12801;
(statearr_12804[(7)] = inst_12765);

(statearr_12804[(8)] = inst_12766);

return statearr_12804;
})();
var statearr_12805_12831 = state_12801__$1;
(statearr_12805_12831[(2)] = null);

(statearr_12805_12831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (4))){
var inst_12769 = (state_12801[(9)]);
var inst_12769__$1 = (state_12801[(2)]);
var inst_12770 = (inst_12769__$1 == null);
var inst_12771 = cljs.core.not.call(null,inst_12770);
var state_12801__$1 = (function (){var statearr_12806 = state_12801;
(statearr_12806[(9)] = inst_12769__$1);

return statearr_12806;
})();
if(inst_12771){
var statearr_12807_12832 = state_12801__$1;
(statearr_12807_12832[(1)] = (5));

} else {
var statearr_12808_12833 = state_12801__$1;
(statearr_12808_12833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (15))){
var inst_12791 = (state_12801[(2)]);
var state_12801__$1 = state_12801;
var statearr_12809_12834 = state_12801__$1;
(statearr_12809_12834[(2)] = inst_12791);

(statearr_12809_12834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (13))){
var state_12801__$1 = state_12801;
var statearr_12810_12835 = state_12801__$1;
(statearr_12810_12835[(2)] = null);

(statearr_12810_12835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (6))){
var inst_12766 = (state_12801[(8)]);
var inst_12787 = (inst_12766 > (0));
var state_12801__$1 = state_12801;
if(cljs.core.truth_(inst_12787)){
var statearr_12811_12836 = state_12801__$1;
(statearr_12811_12836[(1)] = (12));

} else {
var statearr_12812_12837 = state_12801__$1;
(statearr_12812_12837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (3))){
var inst_12799 = (state_12801[(2)]);
var state_12801__$1 = state_12801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12801__$1,inst_12799);
} else {
if((state_val_12802 === (12))){
var inst_12765 = (state_12801[(7)]);
var inst_12789 = cljs.core.vec.call(null,inst_12765);
var state_12801__$1 = state_12801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12801__$1,(15),out,inst_12789);
} else {
if((state_val_12802 === (2))){
var state_12801__$1 = state_12801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12801__$1,(4),ch);
} else {
if((state_val_12802 === (11))){
var inst_12781 = (state_12801[(2)]);
var inst_12782 = (new Array(n));
var inst_12765 = inst_12782;
var inst_12766 = (0);
var state_12801__$1 = (function (){var statearr_12813 = state_12801;
(statearr_12813[(7)] = inst_12765);

(statearr_12813[(10)] = inst_12781);

(statearr_12813[(8)] = inst_12766);

return statearr_12813;
})();
var statearr_12814_12838 = state_12801__$1;
(statearr_12814_12838[(2)] = null);

(statearr_12814_12838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (9))){
var inst_12765 = (state_12801[(7)]);
var inst_12779 = cljs.core.vec.call(null,inst_12765);
var state_12801__$1 = state_12801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12801__$1,(11),out,inst_12779);
} else {
if((state_val_12802 === (5))){
var inst_12765 = (state_12801[(7)]);
var inst_12766 = (state_12801[(8)]);
var inst_12769 = (state_12801[(9)]);
var inst_12774 = (state_12801[(11)]);
var inst_12773 = (inst_12765[inst_12766] = inst_12769);
var inst_12774__$1 = (inst_12766 + (1));
var inst_12775 = (inst_12774__$1 < n);
var state_12801__$1 = (function (){var statearr_12815 = state_12801;
(statearr_12815[(12)] = inst_12773);

(statearr_12815[(11)] = inst_12774__$1);

return statearr_12815;
})();
if(cljs.core.truth_(inst_12775)){
var statearr_12816_12839 = state_12801__$1;
(statearr_12816_12839[(1)] = (8));

} else {
var statearr_12817_12840 = state_12801__$1;
(statearr_12817_12840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (14))){
var inst_12794 = (state_12801[(2)]);
var inst_12795 = cljs.core.async.close_BANG_.call(null,out);
var state_12801__$1 = (function (){var statearr_12819 = state_12801;
(statearr_12819[(13)] = inst_12794);

return statearr_12819;
})();
var statearr_12820_12841 = state_12801__$1;
(statearr_12820_12841[(2)] = inst_12795);

(statearr_12820_12841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (10))){
var inst_12785 = (state_12801[(2)]);
var state_12801__$1 = state_12801;
var statearr_12821_12842 = state_12801__$1;
(statearr_12821_12842[(2)] = inst_12785);

(statearr_12821_12842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12802 === (8))){
var inst_12765 = (state_12801[(7)]);
var inst_12774 = (state_12801[(11)]);
var tmp12818 = inst_12765;
var inst_12765__$1 = tmp12818;
var inst_12766 = inst_12774;
var state_12801__$1 = (function (){var statearr_12822 = state_12801;
(statearr_12822[(7)] = inst_12765__$1);

(statearr_12822[(8)] = inst_12766);

return statearr_12822;
})();
var statearr_12823_12843 = state_12801__$1;
(statearr_12823_12843[(2)] = null);

(statearr_12823_12843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12829,out))
;
return ((function (switch__10918__auto__,c__11013__auto___12829,out){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12824[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12824[(1)] = (1));

return statearr_12824;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12801){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12825){if((e12825 instanceof Object)){
var ex__10922__auto__ = e12825;
var statearr_12826_12844 = state_12801;
(statearr_12826_12844[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12845 = state_12801;
state_12801 = G__12845;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12829,out))
})();
var state__11015__auto__ = (function (){var statearr_12827 = f__11014__auto__.call(null);
(statearr_12827[(6)] = c__11013__auto___12829);

return statearr_12827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12829,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12847 = arguments.length;
switch (G__12847) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11013__auto___12917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11013__auto___12917,out){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (c__11013__auto___12917,out){
return (function (state_12889){
var state_val_12890 = (state_12889[(1)]);
if((state_val_12890 === (7))){
var inst_12885 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
var statearr_12891_12918 = state_12889__$1;
(statearr_12891_12918[(2)] = inst_12885);

(statearr_12891_12918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (1))){
var inst_12848 = [];
var inst_12849 = inst_12848;
var inst_12850 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12889__$1 = (function (){var statearr_12892 = state_12889;
(statearr_12892[(7)] = inst_12849);

(statearr_12892[(8)] = inst_12850);

return statearr_12892;
})();
var statearr_12893_12919 = state_12889__$1;
(statearr_12893_12919[(2)] = null);

(statearr_12893_12919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (4))){
var inst_12853 = (state_12889[(9)]);
var inst_12853__$1 = (state_12889[(2)]);
var inst_12854 = (inst_12853__$1 == null);
var inst_12855 = cljs.core.not.call(null,inst_12854);
var state_12889__$1 = (function (){var statearr_12894 = state_12889;
(statearr_12894[(9)] = inst_12853__$1);

return statearr_12894;
})();
if(inst_12855){
var statearr_12895_12920 = state_12889__$1;
(statearr_12895_12920[(1)] = (5));

} else {
var statearr_12896_12921 = state_12889__$1;
(statearr_12896_12921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (15))){
var inst_12879 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
var statearr_12897_12922 = state_12889__$1;
(statearr_12897_12922[(2)] = inst_12879);

(statearr_12897_12922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (13))){
var state_12889__$1 = state_12889;
var statearr_12898_12923 = state_12889__$1;
(statearr_12898_12923[(2)] = null);

(statearr_12898_12923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (6))){
var inst_12849 = (state_12889[(7)]);
var inst_12874 = inst_12849.length;
var inst_12875 = (inst_12874 > (0));
var state_12889__$1 = state_12889;
if(cljs.core.truth_(inst_12875)){
var statearr_12899_12924 = state_12889__$1;
(statearr_12899_12924[(1)] = (12));

} else {
var statearr_12900_12925 = state_12889__$1;
(statearr_12900_12925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (3))){
var inst_12887 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12889__$1,inst_12887);
} else {
if((state_val_12890 === (12))){
var inst_12849 = (state_12889[(7)]);
var inst_12877 = cljs.core.vec.call(null,inst_12849);
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12889__$1,(15),out,inst_12877);
} else {
if((state_val_12890 === (2))){
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12889__$1,(4),ch);
} else {
if((state_val_12890 === (11))){
var inst_12857 = (state_12889[(10)]);
var inst_12853 = (state_12889[(9)]);
var inst_12867 = (state_12889[(2)]);
var inst_12868 = [];
var inst_12869 = inst_12868.push(inst_12853);
var inst_12849 = inst_12868;
var inst_12850 = inst_12857;
var state_12889__$1 = (function (){var statearr_12901 = state_12889;
(statearr_12901[(7)] = inst_12849);

(statearr_12901[(11)] = inst_12867);

(statearr_12901[(8)] = inst_12850);

(statearr_12901[(12)] = inst_12869);

return statearr_12901;
})();
var statearr_12902_12926 = state_12889__$1;
(statearr_12902_12926[(2)] = null);

(statearr_12902_12926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (9))){
var inst_12849 = (state_12889[(7)]);
var inst_12865 = cljs.core.vec.call(null,inst_12849);
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12889__$1,(11),out,inst_12865);
} else {
if((state_val_12890 === (5))){
var inst_12857 = (state_12889[(10)]);
var inst_12850 = (state_12889[(8)]);
var inst_12853 = (state_12889[(9)]);
var inst_12857__$1 = f.call(null,inst_12853);
var inst_12858 = cljs.core._EQ_.call(null,inst_12857__$1,inst_12850);
var inst_12859 = cljs.core.keyword_identical_QMARK_.call(null,inst_12850,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12860 = ((inst_12858) || (inst_12859));
var state_12889__$1 = (function (){var statearr_12903 = state_12889;
(statearr_12903[(10)] = inst_12857__$1);

return statearr_12903;
})();
if(cljs.core.truth_(inst_12860)){
var statearr_12904_12927 = state_12889__$1;
(statearr_12904_12927[(1)] = (8));

} else {
var statearr_12905_12928 = state_12889__$1;
(statearr_12905_12928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (14))){
var inst_12882 = (state_12889[(2)]);
var inst_12883 = cljs.core.async.close_BANG_.call(null,out);
var state_12889__$1 = (function (){var statearr_12907 = state_12889;
(statearr_12907[(13)] = inst_12882);

return statearr_12907;
})();
var statearr_12908_12929 = state_12889__$1;
(statearr_12908_12929[(2)] = inst_12883);

(statearr_12908_12929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (10))){
var inst_12872 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
var statearr_12909_12930 = state_12889__$1;
(statearr_12909_12930[(2)] = inst_12872);

(statearr_12909_12930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (8))){
var inst_12849 = (state_12889[(7)]);
var inst_12857 = (state_12889[(10)]);
var inst_12853 = (state_12889[(9)]);
var inst_12862 = inst_12849.push(inst_12853);
var tmp12906 = inst_12849;
var inst_12849__$1 = tmp12906;
var inst_12850 = inst_12857;
var state_12889__$1 = (function (){var statearr_12910 = state_12889;
(statearr_12910[(7)] = inst_12849__$1);

(statearr_12910[(14)] = inst_12862);

(statearr_12910[(8)] = inst_12850);

return statearr_12910;
})();
var statearr_12911_12931 = state_12889__$1;
(statearr_12911_12931[(2)] = null);

(statearr_12911_12931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11013__auto___12917,out))
;
return ((function (switch__10918__auto__,c__11013__auto___12917,out){
return (function() {
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12912[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12912[(1)] = (1));

return statearr_12912;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12889){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12913){if((e12913 instanceof Object)){
var ex__10922__auto__ = e12913;
var statearr_12914_12932 = state_12889;
(statearr_12914_12932[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12933 = state_12889;
state_12889 = G__12933;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
;})(switch__10918__auto__,c__11013__auto___12917,out))
})();
var state__11015__auto__ = (function (){var statearr_12915 = f__11014__auto__.call(null);
(statearr_12915[(6)] = c__11013__auto___12917);

return statearr_12915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(c__11013__auto___12917,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
