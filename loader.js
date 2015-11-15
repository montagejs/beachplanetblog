

function Loader() {
    var that = this;

    that.setCSS = function(val, key, value) {
		for (var s = 0; s < document.styleSheets.length; s++) {
			var sheet = document.styleSheets[s];
			for (var r = 0; r < sheet.rules.length; r++) {
				if (sheet.rules[r].selectorText == val) {
					sheet.rules[r].style[key] = value;
					return 1;
				}
			}
		}
    }

	that.underwear = document.createElement("div");
	that.underwear.className = "underwear";
	document.body.appendChild(that.underwear);

	this.id = "svg2";

	xhr = new XMLHttpRequest();
	xhr.open("GET","loader.svg",true);
	xhr.overrideMimeType("image/svg+xml");

	xhr.onload = function (e) {
		that.svg = xhr.responseXML.documentElement;
        that.svg.className = "svg";
		that.svg_cont = document.createElement("div");
		that.svg_cont.className = "svg_cont";

		that.loader = document.createElement("div");
		that.loader.className = "glower";
		that.svg_cont.appendChild(that.loader);

		that.svg_cont.appendChild(that.svg);
		that.svg.style.position = "absolute";
		that.svg.style.left = "0px";
		that.svg.style.top = "0px";

		that.underwear.appendChild(that.svg_cont);

		var tri = document.getElementById("mslogo_triangles");//.classList.remove("off");
		var wtri = document.getElementById("mslogo_wtriangles");//.classList.remove("off");
		var ltri = document.getElementById("mslogo_tri_lines");//.classList.remove("off");
		ltri.classList.remove("off");
		document.getElementById("circle").classList.remove("off");
		document.getElementById("montage_studio").classList.remove("off");


        var interval = 8000;
        var flip = 1;

        setTimeout(function () {
            tri.classList.remove("off");
            tri.classList.add("ani");
            wtri.classList.remove("off");
            wtri.classList.add("ani");
            ltri.classList.add("off");
			  for (var a = 1;a < 9; a++) {
				document.getElementById("triangle_" + a).classList.add("t" + a);
			  }


        },4500);


	}
	xhr.send("");

	this.stop = function () {
	    that.underwear.classList.add("off");
	    setTimeout(function () {
	        that.underwear.parentNode.removeChild(that.underwear);
	    },2000);


	}
	return;



};







