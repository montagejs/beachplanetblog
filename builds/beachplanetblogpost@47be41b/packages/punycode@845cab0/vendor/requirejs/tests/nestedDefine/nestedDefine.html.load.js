montageDefine("845cab0","vendor/requirejs/tests/nestedDefine/nestedDefine.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: Nested Define Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>require({baseUrl:"./"},["require","one"],function(e,t){define("two",function(){return{name:"two"}}),define("three",{name:"three"}),setTimeout(function(){e(["four"],function(e){doh.register("nestedDefine",[function(i){i.is("one",t.name),i.is("four",e.name),i.is("two",e.twoName),i.is("three",e.threeName)}]),doh.run()})},15)});</script>\n</head>\n<body>\n    <h1>require.js: Nested Define Test</h1>\n    <p>Make sure a nested, named define call works in IE.</p>\n    <p>Check console for messages</p>\n\n\n</body></html>'});