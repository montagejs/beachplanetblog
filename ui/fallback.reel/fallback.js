var Component;

Component = require("montage/ui/component").Component;

exports.Fallback = Component.specialize({

    _supportsWebGL: {
        value: null
    },

    /**
     * Whether or not the current user agent supports WebGL
     */
    supportsWebGL: {
        get: function () {

            if (null === this._supportsWebGL) {
                var webGLOptions = {premultipliedAlpha: false, antialias: true, preserveDrawingBuffer: false};
                var canvas = document.createElement("canvas");
                var webGLContext =  canvas.getContext("experimental-webgl", webGLOptions) ||
                    canvas.getContext("webgl", webGLOptions);
                this._supportsWebGL = !!webGLContext;
            }

            return this._supportsWebGL;
        }
    },

    viewKey: {
        value: null
    },

    templateDidLoad: {
        value: function() {
            //Set initial view to be webgl if possible
            this.viewKey = this.supportsWebGL ? "webgl" : "static";
        }
    }

});
