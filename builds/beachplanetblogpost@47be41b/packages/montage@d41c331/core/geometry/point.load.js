montageDefine("d41c331","core/geometry/point",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage;t.Point=n.specialize({init:{enumerable:!1,value:function(e,t){return this.x=null===e?0:e,this.y=null===t?0:t,this}},x:{enumerable:!0,value:0},y:{enumerable:!0,value:0}},{interpolate:{enumerable:!1,value:function(e,n,i,r){var a,s;return a=n.x+(i.x-n.x)*e,s=n.y+(i.y-n.y)*e,r>0&&(a=Math.round(a*r)/r,s=Math.round(s*r)/r),(new t.Point).init(a,s)}}})}});