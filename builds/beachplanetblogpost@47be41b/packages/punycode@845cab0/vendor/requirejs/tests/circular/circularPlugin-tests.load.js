montageDefine("845cab0","vendor/requirejs/tests/circular/circularPlugin-tests",{dependencies:[],factory:function(e){e({baseUrl:e.isBrowser?"./":"./circular"},["require","plugin!a"],function(e,i){doh.register("circularPlugin",[function(e){e.is("a",i.name),e.is("b",i.b.name),e.is("c",i.b.c.name)}]),doh.run()})}});