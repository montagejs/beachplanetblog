montageDefine("845cab0","vendor/requirejs/dist/pre.html",{text:'<!DOCTYPE html><html><head>\n    <title>RequireJS</title>\n\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <link rel=stylesheet type=text/css href=main.css>\n    <link rel=icon type=image/x-icon href=/favicon.png>\n    <!--[if IE]><link rel="stylesheet" type="text/css" href="ie.css" /><![endif]-->\n    <link rel=stylesheet type=text/css href=http://ajax.googleapis.com/ajax/libs/dojo/1.4/dojox/highlight/resources/highlight.css>\n\n    <script src=http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js></script>\n    <script src=init.js></script>\n    <script src=http://ajax.googleapis.com/ajax/libs/dojo/1.4/dojo/dojo.xd.js></script>\n    <script>dojo.require("dojox.highlight"),dojo.require("dojox.highlight.languages.javascript"),dojo.require("dojox.highlight.languages.html"),dojo.ready(function(){dojo.query("pre > code").forEach(function(e){-1!==e.innerHTML.indexOf("DOCTYPE")||-1!==e.innerHTML.indexOf("&lt;script")?dojo.addClass(e,"html"):dojo.addClass(e,"javascript")}).forEach(dojox.highlight.init)});</script>\n</head>\n<body>\n<div id=grid></div>\n<div id=wrapper>\n\n    <div id=navBg></div>\n    <div id=nav class=mono>\n        <a class=homeImageLink href=HOMEPATH></a>\n        <h1>a javascript module loader</h1>\n\n        <ul>\n            <li class=hbox>\n                <a href=HOMEPATH>Home</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon home"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=hbox>\n                <a class=local href=start.html>Start</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon start"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=download.html>Download</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon download"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=api.html>API</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon api"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=optimization.html>Optimization</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon optimize"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=hbox>\n                <a class=local href=jquery.html>Use with jQuery</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon script"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=node.html>Use with Node</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon script"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=dojo.html>Use with Dojo</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon script"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=commonjs.html>CommonJS Notes</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon script"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=hbox>\n                <a class=local href=faq.html>FAQs</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon question"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=errors.html>Common Errors</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon question"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=plugins.html>Writing Plugins</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon api"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=hbox>\n                <a class=local href=why.html>Why Web Modules</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon question"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=whyamd.html>Why AMD</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon question"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=requirements.html>Requirements</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon requirement"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=history.html>History</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon history"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=hbox>\n                <a href=http://groups.google.com/group/requirejs>Get Help</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon help"></span>\n            </li>\n            <li class=hbox>\n                <a href=http://tagneto.blogspot.com>Blog</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon blog"></span>\n            </li>\n            <li class=hbox>\n                <a href=http://twitter.com/jrburke>Twitter</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon twitter"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=hbox>\n                <a href=http://github.com/jrburke/requirejs>GitHub</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon git"></span>\n            </li>\n            <li class=hbox>\n                <a class=local href=contributing.html>Contributing</a>\n                <span class="spacer boxFlex"></span>\n                <span class="icon fork"></span>\n            </li>\n        </ul>\n\n        <ul>\n            <li class=version>1.0.7 Docs</li>\n        </ul>\n    </div>\n\n    <div id=content></div></div></body></html>'});