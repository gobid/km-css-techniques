(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{290:function(t,e,o){"use strict";var l=o(121),r=o(120),n={name:"PatternSpacerBlockPart",components:{PatternSpacerThree:l.a,PatternSpacerFour:r.a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}},computed:{pattern:function(){return"patternOne"===this.block.pattern||"patternTwo"===this.block.pattern?"/images/".concat(this.block.pattern,".jpg"):"patternThree"===this.block.pattern?"animatedPatternOne":"patternFour"===this.block.pattern?"animatedPatternTwo":null}}},c=o(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative col-span-1 row-span-1 aspect-square overflow-hidden"},[t.block&&t.block.pattern?o("div",{staticClass:"parts-patternSpacer h-full w-full"},[o("div",{staticClass:"fadeIn h-full w-full"},[!t.pattern||"patternOne"!==t.block.pattern&&"patternTwo"!==t.block.pattern?t._e():o("nuxt-picture",{attrs:{src:t.pattern,size:"small",width:"410",height:"","img-attrs":{role:"presentation",loading:"lazy",sizes:"3xl:410w xl:20vw lg:20vw md:33.33vw sm:33.33vw"}}}),t._v(" "),t.pattern&&"patternThree"===t.block.pattern?o("PatternSpacerThree",{staticClass:"text-bloodRed"}):t._e(),t._v(" "),t.pattern&&"patternFour"===t.block.pattern?o("PatternSpacerFour",{staticClass:"text-bloodRed"}):t._e()],1)]):t._e()])}),[],!1,null,null,null);e.a=component.exports},300:function(t,e,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("6fe8a6fe",content,!0,{sourceMap:!1})},304:function(t,e,o){"use strict";var l={name:"BtnUnderline",components:{Btn:o(123).a},props:{label:{type:String,default:""},url:{type:String,default:""},anchor:{type:String,default:""},newTab:{type:Boolean,default:!1},download:{type:Boolean,default:!1},variant:{type:String,default:"red"},cover:{type:Boolean,default:!1}}},r=o(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Btn",{staticClass:"btn--arrow arrowDraw group",attrs:{label:t.label,url:t.url,download:t.download,"new-tab":t.newTab}},[o("div",{staticClass:"relative block w-60 sm:w-80 xl:w-120"},["red"===t.variant?o("img",{staticClass:"absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:duration-0 lg-max:hidden",attrs:{loading:"lazy",role:"presentation",src:"/images/arrow-right-red.gif",alt:t.label}}):t._e(),t._v(" "),"white"===t.variant?o("img",{staticClass:"absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:duration-0 lg-max:hidden",attrs:{loading:"lazy",role:"presentation",src:"/images/arrow-right-white.gif",alt:t.label}}):t._e(),t._v(" "),"red"===t.variant?o("nuxt-picture",{staticClass:"h-full w-full object-cover transition-opacity duration-0 group-hover:opacity-0 group-hover:duration-300",attrs:{format:"webp",src:"/images/arrow-right-red.png",sizes:"sm:60px lg:80px 3xl:120px",width:"2106",height:"1448",alt:t.label,"img-attrs":{class:"w-full h-full"},role:"presentation",loading:"lazy"}}):t._e(),t._v(" "),"white"===t.variant?o("nuxt-picture",{staticClass:"h-full w-full object-cover transition-opacity duration-0 group-hover:opacity-0 group-hover:duration-300",attrs:{format:"webp",src:"/images/arrow-right-white.png",sizes:"sm:60px lg:80px 3xl:120px",width:"2106",height:"1448",alt:t.label,"img-attrs":{class:"w-full h-full"},role:"presentation",loading:"lazy"}}):t._e()],1)])}),[],!1,null,null,null);e.a=component.exports},306:function(t,e,o){"use strict";o(300)},307:function(t,e,o){var l=o(45)((function(i){return i[1]}));l.push([t.i,"",""]),l.locals={},t.exports=l},309:function(t,e,o){"use strict";var l=o(67),r={name:"StatBlockPart",components:{BtnUnderline:o(119).a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1,observer:null,statistic:0}},mounted:function(){this.$refs.wrapperRef&&(this.observer=new MutationObserver(this.watchClassList),this.observer.observe(this.$refs.wrapperRef,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]}))},beforeDestroy:function(){this.observer&&(this.observer.disconnect(),this.observer=null)},methods:{watchClassList:function(t){var e=this,o={value:0};l.gsap.to(o,{value:this.block.statistic,duration:2,ease:"power2.inOut",onUpdate:function(){e.statistic=o.value.toFixed()}})}}},n=(o(306),o(2)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative col-span-1 row-span-1 aspect-square overflow-hidden"},[t.block&&t.block.statistic?o("div",{ref:"wrapperRef",staticClass:"parts-statSmall flex-col-center h-full w-full"},[t.block.statistic?o("h3",{staticClass:"fadeIn relative z-10 mb-10 font-brixtonWood text-[140px] leading-[120px] text-white",domProps:{textContent:t._s(t.statistic)}}):t._e(),t._v(" "),t.block.suffix?o("h5",{staticClass:"brixton-sm relative z-10 mb-40 text-white",domProps:{textContent:t._s(t.block.suffix)}}):t._e(),t._v(" "),t.block.tagline&&!t.block.hasLink?o("p",{staticClass:"parts-statSmall__text brixton-xs fadeUp relative z-10 text-white delay-200",domProps:{textContent:t._s(t.block.tagline)}}):t._e(),t._v(" "),t.block.link&&t.block.link.url&&t.block.link.label&&t.block.hasLink?o("BtnUnderline",{staticClass:"relative z-10",attrs:{label:t.block.link.label,url:t.block.link.url,chevron:!0}}):t._e(),t._v(" "),o("nuxt-picture",{staticClass:"object-cover-absolute fadeIn",attrs:{src:"/images/statBlockBg.png",size:"medium","img-attrs":{class:"object-cover-absolute",role:"presentation",loading:"lazy"}}})],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},317:function(t,e,o){"use strict";o(89),o(55);var l={name:"TweetBlockParts",components:{Twitter:o(69).a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}},computed:{tweet:function(){return"tweet"===this.block.bodyType?this.block.tweet&&this.block.tweet.data&&this.block.tweet.data.attributes&&this.block.tweet.data.attributes?this.block.tweet.data.attributes:null:{text:this.block.body}},tweetUrl:function(){return this.tweet&&this.tweet.tweetID?"https://www.twitter.com/twitter/status/".concat(this.tweet.tweetID):""},parsedTweet:function(){if(this.tweet&&this.tweet.text){var t=this.tweet.text.match(/#\w+/g),e=this.tweet.text.match(/@\w+/g),o=this.tweet.text.match(/(https?:\/\/[^\s]+)/g),body=this.tweet.text;return t&&t.forEach((function(t){body=body.replace(t,'<span class="text-bloodRed">'.concat(t,"</span>"))})),e&&e.forEach((function(t){body=body.replace(t,'<span class="text-bloodRed">'.concat(t,"</span>"))})),o&&o.forEach((function(t){body=body.replace(t,'<a class="text-underline hover:text-bloodRed transition-colors duration-300" href="'.concat(t,'">').concat(t,"</a>"))})),body}return null},timeSinceTweet:function(){if(this.tweet&&this.tweet.timePosted){var t=new Date(this.tweet.timePosted),e=(new Date).getTime()-t.getTime(),o=Math.floor(e/31536e6),l=Math.floor(e/2592e6),r=Math.floor(e/6048e5),n=Math.floor(e/864e5),c=Math.floor(e/36e5),d=Math.floor(e/6e4),w=Math.floor(e/1e3);return o>0?"".concat(o," year").concat(o>1?"s":""," ago"):l>0?"".concat(l," month").concat(l>1?"s":""," ago"):r>0?"".concat(r," week").concat(r>1?"s":""," ago"):n>0?"".concat(n,"d ago"):c>0?"".concat(c,"h ago"):d>0?"".concat(d,"m ago"):w>0?"".concat(w,"s ago"):"Just now"}return null}}},r=o(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-span-2 row-span-1 flex aspect-2/1 flex-col overflow-hidden"},[t.block&&t.tweet?o("div",{staticClass:"parts-tweet relative h-full w-full",class:"tweet"===t.block.bodyType?"flex flex-col py-20 px-15":"flex-col-center px-40 py-50 lg:px-40 xl:px-80"},["tweet"===t.block.bodyType?o("a",{staticClass:"brixton-xs fadeRight relative z-10 mb-15 text-white hover:text-bloodRed",attrs:{href:t.tweetUrl,target:"_blank"}},[o("span",{staticClass:"transition-colors duration-300"},[t._v("TWEET_")])]):t._e(),t._v(" "),"text"===t.block.bodyType&&t.block.bodyHeading?o("h5",{staticClass:"brixton-sm relative z-10 mr-auto mb-10 text-left text-white lg:mb-10 xl:mb-20",domProps:{textContent:t._s(t.block.bodyHeading)}}):t._e(),t._v(" "),t.tweet&&t.tweet.text?o("p",{staticClass:"copy-tweet sm:copy-sm fadeUp relative z-10 text-white delay-200",domProps:{innerHTML:t._s(t.parsedTweet)}}):t._e(),t._v(" "),"tweet"===t.block.bodyType?o("a",{staticClass:"relative z-10 mt-auto flex items-center text-white hover:text-bloodRed",attrs:{href:t.tweetUrl,target:"_blank","aria-label":"Go To Twitter"}},[o("span",{staticClass:"fadeIn mr-10 block w-20 delay-400"},[o("Twitter",{staticClass:"transition-colors duration-300"})],1),t._v(" "),t.tweet&&t.tweet.timePosted?o("span",{staticClass:"fadeIn delay-600"},[o("p",{staticClass:"copy-xs transition-colors duration-300",domProps:{textContent:t._s(t.timeSinceTweet)}})]):t._e()]):t._e(),t._v(" "),o("div",{staticClass:"background-hide fadeIn !absolute inset-0 h-full w-full"})]):t._e()])}),[],!1,null,null,null);e.a=component.exports},326:function(t,e,o){"use strict";var l=o(124),r=o(304),n={name:"GameBlockPart",components:{WebImage:l.a,BtnArrow:r.a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}}},c=o(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative col-span-2 row-span-3 aspect-2/3 overflow-hidden sm:col-span-3 sm:row-span-2 sm:aspect-3/2"},[o("div",{staticClass:"parts-game h-full w-full"},[t.block&&t.block.game&&t.block.game.data&&t.block.game.data.attributes?o("div",{staticClass:"h-full w-full"},[o("div",{staticClass:"absolute bottom-0 right-0 z-10 flex aspect-square w-6/12 flex-col bg-bloodRed px-15 pt-5 pb-20 sm:w-4/12"},[o("div",{staticClass:"items-between mb-auto flex justify-between"},[o("h6",{staticClass:"brixton-xs fadeRight text-white"},[t._v("Game_")]),t._v(" "),o("BtnArrow",{staticClass:"btn-cover fadeIn delay-200",attrs:{label:t.block.game.data.attributes.title,url:t.block.game.data.attributes.slug,variant:"white"}})],1),t._v(" "),t.block.game.data.attributes.title?o("h3",{staticClass:"brixton-lg lg:brixton xl:brixton-lg fadeUp relative z-10 w-6/12 text-white delay-400",domProps:{textContent:t._s(t.block.game.data.attributes.title)}}):t._e(),t._v(" "),o("nuxt-picture",{staticClass:"object-cover-absolute pointer-events-none mix-blend-multiply",attrs:{src:"/images/gameCardBg.png",min:"tiny",max:"small","img-attrs":{class:"object-cover-absolute",role:"presentation",loading:"lazy"}}})],1)]):t._e(),t._v(" "),o("div",{staticClass:"swipeReveal object-cover-absolute"},[t.block&&t.block.background?o("WebImage",{staticClass:"swipeReveal__inner h-full w-full",attrs:{min:"small",max:"xlarge",image:t.block.background,"img-classes":"object-cover-absolute"}}):t._e()],1)])])}),[],!1,null,null,null);e.a=component.exports},399:function(t,e,o){"use strict";o.r(e);var l=o(294),r=o(309),n=o(295),c=o(317),d=o(316),w=o(326),m=o(290),h={name:"LayoutFiveSection",components:{ImageBlock:l.a,StatBlockSmall:r.a,VideoBlock:n.a,TweetBlock:c.a,HeadingBlock:d.a,GameBlock:w.a,PatternSpacerBlock:m.a},props:{section:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}}},f=o(2),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.section?o("section",{staticClass:"section-layouFive",attrs:{id:t.section.tag}},[o("div",{staticClass:"container"},[t.section.media2x2?o("VideoBlock",{staticClass:"col-start-1 row-start-1",attrs:{block:t.section.media2x2,width:2,height:2,"image-size":"large"}}):t._e(),t._v(" "),t.section.statistic1x1?o("StatBlockSmall",{staticClass:"col-start-1 row-start-3 sm:col-start-3 sm:row-start-1",attrs:{block:t.section.statistic1x1}}):t._e(),t._v(" "),t.section.media2x1?o("VideoBlock",{staticClass:"col-start-1 row-start-4 sm:row-start-3 lg:col-start-4 lg:row-start-1",attrs:{block:t.section.media2x1}}):t._e(),t._v(" "),t.section.tweetShortCopy2x1?o("TweetBlock",{staticClass:"col-start-1 row-start-5 sm:row-start-4 lg:col-start-3 lg:row-start-2",attrs:{block:t.section.tweetShortCopy2x1}}):t._e(),t._v(" "),t.section.images1x1&&t.section.images1x1[0]?o("ImageBlock",{staticClass:"col-start-2 row-start-3 sm:col-start-3 sm:row-start-4 lg:col-start-5 lg:row-start-2",attrs:{block:t.section.images1x1[0],width:1,height:1,"image-min":"tiny",max:"small"}}):t._e(),t._v(" "),t.section.heading1x1?o("HeadingBlock",{staticClass:"col-start-1 row-start-9 sm:row-start-7 lg:row-start-3",attrs:{block:t.section.heading1x1}}):t._e(),t._v(" "),t.section.game3x2?o("GameBlock",{staticClass:"col-start-1 row-start-6 sm:row-start-5 lg:col-start-2 lg:row-start-3",attrs:{block:t.section.game3x2}}):t._e(),t._v(" "),t.section.images1x1&&t.section.images1x1[1]?o("ImageBlock",{staticClass:"col-start-2 row-start-9 sm:col-start-1 sm:row-start-7 lg:col-start-5 lg:row-start-3",attrs:{block:t.section.images1x1[1],width:1,height:1,"image-min":"tiny",max:"small"}}):t._e(),t._v(" "),t.section.images1x1&&t.section.images1x1[2]?o("ImageBlock",{staticClass:"col-start-1 row-start-10 sm:col-start-3 sm:row-start-7 lg:col-start-1 lg:row-start-4",attrs:{block:t.section.images1x1[2],width:1,height:1,"image-min":"tiny",max:"small"}}):t._e(),t._v(" "),t.section.patternSpacer1x1?o("PatternSpacerBlock",{staticClass:"col-start-2 row-start-10 sm:col-start-3 sm:row-start-3 lg:col-start-5 lg:row-start-4",attrs:{block:t.section.patternSpacer1x1}}):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);