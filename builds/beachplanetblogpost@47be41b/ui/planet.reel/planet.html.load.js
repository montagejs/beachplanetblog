montageDefine("47be41b","ui/planet.reel/planet.html",{text:'<html><head>\n    <link rel=stylesheet type=text/css href=planet.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"beachplanet"}}},"scene":{"prototype":"mjs-volume/runtime/scene","properties":{"path":"/assets/3d/beachplanet/beachplanet.json"}},"sceneView":{"prototype":"mjs-volume/ui/scene-view.reel","properties":{"element":{"#":"sceneView"},"scene":{"@":"scene"}}},"substitution":{"prototype":"montage/ui/substitution.reel","properties":{"element":{"#":"substitution"},"switchValue":"static"},"bindings":{"switchValue":{"<-":"@owner.viewKey"}}}}</script>\n</head>\n\n<body>\n    <div data-montage-id=beachplanet>\n        <div data-montage-id=substitution>\n            <div data-arg=static>This demo requires WebGL. Please check your browser has WebGL supported and enabled \n            </div>\n        <div data-arg=webgl class=beachplanet>\n            <div data-montage-id=sceneView class=stage></div>\n        </div>\n    </div>\n\n\n</div></body></html>'});