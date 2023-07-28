var __values=this&&this.__values||function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],a=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};!function(){function e(e){var n,t;e=e||{};var o=document.querySelector(e.mainNavSelector);if(!o){var r=document.querySelectorAll("nav");o=Array.from(r).find(function(e){return a.isElementVisible(e,{shouldBeInViewport:!1})})}if(o||(o=document.querySelector('[role="navigation"]')),!o)return console.log("Navigation menu was not found!");if(!e.ignoreAriaAttributes&&0!==o.querySelectorAll("[aria-expanded], [aria-haspopup]").length||o.querySelector("[data-uw-rm-mega-nav]"))return console.log("Navigation menu already remediated!");o.setAttribute("role","navigation"),a.injectStylesheet(".userway__menu--show { display: block !important; opacity: 1 !important; visibility: visible !important; transition: none !important; max-height: none !important; } .userway__menu--hide { display: none !important; opacity: 0 !important; visibility: hidden !important; transition: none !important; }"),a.injectStylesheet(".userway__menu--show > * { display: block !important; opacity: 1 !important; visibility: visible !important; transition: none !important; max-height: none !important; }"),a.injectStylesheet(".userway__menu--active { display: block !important; opacity: 1 !important; visibility: visible !important; transition: none !important; max-height: none !important; } .userway__menu--inactive { display: none !important; opacity: 0 !important; visibility: hidden !important; transition: none !important; }"),a.injectStylesheet(".userway__menu--active > * { display: block !important; opacity: 1 !important; visibility: visible !important; transition: none !important; max-height: none !important; }"),a.injectStylesheet("\n      .userway__nav-menu-tooltip {\n        white-space: nowrap;\n        text-transform: none;\n        transition: opacity 300ms linear;\n        opacity: 0;\n        display: none;\n        position: fixed;\n        z-index: 100000;\n        box-sizing: border-box;\n        border: 2px solid rgba(255, 255, 255, 0.29);\n        background: #000;\n        width: 180px;\n        margin: 0;\n        padding: 6px 11px;\n        border-radius: 5px;\n        align-items: center;\n        text-align: center;\n        user-select: none;\n        letter-spacing: normal;\n    }\n    .userway__nav-menu-tooltip-title {\n        box-sizing: border-box;\n        padding-right: 7px;\n        color: #fff;\n        font-size: 12px;\n        line-height: 14px;\n        font-family: Arial, sans-serif;\n        margin: auto;\n    }\n    .userway__nav-menu-tooltip-icon {\n      box-sizing: border-box;\n      font-family: Arial, sans-serif;\n      color: #fff;\n      height: 18px;\n      padding: 2px;\n      border-radius: 3px;\n      background: #333333;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .userway__nav-menu-tooltip-icon-separator {\n        box-sizing: border-box;\n        font-family: Arial, sans-serif;\n        color: #fff;\n        padding-left: 5px;\n        padding-right: 5px;\n        margin-top: -2px;\n        font-size: 12px;\n    }\n    "),a.injectStylesheet("\n        .userway__nav-menu-tooltip-2 {\n          text-transform: none;\n          transition: opacity 300ms linear;\n          opacity: 0;\n          z-index: 10000;\n          box-sizing: border-box;\n          position: fixed;\n          display: none;\n          border-radius: 5px;\n          text-align: center;\n          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);\n          letter-spacing: normal;\n      }\n      .userway__nav-menu-tooltip-2-container {\n          box-sizing: border-box;\n          border: 2px solid rgba(255, 255, 255, 0.29);\n          background: #000;\n          width: 100%;\n          margin: 0;\n          padding: 6px 11px;\n          border-radius: 5px;\n          display: flex;\n          align-items: center;\n          text-align: center;\n          text-transform: none !important;\n          user-select: none;\n          height: 34px;\n      }\n      .userway__nav-menu-tooltip-2-title {\n          box-sizing: border-box;\n          padding-right: 7px;\n          color: #fff;\n          font-size: 12px;\n          line-height: 14px;\n          font-family: Arial, sans-serif;\n          margin: auto;\n      }\n      .userway__nav-menu-tooltip-2-icon {\n        box-sizing: border-box;\n        color: #fff;\n        padding: 2px;\n        width: 18px;\n        height: 18px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 3px;\n        background: #333333;\n      }\n      .userway__nav-menu-tooltip-2-separator {\n          box-sizing: border-box;\n          font-family: Arial, sans-serif;\n          color: #fff;\n          padding-left: 3px;\n          padding-right: 3px;\n          margin-top: -2px;\n          font-size: 12px;\n      }\n    "),e.customCss&&a.injectStylesheet(e.customCss);var l,s=[],c=o.querySelector(e.topLevelMenuItemSelector)||o.querySelector("li");if(c){var u=c.parentNode.children;try{for(var m=__values(u),p=m.next();!p.done;p=m.next()){var v=p.value;if(a.isElementVisible(v,{shouldBeInViewport:!1,skipParentCheck:!0})){var d=("A"===v.nodeName?v:null)||("BUTTON"===v.nodeName?v:null)||v.querySelector(e.topLevelMenuItemTriggerSelector)||a.getFocusableElement("next",v,{childrenOnly:!0})||v.querySelector("a")||v.querySelector("button");if(d){d.setAttribute("tabindex","0");var f={link:d},g=v.querySelector(e.subMenuSelector)||v.querySelector("ul");g&&(f.ul=g),g||v!=d||(g=v.parentNode.querySelector(e.subMenuSelector)||v.parentNode.querySelector("ul")),s.push(f)}}}}catch(e){n={error:e}}finally{try{p&&!p.done&&(t=m.return)&&t.call(m)}finally{if(n)throw n.error}}if(0!==Object.keys(s).length){var y=s[0].link,b=s[s.length-1].link;o.insertAdjacentHTML("beforeend",'\n      <div class="userway__nav-menu-tooltip" aria-hidden="true" aria-label="Navigate with left &amp; right arrow keys">\n        <span class="userway__nav-menu-tooltip-title">NAVIGATE WITH</span>\n        <span class="userway__nav-menu-tooltip-icon">\n          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">\n            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>\n          </svg>\n        </span>\n        <span class="userway__nav-menu-tooltip-icon-separator"></span>\n        <span class="userway__nav-menu-tooltip-icon">\n          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">\n            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>\n          </svg>\n        </span>\n      </div>\n      '),o.insertAdjacentHTML("beforeend",'\n      <div class="userway__nav-menu-tooltip-2" aria-hidden="true">\n          <div aria-label="Navigate with left &amp; right arrow keys" class="userway__nav-menu-tooltip-2-container">\n              <span class="userway__nav-menu-tooltip-2-title">USE</span>\n              <span class="userway__nav-menu-tooltip-2-icon">\n                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">\n                      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />\n                  </svg>\n              </span>\n              <span class="userway__nav-menu-tooltip-2-separator"></span>\n              <span class="userway__nav-menu-tooltip-2-icon">\n                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">\n                      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />\n                  </svg>\n              </span>\n          </div>\n      </div>\n  \n      ');var h=function(){var e=a.getElementPosition(u[0]),n=o.querySelector(".userway__nav-menu-tooltip");clearTimeout(void 0),n.style.display="flex",setTimeout(function(){n.style.opacity=1},10),n.style.left=e.x-185+"px",n.style.top=e.y+2+"px"},w=function(){var e=o.querySelector(".userway__nav-menu-tooltip");e.style.opacity=0,e.style.display="none";var n=o.querySelector(".userway__nav-menu-tooltip-2");n.style.opacity=0,n.style.display="none"};u[0].addEventListener("focus",h),u[0].addEventListener("blur",w),y.addEventListener("focus",h),y.addEventListener("blur",w),window.addEventListener("scroll",w),y.addEventListener("blur",function(e){setTimeout(function(){o.contains(document.activeElement)||S(l)})});var x=b,_=s[s.length-1].ul;_&&(x=Array.from(_.querySelectorAll(a.focusableElementsSelector)).pop()),x.addEventListener("blur",function(e){setTimeout(function(){o.contains(document.activeElement)||S(l)})});for(var S=function(e){var n,t;if(e){e.classList.add("userway__menu--inactive"),e.classList.remove("userway__menu--active");var a=s.find(function(n){return n.listWrapper===e}),i=Array.from(a.ul.querySelectorAll(".userway__menu--show"));try{for(var o=__values(i),r=o.next();!r.done;r=o.next()){r.value.classList.remove("userway__menu--show")}}catch(e){n={error:e}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}a.link.setAttribute("aria-expanded",!1)}},k=function(e){if(e){var n=s.find(function(n){return n.listWrapper===e||n.ul===e});n.link.setAttribute("aria-expanded",!0);var t=n.listWrapper;l=t,t.classList.add("userway__menu--active"),t.classList.remove("userway__menu--inactive");(t.getBoundingClientRect().width/t.offsetWidth==0||t.getBoundingClientRect().height/t.offsetHeight==0)&&(t.style.transform="scale(1)")}},A=function(e,n){if(a.keys.isTab(n)&&e&&!i){n.preventDefault(),k(e);a.getFocusableElement("next",e,{childrenOnly:!0,canBeHidden:!0}).focus()}},N=function(e,n){n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),S(l),e&&(a.isElementVisible(e,{shouldBeInViewport:!1})||k(e))},L=function(){S(l)},E=function(e){var n=o.querySelector(".userway__nav-menu-tooltip-2"),t=a.getElementPosition(e);n.style.display="flex",setTimeout(function(){n.style.opacity=1},10),n.style.top=t.y+e.offsetHeight+5+"px",n.style.left=t.x+"px"},P=function(){var e=o.querySelector(".userway__nav-menu-tooltip-2");e.style.opacity=0,e.style.display="none"},O=0;O<s.length;O++){var M=s[O],q=M.link,C=M.ul;if(C){q.setAttribute("aria-expanded",!1);for(var I,T=C;!a.isElementVisible(T,{shouldBeInViewport:!1,skipParentCheck:!0})||0===T.offsetWidth||0===T.offsetHeight;)I=T,T=T.parentNode;M.listWrapper=I||C,M.listWrapper.classList.add("userway__menu--inactive"),M.listWrapper.setAttribute("aria-haspopup",!0),q.addEventListener("focus",E.bind(this,q)),q.addEventListener("blur",P.bind(this))}q.addEventListener("keydown",A.bind(this,C)),q.addEventListener("focus",L.bind(this)),q.parentNode.addEventListener("mouseenter",N.bind(this,C))}var H=function(e,n,t){var r,l;if(n&&!a.isElementVisible(t,{skipParentCheck:!0})){for(var s=t;!a.isElementVisible(s,{skipParentCheck:!0});)s=s.parentNode;var c=Array.from(s.children).filter(function(e){return o.contains(e)});try{for(var u=__values(c),m=u.next();!m.done;m=u.next()){var p=m.value;if(!p.classList.contains("userway__nav-menu-tooltip")&&!p.classList.contains("userway__nav-menu-tooltip-2")&&!a.isElementVisible(p,{skipParentCheck:!0})){p.classList.add("userway__menu--show");var v=Array.from(p.querySelectorAll(a.focusableElementsSelector)).pop();v&&v.addEventListener("blur",function(){i||p.classList.remove("userway__menu--show")},{once:!0})}}}catch(e){r={error:e}}finally{try{m&&!m.done&&(l=u.return)&&l.call(u)}finally{if(r)throw r.error}}c.length&&(e.preventDefault(),setTimeout(function(){t.focus()},100))}};o.addEventListener("keydown",function(n){var t,o,r,c=s.find(function(e){return n.target===e.link});if(!c){var u=a.findAncestor(n.target,e.subMenuSelector)||a.findAncestor(n.target,".userway__menu--active")||a.findAncestor(n.target,"ul");u&&(r=s.find(function(e){return u===e.ul||u===e.listWrapper||Array.from(u.parentNode.children).find(function(n){return n===e.ul||n===e.listWrapper})}))}if(a.keys.isArrowRight(n))if(n.preventDefault(),c)if(c.link===b)y.focus();else{var m=a.getFocusableElement("next",c.link);m.focus()}else if(S(l),r)if(r.link===b)y.focus();else{var m=a.getFocusableElement("next",r.link);m.focus()}if(a.keys.isArrowLeft(n))if(n.preventDefault(),c)if(c.link===y)b.focus();else{var p=a.getFocusableElement("prev",c.link);p.focus()}else if(S(l),r)if(r.link===y)b.focus();else{var p=a.getFocusableElement("prev",r.link);p.focus()}if(a.keys.isArrowUp(n))if(n.preventDefault(),c){if(c.ul){k(c.ul);for(var v=c.listWrapper.querySelectorAll(a.focusableElementsSelector),d=v.length-1,f=v[d];!a.isElementVisible(f);){if(d<0){f=v[v.length-1];break}f=v[--d]}f&&f.focus()}}else{var g=r.listWrapper.querySelectorAll(".userway__menu--show");if(g.length){n.preventDefault();try{for(var h=__values(g),w=h.next();!w.done;w=h.next()){var x=w.value;x.classList.remove("userway__menu--show")}}catch(e){t={error:e}}finally{try{w&&!w.done&&(o=h.return)&&o.call(h)}finally{if(t)throw t.error}}var _=a.getFocusableElement("prev",g[0]);return void _.focus()}for(var v=Array.from(r.listWrapper.querySelectorAll(a.focusableElementsSelector)),A=v[0],N=v.length-1,L=v[N];!a.isElementVisible(L);){if(N<0){L=v[v.length-1];break}L=v[--N]}if(n.target===A)L.focus();else{var E=a.getFocusableElement("prev",n.target,{canBeHidden:!0});E.focus()}}if(a.keys.isArrowDown(n))if(n.preventDefault(),c){if(c.ul){k(c.ul);var v=c.listWrapper.querySelectorAll(a.focusableElementsSelector);v[0].focus()}}else{var v=Array.from(r?r.listWrapper.querySelectorAll(a.focusableElementsSelector):[]),A=v[0],L=v[v.length-1];if(n.target===L)A.focus();else{var P=v.findIndex(function(e){return e===n.target}),O=v[P+1];!r||a.isElementVisible(O,{skipParentCheck:!0})||i?O&&O.focus():H(n,r,O)}}if(a.keys.isTab(n)&&!i){var O=a.getFocusableElement("next",n.target,{canBeHidden:!0});H(n,r,O)}a.keys.isEsc(n)&&(c||(n.preventDefault(),S(l),r&&r.link.focus()))}),o.addEventListener("mouseleave",function(){S(l)})}}}var n=UserWayWidgetApp.addLib("REMEDIATION_NAVIGATION_MENU"),t=UserWayWidgetApp.getLib("remediationConfig").complex,a=UserWayWidgetApp.getLib("remediation_util"),i=!1;n.getScannerRuleId=function(){return null},n.apply=function(n,i){var o,r;if(void 0===i&&(i={}),t&&t.navigationMenu&&!t.navigationMenu.enabled)return void(n.debugMode&&console.log("Remediation Nav: skipped, Nav remediation is disabled for this site"));if(document.body&&document.body.hasAttribute("data-uw-rm-complex-nav"))return void(n.debugMode&&console.log("Remediation Nav: skipped, already processed"));document.body&&document.body.setAttribute("data-uw-rm-complex-nav","");var l=[{mainNavSelector:void 0,topLevelMenuItemSelector:".folder, .collection",topLevelMenuItemTriggerSelector:".folder-toggle, [role='link'], a",subMenuSelector:".subnav",customCss:void 0}],s=document.querySelectorAll(".Header-nav-inner");s.length&&(l=Array.from(s).map(function(e){return{mainNavSelector:a.getCssPath(e),topLevelMenuItemSelector:".Header-nav-item",topLevelMenuItemTriggerSelector:"a.Header-nav-folder-title, a.Header-nav-item",subMenuSelector:".Header-nav-folder",customCss:".Header-nav-folder.userway__menu--active { left: auto !important; }"}})),a.execOnPage("schulerbauer.com|costellorei.com|smartdenverhomesearch.com|barkerhedges.com|amandahoward.com",function(){l=[{mainNavSelector:".navbar .nav"}]}),a.execOnPage("homesinlouisville.com",function(){l=[{mainNavSelector:"#dynamic-nav"}]}),a.execOnPage("jeffcookrealestate.com",function(){l=[{mainNavSelector:"#navbar"}]}),a.execOnPage("fctuckeremge.com",function(){l=[{mainNavSelector:".main-menu"}]}),a.execOnPage("atchleyrealty.com",function(){l=[{mainNavSelector:".nav"}]}),a.execOnPage("treg.com",function(){l=[{mainNavSelector:"#dynamic-nav"}]}),a.execOnPage("natureseal.com|agricoat.co.uk",function(){l=[{mainNavSelector:".topnav"}]}),a.execOnPage("crabs.com",function(){l=[{mainNavSelector:".sticky-header-menu #main-navigation-wrapper",ignoreAriaAttributes:!0},{mainNavSelector:".main-navigation-wrapper-main #main-navigation-wrapper",ignoreAriaAttributes:!0}]}),a.execOnPage("nationservekennewick.com|nationservespokane.com|nationservehouston.com|nationserveakron.com|nationserveraleigh.com|nationservecharlotte.com|nationservealbuquerque.com|nationservemissoula.com|nationservequadcities.com|nationservepeoria.com|nationservelewiston.com|nationservecoloradosprings.com|nationservetucson.com|nationservetempe.com|nationservetempe.com|nationserve.com",function(){l=[{mainNavSelector:"#menu-main"}]}),a.execOnPage("the-pit.la",function(){l=[{mainNavSelector:".main-nav:not(.mobileNav)",topLevelMenuItemSelector:".main-nav:not(.mobileNav) .page-collection",topLevelMenuItemTriggerSelector:".main-nav:not(.mobileNav) .page-collection a",customCss:"#topNav nav .folder-collection .subnav { height: auto !important; }"}]}),a.execOnPage("organisationalimprovement.growthco.uk|businessfinance.growthco.uk",function(){l=[{ignoreAriaAttributes:!0}]}),a.execOnPage("lifestylesin360virtualmarketplace.com",function(){l=[{mainNavSelector:"#top-menu",customCss:"#main-header #top-menu > li > a { color: rgba(0,0,0,.6) !important; }"}]}),a.execOnPage("shop.avvwine.com",function(){l=[{mainNavSelector:"#main-menu"}]}),a.execOnPage("yieldstreet.com",function(){l=[{mainNavSelector:'[class*="styles__MenuItemsContainer"]',topLevelMenuItemSelector:'[class*="HeaderItem__MenuItem-"]',topLevelMenuItemTriggerSelector:"a"}]}),a.execOnPage("atlanticoceanfrontmotel.com",function(){l=[{ignoreAriaAttributes:!0,customCss:"ul.sub-menu.userway__menu--active { left: auto !important; }"}]}),a.execOnPage("oskabright.org",function(){l=[{ignoreAriaAttributes:!0,customCss:"#topNav nav ul li.folder-collection .subnav { height: auto !important; }"}]}),a.execOnPage("sfstress.com",function(){l=[{mainNavSelector:".Header-nav--secondary",topLevelMenuItemSelector:".Header-nav-item",subMenuSelector:".Header-nav-folder",customCss:".Header-nav-folder.userway__menu--active { left: auto !important; }"}]}),a.execOnPage("theqispot.com",function(){l=[{ignoreAriaAttributes:!0,mainNavSelector:".main-nav:not(.mobileNav)",topLevelMenuItemSelector:".folder-collection, .splash-page-collection",topLevelMenuItemTriggerSelector:".folder-collection > a, .splash-page-collection > a",subMenuSelector:".subnav",customCss:".userway__menu--active {height: auto !important;}"}]}),a.execOnPage("atbatt.com",function(){l=[{mainNavSelector:".main-nav-container .navPages > div.navPages-list .custom-pages-nav .navPages-list"}]}),a.execOnPage("tonyrobbins.com",function(){l=[{mainNavSelector:".main-nav-wrapper"}]}),a.execOnPage("liffe.si",function(){l=[{mainNavSelector:".sp-megamenu-parent"}]}),a.execOnPage("esaheatac.com",function(){l=[{mainNavSelector:"#menu-primary",topLevelMenuItemSelector:".menu-item",subMenuSelector:".sub-menu"}]}),a.execOnPage("santaferealestateexperts.com",function(){l=[{mainNavSelector:".nav-container > .head-menu",topLevelMenuItemSelector:".menu-item",subMenuSelector:".submenu",customCss:".userway__menu--active { top: 50% !important; margin-top: 24px !important; }"}]}),a.execOnPage("abintra.gr",function(){l=[{subMenuSelector:".childcontent",customCss:".userway__menu--active { opacity: 1 !important; visibility: visible !important; height: auto !important; overflow: visible !important; display: block !important; margin-left: 0px !important; transform: translate(-30%) !important; } .userway__menu--active > .childcontent-inner > .gkcol { height: auto !important; }"}]}),a.execOnPage("rkmiles.com",function(){l=[{mainNavSelector:"#menu-header-menu-desktop"}]}),a.execOnPage("blueskymd.com",function(){l=[{mainNavSelector:".nav.top-bar-nav",ignoreAriaAttributes:!0,customCss:".userway__menu--active { left: -15px !important; }"}]}),a.execOnPage("geartime.co",function(){l=[{mainNavSelector:".main-nav",ignoreAriaAttributes:!0}]}),a.execOnPage("consultingcardiologists.com",function(){l=[{mainNavSelector:"#menu-main-menu",ignoreAriaAttributes:!0}]}),a.execOnPage("nudura.com",function(){l=[{mainNavSelector:".largerTopMenu > ul",customCss:".userway__menu--show { left: 225px !important; background: #fff !important; }"}]}),a.execOnPage("cphostaccess.com",function(){l=[{mainNavSelector:".menu-wrapper .main-nav",customCss:".userway__menu--active { background: #fff !important; }"}]}),a.execOnPage("charlestonharborresort.com",function(){l=[{mainNavSelector:"#mainNavLinks"}]}),a.execOnPage("kovels.com",function(){l=[{mainNavSelector:"#menu-main-menu",customCss:".userway__menu--active { display: flex !important; }"}]}),a.execOnPage("bottlerocknapavalley.com",function(){l=[{mainNavSelector:"#menu-header-menu"}]}),a.execOnPage("chateaulajollainn.com",function(){l=[{mainNavSelector:"nav.fusion-main-menu",ignoreAriaAttributes:!0}]}),a.execOnPage("bearmattress.com",function(){l=[{mainNavSelector:"nav.header-nav"}]}),a.execOnPage("coastalvisionmedical.com",function(){l=[{mainNavSelector:"ul.nav-menu.ry-nav",ignoreAriaAttributes:!0,customCss:".userway__menu--active { top: 28px !important; } .userway__menu--active > li { left: 0 !important; } .ry-menu .ry-nav li .third-level-container .third-level-dropdown.userway__menu--show { display: block !important;}  .ry-menu .ry-nav li .third-level-container .third-level-dropdown.userway__menu--show > li { left: 0 !important; opacity: 1 !important; }"}]}),a.execOnPage("berg-group.com",function(){l=[{mainNavSelector:"ul#menu-header-menu",ignoreAriaAttributes:!0}]}),a.execOnPage(/\perryellis.com\/(\d+)+[\/]checkout?/g,function(){l=[]}),a.execOnPage("corporate.thermofisher.com",function(){l=[]});try{for(var c=__values(l),u=c.next();!u.done;u=c.next()){var m=u.value;e(Object.assign({},m,i))}}catch(e){o={error:e}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(o)throw o.error}}},window.addEventListener("keydown",function(e){a.keys.isLeftShift(e)&&(i=!0)}),window.addEventListener("keyup",function(e){a.keys.isLeftShift(e)&&(i=!1)}),window.runMenuRemediationScript=function(){throw"Unsupported!"}}();