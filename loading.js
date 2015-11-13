

function Logo() {
    var that = this;
    this.built = 0;

    this.speed = 50;
    this.wait_factor = 100/this.speed;
    this.logotype = "mslogo_triangles";
    this.color = "#000000";

    //FULLLOGO
	this.version = {
		id:'fulllogo',
		title:"Full Logo",
		type:'loading',
		timing:50,
		circles:[],
		layers:[{
			id:this.logotype
		},{
			id:"circle"
		},{
			id:"montage_studio"
		},{
			id:"mslogo_wtriangles"
		}],
		color:function (c) {
           // if (d = document.getElementById("circle2")) {
           //     //that.aaa = d;
           //     d.r.baseVal.value = "550";
           // }
            //that.setCss(".mslogo_circle","fill",c);


        },
		waiting:0,
		waiting2:0,
		wait:function (dur) {
            var index = Math.floor(dur/500);
            console.log
            var trip = Math.floor(index/8);
            while (index >= 8) index-=8;
            console.log("duration=" + dur + " index=" + index + " trip=" + trip);
            if (trip%2 == 0) {
				this.tri[index+1].classList.remove("left");
				this.tri[index+1].classList.remove("right");
				this.wtri[index+1].classList.add("off");

            } else {
				if (index%2 == 0) this.tri[index+1].classList.add("left");
				else this.tri[index+1].classList.add("right");
				this.wtri[index+1].classList.remove("off");

            }
            var i2 = Math.floor(dur/2000);
            if (i2%2 == 0) {
                that.loader.classList.add("on");
                that.loader.classList.remove("on2");
            } else {
                that.loader.classList.add("on2");
                that.loader.classList.remove("on");

            }


		},
		tri:[],
		wtri:[],
		build:function (parent) {
			//var t2 = document.createElement("div");
			//t2.className = "conic_gradient";
			//parent.appendChild(t2);
		},
		onload:function (parent) {
              for (var a = 1;a < 9; a++) {
			    if (!this.tri[a]) this.tri[a] = document.getElementById("triangle_" + a);
			    if (!this.wtri[a]) this.wtri[a] = document.getElementById("wtriangle_" + a);
			  }
			  that.triangles = document.getElementById("mslogo_triangles");
			  that.triangles.classList.add("fulllogo");
			  that.wtriangles = document.getElementById("mslogo_wtriangles");
			  that.wtriangles.classList.add("fulllogo");
		}
    }



    this.waiting = -1;

    this.id = "svg2";


    xhr = new XMLHttpRequest();
	xhr.open("GET","loading.svg",true);
	xhr.overrideMimeType("image/svg+xml");
	//xhr.owner = this;
	xhr.onload = function (e) {

	    that.underwear = document.createElement("div");
	    that.underwear.className = "underwear";
	    document.body.appendChild(that.underwear);

	    that[that.id] = xhr.responseXML.documentElement;
		that[that.id + "_cont"] = document.createElement("div");
		that[that.id + "_cont"].className = that.id + "_cont";

        if (that.version.build) that.version.build(that[that.id + "_cont"]);

           if (that.version.id == "fulllogo") {
				that.loader = document.createElement("div");
				that.loader.className = "glower";
                that[that.id + "_cont"].appendChild(that.loader);

           }

		that[that.id + "_cont"].appendChild(that[that.id]);
		that[that.id].style.position = "absolute";
		that[that.id].style.left = "0px";
		that[that.id].style.top = "0px";


		that.underwear.appendChild(that[that.id + "_cont"]);

        if (that.version.onload) that.version.onload(that[that.id + "_cont"]);
	    if (that.version.color) that.version.color(that.color);

		that.built = 1;
		that.rendering = 0;
		if (that.type == "badge") {
            document.getElementById("circle2").classList.add("off");
			that[that.id + "_cont"].onclick = function () {
				window.open("http://www.montagestudio.com/");
			}

			that[that.id + "_cont"].onmouseover = function (e) {
				if (that.stop_timer) clearTimeout(that.stop_timer);
				that.stop_timer = 0;

				that[that.id + "_cont"].onmouseout = function (e) {
					this.onmouseout = 0;
					that.stop()
				}
				that.start();
			}
		}
		for (var a = 0; a < that.version.layers.length; a++) {
		    var d = document.getElementById(that.version.layers[a].id);
		    if (d && d.classList) d.classList.remove("off");
		}
		if (that.version.type == "loading") {

           if (that.logotype == "mslogo_triangles" && that.version.id != "fulllogo") {
			   [].forEach.call(document.querySelectorAll(".tri"),function(el) {
				   el.classList.remove("left");
				   el.classList.remove("right");
				});
            }
			var d = document.getElementById(that.logotype);
			if (d && d.classList) d.classList.remove("off");

			that.waiting = 0;
			that.start_time = (new Date()).getTime();
			that.waiting_interval = setInterval(function () {
			    var d = new Date();
				that.version.wait(d.getTime()-that.start_time);
			},that.version.timing);
		}
	        if (that.version.color) that.version.color(that.color);
	}
	xhr.send("");
	return;

};








