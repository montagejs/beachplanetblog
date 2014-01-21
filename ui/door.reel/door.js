// Copyright (c) 2013, Fabrice Robinet.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
// THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var Component;

Component = require("montage/ui/component").Component;

exports.Door = Component.specialize({

  	doorOpen: {
    	value: false
  	},

  	handleDoorAction: {
    	value: function(event) {
      		this.doorOpen = ~this.doorOpen;
    	}
  	},

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
