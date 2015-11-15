var Montage=require("montage").Montage,Component3D=require("runtime/component-3d").Component3D,BasicAnimation=require("runtime/animation").BasicAnimation;exports.Material=Component3D.specialize({constructor:{value:function(){this.super(),this.addRangeAtPathChangeListener("filterColor",this,"handleFilterColorChange"),this.addOwnPropertyChangeListener("glTFElement",this),this.addOwnPropertyChangeListener("image",this),this.addOwnPropertyChangeListener("opacity",this)}},filterColor:{value:[1,1,1,1]},_originalOpacity:{value:1,writable:!0},handleGlTFElementChange:{value:function(){this.handleFilterColorChange(),this.handleImageChange(),this._originalOpacity=this._opacity,null==this._opacity?null!=this.glTFElement.parameters.transparency&&(this._originalOpacity=this._opacity=this.glTFElement.parameters.transparency.value):this.handleOpacityChange()}},initialValueForStyleableProperty:{value:function(t){return"opacity"==t?this._originalOpacity:void 0}},handleFilterColorChange:{value:function(){null!=this.glTFElement&&this.glTFElement.parameters.filterColor&&(this.glTFElement.parameters.filterColor.value=this.filterColor,this.scene&&this.scene.dispatchEventNamed("materialUpdate",!0,!1,this))}},handleOpacityChange:{value:function(){null!=this.glTFElement&&this.glTFElement.parameters.transparency&&(this.glTFElement.parameters.transparency.value=this._opacity,this.scene&&this.scene.dispatchEventNamed("materialUpdate",!0,!1,this))}},handleImageChange:{value:function(){if(null!=this.glTFElement&&this.glTFElement.parameters.diffuse&&this._image){var t=this.resolvePathIfNeeded(this._image),e=this.parameterForImagePath(t);this.glTFElement.parameters.diffuse=e,this.scene&&this.scene.dispatchEventNamed("textureUpdate",!0,!1,e)}}},parameterForImagePath:{value:function(t){var e=WebGLRenderingContext.prototype,n={magFilter:e.LINEAR,minFilter:e.LINEAR,type:"sampler",wrapS:e.REPEAT,wrapT:e.REPEAT},i={id:"source-"+t,type:"image",baseId:"source-"+t,description:{path:t}},a={baseId:"texture-"+t,id:"texture-"+t,format:e.RGBA,internalFormat:e.RGBA,sampler:n,source:i,type:"texture",target:e.TEXTURE_2D},r={parameter:"diffuse",value:a};return r}},_image:{value:null,writable:!0},image:{set:function(t){if(t&&0!=t.length){var e=t.toLowerCase();(-1!=e.indexOf(".jpg")||-1!=e.indexOf(".jpeg")||-1!=e.indexOf(".png"))&&this._image!=t&&(this._image=t)}},get:function(){return this._image}},_opacity:{value:null,writable:!0},animationDidStart:{value:function(){}},animationDidStop:{value:function(){}},animationDidUpdate:{value:function(){}},opacity_animationSetter:{set:function(t){this._opacity!=t&&(this._opacity=t,this.handleOpacityChange())}},opacity:{set:function(t){if(this._opacity!=t){if(this.glTFElement){var e=this.scene.glTFElement.animationManager;if(e.removeAnimationWithTargetAndPath(this,"opacity_animationSetter"),this._style&&this._style.transitions){var n=this._style.transitions.opacity;if(null!=n&&n.duration>0){var i=Object.create(BasicAnimation).init();return i.path="opacity_animationSetter",i.target=this,i.delegate=this,i.from=Number(this._opacity),i.to=Number(t),i.duration=1e3*n.duration,e.playAnimation(i),i.animationWasAddedToTarget(),e.evaluateAtTime(Date.now()),void 0}}}this._opacity=t}},get:function(){return this._opacity}},_stylableProperties:{value:["opacity"]},styleableProperties:{get:function(){return this._stylableProperties}}});