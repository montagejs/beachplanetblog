var Component;Component=require("montage/ui/component").Component,exports.Main=Component.specialize({_supportsWebGL:{value:null},supportsWebGL:{get:function(){if(null===this._supportsWebGL){var e={premultipliedAlpha:!1,antialias:!0,preserveDrawingBuffer:!1},t=document.createElement("canvas"),i=t.getContext("experimental-webgl",e)||t.getContext("webgl",e);this._supportsWebGL=!!i}return this._supportsWebGL}},viewKey:{value:null},templateDidLoad:{value:function(){this.viewKey=this.supportsWebGL?"webgl":"static"}}});