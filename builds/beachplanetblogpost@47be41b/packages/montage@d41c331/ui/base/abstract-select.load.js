montageDefine("d41c331","ui/base/abstract-select",{dependencies:["./abstract-control","../../composer/press-composer","../../core/range-controller"],factory:function(e,t){var n=e("./abstract-control").AbstractControl,i=e("../../composer/press-composer").PressComposer,r=e("../../core/range-controller").RangeController,a=t.AbstractSelect=n.specialize({constructor:{value:function a(){if(this.constructor===a)throw Error("AbstractSelect cannot be instantiated.");n.constructor.call(this),this._pressComposer=new i,this.addComposer(this._pressComposer),this.contentController=new r,this.addPathChangeListener("contentController",this,"handleContentControllerChange"),this.defineBindings({content:{"<->":"contentController.content"},"contentController.multiSelect":{"<-":"multiSelect"},"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"}}),this.addRangeAtPathChangeListener("content",this,"handleContentRangeChange"),this.addRangeAtPathChangeListener("values",this,"handleValuesRangeChange"),this.classList.add("matte-Select")}},enabled:{value:!0},acceptsActiveTarget:{value:!0},_pressComposer:{value:null},active:{value:!1},content:{value:null},contentController:{value:null},_labelPropertyName:{value:"label"},labelPropertyName:{set:function(e){this._labelPropertyName=e?e:"label",this._contentIsDirty=!0,this.needsDraw=!0},get:function(){return this._labelPropertyName}},_value:{value:null},value:{get:function(){return this._value},set:function(e){e!==this._value&&(this._value=e,this.values[0]!==e&&this.values.splice(0,this.values.length,e),this.needsDraw=!0)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){var t=[0,this._values.length].concat(e);this._values.splice.apply(this._values,t),this.needsDraw=!0}},multiSelect:{value:!1},_contentIsDirty:{value:!0},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1)}},handlePress:{value:function(){this.active=!1,this.enabled&&(this.dispatchActionEvent(),document.removeEventListener("touchmove",this,!1))}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},handleContentRangeChange:{value:function(){0===this.contentController.selection.length&&this.contentController.organizedContent.length>0&&this.contentController.selection.push(this.contentController.organizedContent[0]),this._contentIsDirty=!0,this.needsDraw=!0}},handleValuesRangeChange:{value:function(){this.values.length>0&&(this.value=this.values.one()),this.needsDraw=!0}},handleContentControllerChange:{value:function(e){e&&(this._values=e.selection,this.handleValuesRangeChange())}},enterDocument:{value:function(e){e&&this.element.setAttribute("role","listbox")}}})}});