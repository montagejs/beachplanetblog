montageDefine("88d5464","ui/video-control.reel/video-control-track.reel/video-control-track",{dependencies:["montage","montage/ui/base/abstract-slider","montage/core/promise"],factory:function(e,t){var n=e("montage").Montage,i=e("montage/ui/base/abstract-slider").AbstractSlider;e("montage/core/promise").Promise,t.VideoControlTrack=n.create(i,{constructor:{value:function(){i.constructor.call(this),this.addOwnPropertyChangeListener("time",this),this.defineBinding("max",{"<-":"videoController.duration",source:this}),this.defineBinding("time",{"<-":"videoController.position",source:this})}},handleThumbTranslateStart:{value:function(){i.handleThumbTranslateStart.apply(this,arguments),this.videoController.status===this.videoController.PLAYING?(this._wasPlaying=!0,this.videoController.pause()):this._wasPlaying=!1}},handleThumbTranslate:{value:function(){i.handleThumbTranslate.apply(this,arguments)}},handleThumbTranslateEnd:{value:function(){i.handleThumbTranslateEnd.apply(this,arguments),this._wasPlaying&&this.videoController.unpause()}},_sliderThumbTrackElement:{value:null},_sliderThumbElement:{value:null},time:{value:0},formattedTime:{value:0},controller:{value:null},handleTimeChange:{value:function(){this.formattedTime=this._prettyTime(this.time)}},_wasPlaying:{value:!1},_prettyTime:{value:function(e){var t,n,i;return e=parseInt(e,10),isNaN(e)||0>e?"":(t=e%60,n=Math.floor(e/60)%60,i=Math.floor(e/3600),(i>0?i+":":"")+(10>n?n:n)+":"+(10>t?"0"+t:t))}}})}});