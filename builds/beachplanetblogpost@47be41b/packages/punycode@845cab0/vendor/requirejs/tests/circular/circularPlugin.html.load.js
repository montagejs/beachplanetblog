montageDefine("845cab0","vendor/requirejs/tests/circular/circularPlugin.html",{text:"<!DOCTYPE html><html><head>\n    <title>require.js: Circular Dependency under Plugin Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script src=circularPlugin-tests.js></script>\n</head>\n<body>\n    <h1>require.js: Circular Dependency under Plugin  Test</h1>\n\n    <p>Tests if a plugin that depends on a module with a circular dependency,\n    does the plugin get stuck as unresolved? In particular, can cycles be\n    broken when a plugin resource depedency is not loaded = true.</p>\n\n    <p>Check console for messages</p>\n\n\n</body></html>"});