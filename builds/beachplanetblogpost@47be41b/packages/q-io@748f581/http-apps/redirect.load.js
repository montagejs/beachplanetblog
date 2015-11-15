montageDefine("748f581","http-apps/redirect",{dependencies:["q","url2","../http","./negotiate","./html"],factory:function(e,t){var n=e("q"),i=e("url2"),r=e("../http"),a=e("./negotiate"),s=e("./html");t.PermanentRedirect=function(e,n,i){return function(r){return t.permanentRedirect(r,e,n,i)}},t.PermanentRedirectTree=function(e,n){return function(i){return t.permanentRedirect(i,e,n,!0)}},t.TemporaryRedirect=function(e,n,i){return function(r){return t.temporaryRedirect(r,e,n,i)}},t.TemporaryRedirectTree=function(e,n){return function(i){return t.temporaryRedirect(i,e,n,!0)}},t.Redirect=function(e,n,i){return function(r){return t.redirect(r,e,n,i)}},t.RedirectTree=function(e,n){return function(i){return t.redirect(i,e,n,!0)}},t.permanentRedirect=function(e,n,i){return t.redirect(e,n,i||301)},t.permanentRedirectTree=function(e,n,i){return t.redirect(e,n,i||301,!0)},t.temporaryRedirect=function(e,n,i){return t.redirect(e,n,i||307)},t.temporaryRedirectTree=function(e,n,i){return t.redirect(e,n,i||307,!0)},t.redirectTree=function(e,n,i){return t.redirect(e,n,i,!0)},t.redirect=function(e,n,r,s){r=r||(e.permanent?301:307),n=i.resolve(e.url,n),s&&(n=i.resolve(n,e.pathInfo.replace(/^\//,"")));var o={};o["text/plain"]=t.redirectText,e.handleHtmlFragmentResponse&&(o["text/html"]=t.redirectHtml);var l=a.negotiate(e,o)||t.redirectText;return l(e,n,r)},t.redirectText=function(e,t,n){var i=(e.permanent?"Permanent redirect\n":"Temporary redirect\n")+"See: "+t+"\n";return i.length,{status:n,headers:{location:t,"content-type":"text/plain"},body:[i]}},t.redirectHtml=function(e,t,n){var i=e.permanent?"Permanent redirect":"Temporary redirect";return{status:n,headers:{location:t,"content-type":"text/html"},htmlTitle:i,htmlFragment:{forEach:function(e){e("<h1>"+s.escapeHtml(i)+"</h1>\n"),e('<p>See: <a href="'+s.escapeHtml(t)+'">'+s.escapeHtml(t)+"</a></p>\n")}}}},t.RedirectTrap=function(e,i){return i=i||20,function(a,s){function o(){n.fcall(function(){return e(a,s)}).then(function(e){if(t.isRedirect(e)){if(!l--)throw Error("Maximum redirects.");a.url=e.headers.location,o()}else c.resolve(e)}).fail(c.reject)}var l=i,c=n.defer();return a=r.normalizeRequest(a),o(),c.promise}},t.isRedirect=function(e){return o[e.status]||!1};var o={301:!0,302:!0,303:!0,307:!0}}});