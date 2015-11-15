montageDefine("845cab0","vendor/requirejs/tests/browsertests/scriptloadinteractiveattach/index-php.html",{text:'<!DOCTYPE html><html><head>\n    <title>Script Load Interactive Test  (PHP used to delay two scripts)</title>\n    <script src=../common.js></script>\n    <script>function report(){var e,i;for(e=0;loadedScripts.length>e;e++)i=loadedScripts[e],log("module "+i.name+" === "+i.obj.name);callCount+=1,1===callCount&&(log("-------Trying cache hits now--------"),loadedScripts=[],setTimeout(loadUrls,500))}function finishScript(e,i){e&&(loadedScripts.push({name:e.getAttribute("data-name").replace(/\\.js$/,""),obj:i()}),9===loadedScripts.length&&report())}function onTestScriptLoad(e){var i=e.target||e.srcElement;("load"===e.type||readyRegExp.test(i.readyState))&&(useInteractive||finishScript(i,waitingFunc),i.removeEventListener?i.removeEventListener("load",onTestScriptLoad,!1):i.detachEvent("onreadystatechange",onTestScriptLoad))}function attachScript(e,i){noCache&&(e+="?stamp="+(new Date).getTime());var t=document.createElement("script");t.src=e,t.type="text/javascript",t.charset="utf-8",t.setAttribute("data-name",i),t.addEventListener?t.addEventListener("load",onTestScriptLoad,!1):(useInteractive=!0,t.attachEvent("onreadystatechange",onTestScriptLoad)),currentlyAddingScript=t,document.getElementsByTagName("head")[0].appendChild(t),currentlyAddingScript=null}function def(e){var i,t,s=currentlyAddingScript;if(useInteractive){i=document.getElementsByTagName("script");var a=[];for(t=i.length-1;t>-1;t--)if(a.push(t+i[t].readyState+i[t].src),"interactive"===i[t].readyState){s=i[t];break}s||(log("ERROR: No matching script interactive for "+e),log("script readyStates are: "+a)),finishScript(s,e)}else waitingFunc=e}var noCache=-1!==location.href.indexOf("nocache");log("noCache: "+noCache);var readyRegExp=/complete|loaded/,useInteractive=!1,loadedScripts=[],callCount=0,currentlyAddingScript,waitingFunc,loadUrls,urls=["one.js","two.js","three.js","four.php","five.js","six.php","seven.js","eight.js","nine.js"];loadUrls=function(){for(var e,i=0;e=urls[i];i++)attachScript(e,e)},loadUrls();</script>\n</head>\n<body>\n    <h1>Script Load Interactive Test (PHP used to delay two scripts)</h1>\n\n    <p>This test checks to see if a function call can be associated with a specific script tag.</p>\n    <p>For non-IE 6-8 browsers, the script onload event may not fire right after the the script\n    is evaluated. Kris Zyp found for IE though that in a function call that is called while the\n    script is executed, it could query the script nodes and the one that is in "interactive" mode\n    indicates the current script.</p>\n    <p>So this test tries to see to use interactive state if possible, and if that does not work,\n    falls back to using script onload to associate the scripts.</p>\n    <p>Check the console for output. Expected result, all scripts are matched up with their calls.</p>\n\n\n</body></html>'});