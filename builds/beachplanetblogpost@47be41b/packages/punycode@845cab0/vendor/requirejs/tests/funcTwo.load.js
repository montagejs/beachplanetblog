montageDefine("845cab0","vendor/requirejs/tests/funcTwo",{dependencies:["funcOne"],factory:function(){define("funcTwo",["require","funcOne"],function(e){var i=function(i){this.name=i,this.one=new(e("funcOne"))("ONE")};return i.prototype.oneName=function(){return this.one.getName()},i})}});