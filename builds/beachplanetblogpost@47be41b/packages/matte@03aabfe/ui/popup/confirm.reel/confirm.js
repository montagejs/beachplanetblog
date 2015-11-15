var Component=require("montage/ui/component").Component,Popup=require("ui/popup/popup.reel").Popup,Confirm=exports.Confirm=Component.specialize({hasTemplate:{value:!0},title:{value:"Confirm"},msg:{value:"Are you sure?"},okLabel:{value:"OK"},cancelLabel:{value:"Cancel"},_popup:{value:null},popup:{set:function(e){this._popup=e},get:function(){return this._popup}},okCallback:{value:null},cancelCallback:{value:null},enterDocument:{value:function(e){e&&this.element.addEventListener("keyup",this,!1)}},draw:{value:function(){}},handleKeyup:{value:function(e){13==e.keyCode?this.handleOkAction(e):27==e.keyCode&&this.handleCancelAction(e)}},handleOkAction:{value:function(e){this.okCallback&&this.okCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_confirm_ok",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},handleCancelAction:{value:function(e){this.cancelCallback&&this.cancelCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_confirm_cancel",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},show:{value:function(e,t,i){var n,a=this.application._confirmPopup;a||(a=new Popup,this.popup=a,a.type="confirm",a.title="Confirmation",a.modal=!0,this.application._confirmPopup=a,n=new Confirm,a.content=n),n=a.content,"string"==typeof e?(n.msg=e,n.okLabel="OK",n.cancelLabel="Cancel"):(n.msg=e.message,n.okLabel=e.okLabel||"OK",n.cancelLabel=e.cancelLabel||"Cancel"),n.okCallback=t||null,n.cancelCallback=i||null,a.show()}}});