montageDefine("3d2b056","extras/scene-tree.reel/scene-tree.html",{text:'<!DOCTYPE html><html><head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=scene-tree.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"sceneGraphTree"}},"bindings":{"selectedNode":{"<-":"@tree.selectedNode"},"treeController":{"<-":"@tree.treeController"},"rangeController":{"<-":"@tree.rangeController"}}},"tree":{"prototype":"./tree.reel","properties":{"element":{"#":"tree"}},"bindings":{"tree":{"<-":"@owner.sceneGraphTree"},"configuration":{"<-":"@owner.configuration"},"isCellDraggable":{"<-":"@owner.isCellDraggable"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=sceneGraphTree class=SceneGraphTree>\n        <div data-montage-id=tree></div>\n    </div>\n\n\n</body></html>'});