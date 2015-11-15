montageDefine("0ba3732","lib/_stream_transform",{dependencies:["./_stream_duplex","core-util-is","inherits"],factory:function(e,i,t){function s(e,i){this.afterTransform=function(e,t){return a(i,e,t)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function a(e,i,t){var s=e._transformState;s.transforming=!1;var a=s.writecb;if(!a)return e.emit("error",Error("no writecb in Transform class"));s.writechunk=null,s.writecb=null,null!==t&&void 0!==t&&e.push(t),a&&a(i);var u=e._readableState;u.reading=!1,(u.needReadable||u.length<u.highWaterMark)&&e._read(u.highWaterMark)}function u(e){if(!(this instanceof u))return new u(e);r.call(this,e),this._transformState=new s(e,this);var i=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(e){n(i,e)}):n(i)})}function n(e,i){if(i)return e.emit("error",i);var t=e._writableState;e._readableState;var s=e._transformState;if(t.length)throw Error("calling transform done when ws.length != 0");if(s.transforming)throw Error("calling transform done when still transforming");return e.push(null)}t.exports=u;var r=e("./_stream_duplex"),l=e("core-util-is");l.inherits=e("inherits"),l.inherits(u,r),u.prototype.push=function(e,i){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,i)},u.prototype._transform=function(){throw Error("not implemented")},u.prototype._write=function(e,i,t){var s=this._transformState;if(s.writecb=t,s.writechunk=e,s.writeencoding=i,!s.transforming){var a=this._readableState;(s.needTransform||a.needReadable||a.length<a.highWaterMark)&&this._read(a.highWaterMark)}},u.prototype._read=function(){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0}}});