function PropertyChanges(){throw Error("This is an abstract interface. Mix it. Don't construct it")}function dispatchEach(e,t,n,i){var s,a,r,o=e.active,l=e.current,u=l.length,h=u;for(o.length>u&&(o.length=u);u--;)o[u]=l[u];for(a=0;h>a;a++)if(r=o[a],!a||l.indexOf(r)>=0){if(s=r[e.specificHandlerMethodName]||r[e.genericHandlerMethodName]||r,!s.call)throw Error("No event listener for "+e.specificHandlerName+" or "+e.genericHandlerName+" or call on "+s);s.call(r,n,t,i)}}require("../shim");var objectHasOwnProperty=Object.prototype.hasOwnProperty;module.exports=PropertyChanges,PropertyChanges.debug=!0,PropertyChanges.prototype.getOwnPropertyChangeDescriptor=function(e){this.__propertyChangeListeners__||Object.defineProperty(this,"__propertyChangeListeners__",{value:{},enumerable:!1,configurable:!0,writable:!0});var t=this.__propertyChangeListeners__;if(!objectHasOwnProperty.call(t,e)){var n=e+"";n=n&&n[0].toUpperCase()+n.slice(1),t[e]={willChangeListeners:{current:[],active:[],specificHandlerMethodName:"handle"+n+"WillChange",genericHandlerMethodName:"handlePropertyWillChange"},changeListeners:{current:[],active:[],specificHandlerMethodName:"handle"+n+"Change",genericHandlerMethodName:"handlePropertyChange"}}}return t[e]},PropertyChanges.prototype.hasOwnPropertyChangeDescriptor=function(e){if(!this.__propertyChangeListeners__)return!1;if(!e)return!0;var t=this.__propertyChangeListeners__;return objectHasOwnProperty.call(t,e)?!0:!1},PropertyChanges.prototype.addOwnPropertyChangeListener=function(e,t,n){this.makeObservable&&!this.isObservable&&this.makeObservable();var i,s=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);i=n?s.willChangeListeners:s.changeListeners,PropertyChanges.makePropertyObservable(this,e),i.current.push(t);var a=this;return function(){PropertyChanges.removeOwnPropertyChangeListener(a,e,t,n),a=null}},PropertyChanges.prototype.addBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.addOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.removeOwnPropertyChangeListener=function(e,t,n){var i,s=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);i=n?s.willChangeListeners:s.changeListeners;var a=i.current.lastIndexOf(t);if(-1===a)throw Error("Can't remove property change listener: does not exist: property name"+JSON.stringify(e));i.current.splice(a,1)},PropertyChanges.prototype.removeBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.removeOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.dispatchOwnPropertyChange=function(e,t,n){var i,s=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);if(!s.isActive){s.isActive=!0,i=n?s.willChangeListeners:s.changeListeners;try{dispatchEach(i,e,t,this)}finally{s.isActive=!1}}},PropertyChanges.prototype.dispatchBeforeOwnPropertyChange=function(e,t){return PropertyChanges.dispatchOwnPropertyChange(this,e,t,!0)},PropertyChanges.prototype.makePropertyObservable=function(e){var t=this.__overriddenPropertyDescriptors__;if(t){if(objectHasOwnProperty.call(t,e))return}else{if(Array.isArray(this))return;if(!Object.isExtensible(this))throw Error("Can't make property "+JSON.stringify(e)+" observable on "+this+" because object is not extensible");t={},Object.defineProperty(this,"__overriddenPropertyDescriptors__",{value:t,enumerable:!1,writable:!0,configurable:!0})}var n;"object"==typeof this.__state__?n=this.__state__:(n={},Object.defineProperty(this,"__state__",{value:n,writable:!0,enumerable:!1})),n[e]=this[e];var i,s=this;do{if(i=Object.getOwnPropertyDescriptor(s,e))break;s=Object.getPrototypeOf(s)}while(s);if(i){if(!i.configurable)return;if(!i.writable&&!i.set)return}else i={value:void 0,enumerable:!0,writable:!0,configurable:!0};t[e]=i;var a;a="value"in i?{get:function(){return i.value},set:function(t){var s,a;if(t!==i.value){if(s=this.__propertyChangeListeners__[e],a=s.isActive,!a){s.isActive=!0;try{dispatchEach(s.willChangeListeners,e,i.value,this)}finally{}}if(i.value=t,n[e]=t,!a)try{dispatchEach(s.changeListeners,e,t,this)}finally{s.isActive=!1}}},enumerable:i.enumerable,configurable:!0}:{get:i.get,set:function(t){var s,a,r=this[e];if(i.set.call(this,t),t=this[e],t!==r){if(s=this.__propertyChangeListeners__[e],a=s.isActive,!a){s.isActive=!0;try{dispatchEach(s.willChangeListeners,e,r,this)}finally{}}if(n[e]=t,!a)try{dispatchEach(s.changeListeners,e,t,this)}finally{s.isActive=!1}}},enumerable:i.enumerable,configurable:!0},Object.defineProperty(this,e,a)},PropertyChanges.getOwnPropertyChangeDescriptor=function(e,t){return e.getOwnPropertyChangeDescriptor?e.getOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.getOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.hasOwnPropertyChangeDescriptor=function(e,t){return e.hasOwnPropertyChangeDescriptor?e.hasOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.hasOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.addOwnPropertyChangeListener=function(e,t,n,i){return Object.isObject(e)?e.addOwnPropertyChangeListener?e.addOwnPropertyChangeListener(t,n,i):PropertyChanges.prototype.addOwnPropertyChangeListener.call(e,t,n,i):void 0},PropertyChanges.removeOwnPropertyChangeListener=function(e,t,n,i){return Object.isObject(e)?e.removeOwnPropertyChangeListener?e.removeOwnPropertyChangeListener(t,n,i):PropertyChanges.prototype.removeOwnPropertyChangeListener.call(e,t,n,i):void 0},PropertyChanges.dispatchOwnPropertyChange=function(e,t,n,i){return Object.isObject(e)?e.dispatchOwnPropertyChange?e.dispatchOwnPropertyChange(t,n,i):PropertyChanges.prototype.dispatchOwnPropertyChange.call(e,t,n,i):void 0},PropertyChanges.addBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.addOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.removeBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.removeOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.dispatchBeforeOwnPropertyChange=function(e,t,n){return PropertyChanges.dispatchOwnPropertyChange(e,t,n,!0)},PropertyChanges.makePropertyObservable=function(e,t){return e.makePropertyObservable?e.makePropertyObservable(t):PropertyChanges.prototype.makePropertyObservable.call(e,t)};