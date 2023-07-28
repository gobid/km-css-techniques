(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{417:function(e,t,o){"use strict";o.r(t);var n=o(327),l=o.n(n),d=(o(334),{name:"VideoLocal",props:{video:{type:Object,default:function(){return{}}},aspectRatio:{type:String,default:"2:1"}},data:function(){return{player:null,playing:!1,videoLoaded:!1,startScroll:0,seeking:!1}},watch:{playing:function(e,t){e&&!this.player&&this.setupPlayer()}},methods:{setupPlayer:function(){var e=this;this.videoLoaded=!0,setTimeout((function(){e.player=new l.a(e.$refs.playerRef,{ratio:e.aspectRatio,controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen"]}),e.player.on("ready",e.playVideo),e.player.on("play",e.handleVideoPlay),e.player.on("pause",e.handleVideoStop),e.player.on("stop",e.handleVideoStop),e.player.on("seeked",e.handleVideoSeeked),e.player.on("seeking",e.handleVideoSeeking)}),10)},playVideo:function(){this.videoLoaded&&this.player.play(),this.playing=!0},pauseVideo:function(){this.videoLoaded&&!0===this.playing&&this.player.pause()},handleVideoPlay:function(){this.addScrollListener(),this.emitPlaybackChange(!0)},handleVideoStop:function(e){this.player.seeking||(this.removeScrollListener(),this.emitPlaybackChange(!1))},handleVideoSeeking:function(e){console.log("seeking"),this.seeking=!0},handleVideoSeeked:function(e){console.log("seeked"),this.seeking=!1},emitPlaybackChange:function(e){this.$emit("playback-change",e)},addScrollListener:function(){this.startScroll=window.scrollY,window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},handleScroll:function(){this.playing&&Math.abs(window.scrollY-this.startScroll)>100&&this.pauseVideo()}}}),r=o(2),component=Object(r.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"}},[e.video&&e.videoLoaded?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.pauseVideo,expression:"pauseVideo"}],staticClass:"videoEmbed__video h-full w-full"},[o("video",{ref:"playerRef"},[e.video.webm?o("source",{attrs:{src:e.video.webm,type:"video/webm"}}):e._e(),e._v(" "),e.video.mp4?o("source",{attrs:{src:e.video.mp4,type:"video/mp4"}}):e._e()])]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);