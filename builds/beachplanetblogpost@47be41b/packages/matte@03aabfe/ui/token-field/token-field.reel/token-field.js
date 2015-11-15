var Component=require("montage/ui/component").Component,KEY_DELETE=46,KEY_BACKSPACE=8,KEY_LEFT=37,KEY_UP=38,KEY_RIGHT=39,KEY_DOWN=40;exports.TokenField=Component.specialize({delegate:{value:null},values:{value:null},textPropertyPath:{value:null},allowAdHocValues:{value:null},placeholder:{value:null},__hasFocus:{value:null},_hasFocus:{get:function(){return this.__hasFocus},set:function(e){e!=this.__hasFocus&&(this.__hasFocus=e,this.needsDraw=!0)}},_tokensController:{value:null},_tokenList:{value:null},_autocomplete:{value:null},__autocompleteValue:{value:null},_autocompleteValue:{get:function(){return this.__autocompleteValue},set:function(e){this.__autocompleteValue=e}},__suggestedValue:{value:null},_suggestedValue:{get:function(){return this.__suggestedValue},set:function(e){if(e){var t;t=this.allowAdHocValues||"string"!=typeof e?e:this.callDelegateMethod("getRepresentedObject",e),t&&(this.__suggestedValue=t,this.values||(this.values=[]),this.values.push(this.__suggestedValue),this._autocomplete.value=""),this.__suggestedValue=null}}},prepareForActivationEvents:{value:function(){this.element.addEventListener("mouseup",this)}},enterDocument:{value:function(e){e&&(this._autocomplete.delegate=this.delegate,this.identifier&&(this._autocomplete.identifier=this.identifier),this._autocomplete.element.addEventListener("keyup",this))}},draw:{value:function(){this._hasFocus?(this._autocomplete.element.focus(),this.__hasFocus=!1):this.placeholder&&(this._autocomplete.element.style.width="auto")}},handleMouseup:{value:function(){this._hasFocus=!0}},handleKeyup:{value:function(e){var t=e.keyCode;if(this.values&&this.values.length>0){var i=this._tokensController.selectedIndexes,n=i&&i.length>0?i[0]:null,s=this.values.length-1;switch(this.values.length,t){case KEY_BACKSPACE:case KEY_DELETE:this._autocompleteValue||(i&&i.length>0?(this._tokensController.removeObjectsAtSelectedIndexes(),this._tokensController.selectedIndexes=[]):this._tokensController.selectedIndexes=[this.values.length-1]);break;case KEY_LEFT:this._autocompleteValue||(null!=n?(n-=1,0>n&&(n=s)):n=s,this._tokensController.selectedIndexes=[n]);break;case KEY_RIGHT:this._autocompleteValue||(null!=n?(n+=1,n>s&&(n=0)):n=0,this._tokensController.selectedIndexes=[n]);break;case KEY_UP:null!=n&&(this._tokensController.selectedIndexes=[0]);break;case KEY_DOWN:null!=n&&(this._tokensController.selectedIndexes=[s]);break;default:this._tokensController.selectedIndexes=[]}}}}});