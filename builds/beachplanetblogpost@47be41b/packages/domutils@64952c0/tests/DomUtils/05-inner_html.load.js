montageDefine("64952c0","tests/DomUtils/05-inner_html",{dependencies:["../.."],factory:function(e,i){var t=e("../..");i.name="Get inner HTML",i.getElements=function(){return" <script>text</script> <!-- comment --> <tag2> text </tag2>"},i.getByFunction=function(e){return t.getInnerHTML(t.getElementById("asdf",e,!0))},i.expected=" <script>text</script> <!-- comment --> <tag2> text </tag2>"}});