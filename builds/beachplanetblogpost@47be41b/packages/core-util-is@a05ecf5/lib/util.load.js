montageDefine("a05ecf5","lib/util",{dependencies:[],factory:function(e,i){function t(e){return Array.isArray(e)}function s(e){return"boolean"==typeof e}function a(e){return null===e}function u(e){return null==e}function n(e){return"number"==typeof e}function r(e){return"string"==typeof e}function l(e){return"symbol"==typeof e}function o(e){return void 0===e}function c(e){return m(e)&&"[object RegExp]"===f(e)}function m(e){return"object"==typeof e&&null!==e}function d(e){return m(e)&&"[object Date]"===f(e)}function p(e){return m(e)&&("[object Error]"===f(e)||e instanceof Error)}function v(e){return"function"==typeof e}function g(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||e===void 0}function h(e){return Buffer.isBuffer(e)}function f(e){return Object.prototype.toString.call(e)}i.isArray=t,i.isBoolean=s,i.isNull=a,i.isNullOrUndefined=u,i.isNumber=n,i.isString=r,i.isSymbol=l,i.isUndefined=o,i.isRegExp=c,i.isObject=m,i.isDate=d,i.isError=p,i.isFunction=v,i.isPrimitive=g,i.isBuffer=h}});