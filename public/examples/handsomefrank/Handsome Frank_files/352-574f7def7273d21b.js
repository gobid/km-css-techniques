"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{3999:function(e,i){var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;i.G=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var i=e.split("@");return!(i[0].length>64)&&!i[1].split(".").some((function(e){return e.length>63}))}},8210:function(e,i,n){var a=n(5893),t=n(8969),o=n(6930);i.Z=function(e){var i,n,l,s,r,c,u=e.baseHeadline,d=e.baseCopy,v=e.headline,m=e.copy,h=e.contactPerson,_=e.artistName,p=v?v.replace("<name>",_?_.split(" ")[0]:""):u.replace("<name>",_?_.split(" ")[0]:""),x=m?m.replace("<name>",_||""):d.replace("<name>",_||"");return(0,a.jsxs)("section",{className:"CommissionIllustratorModule",children:[(0,a.jsxs)("div",{className:"CommissionIllustratorModule__TextWrapper",children:[(0,a.jsx)("h3",{className:"HeadlineMedium",style:{color:(null===h||void 0===h||null===(i=h.primaryColor)||void 0===i?void 0:i.length)>=1?null===h||void 0===h?void 0:h.primaryColor:"#fff"},children:p}),(0,a.jsx)("p",{children:x}),(0,a.jsx)(t.Z,{isExternalLink:!0,href:"mailto:".concat(null===h||void 0===h?void 0:h.email),linkText:null===h||void 0===h?void 0:h.email,linkTextColor:"#fff"}),(0,a.jsx)(t.Z,{isExternalLink:!0,href:"tel:".concat(null===(n=h.phone)||void 0===n?void 0:n.replace("(0)","").replace(/\s+/g,"")),linkText:null===h||void 0===h?void 0:h.phone,linkTextColor:"#fff"})]}),(null===h||void 0===h||null===(l=h.profileImage)||void 0===l||null===(s=l.image)||void 0===s||null===(r=s.asset)||void 0===r||null===(c=r._ref)||void 0===c?void 0:c.length)>=1&&(0,a.jsx)("div",{className:"CommissionIllustratorModule__ImageWrapper",children:(0,a.jsx)("div",{className:"CommissionIllustratorModule__Image",children:(0,a.jsx)(o.Z,{src:null===h||void 0===h?void 0:h.profileImage.image,alt:null===h||void 0===h?void 0:h.profileImage.alt,sizes:[800,400]})})})]})}},5851:function(e,i,n){var a=n(5893),t=n(7294),o=n(1163),l=n(3524),s=n(5740),r=n(7991),c=n(5101);i.Z=function(e){var i,n=e.input,u=e.theme,d=void 0===u?"Light":u,v=(0,o.useRouter)(),m=(0,t.useState)([]),h=m[0],_=m[1],p=(0,l.L)(),x=(0,t.useState)("View all our illustrators."),f=x[0],C=x[1],g=n.headline;return(0,t.useEffect)((function(){var e=(0,c.T)(n.artists).slice(0,4);_(e)}),[n]),(0,t.useEffect)((function(){p<=680&&C("View illustrators"),p>=681&&C("View all our illustrators.")}),[p]),(0,a.jsxs)("section",{className:"DiscoverArtistsTeaser Theme".concat(d),children:[(0,a.jsx)("h3",{className:"HeadlineSmall",children:g}),(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__CardsContainer",children:(0,a.jsxs)("div",{className:"DiscoverArtistsTeaser__Cards",children:["/"===v.pathname&&(null===n||void 0===n||null===(i=n.selectedArtists)||void 0===i?void 0:i.map((function(e,i){var n=e.artist,t=n.artistName,o=n.teaserImages,l=n.slug,s=n.pageTransitionSettings;return(0,a.jsx)(r.Z,{artistName:t,images:o,slug:l,transitionColor:s.backgroundColor,transitionImageUrl:s.image.imageUrl},"".concat(t,"-").concat(i))}))),"/"!==v.pathname&&(null===h||void 0===h?void 0:h.map((function(e,i){var n=e.artistName,t=e.teaserImages,o=e.slug,l=e.pageTransitionSettings;return(0,a.jsx)(r.Z,{artistName:n,images:t,slug:o,transitionColor:l.backgroundColor,transitionImageUrl:l.image.imageUrl},"".concat(n,"-").concat(i))})))]})}),(0,a.jsx)(s.Z,{text:f,href:"/illustrators",eyeTheme:"Orange"})]})}},7991:function(e,i,n){var a=n(5893),t=n(7294),o=n(6038),l=n(4857),s=n(293),r=n(7661),c=n(420),u=n(3524);i.Z=function(e){var i=e.slug,n=void 0===i?"/":i,d=e.className,v=e.artistName,m=e.images,h=e.transitionColor,_=e.transitionImageUrl,p=e.showNewBadge,x=void 0!==p&&p,f=(0,l.w)(),C=(0,s.g)(),g=(0,u.L)(),j=(0,t.useState)(0),N=j[0],y=j[1],I=(0,t.useRef)(null),T=(0,t.useRef)(null);return(0,a.jsxs)("a",{href:"/illustrators/".concat(n),className:"DiscoverArtistsTeaser__Card ".concat(d),onMouseOver:function(){T&&T.current&&g>=1025&&o.ZP.to(T.current,{scale:1.03,duration:.48,ease:"back.out(2)"}).play(),f({href:"/illustrators/".concat(n)})},onMouseOut:function(){T&&T.current&&g>=1025&&o.ZP.to(T.current,{scale:1,duration:.48,ease:"expo.out"}).play()},onClick:function(e){return C({event:e,href:"/illustrators/".concat(n),handlerBackgroundColor:h,handerHeadline:v,handlerIllustration:_})},children:[x&&(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__Card__Badge"}),(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__Card__Images",onMouseMove:function(e){if(g>=1025){var i=e.nativeEvent.offsetX/I.current.offsetWidth;y(Math.floor(i*m.length))}},ref:I,children:(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__Card__Image",ref:T,children:null===m||void 0===m?void 0:m.map((function(e,i){var n=e.url,t=e.alt;return(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__Card__ImageContainer",style:{zIndex:N===i?1:0},children:(0,a.jsx)(r.Z,{imageUrl:n,imageAlt:t,sizes:[800,400]})},i)}))})}),(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__Card__ArtistInfoContainer",children:(0,a.jsxs)("div",{className:"DiscoverArtistsTeaser__Card__ArtistInfo",children:[(0,a.jsx)("div",{className:"DiscoverArtistsTeaser__Card__Arrow",children:(0,a.jsx)(c.Z,{})}),(0,a.jsx)("span",{children:v})]})})]})}},4100:function(e,i,n){var a=n(5893),t=n(7294),o=n(5697),l=n.n(o),s=n(1163),r=n(3524),c=n(7661),u=n(3583),d=n(8299),v=function(e){var i,n,o,l,v,m,h,_,p,x=e.input,f=(0,s.useRouter)(),C=(0,r.L)(),g=(0,t.useState)(0),j=g[0],N=g[1],y=x.headline,I=x.subheading,T=x.colors,k=x.image,A=k.image,W=A.image,b=A.alt,M=k.imagePosition,S=k.imageScale,Z=!1;return(0,t.useEffect)((function(){N(window.innerHeight)}),[C]),(0,a.jsxs)("section",{className:"HeroDefault ".concat("WithoutWave"),style:{height:"".concat(j,"px")},children:[(0,a.jsx)("div",{className:"HeroDefault__Content ".concat("WithoutWave"),style:{backgroundColor:(null===T||void 0===T||null===(i=T.backgroundColor)||void 0===i?void 0:i.length)>0?T.backgroundColor:"#170F7B"},children:(0,a.jsxs)("div",{className:"HeroDefault__HeadlineContainer",children:[(0,a.jsx)("h1",{style:{color:(null===T||void 0===T||null===(n=T.headlineColor)||void 0===n?void 0:n.length)>0?T.headlineColor:d.D.LIGHT},children:y}),(0,a.jsx)("h2",{className:"/about"===f.pathname?"HasShadow":"",style:{color:(null===T||void 0===T||null===(o=T.sublineColor)||void 0===o?void 0:o.length)>0?T.sublineColor:d.D.LIGHT},children:I})]})}),Z,!(null===x||void 0===x||null===(l=x.video)||void 0===l||null===(v=l.heroVideo)||void 0===v?void 0:v.url)&&(0,a.jsx)("div",{className:"HeroDefault__AnimationContainer ".concat((null===M||void 0===M?void 0:M.length)>0&&null!==M?M:"Center"," ").concat("WithoutWave"," ").concat(S),children:(0,a.jsx)(c.Z,{imageUrl:W,imageAlt:b,sizes:[1440,1080,768,414]})}),(null===x||void 0===x||null===(m=x.video)||void 0===m||null===(h=m.heroVideo)||void 0===h||null===(_=h.url)||void 0===_?void 0:_.length)>=1&&(0,a.jsx)("div",{className:"HeroDefault__VideoContainer Size".concat(null===x||void 0===x||null===(p=x.video)||void 0===p?void 0:p.videoSize),children:(0,a.jsx)(u.Z,{assetDocument:null===x||void 0===x?void 0:x.video.heroVideo,autoload:!0,autoplay:!0,showControls:!1,loop:!0,playsInline:!0,muted:!0})})]})};i.Z=v,v.propTypes={showWave:l().bool,imagePosition:l().string},v.defaultProps={showWave:!1,imagePosition:"BottomLeft"}},5740:function(e,i,n){n.d(i,{Z:function(){return _}});var a=n(5893),t=n(7294),o=n(5697),l=n.n(o),s=n(1664),r=n.n(s),c=n(6038),u=n(3524),d=function(e){var i=e.theme,n=void 0===i?"Blue":i,o=(0,u.L)(),l=(0,t.useRef)(null),s=(0,t.useRef)(null),r=(0,t.useState)(!1),c=r[0],d=r[1],v=function(e){if(s.current)if(c)s.current.style.transform="translate(-50%,-50%) rotate(0deg)";else{var i=100*e.clientX/window.innerWidth,n=100*e.clientY/window.innerHeight,a=i<=20?20:i>=80?80:i,t=n<=20?20:n>=80?80:n;s.current.style.left="".concat(a,"%"),s.current.style.top="".concat(t,"%"),s.current.style.transform="translate3d(-".concat(i,"%, -").concat(n,"%, 0)")}};return(0,t.useEffect)((function(){if(o<=1024&&(d(!0),s.current.style.transform="translate(-50%,-50%) rotate(0deg)"),o>=1025&&d(!1),o>=1025&&!c)return document.addEventListener("mousemove",(function(e){v(e)})),function(){document.removeEventListener("mousemove",(function(e){v(e)}))}}),[o,c]),(0,a.jsx)("div",{className:"AnimatedEye Theme".concat(n),children:(0,a.jsxs)("div",{className:"EyeballWrapper",ref:l,children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26.427",height:"16.54",viewBox:"0 0 26.427 16.54",children:(0,a.jsx)("path",{d:"M13.271 0C5.676 0 .021 8.27.021 8.27c-.422 0 5.371 8.27 13.25 8.27s13.156-8.27 13.156-8.27S20.205 0 13.271 0",fill:"#fff"})}),(0,a.jsx)("div",{className:"Eyeball Theme".concat(n," ").concat(c?"NotAnimated":""),ref:s})]})})},v=n(4857),m=n(293),h=function(e){var i=e.isButton,n=e.isArtistLink,o=void 0!==n&&n,l=e.artistName,s=e.artistLinkPageTransitionSettings,u=e.onClick,h=e.href,_=e.text,p=e.eyeTheme,x=(0,v.w)(),f=(0,m.g)(),C=(0,t.useRef)(null),g=c.ZP.timeline(),j=function(){C&&C.current&&g.restart()};return(0,t.useEffect)((function(){C&&C.current&&g.fromTo(C.current,{height:16.54},{height:0,duration:.14,ease:"power3.out"}).to(C.current,{height:16.54,duration:.14,ease:"power3.out"}).to(C.current,{height:0,duration:.14,ease:"power3.out"}).to(C.current,{height:16.54,duration:.14,ease:"power3.out"}).pause()}),[]),(0,a.jsx)("div",{className:"LinkWithEyeIcon",children:i?(0,a.jsxs)("button",{"aria-label":"More",onMouseEnter:j,onClick:u,className:"LinkWithEyeIcon",children:[(0,a.jsx)("div",{className:"LinkWithEyeIcon__Icon",children:(0,a.jsx)(d,{theme:p})}),(0,a.jsx)("span",{className:"HeadlineSmall",children:_})]}):o?(0,a.jsxs)("a",{href:"/illustrators/".concat(h),className:"LinkWithEyeIcon",onMouseEnter:j,onMouseOver:function(){x({href:"/illustrators/".concat(h)})},onClick:function(e){var i;return f({event:e,href:"/illustrators/".concat(h),handlerBackgroundColor:null===s||void 0===s?void 0:s.backgroundColor,handerHeadline:l,handlerIllustration:null===s||void 0===s||null===(i=s.image)||void 0===i?void 0:i.imageUrl})},children:[(0,a.jsx)(d,{theme:p}),(0,a.jsxs)("span",{className:"LinkWithEyeIcon__TextWrapper",children:[(0,a.jsx)("span",{className:"HeadlineSmall",children:_}),(0,a.jsx)("span",{className:"HeadlineSmall",children:_})]})]}):(0,a.jsx)(r(),{href:h,children:(0,a.jsxs)("a",{className:"LinkWithEyeIcon",onMouseEnter:j,children:[(0,a.jsx)(d,{theme:p}),(0,a.jsxs)("span",{className:"LinkWithEyeIcon__TextWrapper",children:[(0,a.jsx)("span",{className:"HeadlineSmall",children:_}),(0,a.jsx)("span",{className:"HeadlineSmall",children:_})]})]})})})},_=h;h.propTypes={isButton:l().bool},h.defaultProps={isButton:!1}},4405:function(e,i,n){var a=n(5893),t=n(7294),o=n(6038),l=n(3524),s=n(6241),r=n(6930),c=n(8969),u=function(e){var i=e.headline,n=e.copy,s=e.imageUrl,u=e.imageAlt,d=e.linkText,v=e.href,m=e.textColor,h=e.isExternalLink,_=void 0!==h&&h,p=(0,l.L)(),x=(0,t.useRef)(null),f=function(){p>=1025&&(x&&x.current&&o.ZP.to(x.current,{scale:1.06,duration:.48,ease:"back.out(2)"}).play())},C=function(){p>=1025&&(x&&x.current&&o.ZP.to(x.current,{scale:1,duration:.48,ease:"expo.out"}).play())};return(0,a.jsxs)("div",{className:"MultiColumnSection__Column",children:[(0,a.jsxs)("div",{className:"MultiColumnSection__Column__Content Color".concat(m),children:[(0,a.jsx)("h3",{className:"HeadlineMedium",children:i}),(0,a.jsx)("p",{children:n}),d&&(null===v||void 0===v?void 0:v.length)>=2&&(0,a.jsx)(c.Z,{isExternalLink:_,linkText:d,linkColor:"#fff",href:v,onMouseOver:f,onMouseOut:C})]}),(0,a.jsx)("div",{className:"MultiColumnSection__Column__LinkContainer Color".concat(m),children:d&&(null===v||void 0===v?void 0:v.length)>=2&&(0,a.jsx)(c.Z,{isExternalLink:_,linkText:d,linkColor:"#fff",href:v,onMouseOver:f,onMouseOut:C})}),(0,a.jsx)("div",{ref:x,className:"MultiColumnSection__Column__Background",children:(0,a.jsx)(r.Z,{src:s,alt:u,sizes:[1280,800]})})]})};i.Z=function(e){var i,n,t=e.input,o=(0,s.y)();return(0,a.jsx)("section",{className:"MultiColumnSection",children:null===t||void 0===t||null===(i=t.content)||void 0===i||null===(n=i.columns)||void 0===n?void 0:n.map((function(e){var i,n,t,l,s,r,c=e.headline,d=e.copy,v=e.image,m=e.link,h=e.textColor;return(0,a.jsx)(u,{headline:c,copy:d,imageUrl:v.image,linkText:m.linkText,isExternalLink:(null===(i=m.externalLinkTarget)||void 0===i?void 0:i.length)>=1,href:(null===m||void 0===m||null===(n=m.externalLinkTarget)||void 0===n?void 0:n.length)>=1?m.externalLinkTarget.includes("@")?"mailto:".concat(m.externalLinkTarget):m.externalLinkTarget:"".concat(o({pageType:"".concat(null===m||void 0===m||null===(t=m.linkTarget)||void 0===t?void 0:t.pageType)})).concat((null===m||void 0===m||null===(l=m.linkTarget)||void 0===l||null===(s=l.slug)||void 0===s?void 0:s.length)>=1?"/".concat(null===m||void 0===m||null===(r=m.linkTarget)||void 0===r?void 0:r.slug):""),textColor:h},c)}))})}},5101:function(e,i,n){function a(e){for(var i,n=e.length;0!=n;){var a;i=Math.floor(Math.random()*n),n--,a=[e[i],e[n]],e[n]=a[0],e[i]=a[1]}return e}n.d(i,{T:function(){return a}})},3614:function(e,i,n){n.d(i,{Z:function(){return I}});var a=n(5893),t=n(7294),o=n(4100),l=n(5017),s=n(7661),r=n(5740),c=function(e){var i=e.input,n=(0,l.wW)(),o=i.headline,c=i.introduction,u=i.slides,d=(0,t.useState)(0),v=d[0],m=d[1],h=(0,t.useState)(!1),_=h[0],p=h[1],x=(0,t.useState)(!0),f=x[0],C=x[1],g=(0,t.useState)(!1),j=g[0],N=g[1];return(0,a.jsxs)("section",{className:"VerticalCarouselWithCopy",children:[(0,a.jsxs)("div",{className:"VerticalCarouselWithCopy__ContentContainer",children:[(0,a.jsx)("p",{children:c}),(0,a.jsx)("h3",{className:"HeadlineMedium",children:o})]}),(0,a.jsxs)("div",{className:"VerticalCarouselWithCopy__CarouselContainer",children:[(0,a.jsxs)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation",children:[(0,a.jsxs)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__Prev",children:[(0,a.jsx)("button",{"aria-label":"Previous",className:"VerticalCarouselWithCopy__CarouselNavigation__ArrowPrev ".concat(_?"IsActive":""),onClick:function(){1===v?(m(0),p(!1)):(p(!0),C(!0),m(v-1))}}),u.map((function(e,i){var n=e.slideImage.alt;return(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__DotWrapper ".concat(i<=v?"IsVisible":""),children:(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__DotPrev ".concat(i<=v?"IsVisible":"")})},"".concat(n,"-").concat(i,"-prev"))}))]}),(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__HorizontalDots",children:null===u||void 0===u?void 0:u.map((function(e,i){var n=e.slideImage.alt;return(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__DotWrapper HorizontalDotWrapper ".concat(i<=v?"IsVisible":""),children:(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__DotPrev ".concat(i===v?"IsVisible":"")})},"".concat(n,"-").concat(i,"-prev"))}))}),(0,a.jsxs)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__Next",children:[u.map((function(e,i){var n=e.slideImage.alt;return(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__DotWrapper ".concat(i>v?"IsVisible":""),children:(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__CarouselNavigation__DotNext ".concat(i>v?"IsVisible":"")})},"".concat(n,"-").concat(i,"-next"))})),(0,a.jsx)("button",{"aria-label":"Next",className:"VerticalCarouselWithCopy__CarouselNavigation__ArrowNext ".concat(f?"IsActive":""),onClick:function(){v>=u.length-2&&C(!1),m(v+1),p(!0)}})]})]}),(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__SlidesContainer",children:u.map((function(e,i){var n=e.copy,t=e.slideImage,o=t.image,l=t.alt;return(0,a.jsxs)("div",{className:"VerticalCarouselWithCopy__Slide ".concat(i===v?"IsCurrentSlide":""," ").concat(i<=0?"IsFirstSlideOnMobile":""," ").concat(j?"IsExpanded":"IsCollapsed"),children:[(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__Slide__Image ".concat(i===v?"IsCurrentSlide":""),children:(0,a.jsx)(s.Z,{imageUrl:o,altText:l})}),(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__Slide__Copy MobileOnly",children:(0,a.jsx)("p",{children:n})})]},i)}))}),!j&&(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__ExpandButton",children:(0,a.jsx)(r.Z,{isButton:!0,text:"Read our story",onClick:function(){N(!j),n("Expand Mobile Carousel on About Page")}})})]}),(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__Slide__CopyContainer",children:u.map((function(e,i){var n=e.copy;return(0,a.jsx)("div",{className:"VerticalCarouselWithCopy__Slide__Copy ".concat(i===v?"IsCurrentSlide":""),children:(0,a.jsx)("p",{children:n})},n)}))})]})},u=n(3556),d=n(4405),v=n(6038),m=n(8863),h=n.n(m);function _(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}var p=function(e){var i=e.input,n=e.isActive,o=void 0!==n&&n,l=e.onClick,s=i.headline,r=i.copy,c=(0,t.useRef)();return(0,t.useEffect)((function(){if(c&&c.current){var e;if(o)v.ZP.fromTo(c.current,_({y:0,height:0,opacity:0,marginTop:0},"opacity",0),{y:0,height:"auto",marginTop:35,opacity:1,duration:.46,ease:"back.out(1.7)"}).play();if(!o)v.ZP.fromTo(c.current,{y:0,height:"auto",marginTop:35,opacity:1},(_(e={y:0,opacity:0,height:0,marginTop:0},"opacity",0),_(e,"duration",.46),_(e,"ease","expo.out"),e)).play()}}),[o]),(0,a.jsxs)("li",{className:"Accordion__Item",children:[(0,a.jsxs)("button",{"aria-label":"Toggle",className:"Accordion__Item__Title",onClick:l,children:[(0,a.jsx)("span",{className:"HeadlineSmall",children:s}),(0,a.jsxs)("div",{className:"Accordion__Item__Title__Icon",children:[(0,a.jsx)("div",{className:"Accordion__Item__Title__IconLine ".concat(o?"IsActive":"")}),(0,a.jsx)("div",{className:"Accordion__Item__Title__IconLine ".concat(o?"IsActive":"")}),(0,a.jsx)("div",{className:"Accordion__Item__Title__IconBackground ".concat(o?"IsActive":"")})]})]}),(0,a.jsx)("div",{ref:c,className:"Accordion__Item__Copy ".concat(o?"IsActive":""),children:(0,a.jsx)(h(),{blocks:r})}),(0,a.jsx)("div",{className:"Accordion__Item__Border"})]})},x=function(e){var i=e.input,n=(0,t.useState)(""),o=n[0],l=n[1],s=i.headline,r=i.items.item;return(0,a.jsxs)("section",{className:"Accordion",children:[(0,a.jsx)("h3",{className:"HeadlineMedium",children:s}),(0,a.jsx)("div",{className:"Accordion__ContentContainer",children:(0,a.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e,i){return(0,a.jsx)(p,{input:e,isActive:e.headline===o,onClick:function(){return l(e.headline===o?"":e.headline)}},i)}))})})]})},f=n(5851),C=n(1664),g=n.n(C),j=n(6241),N=function(e){var i,n=e.input,t=(0,j.y)();return(0,a.jsxs)("section",{className:"ClientsList",children:[(0,a.jsx)("h3",{children:"Clients"}),(0,a.jsx)("div",{className:"ClientsList__Content",children:(0,a.jsx)("ul",{children:null===n||void 0===n||null===(i=n.clients)||void 0===i?void 0:i.map((function(e){var i,n,o=e.clientName,l=e.linkTarget;return(0,a.jsx)("li",{children:(null===l||void 0===l||null===(i=l.pageType)||void 0===i?void 0:i.length)>=1?(0,a.jsx)(g(),{href:"".concat(t({pageType:l.pageType})).concat((null===(n=l.slug)||void 0===n?void 0:n.length)>=1?"/".concat(l.slug):""),children:(0,a.jsx)("a",{children:o})}):(0,a.jsx)("p",{children:o})},o)}))})})]})},y=n(8210),I=function(e){var i,n=e.input;return(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(o.Z,{input:null===n||void 0===n?void 0:n.hero}),null===n||void 0===n||null===(i=n.modules)||void 0===i?void 0:i.map((function(e,i){switch(e._type){case"verticalCarouselWithCopyModule":return(0,a.jsx)(c,{input:e},i);case"singleColumnContentTeaserModule":return(0,a.jsx)(u.Z,{input:e},i);case"multiColumnContentTeaserModule":return(0,a.jsx)(d.Z,{input:e},i);case"commissionIllustratorModule":var t,o,l,s;return(0,a.jsx)(y.Z,{headline:e.headline,copy:e.copy,baseHeadline:null===(o=null===n||void 0===n||null===(t=n.commissionIllustratorModule)||void 0===t?void 0:t.baseSettings[0])||void 0===o?void 0:o.headline,baseCopy:null===(s=null===n||void 0===n||null===(l=n.commissionIllustratorModule)||void 0===l?void 0:l.baseSettings[0])||void 0===s?void 0:s.copy,contactPerson:e.teamMember},i);case"accordionModule":return(0,a.jsx)(x,{input:e},i);case"discoverArtistsTeaserModule":return(0,a.jsx)(f.Z,{input:e},i);case"clientListModule":return(0,a.jsx)(N,{input:e},i)}}))]})}}}]);