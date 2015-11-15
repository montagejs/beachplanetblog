var Montage=require("../core/core").Montage,Composer=require("./composer").Composer;exports.SwipeComposer=Composer.specialize({load:{value:function(){document.addEventListener("touchstart",this,!0)}},unload:{value:function(){document.removeEventListener("touchstart",this,!0)}},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_deltaX:{enumerable:!1,value:0},_deltaY:{enumerable:!1,value:0},_threshold:{enumerable:!1,value:50},_thresholdSwipeAngle:{enumerable:!1,value:20},_startTimestamp:{enumerable:!1,value:0},captureTouchstart:{value:function(t){this._reset();var e=t.touches,n=e[0];this._startX=n.clientX,this._startY=n.clientY,this._startTimestamp=t.timeStamp,document.addEventListener("touchmove",this,!0),document.addEventListener("touchend",this,!0),document.addEventListener("touchcancel",this,!0)}},_reset:{enumerable:!1,value:function(){this._startX=0,this._startY=0,this._deltaX=0,this._deltaY=0,this._startSwipeAngle=null}},_startSwipeAngle:{enumerable:!1,value:null},captureTouchcancel:{value:function(){document.removeEventListener("touchmove",this,!0),document.removeEventListener("touchend",this,!0),document.removeEventListener("touchcancel",this,!0)}},captureTouchmove:{value:function(t){t.preventDefault();var e,n,i=t.changedTouches[0];this._deltaX=i.clientX-this._startX,this._deltaY=i.clientY-this._startY;var r=this._deltaX,a=this._deltaY,s=this._threshold,o=this._findSwipeAngle(r,a);null!=this._startSwipeAngle&&Math.abs(this._startSwipeAngle-o)>this._thresholdSwipeAngle&&(this._startSwipeAngle=null),null==this._startSwipeAngle&&(this._startSwipeAngle=o,this._startX=i.clientX,this._startY=i.clientY,this._deltaX=0,this._deltaY=0),r>s&&a>s?n="DIAGONAL":r>s&&s>a?n=this._deltaX>0?"RIGHT":"LEFT":s>r&&a>s&&(n=this._deltaY>0?"DOWN":"UP"),(0!=r||0!=a)&&(e=document.createEvent("CustomEvent"),e.initCustomEvent("swipemove",!0,!1,null),e.direction=n,e.angle=this._startSwipeAngle,e.velocity=this._findVelocity(t.timeStamp-this._startTimestamp),e.startX=this._startX,e.startY=this._startY,e.dX=this._deltaX,e.dY=this._deltaY,this.dispatchEvent(e))}},_findSwipeAngle:{enumerable:!1,value:function(t,e){var n=-1*(180*Math.atan2(e,t)/3.14);return n.toFixed(2)}},captureTouchend:{value:function(t){if(null!=t){var e,n,i=Math.abs(this._deltaX),r=Math.abs(this._deltaY),a=this._threshold;if(a>i&&a>r)return this.captureTouchcancel(),void 0;document.removeEventListener("touchmove",this,!0),i>a&&r>a?e="DIAGONAL":i>a&&a>r?e=this._deltaX>0?"RIGHT":"LEFT":a>i&&r>a&&(e=this._deltaY>0?"DOWN":"UP"),n=document.createEvent("CustomEvent"),n.initCustomEvent("swipe",!0,!1,null),n.direction=e,n.angle=this._startSwipeAngle,n.velocity=this._findVelocity(t.timeStamp-this._startTimestamp),n.startX=this._startX,n.startY=this._startY,n.dX=this._deltaX,n.dY=this._deltaY,this.dispatchEvent(n)}}},_findVelocity:{enumerable:!1,value:function(t){return Math.sqrt(this._deltaX*this._deltaX+this._deltaY*this._deltaY)/t}}});