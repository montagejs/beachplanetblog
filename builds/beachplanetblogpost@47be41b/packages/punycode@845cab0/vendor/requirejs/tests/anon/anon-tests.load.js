montageDefine("845cab0","vendor/requirejs/tests/anon/anon-tests",{dependencies:[],factory:function(e){e({baseUrl:e.isBrowser?"./":"anon/",paths:{text:"../../text",i18n:"../../i18n"}},["require","magenta","red","blue","green","yellow","a","c"],function(e,t,n,i,r,a,s,o){doh.register("anonSimple",[function(l){l.is("redblue",t.name),l.is(e.isBrowser?"./foo.html":"anon/foo.html",t.path),l.is("red",n.name),l.is("blue",i.name),l.is("green",r.name),l.is("yellow",a.name),l.is("a",s.name),l.is("sub/b",s.bName),l.is("c",o.name),l.is("a",o.aName),e.isBrowser&&setTimeout(function(){e(["blue","red","magenta"],function(e,n){doh.register("anonSimpleCached",[function(i){i.is("red",n.name),i.is("blue",e.name),i.is("redblue",t.name),i.is("hello world",t.message)}]),doh.run()})},300)}]),doh.run()})}});