montageDefine("d41c331","ui/base/abstract-control",{dependencies:["../component","collections/dict"],factory:function(e,t){var n=e("../component").Component,i=e("collections/dict");t.AbstractControl=n.specialize({dispatchActionEvent:{value:function(){return this.dispatchEvent(this.createActionEvent())}},_detail:{value:null},detail:{get:function(){return null==this._detail&&(this._detail=new i),this._detail}},createActionEvent:{value:function(){var e,t=document.createEvent("CustomEvent");return e=this._detail,t.initCustomEvent("action",!0,!0,e),t}}})}});