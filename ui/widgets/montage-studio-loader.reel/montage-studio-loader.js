/**
 * @module ui/montage-studio-loader.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MontageStudioLoader
 * @extends Component
 */
exports.MontageStudioLoader = Component.specialize(/** @lends MontageStudioLoader# */ {

    _underwearElement: {
        value: null
    },

    hasTemplate: {
        value: true
    },

    enterDocument: {
        value: function () {
            this._load();
        }
    },

    prepareForEventsActivation: {
        value: function () {

        }
    },

    setCSS: {
        value: function (val, key, value) {
            var sheet, r;

            for (var s = 0; s < document.styleSheets.length; s++) {
                sheet = document.styleSheets[s];

                for (r = 0; r < sheet.rules.length; r++) {
                    if (sheet.rules[r].selectorText == val) {
                        sheet.rules[r].style[key] = value;
                        return 1;
                    }
                }
            }
        }
    },

    stop: {
        value: function () {
            var self = this;

            self._underwearElement.classList.add("off");

            setTimeout(function () {
                self._underwearElement.parentNode.removeChild(self._underwearElement);
            }, 2000);
        }
    },

    _load: {
        value: function () {
            var self = this,
                xhr = new XMLHttpRequest();

            xhr.open("GET","assets/loader.svg",true);
            xhr.overrideMimeType("image/svg+xml");

            xhr.onload = function (e) {
                self.svg = xhr.responseXML.documentElement;
                self.svg.className = "svg";
                self.svg_cont = document.createElement("div");
                self.svg_cont.className = "svg_cont";

                self.loader = document.createElement("div");
                self.loader.className = "glower";
                self.svg_cont.appendChild(self.loader);

                self.svg_cont.appendChild(self.svg);
                self.svg.style.position = "absolute";
                self.svg.style.left = "0px";
                self.svg.style.top = "0px";

                self._underwearElement.appendChild(self.svg_cont);

                var tri = document.getElementById("mslogo_triangles");//.classList.remove("off");
                var wtri = document.getElementById("mslogo_wtriangles");//.classList.remove("off");
                var ltri = document.getElementById("mslogo_tri_lines");//.classList.remove("off");
                ltri.classList.remove("off");

                document.getElementById("circle").classList.remove("off");
                document.getElementById("montage_studio").classList.remove("off");

                setTimeout(function () {
                    tri.classList.remove("off");
                    tri.classList.add("ani");
                    wtri.classList.remove("off");
                    wtri.classList.add("ani");
                    ltri.classList.add("off");

                    for (var a = 1;a < 9; a++) {
                        document.getElementById("triangle_" + a).classList.add("t" + a);
                    }
                },500);
            };

            xhr.send("");
        }
    }


});
