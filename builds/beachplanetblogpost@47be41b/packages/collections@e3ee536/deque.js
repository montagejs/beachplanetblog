"use strict";function Deque(e,t){return this instanceof Deque?(this.capacity=this.snap(t),this.init(),this.length=0,this.front=0,this.addEach(e),void 0):new Deque(e,t)}function copy(e,t,i,n,s){for(var a=0;s>a;++a)i[a+n]=e[a+t]}function pow2AtLeast(e){return e>>>=0,e-=1,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e+1}require("./shim-object");var GenericCollection=require("./generic-collection"),GenericOrder=require("./generic-order"),RangeChanges=require("./listen/range-changes");module.exports=Deque,Object.addEach(Deque.prototype,GenericCollection.prototype),Object.addEach(Deque.prototype,GenericOrder.prototype),Object.addEach(Deque.prototype,RangeChanges.prototype),Deque.prototype.maxCapacity=0|1<<30,Deque.prototype.minCapacity=16,Deque.prototype.constructClone=function(e){return new this.constructor(e,this.capacity)},Deque.prototype.add=function(e){this.push(e)},Deque.prototype.push=function(e){var t=arguments.length,i=this.length;if(this.dispatchesRangeChanges){for(var n=Array(t),s=0;t>s;++s)n[s]=arguments[s];var a=[];this.dispatchBeforeRangeChange(n,a,i)}if(t>1){var o=this.capacity;if(i+t>o)for(var s=0;t>s;++s){this.ensureCapacity(i+1);var r=this.front+i&this.capacity-1;this[r]=arguments[s],i++,this.length=i}else{for(var r=this.front,s=0;t>s;++s)this[r+i&o-1]=arguments[s],r++;this.length=i+t}}else if(1===t){this.ensureCapacity(i+1);var l=this.front+i&this.capacity-1;this[l]=e,this.length=i+1}return this.dispatchesRangeChanges&&this.dispatchRangeChange(n,a,i),this.length},Deque.prototype.pop=function(){var e=this.length;if(0!==e){var t=this.front+e-1&this.capacity-1,i=this[t];return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[i],e-1),this[t]=void 0,this.length=e-1,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[i],e-1),i}},Deque.prototype.shift=function(){if(0!==this.length){var e=this.front,t=this[e];return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[t],0),this[e]=void 0,this.front=e+1&this.capacity-1,this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[t],0),t}},Deque.prototype.unshift=function(e){var t=this.length,i=arguments.length;if(this.dispatchesRangeChanges){for(var n=Array(i),s=0;i>s;++s)n[s]=arguments[s];var a=[];this.dispatchBeforeRangeChange(n,a,0)}if(i>1){var o=this.capacity;if(t+i>o)for(var s=i-1;s>=0;s--){this.ensureCapacity(t+1);var o=this.capacity,r=(this.front-1&o-1^o)-o;this[r]=arguments[s],t++,this.front=r,this.length=t}else{for(var l=this.front,s=i-1;s>=0;s--){var r=(l-1&o-1^o)-o;this[r]=arguments[s],l=r}this.front=l,this.length=t+i}}else if(1===i){this.ensureCapacity(t+1);var o=this.capacity,r=(this.front-1&o-1^o)-o;this[r]=e,this.length=t+1,this.front=r}return this.dispatchesRangeChanges&&this.dispatchRangeChange(n,a,0),this.length},Deque.prototype.clear=function(){this.length=0,this.front=0,this.init()},Deque.prototype.ensureCapacity=function(e){e>this.capacity&&this.grow(this.snap(1.5*this.capacity+16))},Deque.prototype.grow=function(e){var t=this.front,i=this.capacity,n=Array(i),s=this.length;if(copy(this,0,n,0,i),this.capacity=e,this.init(),this.front=0,i>=t+s)copy(n,t,this,0,s);else{var a=s-(t+s&i-1);copy(n,t,this,0,a),copy(n,0,this,a,s-a)}},Deque.prototype.init=function(){for(var e=0;this.capacity>e;++e)this[e]="nil"},Deque.prototype.snap=function(e){return"number"!=typeof e?this.minCapacity:pow2AtLeast(Math.min(this.maxCapacity,Math.max(this.minCapacity,e)))},Deque.prototype.one=function(){return this.length>0?this[this.front]:void 0},Deque.prototype.peek=function(){return 0!==this.length?this[this.front]:void 0},Deque.prototype.poke=function(e){0!==this.length&&(this[this.front]=e)},Deque.prototype.peekBack=function(){var e=this.length;if(0!==e){var t=this.front+e-1&this.capacity-1;return this[t]}},Deque.prototype.pokeBack=function(e){var t=this.length;if(0!==t){var i=this.front+t-1&this.capacity-1;this[i]=e}},Deque.prototype.get=function(e){return e!==(0|e)||(0>e&&(e+=this.length),0>e||e>=this.length)?void 0:this[this.front+e&this.capacity-1]},Deque.prototype.indexOf=function(e,t){null==t&&(t=0),0>t&&(t+=this.length);for(var i=this.capacity-1;this.length>t;t++){var n=this.front+t&i;if(this[n]===e)return t}return-1},Deque.prototype.lastIndexOf=function(e,t){null==t&&(t=this.length-1),0>t&&(t+=this.length);for(var i=this.capacity-1;t>=0;t--){var n=this.front+t&i;if(this[n]===e)return t}return-1},Deque.prototype.find=function(e,t,i){t=t||Object.equals,null==i&&(i=0),0>i&&(i+=this.length);for(var n=this.capacity-1;this.length>i;i++){var s=this.front+i&n;if(t(e,this[s]))return i}return-1},Deque.prototype.findLast=function(e,t,i){t=t||Object.equals,null==i&&(i=this.length-1),0>i&&(i+=this.length);for(var n=this.capacity-1;i>=0;i--){var s=this.front+i&n;if(t(e,this[s]))return i}return-1},Deque.prototype.has=function(e,t){t=t||Object.equals;for(var i=this.capacity-1,n=0;this.length>n;n++){var s=this.front+n&i;if(this[s]===e)return!0}return!1},Deque.prototype.reduce=function(e,t){for(var i=arguments[2],n=this.capacity-1,s=0;this.length>s;s++){var a=this.front+s&n;t=e.call(i,t,this[a],s,this)}return t},Deque.prototype.reduceRight=function(e,t){for(var i=arguments[2],n=this.capacity-1,s=this.length-1;s>=0;s--){var a=this.front+s&n;t=e.call(i,t,this[a],s,this)}return t};