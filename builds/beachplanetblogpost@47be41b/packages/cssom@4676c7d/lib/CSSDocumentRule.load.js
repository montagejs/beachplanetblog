montageDefine("4676c7d","lib/CSSDocumentRule",{dependencies:["./CSSRule","./MatcherList"],factory:function(e,t){var n={CSSRule:e("./CSSRule").CSSRule,MatcherList:e("./MatcherList").MatcherList};n.CSSDocumentRule=function(){n.CSSRule.call(this),this.matcher=new n.MatcherList,this.cssRules=[]},n.CSSDocumentRule.prototype=new n.CSSRule,n.CSSDocumentRule.prototype.constructor=n.CSSDocumentRule,n.CSSDocumentRule.prototype.type=10,Object.defineProperty(n.CSSDocumentRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;n>t;t++)e.push(this.cssRules[t].cssText);return"@-moz-document "+this.matcher.matcherText+" {"+e.join("")+"}"}}),t.CSSDocumentRule=n.CSSDocumentRule}});