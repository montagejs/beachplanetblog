!function(e,i){"undefined"!=typeof module?module.exports=i():"function"==typeof define&&"object"==typeof define.amd?define("tail",[],function(){return i()}):this[e]=i()}("tail",function(){return{name:"tail"}}),!function(e,i){"undefined"!=typeof module?module.exports=i():"function"==typeof define&&"object"==typeof define.amd?define(e,i):this[e]=i()}("eye",function(){return{name:"eye"}}),define("eye",function(){}),function(e){e("newt",["require","tail","eye"],function(e){var i=e("tail"),t=e("eye");return{name:"newt",eyeName:t.name,tailName:i.name}})}("function"==typeof define&&define.amd?define:function(e,i){"undefined"!=typeof module&&module.exports?module.exports=i(require):window.myGlobal=i(function(e){return window[e]})}),function(e){e("spell",["require","newt"],function(e){var i=e("newt");return{name:"spell",newtName:i.name,tailName:i.tailName,eyeName:i.eyeName}})}("function"==typeof define&&define.amd?define:function(e,i){"undefined"!=typeof module&&module.exports?module.exports=i(require):window.myGlobal=i(function(e){return window[e]})}),require({baseUrl:require.isBrowser?"./":"./universal/"},["spell"],function(e){doh.register("universal",[function(i){i.is("spell",e.name),i.is("newt",e.newtName),i.is("tail",e.tailName),i.is("eye",e.eyeName)}]),doh.run()}),define("universal-tests",function(){});