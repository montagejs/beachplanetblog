montageDefine("4038d19","tests/bench",{dependencies:["ben","node-xml","libxmljs","sax","node-expat","htmlparser","../lib/Parser.js"],factory:function(e){function t(){var e=new c.SaxParser(function(){});this.parse=function(t){e.parseString(t)}}function n(){var e=new h.SaxPushParser(function(){});this.parse=function(t){e.push(t,!1)}}function i(){var e=d.parser();this.parse=function(t){e.write(t)}}function r(){var e=new p.Parser;this.parse=function(t){e.parse(t,!1)}}function a(){var e=new m.DefaultHandler,t=new m.Parser(e);this.parse=function(e){t.parseComplete(e)}}function s(){var e=new f;this.parse=function(t){e.write(t)}}var o=e("ben"),l=[];try{var c=e("node-xml");l.push([t,"node-xml"])}catch(u){}try{var h=e("libxmljs");l.push([n,"libxmljs"])}catch(u){}try{var d=e("sax");l.push([i,"sax"])}catch(u){}try{var p=e("node-expat");l.push([r,"node-expat"])}catch(u){}try{var m=e("htmlparser");l.push([a,"htmlparser"])}catch(u){}try{var f=e("../lib/Parser.js");l.push([s,"htmlparser2"])}catch(u){}var g=l.map(function(e){var t=new e[0],n=e[1];process.stdout.write(n+":"+Array(14-n.length).join(" ")),t.parse("<r>");var i=o(1e6,function(){t.parse("<foo bar='baz'>quux</foo>")});return console.log((i>.01?"":"0")+(1e3*i).toFixed(2),"ms/el"),[n,i]});console.log("\nWinner:",g.sort(function(e,t){return e[1]-t[1]})[0][0])}});