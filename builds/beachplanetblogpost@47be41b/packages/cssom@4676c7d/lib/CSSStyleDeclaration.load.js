montageDefine("4676c7d","lib/CSSStyleDeclaration",{dependencies:["./parse"],factory:function(e,t){var n={};n.CSSStyleDeclaration=function(){this.length=0,this.parentRule=null,this._importants={}},n.CSSStyleDeclaration.prototype={constructor:n.CSSStyleDeclaration,getPropertyValue:function(e){return this[e]||""},setProperty:function(e,t,n){if(this[e]){var i=Array.prototype.indexOf.call(this,e);0>i&&(this[this.length]=e,this.length++)}else this[this.length]=e,this.length++;this[e]=t,this._importants[e]=n},removeProperty:function(e){if(!(e in this))return"";var t=Array.prototype.indexOf.call(this,e);if(0>t)return"";var n=this[e];return this[e]="",Array.prototype.splice.call(this,t,1),n},getPropertyCSSValue:function(){},getPropertyPriority:function(e){return this._importants[e]||""},getPropertyShorthand:function(){},isPropertyImplicit:function(){},get cssText(){for(var e=[],t=0,n=this.length;n>t;++t){var i=this[t],r=this.getPropertyValue(i),a=this.getPropertyPriority(i);a&&(a=" !"+a),e[t]=i+": "+r+a+";"}return e.join(" ")},set cssText(e){var t,i;for(t=this.length;t--;)i=this[t],this[i]="";Array.prototype.splice.call(this,0,this.length),this._importants={};var r=n.parse("#bogus{"+e+"}").cssRules[0].style,a=r.length;for(t=0;a>t;++t)i=r[t],this.setProperty(r[t],r.getPropertyValue(i),r.getPropertyPriority(i))}},t.CSSStyleDeclaration=n.CSSStyleDeclaration,n.parse=e("./parse").parse}});