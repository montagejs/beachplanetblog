montageDefine("845cab0","vendor/requirejs/tests/priority/priorityOrder.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: Priority order! Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>var master=new doh.Deferred,count=0;doh.register("priority",[{name:"priorityOrder",timeout:5e3,runTest:function(){return master}}]),doh.run(),require({baseUrl:"./",paths:{text:"../../text"},priority:["order!leaf","order!tree"]},["leaf","bark","tree","flower"],function(e,i,t,s){count+=1,doh.is(1,count),doh.is("leaf",e.name),doh.is("bark",i.name),doh.is("tree",t.name),doh.is("leaf",t.leafName),doh.is("bark",t.barkName),doh.is("flower",s.name);var a,u=/bark/,n=document.getElementsByTagName("script");for(a=n.length-1;a>-1;a--)doh.f(u.test(n[a].src));master.callback(!0)});</script>\n</head>\n<body>\n    <h1>require.js: Priority order! Test</h1>\n    <p>Check console for messages</p>\n\n\n</body></html>'});