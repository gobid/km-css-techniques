(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{312:function(t,e,r){"use strict";r(188);var n={name:"ShortTextBlockPart",props:{heading:{type:String,default:""},headingHighlight:{type:String,default:""},description:{type:String,default:""},index:{type:Number,default:null},highlight:{type:Boolean,default:!1}},computed:{variantBgClass:function(){return this.highlight?"bg-bloodRed":"bg-black"},variantTextClasses:function(){return this.highlight?{text:"text-white",highlight:"text-black"}:{text:"text-white",highlight:"text-bloodRed"}},decoratedIndex:function(){return this.index&&this.index<10?"0".concat(this.index,"_"):this.index&&this.index>=10?"".concat(this.index,"_"):""}},mounted:function(){this.$splitText(this.$refs.headingRef)}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"parts-perk relative z-10 col-span-1 row-span-1 flex aspect-square flex-col overflow-hidden px-15 pt-10 pb-20"},[t.decoratedIndex?r("h5",{staticClass:"brixton-xs fadeRight relative z-10 delay-500",class:t.variantTextClasses.text,domProps:{textContent:t._s(t.decoratedIndex)}}):t._e(),t._v(" "),t.description?r("p",{staticClass:"copy-xs fadeUp relative z-10 mb-auto text-white delay-700",domProps:{textContent:t._s(t.description)}}):t._e(),t._v(" "),t.heading?r("h3",{ref:"headingRef",staticClass:"brixton fadeUpLines relative z-10",staticStyle:{"--line-delay":"900ms"}},[r("span",{staticClass:"block",class:t.variantTextClasses.text,domProps:{textContent:t._s(t.heading)}}),t._v(" "),r("span",{staticClass:"block",class:t.variantTextClasses.highlight,domProps:{textContent:t._s(t.headingHighlight)}})]):t._e(),t._v(" "),r("div",{staticClass:"swipeReveal pointer-events-none absolute inset-0 h-full w-full"},[r("div",{staticClass:"swipeReveal__inner h-full w-full",class:t.variantBgClass}),t._v(" "),t.highlight?r("nuxt-picture",{staticClass:"fadeIn absolute inset-0 h-full w-full mix-blend-darken delay-500",attrs:{src:"/images/backgroundTexture.png",size:"small","img-attrs":{class:"h-full w-full object-cover",role:"presentation",loading:"lazy"}}}):t._e()],1)])}),[],!1,null,null,null);e.a=component.exports},412:function(t,e,r){"use strict";r.r(e);var n=r(312),l=r(122),o={name:"PerksLayoutThree",components:{PerkBlock:n.a,PatternShortTextBlock:l.a},props:{section:{type:Object,default:function(){return{}}}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.section?r("section",{staticClass:"perks-layoutThree",attrs:{id:t.section.tag}},[r("div",{staticClass:"container"},[r("PerkBlock",{staticClass:"col-start-2 row-start-1",attrs:{heading:t.section.perkOne.heading,"heading-highlight":t.section.perkOne.headingHighlight,description:t.section.perkOne.description,highlight:t.section.perkOne.highlight,index:t.section.perkOne.perkIndex}}),t._v(" "),t.section.perkOne&&t.section.perkOne.image1x1?r("div",{staticClass:"perk-image col-span-1 col-start-1 row-span-1 row-start-1 aspect-square"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkOne.image1x1,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-1 row-start-2 sm:col-start-3 sm:row-start-2 lg:col-start-5 lg:row-start-1",attrs:{heading:t.section.perkTwo.heading,"heading-highlight":t.section.perkTwo.headingHighlight,description:t.section.perkTwo.description,highlight:t.section.perkTwo.highlight,index:t.section.perkTwo.perkIndex}}),t._v(" "),r("PerkBlock",{staticClass:"col-start-2 row-start-2 sm:col-start-3 sm:row-start-3 lg:col-start-5 lg:row-start-2",attrs:{heading:t.section.perkThree.heading,"heading-highlight":t.section.perkThree.headingHighlight,description:t.section.perkThree.description,highlight:t.section.perkThree.highlight,index:t.section.perkThree.perkIndex}}),t._v(" "),t.section.perkThree&&t.section.perkThree.image2x2?r("div",{staticClass:"perk-image col-span-2 col-start-1 row-span-2 row-start-3 aspect-square sm:row-start-2 lg:col-start-3 lg:row-start-1"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkThree.image2x2,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),t.section.patternShortText1x1?r("PatternShortTextBlock",{staticClass:"col-start-1 row-start-5 sm:col-start-3 sm:row-start-1 lg:col-start-2 lg:row-start-2",attrs:{block:t.section.patternShortText1x1}}):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);