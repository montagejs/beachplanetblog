montageDefine("3d2b056","extras/scene-tree.reel/tree.reel/tree",{dependencies:["montage/ui/component","montage/core/tree-controller"],factory:function(t,e){var n=t("montage/ui/component").Component,i=t("montage/core/tree-controller").TreeController;e.Tree=n.specialize({constructor:{value:function(){this.super()}},_childrenPath:{value:"children"},_tree:{value:null},tree:{set:function(t){t&&(this._tree=t,this.treeController=new i(t,this._childrenPath))},get:function(){return this._tree}},configuration:{value:null},selectedNode:{value:null},treeController:{value:null},rangeController:{value:null},isCellDraggable:{value:null},handleExpandedAction:{value:function(t){var e=t.target.ownerComponent;e&&!e.node.content.fulfilled&&(e.node.expanded=!1,e.node.content.fulfill(),e.node.expanded=!0)}}})}});