montageDefine("d41c331","core/converter/new-line-to-br-converter",{dependencies:["../core","./converter"],factory:function(t,e){t("../core").Montage;var n=t("./converter").Converter,i=function(t){return t.replace(/(\r\n|\r|\n)/g,"<br />")};e.NewLineToBrConverter=n.specialize({_convert:{value:function(t){return t&&"string"==typeof t?i(t):t}},convert:{value:function(t){return this._convert(t)}},revert:{value:function(t){return this._convert(t)}}})}});