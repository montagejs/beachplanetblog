montageDefine("d41c331","core/serialization/deserializer/montage-interpreter",{dependencies:["../../core","mousse/deserialization/context","./montage-reviver","../../promise"],factory:function(e,t){var n=e("../../core").Montage,i=e("mousse/deserialization/context").Context,r=e("./montage-reviver").MontageReviver,a=e("../../promise").Promise,s=n.specialize({_require:{value:null},_reviver:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw Error("Function 'require' missing.");return this._reviver=(new r).init(e,t),this._require=e,this}},instantiate:{value:function(e,t,n){var i;return i=(new o).init(e,this._reviver,t,n,this._require),i.getObjects()}},preloadModules:{value:function(e){var t,n,i,s,o=this._reviver,l=o.moduleLoader,c=[];for(var u in e)t=e[u],n=t.prototype||t.object,n&&(i=r.parseObjectLocationId(n),s=l.getModule(i.moduleId,u),a.isPromise(s)&&c.push(s));return c.length>0?a.all(c):void 0}}}),o=n.specialize.call(i,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,t,n,r,a){return i.call(this,e,t,n),this._element=r,this._require=a,this}},hasObject:{value:function(e){return e in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(t)}},setUnitsToDeserialize:{value:function(e,t,n){this._unitsToDeserialize.push({object:e,objectDesc:t,unitNames:n})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});t.MontageInterpreter=s,t.MontageContext=o}});