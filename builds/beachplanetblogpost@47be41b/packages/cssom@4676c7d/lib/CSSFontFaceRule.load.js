montageDefine("4676c7d","lib/CSSFontFaceRule",{dependencies:["./CSSStyleDeclaration","./CSSRule"],factory:function(e,t){var n={CSSStyleDeclaration:e("./CSSStyleDeclaration").CSSStyleDeclaration,CSSRule:e("./CSSRule").CSSRule};n.CSSFontFaceRule=function(){n.CSSRule.call(this),this.style=new n.CSSStyleDeclaration,this.style.parentRule=this},n.CSSFontFaceRule.prototype=new n.CSSRule,n.CSSFontFaceRule.prototype.constructor=n.CSSFontFaceRule,n.CSSFontFaceRule.prototype.type=5,Object.defineProperty(n.CSSFontFaceRule.prototype,"cssText",{get:function(){return"@font-face {"+this.style.cssText+"}"}}),t.CSSFontFaceRule=n.CSSFontFaceRule}});