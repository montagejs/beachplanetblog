montageDefine("845cab0","vendor/requirejs/tests/doh/_nodeRunner",{dependencies:[],factory:function(){var e=Array.prototype.slice;doh.debug=function(){var i=e.call(arguments,0).join(" ");console.log(i)};var i=doh._report;doh._report=function(){i.apply(doh,arguments),(this._failureCount>0||this._errorCount>0)&&process.exit(1)}}});