montageDefine("3d2b056","runtime/node-wrapper",{dependencies:["runtime/dependencies/gl-matrix","runtime/utilities","runtime/transform-helper"],factory:function(t,e){t("runtime/dependencies/gl-matrix"),t("runtime/utilities").Utilities;var n=t("runtime/transform-helper").TransformHelper;e.NodeWrapper=Object.create(Object.prototype,{_transformHelper:{value:null,writable:!0},node:{get:function(){return this._transformHelper.node}},init:{value:function(t){return this._transformHelper=Object.create(n).init(),this._transformHelper.node=t,this}},viewPointWillChange:{value:function(){}},viewPointDidChange:{value:function(){this._transformHelper.viewPoint=this._scenePassRenderer.viewPoint}},viewPointMatrixDidUpdate:{value:function(){this._transformHelper.transformDidUpdate()}},scenePassRenderer:{get:function(){return this._scenePassRenderer},set:function(t){this._scenePassRenderer!=t&&(this._scenePassRenderer&&this._scenePassRenderer.removeObserver(this),this._scenePassRenderer=t,this._transformHelper.viewMatrix=t._viewPointMatrix,this._scenePassRenderer&&this._scenePassRenderer.addObserver(this))}},worldMatrix:{get:function(){return this.node.worldMatrix}},worldViewMatrix:{get:function(){return this._transformHelper.worldViewMatrix}},viewMatrix:{get:function(){return this._transformHelper.viewMatrix}},worldViewInverseMatrix:{get:function(){return this._transformHelper.worldViewInverseMatrix}},worldViewInverseTransposeMatrix:{get:function(){return this._transformHelper.worldViewInverseTransposeMatrix}}})}});