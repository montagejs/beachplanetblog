montageDefine("3d2b056","runtime/projection",{dependencies:["runtime/dependencies/gl-matrix","runtime/base"],factory:function(t,e){t("runtime/dependencies/gl-matrix");var n=t("runtime/base").Base;e.Projection=Object.create(n,{_matrix:{value:null,writable:!0},_type:{value:null,writable:!0},_xfov:{value:0,writable:!0},_yfov:{value:0,writable:!0},_xmag:{value:0,writable:!0},_ymag:{value:0,writable:!0},_znear:{value:0,writable:!0},_zfar:{value:0,writable:!0},_aspectRatio:{value:0,writable:!0},_dirtyFlag:{value:!1,writable:!0},projection:{get:function(){return this._type},set:function(t){this._type!==t&&(this._type=t,this._dirtyFlag=!0)}},xfov:{get:function(){return this._xfov},set:function(t){this._xfov!==t&&(this._xfov=t,this._dirtyFlag=!0)}},yfov:{get:function(){return this._yfov},set:function(t){this._yfov!==t&&(this._yfov=t,this._dirtyFlag=!0)}},xmag:{get:function(){return this._xmag},set:function(t){this._xmag!==t&&(this._xmag=t,this._dirtyFlag=!0)}},ymag:{get:function(){return this._ymag},set:function(t){this._ymag!==t&&(this._ymag=t,this._dirtyFlag=!0)}},znear:{get:function(){return this._znear},set:function(t){this._znear!==t&&(this._znear=t,this._dirtyFlag=!0)}},zfar:{get:function(){return this._zfar},set:function(t){this._zfar!==t&&(this._zfar=t,this._dirtyFlag=!0)}},aspectRatio:{get:function(){return this._aspectRatio},set:function(t){var e=this.matrix;e&&(this.yfov?e[0]=this._scaleX/t:this.xfov&&(e[5]=this._scaleY*t)),this._aspectRatio=t}},_scaleX:{value:0,writable:!0},_scaleY:{value:0,writable:!0},matrix:{get:function(){if(this._dirtyFlag){if("perspective"===this.projection){var t=3.14159265359/360,e=0,n=0;this.yfov&&(n=1/Math.tan(this.yfov*t)),e=this.xfov?1/Math.tan(this.xfov*t):n,0==n&&(n=e),this._scaleX=e,this._scaleY=n,this._matrix=mat4.create(),this._matrix[0]=e,this._matrix[1]=0,this._matrix[2]=0,this._matrix[3]=0,this._matrix[4]=0,this._matrix[5]=n,this._matrix[6]=0,this._matrix[7]=0,this._matrix[8]=0,this._matrix[9]=0,this._matrix[10]=(this.zfar+this.znear)/(this.znear-this.zfar),this._matrix[11]=-1,this._matrix[12]=0,this._matrix[13]=0,this._matrix[14]=2*this.zfar*this.znear/(this.znear-this.zfar),this._matrix[15]=0}else"orthographic"===this.projection?this._matrix=mat4.ortho(-this.xmag,this.xmag,-this.ymag,this.ymag,this.znear,this.zfar):console.log("WARNING: unhandled camera type:"+type);this._dirtyFlag=!1}return this._matrix},set:function(t){this._matrix=t}},initWithDescription:{value:function(t){this.__Base_init(),this.projection=t.type,t=t[this.projection],this.xfov=t.xfov?t.xfov:0,this.yfov=t.yfov?t.yfov:0,this.xmag=t.xmag?t.xmag:1,this.ymag=t.ymag?t.ymag:1,this.znear=null!=t.znear?t.znear:1,this.zfar=null!=t.zfar?t.zfar:100,this.aspectRatio=t.aspect_ratio?t.aspect_ratio:0,this.aspectRatio||(this.aspectRatio=t.aspectRatio?t.aspectRatio:0),this._dirtyFlag=!0}},init:{value:function(){this.__Base_init(),this.projection=null,this.xfov=0,this.yfov=0,this.xmag=1,this.ymag=1,this.znear=1,this.zfar=100,this.aspectRatio=4/3,this._dirtyFlag=!0}}})}});