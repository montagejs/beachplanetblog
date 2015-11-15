"use strict";function RangeChanges(){throw Error("Can't construct. RangeChanges is a mixin.")}var WeakMap=require("weak-map"),Dict=require("../dict"),rangeChangeDescriptors=new WeakMap;module.exports=RangeChanges,RangeChanges.prototype.getAllRangeChangeDescriptors=function(){return rangeChangeDescriptors.has(this)||rangeChangeDescriptors.set(this,Dict()),rangeChangeDescriptors.get(this)},RangeChanges.prototype.getRangeChangeDescriptor=function(e){var t=this.getAllRangeChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{isActive:!1,changeListeners:[],willChangeListeners:[]}),t.get(e)},RangeChanges.prototype.addRangeChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var i,s=this.getRangeChangeDescriptor(t);i=n?s.willChangeListeners:s.changeListeners,i.push(e),Object.defineProperty(this,"dispatchesRangeChanges",{value:!0,writable:!0,configurable:!0,enumerable:!1});var a=this;return function(){a&&(a.removeRangeChangeListener(e,t,n),a=null)}},RangeChanges.prototype.removeRangeChangeListener=function(e,t,n){var i,s=this.getRangeChangeDescriptor(t);i=n?s.willChangeListeners:s.changeListeners;var a=i.lastIndexOf(e);if(-1===a)throw Error("Can't remove range change listener: does not exist: token "+JSON.stringify(t));i.splice(a,1)},RangeChanges.prototype.dispatchRangeChange=function(e,t,n,i){var s=this.getAllRangeChangeDescriptors(),a="Range"+(i?"WillChange":"Change");s.forEach(function(s,r){if(!s.isActive){s.isActive=!0;var o;o=i?s.willChangeListeners:s.changeListeners;var l="handle"+(r.slice(0,1).toUpperCase()+r.slice(1))+a;try{o.slice().forEach(function(s){if(!(0>o.indexOf(s)))if(s[l])s[l](e,t,n,this,i);else{if(!s.call)throw Error("Handler "+s+" has no method "+l+" and is not callable");s.call(this,e,t,n,this,i)}},this)}finally{s.isActive=!1}}},this)},RangeChanges.prototype.addBeforeRangeChangeListener=function(e,t){return this.addRangeChangeListener(e,t,!0)},RangeChanges.prototype.removeBeforeRangeChangeListener=function(e,t){return this.removeRangeChangeListener(e,t,!0)},RangeChanges.prototype.dispatchBeforeRangeChange=function(e,t,n){return this.dispatchRangeChange(e,t,n,!0)};