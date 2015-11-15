montageDefine("03aabfe","ui/rich-text-editor/overlays/rich-text-resizer.reel/rich-text-resizer",{dependencies:["montage/ui/component","montage/core/dom","montage/core/geometry/point"],factory:function(e,t){var i=e("montage/ui/component").Component,n=e("montage/core/dom"),a=e("montage/core/geometry/point").Point;t.RichTextResizer=i.specialize({_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_draggedElement:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(e){this._editor=e}},editorMouseDown:{value:function(e){var t=e.target;return this._isActive&&t===this.element?(e.preventDefault(),e.stopPropagation(),!0):void 0}},editorTouchStart:{value:function(e){this.editorMouseDown(e)}},editorMouseUp:{value:function(e){var t=e.target,i=this.target;if(this._observedPointer)return!0;if(t===this.element&&this._editor.activeOverlay==this)this._editor.hideOverlay(),e.target=this.target,e.preventDefault(),e.stopPropagation();else{if("IMG"===t.tagName)return t!==i&&(i&&(i.classList.remove("matte-Resizer-element"),0==i.classList.length&&i.removeAttribute("class")),this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:(this._ignoreNextSelectionchanged=!0,this._editor.showOverlay(this))),e.preventDefault(),e.stopPropagation(),!0;this._editor.activeOverlay==this&&this._editor.hideOverlay()}return!1}},editorTouchEnd:{value:function(e){this.editorMouseUp(e)}},editorSelectionDidChange:{value:function(){return this._ignoreNextSelectionchanged||this._finalizeDrag?this._ignoreNextSelectionchanged=!1:(this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null),!1}},draw:{enumerable:!1,value:function(){var e,t=this.element,i=this.target,s=this._editor.innerElement;if(this._needsReset){var o,r,l=function(e){for(r=e.offsetTop,o=e.offsetLeft;(e=e.offsetParent)&&e!=s;)r+=e.offsetTop,o+=e.offsetLeft};l(i),e=t.style,e.width=i.offsetWidth+"px",e.height=i.offsetHeight+"px",e.top=r+"px",e.left=o+"px",this._editor.innerElement.classList.remove("matte-Editor--resizing"),i.classList.add("matte-Resizer-element"),this.image.src=i.src,this.image.title=i.title,this.image.alt=i.alt,this._selectElement(i),this._needsReset=!1}if(this._draggedElement){var u=(new a).init(0,0),c=n.convertPointFromNodeToPage(t,u),p=this._cursorPosition,m=this._draggedElement.getAttribute("data-montage-id").substring("matte-resizer-handle-".length),d=this._resizerFrameInfo,h=d.ratio,f=parseFloat(t.style.height,10),v=parseFloat(t.style.width,10),g=parseFloat(t.style.top,10),b=parseFloat(t.style.left,10),_=15;this._editor.innerElement.classList.add("matte-Editor--resizing"),"n"==m?(f+=c.y-p.y,g=d.top-(f-d.height)):"ne"==m?(f+=c.y-p.y,v=Math.round(f*h),p.x>c.x+v&&(v=p.x-c.x,f=Math.round(v/h)),g=d.top-(f-d.height)):"e"==m?v=p.x-c.x:"se"==m?(f=p.y-c.y,v=Math.round(f*h),p.x>c.x+v&&(v=p.x-c.x,f=Math.round(v/h))):"s"==m?f=p.y-c.y:"sw"==m?(f=p.y-c.y,v=Math.round(f*h),p.x<=c.x-v+t.clientWidth&&(v=t.clientWidth+c.x-p.x,f=Math.round(v/h)),b=d.left-(v-d.width)):"w"==m?(v+=c.x-p.x,b=d.left-(v-d.width)):"nw"==m&&(f+=c.y-p.y,v=Math.round(f*h),p.x<=c.x-v+t.clientWidth&&(v=t.clientWidth+c.x-p.x,f=Math.round(v/h)),g=d.top-(f-d.height),b=d.left-(v-d.width)),f>_&&v>_&&(t.style.height=f+"px",t.style.width=v+"px",t.style.top=g+"px",t.style.left=b+"px")}if(this._finalizeDrag){v=t.clientWidth,f=t.clientHeight,this._editor.innerElement.classList.remove("matte-Editor--resizing"),i.classList.remove("matte-Resizer-element"),0==i.classList.length&&i.removeAttribute("class"),this._selectElement(i);var y,w,x=document.createElement("div");x.appendChild(i.cloneNode(!0)),y=x.firstChild,y.width=v,y.height=f,y.style.removeProperty("width"),y.style.removeProperty("height"),w=y.id,y.id="matte-editor-resized-image",this._editor.execCommand("inserthtml",!1,x.innerHTML,"Resizing Image"),i=document.getElementById(y.id),i&&(void 0!==w&&""!==w?i.id=w:i.removeAttribute("id"),this.target=i,this._needsReset=!0,this.needsDraw=!0),this._finalizeDrag=!1}}},didBecomeActive:{value:function(){this._isActive=!0,this.element.addEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){var e=this.target;this._isActive=!1,this.element.removeEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.removeEventListener("resize",this,!1),this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._releaseInterest()),e&&(e.classList.remove("matte-Resizer-element"),0==e.classList.length&&e.removeAttribute("class"),this._editor.markDirty()),this.target=null,this._needsReset=!1,this._draggedElement=null,this._finalizeDrag=!1}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}},handleMousedown:{value:function(e){var t=e.target,i=this.element;t.classList.contains("matte-Resizer-handle")&&(window.Touch?(this._observePointer(t.id),document.addEventListener("touchmove",this),document.addEventListener("touchend",this)):(this._observePointer("mouse"),document.addEventListener("mousemove",this),document.addEventListener("mouseup",this)),this._resizerFrameInfo={width:i.clientWidth,height:i.clientHeight,left:parseInt(i.style.left,10),top:parseInt(i.style.top,10),ratio:i.clientWidth/i.clientHeight},this._cursorPosition={x:e.pageX,y:e.pageY},this._draggedElement=t,e.preventDefault(),e.stopPropagation())}},handleTouchstart:{value:function(e){this.handleMousedown(e)}},handleMousemove:{value:function(e){this._cursorPosition={x:e.pageX,y:e.pageY},this.needsDraw=!0,e.preventDefault(),e.stopPropagation()}},handleTouchmove:{value:function(e){this.handleMousemove(e)}},handleMouseup:{value:function(e){this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._draggedElement=null,this._finalizeDrag=!0,this.needsDraw=!0,this._releaseInterest(),e.preventDefault(),e.stopPropagation())}},handleTouchend:{value:function(e){this.handleMouseup(e)}},surrenderPointer:{value:function(){return!1}},_observePointer:{value:function(e){this.eventManager.claimPointer(e,this),this._observedPointer=e}},_releaseInterest:{value:function(){this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},_selectElement:{value:function(e){this._ignoreNextSelectionchanged=!0,this._editor.selectElement(e)}}})}});