montageDefine("748f581","http-apps/negotiate",{dependencies:["q","mimeparse","./status"],factory:function(e,t){function n(e,t,n){var i=Object.keys(t),a=e.headers[n||"accept"]||"*",s=r.bestMatch(i,a);return t[s]}var i=e("q"),r=e("mimeparse"),a=e("./status");t.negotiate=n,t.Method=function(e,t){var n=Object.keys(e);return t||(t=a.methodNotAllowed),function(i){var r=i.method;return Object.has(n,r)?Object.get(e,r)(i):t(i)}};var s=function(e,t,n){return function(s,o){var l=Object.keys(s);return o||(o=a.notAcceptable),function(a){var c=a.headers[e]||"*",u=r.bestMatch(l,c);return a.terms=a.terms||{},a.terms[t]=u,Object.has(l,u)?i.when(s[u](a),function(e){return null!==n&&e&&200===e.status&&e.headers&&(e.headers[t]=u),e}):o(a)}}};t.ContentType=s("accept","content-type"),t.Language=s("accept-language","language"),t.Charset=s("accept-charset","charset"),t.Encoding=s("accept-encoding","encoding"),t.Host=function(e,t){var n=Object.keys(e).map(function(t){var n=t.split(":");return[t,n[0]||"*",n[1]||"*",e[t]]});return t||(t=a.notAcceptable),function(e){for(var i=0;n.length>i;i++){var r=n[i],a=r[0],s=r[1],o=r[2],l=r[3];if(!("*"!==s&&s!==e.hostname||"*"!==o&&o!==""+e.port))return e.terms=e.terms||{},e.terms.host=a,l(e)}return t(e)}},t.Select=function(e){return function(t){return i.when(e(t),function(e){return e(t)})}}}});