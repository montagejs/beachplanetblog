montageDefine("e3ee536","generic-order",{dependencies:["./shim-object"],factory:function(e,t,i){function n(){throw Error("Can't construct. GenericOrder is a mixin.")}var s=e("./shim-object");i.exports=n,n.prototype.equals=function(e,t){return t=t||this.contentEquals||s.equals,this===e?!0:e?this.length===e.length&&this.zip(e).every(function(e){return t(e[0],e[1])}):!1},n.prototype.compare=function(e,t){if(t=t||this.contentCompare||s.compare,this===e)return 0;if(!e)return 1;var i=Math.min(this.length,e.length),n=this.zip(e).reduce(function(e,n,s){return 0===e?s>=i?e:t(n[0],n[1]):e},0);return 0===n?this.length-e.length:n},n.prototype.toJSON=function(){return this.toArray()}}});