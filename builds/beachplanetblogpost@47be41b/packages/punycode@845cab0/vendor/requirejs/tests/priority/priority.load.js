montageDefine("845cab0","vendor/requirejs/tests/priority/priority",{dependencies:[],factory:function(e){var i=new doh.Deferred,t=0;doh.register("priority",[{name:"priority",timeout:5e3,runTest:function(){return i}}]),doh.run(),e({baseUrl:"./",priority:["one","two"]},["alpha","beta","gamma","epsilon"],function(e,s,a,u){t+=1,doh.is(1,t),doh.is("alpha",e.name),doh.is("beta",e.betaName),doh.is("beta",s.name),doh.is("gamma",s.gammaName),doh.is("gamma",a.name),doh.is("theta",a.thetaName),doh.is("epsilon",a.epsilonName),doh.is("epsilon",u.name);var n,r=/alpha|beta|gamma|theta/,l=document.getElementsByTagName("script");for(n=l.length-1;n>-1;n--)doh.f(r.test(l[n].src));i.callback(!0)})}});