!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function r(n){return function(){var t=this,r=arguments;return new Promise(function(i,o){var c=n.apply(t,r);function u(n){e(c,i,o,u,a,"next",n)}function a(n){e(c,i,o,u,a,"throw",n)}u(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return a});var i=function(n,t){return null!==t.closest(n)},o=function(n,t){return"string"==typeof n&&n.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(n),i=!0,r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),t):t;var e,r,i},c=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t},u=/^[a-z][a-z0-9+\-.]*:/,a=function(){var n=r(regeneratorRuntime.mark(function n(t,e,r,i){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||u.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,r,i)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}},n)}));return function(t,e,r,i){return n.apply(this,arguments)}}()},A2gu:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return c});var i=e("Ke8Y"),o=function(){var n=r(regeneratorRuntime.mark(function n(t,e,r,o,c){var u;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,c,o));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:return u="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,o&&o.forEach(function(n){return u.classList.add(n)}),c&&Object.assign(u,c),e.appendChild(u),n.next=10,new Promise(function(n){return Object(i.c)(u,n)});case 10:return n.abrupt("return",u);case 11:case"end":return n.stop()}},n)}));return function(t,e,r,i,o){return n.apply(this,arguments)}}(),c=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r=n*t/e-n+"ms",i=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,i=n*r-n+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},ijD4:function(e,r,i){"use strict";i.d(r,"a",function(){return l});var o=i("R2DT"),c=i("fXoL"),u=i("IubZ"),a=i("ofXK"),s=i("TEn/");function f(n,t){if(1&n){var e=c.Nb();c.Mb(0,"ion-button",1),c.Ub("click",function(){return c.cc(e),c.Wb().onClick()}),c.Kb(1,"ion-icon",2),c.Lb()}if(2&n){var r=c.Wb();c.zb(1),c.Zb("name",r.iconName)}}var l=function(){var e=function(){function e(t){n(this,e),this.pwaService=t}var r,i,c;return r=e,(i=[{key:"onClick",value:function(){this.pwaService.install()}},{key:"iconName",get:function(){return o.b?"logo-apple-appstore":o.a?"logo-google-playstore":"apps-outline"}},{key:"show",get:function(){return this.pwaService.promptForInstall()}}])&&t(r.prototype,i),c&&t(r,c),e}();return e.\u0275fac=function(n){return new(n||e)(c.Jb(u.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-pwa-prompt"]],decls:1,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"],[3,"name"]],template:function(n,t){1&n&&c.gc(0,f,2,1,"ion-button",0),2&n&&c.Zb("ngIf",t.show)},directives:[a.i,s.c,s.g],styles:[""]}),e}()},pX2f:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e("2atR"),i=e("iWo5"),o=e("qULd"),c=function(n,t){var e,c,u=function(n,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(n,r);o&&t(o)?o!==e&&(s(),a(o,i)):s()}},a=function(n,t){e=n,c||(c=e);var i=e;Object(r.f)(function(){return i.classList.add("ion-activated")}),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(r.f)(function(){return t.classList.remove("ion-activated")}),n&&c!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return u(n.currentX,n.currentY,o.a)},onMove:function(n){return u(n.currentX,n.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),c=void 0}})}},qULd:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return a}),e.d(t,"e",function(){return u});var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},u=function(){r.selectionEnd()},a=function(n){r.impact(n)}},vy64:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var i=r("ofXK"),o=r("TEn/"),c=r("lR5k"),u=r("fXoL"),a=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({imports:[[i.b,c.b.forChild(),o.w]]}),t}()}}])}();
//# sourceMappingURL=common-es5.334070e2835098d2c04a.js.map