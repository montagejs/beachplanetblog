montageDefine("3eaf1f5","sandbox",{dependencies:[],factory:function(e,t,n){n.exports=function(e,t,n){for(var i=e.resolve(t),r=e.getModuleDescriptor(i);r.redirect||r.mappingRedirect;)r.redirect?i=r.redirect:(e=r.mappingRequire,i=r.mappingRedirect),r=e.getModuleDescriptor(i);return e.deepLoad(i).then(function(){var t=r.exports;delete r.exports;var a=r.factory;r.factory=function(e,t,i){var r=function(t){return t in n?n[t]:e(t)},s=JSON.parse(JSON.stringify(i)),o=s.exports;return a(r,o,s)||s.exports};var s=e(i);return r.exports=t,r.factory=a,s})}}});