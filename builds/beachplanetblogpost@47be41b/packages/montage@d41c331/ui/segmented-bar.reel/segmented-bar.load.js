montageDefine("d41c331","ui/segmented-bar.reel/segmented-bar",{dependencies:["ui/base/abstract-button","core/range-controller","core/tree-controller"],factory:function(e,t){"use strict";var n=e("ui/base/abstract-button").AbstractButton,i=e("core/range-controller").RangeController,r=e("core/tree-controller").TreeController;t.SegmentedBar=n.specialize({_data:{value:null},data:{get:function(){return this._repetitionDataController.content},set:function(e){e!==this._data&&(this._data=e,e&&(this._dataController=null,this._repetitionDataController=new i(e)),this.needsDraw=!0)}},_dataController:{value:null},dataController:{get:function(){return this._dataController},set:function(e){e!==this._dataController&&(this._data=null,this._dataController=e,e instanceof r?(e.initiallyExpanded=!0,this._repetitionDataController=new i,this.defineBinding("_repetitionDataController.content",{"<-":"iterations.filter{this.children.length == 0}",source:e})):this._repetitionDataController=e,this.needsDraw=!0)}},_repetitionDataController:{value:null},_orientation:{value:null},orientation:{get:function(){return this._orientation},set:function(e){this._orientation!==e&&(this._orientation=e,this.needsDraw=!0)}},_setComponentDataFromEvent:{value:function(e){var t="montage-Segment"===e.targetElement.className?e.targetElement.component:e.targetElement.parentElement.component;(this.detail.get("label")!==t.label||this.detail.get("length")!==t.length)&&this.detail.set("data",{label:t.label,length:t.length})}},handlePress:{value:function(e){this._setComponentDataFromEvent(e),n.handlePress.call(this)}},handleKeyup:{value:function(e){this._setComponentDataFromEvent(e),n.handleKeyup.call(this)}},handleLongPress:{value:function(e){this._setComponentDataFromEvent(e),n.handleLongPress.call(this)}},draw:{value:function(){"vertical"===this.orientation&&"column"!==this.templateObjects.repetition.element.style.flexDirection?(this.templateObjects.repetition.element.style.webkitBoxOrient="vertical",this.templateObjects.repetition.element.style.webkitFlexDirection="column",this.templateObjects.repetition.element.style.msFlexDirection="column",this.templateObjects.repetition.element.style.flexDirection="column"):"horizontal"===this.orientation&&"row"!==this.templateObjects.repetition.element.style.flexDirection&&this.templateObjects.repetition.element.style.flexDirection&&(this.templateObjects.repetition.element.style.webkitBoxOrient="horizontal",this.templateObjects.repetition.element.style.webkitFlexDirection="row",this.templateObjects.repetition.element.style.msFlexDirection="row",this.templateObjects.repetition.element.style.flexDirection="row")}},exitDocument:{value:function(){this.cancelBindings(),this.templateObjects.repetition.getBinding("contentController")&&this.templateObjects.repetition.cancelBinding("contentController")}}})}});