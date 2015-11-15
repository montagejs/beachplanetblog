montageDefine("e3ee536","generic-set",{dependencies:[],factory:function(e,t,i){function n(){throw Error("Can't construct. GenericSet is a mixin.")}i.exports=n,n.prototype.isSet=!0,n.prototype.union=function(e){var t=this.constructClone(this);return t.addEach(e),t},n.prototype.intersection=function(e){return this.constructClone(this.filter(function(t){return e.has(t)}))},n.prototype.difference=function(e){var t=this.constructClone(this);return t.deleteEach(e),t},n.prototype.symmetricDifference=function(e){var t=this.union(e),i=this.intersection(e);return t.difference(i)},n.prototype.deleteAll=function(e){return+this["delete"](e)},n.prototype.equals=function(e,t){var i=this;return e&&"function"==typeof e.reduce&&this.length===e.length&&e.reduce(function(e,n){return e&&i.has(n,t)},!0)},n.prototype.toJSON=function(){return this.toArray()},n.prototype.contains=function(e){return this.has(e)},n.prototype.remove=function(e){return this["delete"](e)},n.prototype.toggle=function(e){this.has(e)?this["delete"](e):this.add(e)}}});