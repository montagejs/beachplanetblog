montageDefine("845cab0","vendor/requirejs/tests/jquery/jqueryVersion.html",{text:'<!DOCTYPE html><html><head>\n        <title>jQuery Version Test</title>\n        <script src=../../require.js></script>\n        <script src=../doh/runner.js></script>\n        <script src=../doh/_browserRunner.js></script>\n        <script>require({baseUrl:"./scripts/",paths:{jquery:"jquery-1.5.2"},jQuery:"1.5.2"},["require","jquery-1.4.4"],function(e){e(["require","jquery"],function(e){doh.register("jqueryVersion",[function(i){i.is("1.5.2",e("jquery").fn.jquery)}]),doh.run()})});</script>\n    </head>\n    <body>\n        <h1>jQuery Version Test</h1>\n        <p>Tests loading of two different jQuery versions but only using the\n        second one since it was the one specified in the require config.</p>\n        <p>Check console for output.</p>\n    \n\n</body></html>'});