var Component=require("montage/ui/component").Component,Popup=exports.Popup=Component.specialize({hasTemplate:{value:!0},anchorElement:{value:null},_anchor:{value:null},anchor:{get:function(){return this._anchor},set:function(e){e&&(this._anchor=e,this.anchorElement=e.nodeName?e:e.element)}},delegate:{value:null},contentEl:{value:null},containerEl:{value:null},_slot:{value:null},slot:{get:function(){return this._slot},set:function(e){this._slot=e,this.content&&(this._slot.content=this.content)}},_content:{value:null},content:{get:function(){return this._content},set:function(e){this._content!==e&&this.slot&&(this.slot.content=e),this._content=e,this._content.popup=this,this.needsDraw=!0}},_modal:{value:!1},modal:{get:function(){return this._modal},set:function(e){e=!!e,this._modal!==e&&(this._modal=e,this.needsDraw=!0)}},_position:{value:null},position:{get:function(){return this._position},set:function(e){this._position=e}},autoHide:{value:0},_displayed:{value:!1},displayed:{get:function(){return this._displayed},set:function(e){this._displayed!==e&&(this.needsDraw=!0),this._displayed=e}},focusOnShow:{value:!0},enterDocument:{value:function(e){e&&(this.type=this.type||"custom")}},_popupSlot:{value:null},_modalDialogMask:{value:null},_getElementPosition:{value:function(e){var t=0,i=0,n=0,a=0;if(e.offsetParent)do t+=e.offsetLeft,i+=e.offsetTop,n+=e.offsetHeight,a+=e.offsetWidth;while(e=e.offsetParent);return{top:i,left:t,height:n,width:a}}},_getCSSValue:{value:function(e){return null!=e?("number"==typeof e&&(e+="px"),e):""}},_positionPopup:{value:function(){var e,t,i=this.delegate,n=this.anchorElement;if(this.type,null!==this.position)e=this.position;else{var a=this.contentEl||this.content.element,s=parseFloat(a.style.height||0)||a.offsetHeight||0,o=parseFloat(a.style.width||0)||a.offsetWidth||0,r=window.innerHeight,l=window.innerWidth;if(n){var u=this._getElementPosition(n),p=parseFloat(n.style.height||0)||n.offsetHeight||0,c=parseFloat(n.style.width||0)||n.offsetWidth||0;e={top:u.top+p,left:u.left+c/2-o/2},0>e.left&&(e.left=u.left,this._showHidePointer(!1))}else e={top:r/2-s/2,left:l/2-o/2}}t=i&&"function"==typeof i.willPositionPopup?i.willPositionPopup(this,e):e;var m=this._popupSlot;t&&(m.element.style.top=this._getCSSValue(t.top),m.element.style.left=this._getCSSValue(t.left),m.element.style.right=this._getCSSValue(t.right),m.element.style.bottom=this._getCSSValue(t.bottom))}},_createModalMask:{value:function(){var e=document.createElement("div");return e.classList.add("montage-Popup-modal-mask"),e.style.zIndex=6999,e.classList.add("montage-invisible"),document.body.appendChild(e),e}},_showHidePointer:{value:function(){}},_addEventListeners:{value:function(){window.Touch?this.element.ownerDocument.addEventListener("touchstart",this,!1):(this.element.ownerDocument.addEventListener("mousedown",this,!1),this.element.ownerDocument.addEventListener("keyup",this,!1)),window.addEventListener("resize",this)}},_removeEventListeners:{value:function(){window.Touch?this.element.ownerDocument.removeEventListener("touchstart",this,!1):(this.element.ownerDocument.removeEventListener("mousedown",this,!1),this.element.ownerDocument.removeEventListener("keyup",this,!1)),window.removeEventListener("resize",this)}},show:{value:function(){var e=this.type,t=this;this.application.getPopupSlot(e,this,function(e){t._popupSlot=e,t.displayed=!0,t._addEventListeners()})}},hide:{value:function(){var e=this.type,t=this;this.application.getPopupSlot(e,this,function(){t._removeEventListeners(),t.displayed=!1})}},_showModalMask:{value:function(){this._modalDialogMask=document.querySelector("Popup-modal-mask"),this._modalDialogMask=this._modalDialogMask||this._createModalMask(),this._modalDialogMask.classList.remove("montage-invisible")}},_hideModalMask:{value:function(){var e=this.application._getActivePopupSlots(),t=0;if(e&&e.length>0){var i,n=e.length;for(i=0;n>i;i++)e[i].content&&e[i].content.modal===!0&&e[i].content.displayed===!0&&t++}0>=t&&this._modalDialogMask.classList.add("montage-invisible")}},draw:{value:function(){if(this.displayed){if(this.modal===!0)this.element.classList.add("montage-Popup--modal");else if(this.element.classList.remove("montage-Popup--modal"),this.autoHide){var e=this;setTimeout(function(){e.hide()},this.autoHide)}this.element.classList.remove("montage-invisible"),this.content.element.style.display="block",this.content.element.classList.remove("montage-invisible"),this.content.element.setAttribute("tabindex","0")}else this.element.classList.contains("montage-invisible")||this.element.classList.add("montage-invisible"),this.content.element.classList.add("montage-invisible"),this._popupSlot&&(this._popupSlot.content=null)}},didDraw:{value:function(){this._displayed?(this.modal===!0&&this._showModalMask(),this._positionPopup(),this.focusOnShow===!0&&this.content.element.focus()):this.modal===!0&&this._hideModalMask();var e=document.createEvent("CustomEvent");e.initCustomEvent(this._displayed===!0?"show":"hide",!0,!0,this),this.dispatchEvent(e)}},getZIndex:{value:function(e){for(var t,i,n;e&&e!==document;){if(t=e.style.position,("absolute"===t||"relative"===t||"fixed"===t)&&(n=e.style["z-index"],i=parseInt(n,10),!isNaN(i)&&0!==i))return i;e=e.parentNode}return 0}},_handleTouchMouseup:{value:function(e){var t=this.getZIndex(e.target),i=this.getZIndex(this.element);this.displayed===!0&&i>t&&(this.modal===!0||(this.displayed=!1))}},_timeoutId:{value:null},handleResize:{value:function(){var e=this;this.displayed===!0&&(window.clearTimeout(this._timeoutId),this._timeoutId=setTimeout(function(){e.needsDraw=!0},100))}},handleMousedown:{value:function(e){this._handleTouchMouseup(e)}},handleTouchstart:{value:function(e){this._handleTouchMouseup(e)}},handleKeyup:{value:function(e){this.displayed!==!0||this.modal||27!==e.keyCode||this.hide()}}});