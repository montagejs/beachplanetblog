montageDefine("845cab0","vendor/requirejs/tests/priority/priorityOptimized",{dependencies:[],factory:function(e){var i=new doh.Deferred,t=0;doh.register("priorityOptimized",[{name:"priorityOptimized",timeout:5e3,runTest:function(){return i}}]),doh.run(),define("alphaPrime",function(){return{name:"alphaPrime"}}),define("betaPrime",["alphaPrime"],function(e){return{name:"betaPrime",alphaPrimeName:e.name}}),define("three",function(){}),e({baseUrl:"./",priority:["one","two","three"]},["alpha","beta","gamma","epsilon","alphaPrime","betaPrime"],function(e,s,a,u,n,r){t+=1,doh.is(1,t),doh.is("alpha",e.name),doh.is("beta",e.betaName),doh.is("beta",s.name),doh.is("gamma",s.gammaName),doh.is("gamma",a.name),doh.is("theta",a.thetaName),doh.is("epsilon",a.epsilonName),doh.is("epsilon",u.name),doh.is("alphaPrime",n.name),doh.is("alphaPrime",r.alphaPrimeName),doh.is("betaPrime",r.name);var l,o=/alpha|beta|gamma|theta|three|alphaPrime|betaPrime/,c=document.getElementsByTagName("script");for(l=c.length-1;l>-1;l--)doh.f(o.test(c[l].src));i.callback(!0)})}});