(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{290:function(t,e,l){"use strict";var o=l(121),r=l(120),c={name:"PatternSpacerBlockPart",components:{PatternSpacerThree:o.a,PatternSpacerFour:r.a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}},computed:{pattern:function(){return"patternOne"===this.block.pattern||"patternTwo"===this.block.pattern?"/images/".concat(this.block.pattern,".jpg"):"patternThree"===this.block.pattern?"animatedPatternOne":"patternFour"===this.block.pattern?"animatedPatternTwo":null}}},n=l(2),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"relative col-span-1 row-span-1 aspect-square overflow-hidden"},[t.block&&t.block.pattern?l("div",{staticClass:"parts-patternSpacer h-full w-full"},[l("div",{staticClass:"fadeIn h-full w-full"},[!t.pattern||"patternOne"!==t.block.pattern&&"patternTwo"!==t.block.pattern?t._e():l("nuxt-picture",{attrs:{src:t.pattern,size:"small",width:"410",height:"","img-attrs":{role:"presentation",loading:"lazy",sizes:"3xl:410w xl:20vw lg:20vw md:33.33vw sm:33.33vw"}}}),t._v(" "),t.pattern&&"patternThree"===t.block.pattern?l("PatternSpacerThree",{staticClass:"text-bloodRed"}):t._e(),t._v(" "),t.pattern&&"patternFour"===t.block.pattern?l("PatternSpacerFour",{staticClass:"text-bloodRed"}):t._e()],1)]):t._e()])}),[],!1,null,null,null);e.a=component.exports},300:function(t,e,l){var content=l(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(46).default)("6fe8a6fe",content,!0,{sourceMap:!1})},306:function(t,e,l){"use strict";l(300)},307:function(t,e,l){var o=l(45)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},309:function(t,e,l){"use strict";var o=l(67),r={name:"StatBlockPart",components:{BtnUnderline:l(119).a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1,observer:null,statistic:0}},mounted:function(){this.$refs.wrapperRef&&(this.observer=new MutationObserver(this.watchClassList),this.observer.observe(this.$refs.wrapperRef,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]}))},beforeDestroy:function(){this.observer&&(this.observer.disconnect(),this.observer=null)},methods:{watchClassList:function(t){var e=this,l={value:0};o.gsap.to(l,{value:this.block.statistic,duration:2,ease:"power2.inOut",onUpdate:function(){e.statistic=l.value.toFixed()}})}}},c=(l(306),l(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"relative col-span-1 row-span-1 aspect-square overflow-hidden"},[t.block&&t.block.statistic?l("div",{ref:"wrapperRef",staticClass:"parts-statSmall flex-col-center h-full w-full"},[t.block.statistic?l("h3",{staticClass:"fadeIn relative z-10 mb-10 font-brixtonWood text-[140px] leading-[120px] text-white",domProps:{textContent:t._s(t.statistic)}}):t._e(),t._v(" "),t.block.suffix?l("h5",{staticClass:"brixton-sm relative z-10 mb-40 text-white",domProps:{textContent:t._s(t.block.suffix)}}):t._e(),t._v(" "),t.block.tagline&&!t.block.hasLink?l("p",{staticClass:"parts-statSmall__text brixton-xs fadeUp relative z-10 text-white delay-200",domProps:{textContent:t._s(t.block.tagline)}}):t._e(),t._v(" "),t.block.link&&t.block.link.url&&t.block.link.label&&t.block.hasLink?l("BtnUnderline",{staticClass:"relative z-10",attrs:{label:t.block.link.label,url:t.block.link.url,chevron:!0}}):t._e(),t._v(" "),l("nuxt-picture",{staticClass:"object-cover-absolute fadeIn",attrs:{src:"/images/statBlockBg.png",size:"medium","img-attrs":{class:"object-cover-absolute",role:"presentation",loading:"lazy"}}})],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},311:function(t,e,l){"use strict";var o={name:"ScrollBlockPart",data:function(){return{onscreen:!1}}},r=l(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"parts-scroll overfow-hidden relative col-span-1 row-span-1 aspect-square"},[l("nuxt-picture",{staticClass:"object-cover-absolute fadeIn",attrs:{src:"/images/scrollBackground.jpg","img-attrs":{class:"w-full h-full object-cover",role:"presentation",loading:"lazy"}}}),t._v(" "),l("div",{staticClass:"flex-col-center relative z-10 h-full w-full"},[l("div",{staticClass:"mb-5 mt-5 w-20 animate-bounce"},[l("nuxt-picture",{staticClass:"fadeIn delay-200",attrs:{src:"/images/mouse.png",size:"small","img-attrs":{class:"w-full h-full object-contain",role:"presentation",loading:"lazy"}}})],1),t._v(" "),t._m(0)])],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h6",{staticClass:"brixton-xs fadeUp text-black delay-400"},[t._v("\n      Scroll To\n      "),l("span",{staticClass:"text-bloodRed"},[t._v("Explore")])])}],!1,null,null,null);e.a=component.exports},314:function(t,e,l){var content=l(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(46).default)("cbf3dd3c",content,!0,{sourceMap:!1})},321:function(t,e,l){"use strict";l(314)},322:function(t,e,l){var o=l(45)((function(i){return i[1]}));o.push([t.i,".longCopyScroller::-webkit-scrollbar,.parts-copyBlock__scroller::-webkit-scrollbar{width:6px}.longCopyScroller::-webkit-scrollbar-thumb,.parts-copyBlock__scroller::-webkit-scrollbar-thumb{background:hsla(0,0%,76.9%,.35);height:150px;border-radius:9999px}.longCopyScroller::-webkit-scrollbar-track,.parts-copyBlock__scroller::-webkit-scrollbar-track{background:hsla(0,0%,76.9%,.15);border-radius:9999px}",""]),o.locals={},t.exports=o},325:function(t,e,l){"use strict";var o=l(305),r={name:"CopyBlockPart",components:{BtnUnderline:l(119).a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}},computed:{renderedBody:function(){return this.block&&this.block.body?o.marked.parse(this.block.body,{baseUrl:"https://cms.rocksteadyltd.com"}):null}}},c=(l(321),l(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-span-2 row-span-2 aspect-square overflow-hidden"},[t.block&&t.block.body?l("div",{staticClass:"parts-copy relative flex h-full w-full flex-col justify-center py-30 pl-40 pr-20 lg:py-50 lg:pl-80 lg:pr-60"},[l("div",{staticClass:"parts-copyBlock__scroller relative z-10 w-full overflow-y-auto overflow-x-hidden"},[l("div",{staticClass:"rich-text rich-text--sm fadeUp mb-20 pr-40 text-white",domProps:{innerHTML:t._s(t.renderedBody)}}),t._v(" "),t.block.link&&t.block.link.url&&t.block.link.label?l("BtnUnderline",{attrs:{label:t.block.link.label,url:t.block.link.url,chevron:!0,"new-tab":t.block.link.newTab}}):t._e()],1),t._v(" "),l("div",{staticClass:"fadeIn absolute inset-0 h-full w-full bg-charcoal"})]):t._e()])}),[],!1,null,null,null);e.a=component.exports},340:function(t,e,l){"use strict";l(11),l(23);var o={name:"QuoteBlockPart",props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}},computed:{nameRole:function(){return[this.block.name,this.block.role].filter(Boolean).join(", ")}}},r=l(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-span-2 row-span-1 aspect-2/1 overflow-hidden"},[t.block&&t.block.body?l("div",{staticClass:"parts-quote h-full w-full"},[l("div",{staticClass:"h-full w-full"},[l("div",{staticClass:"relative col-span-2 col-start-2 mt-auto flex aspect-2/1 flex-col justify-center p-30 lg:px-60 lg:py-70"},[t.block.heading?l("h5",{staticClass:"brixton-sm relative z-10 mb-10 text-white lg:mb-20",domProps:{textContent:t._s(t.block.heading)}}):t._e(),t._v(" "),l("p",{staticClass:"copy-lg fadeUp relative z-20 mb-20 font-bold text-white lg:mb-30",domProps:{textContent:t._s(t.block.body)}}),t._v(" "),t.nameRole?l("p",{staticClass:"brixton-xs fadeUp relative z-20 text-white delay-200",domProps:{textContent:t._s(t.nameRole)}}):t._e(),t._v(" "),l("div",{staticClass:"fadeIn absolute inset-0 h-full w-full bg-charcoal-light"},[l("nuxt-picture",{staticClass:"object-cover-absolute z-10 opacity-5",attrs:{src:"/images/quoteBlockBg.png",size:"small","img-attrs":{class:"object-cover-absolute",role:"presentation",loading:"lazy",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}})],1)])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},397:function(t,e,l){"use strict";l.r(e);var o=l(295),r=l(294),c=l(316),n=l(340),d=l(325),f=l(309),m=l(311),k=l(290),v={name:"LayoutTwoSection",components:{VideoBlock:o.a,ImageBlock:r.a,HeadingBlock:c.a,QuoteBlock:n.a,CopyBlock:d.a,PatternSpacerBlock:k.a,ScrollBlock:m.a,StatBlockSmall:f.a},props:{section:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}}},h=l(2),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.section?l("section",{staticClass:"section-layoutTwo",attrs:{id:t.section.tag}},[l("div",{staticClass:"container"},[t.section.media3x2?l("VideoBlock",{staticClass:"col-start-1 row-start-2 sm:row-start-1",attrs:{block:t.section.media3x2,width:3,height:2,"button-centered":!0}}):t._e(),t._v(" "),t.section.heading1x1?l("HeadingBlock",{staticClass:"col-start-1 row-start-1 sm:col-start-3 sm:row-start-2 lg:col-start-4 lg:row-start-1",attrs:{block:t.section.heading1x1}}):t._e(),t._v(" "),t.section.images1x1&&t.section.images1x1[0]&&!t.section.showScrollBlock?l("ImageBlock",{staticClass:"col-start-1 row-start-5 sm:row-start-4 lg:col-start-5 lg:row-start-1",attrs:{block:t.section.images1x1[0],width:1,height:1,"image-size":"medium"}}):t._e(),t._v(" "),t.section.showScrollBlock?l("ScrollBlock",{staticClass:"col-start-1 row-start-5 sm:row-start-4 lg:col-start-5 lg:row-start-1"}):t._e(),t._v(" "),t.section.images1x1&&t.section.images1x1[1]?l("ImageBlock",{staticClass:"col-start-2 row-start-5 sm:col-start-1 lg:hidden",attrs:{block:t.section.images1x1[1],width:1,height:1,"image-size":"medium"}}):t._e(),t._v(" "),t.section.patternSpacer1x1?l("PatternSpacerBlock",{staticClass:"hidden sm:col-start-3 sm:row-start-1 sm:block lg:hidden",attrs:{block:t.section.patternSpacer1x1}}):t._e(),t._v(" "),t.section.quote3x1?l("QuoteBlock",{staticClass:"col-start-1 row-start-4 sm:col-start-2 sm:row-start-3",attrs:{block:t.section.quote3x1}}):t._e(),t._v(" "),t.section.quote3x1?l("figure",{staticClass:"quote-image col-start-2 row-start-1 aspect-square sm:col-start-1 sm:row-start-3"},[l("nuxt-picture",{staticClass:"fadeIn object-cover",attrs:{src:"/images/quoteBlock.jpg",min:"tiny",max:"small","img-attrs":{class:"object-cover w-full h-full",role:"presentation",loading:"lazy"}}})],1):t._e(),t._v(" "),!t.section.quote3x1&&t.section.statistic1x1?l("StatBlockSmall",{staticClass:"col-start-2 row-start-4 sm:col-start-1 sm:row-start-4 lg:col-start-1 lg:row-start-3",attrs:{block:t.section.statistic1x1,width:1,height:1}}):t._e(),t._v(" "),!t.section.quote3x1&&t.section.images1x1&&t.section.images1x1[1]?l("ImageBlock",{staticClass:"col-start-1 row-start-4 sm:col-start-1 lg:col-start-3 lg:row-start-3",attrs:{block:t.section.images1x1[1],width:1,height:1,"image-size":"medium"}}):t._e(),t._v(" "),t.section.copy2x2?l("CopyBlock",{staticClass:"col-start-1 row-start-6 sm:col-start-2 sm:row-start-4 lg:col-start-4 lg:row-start-2",attrs:{block:t.section.copy2x2}}):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);