(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{WOYU:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return h}),n.d(e,"b",function(){return v});var i=n("mrSG"),s=n("z9fa"),a=n("bucj");const o=a.b[2],l=a.b[0],r=3*devicePixelRatio,c=Math.round(1*r),u=160*r+2*c,h=251*r+2*c;function d(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>e(i),i.onerror=()=>n(),i.src=t})}function b(t){return Object(i.a)(this,void 0,void 0,function*(){const e=document.createElement("canvas");e.width=160*r,e.height=30*r;const n=e.getContext("2d");if(!n)throw new Error("get a new browser");return n.drawImage(yield d(t),0,0,160*r,30*r),e})}const m=d("assets/silkscreen-default.svg"),g=d("assets/silkscreen-m515.svg"),f=b("assets/hard-buttons-default.svg"),w=b("assets/hard-buttons-m515.svg");class v{constructor(t){this.canvas=t;const e=t.getContext("2d");if(!e)throw new Error("get a new browser");this.ctx=e}clear(t){return Object(i.a)(this,void 0,void 0,function*(){this.session=t,this.fillCanvasRect(0,0,u,h,this.backgroundColor()),yield this.drawSilkscreen(),yield this.drawButtons()})}drawSilkscreen(){return Object(i.a)(this,void 0,void 0,function*(){const t=yield this.silkscreenImage();this.fillRect(0,161,160,60,o),this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high",this.ctx.drawImage(t,c,c+161*r,160*r,60*r)})}drawButtons(t=[]){return Object(i.a)(this,void 0,void 0,function*(){this.ctx.drawImage(yield this.buttonsImage(),c,c+221*r,160*r,30*r),t.includes(0)&&this.fillRect(0,221,30,30,"rgba(0,0,0,0.2)"),t.includes(1)&&this.fillRect(30,221,30,30,"rgba(0,0,0,0.2)"),t.includes(2)&&this.fillRect(100,221,30,30,"rgba(0,0,0,0.2)"),t.includes(3)&&this.fillRect(130,221,30,30,"rgba(0,0,0,0.2)"),t.includes(4)&&this.fillRect(60,221,40,15,"rgba(0,0,0,0.2)"),t.includes(5)&&this.fillRect(60,236,40,15,"rgba(0,0,0,0.2)")})}drawEmulationCanvas(t){this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(t,c,c,160*r,160*r)}fillRect(t,e,n,i,s){this.ctx.beginPath(),this.ctx.rect(c+r*t,c+r*e,r*n,r*i),this.ctx.fillStyle=s,this.ctx.fill()}fillCanvasRect(t,e,n,i,s){this.ctx.beginPath(),this.ctx.rect(t,e,n,i),this.ctx.fillStyle=s,this.ctx.fill()}silkscreenImage(){var t;switch(null===(t=this.session)||void 0===t?void 0:t.device){case s.a.m515:return g;default:return m}}buttonsImage(){var t;switch(null===(t=this.session)||void 0===t?void 0:t.device){case s.a.m515:return w;default:return f}}backgroundColor(){var t;switch(null===(t=this.session)||void 0===t?void 0:t.device){case s.a.m515:return"white";default:return l}}}},hO9l:function(t,e,n){"use strict";n.r(e),n.d(e,"TabsPageModule",function(){return d});var i=n("ofXK"),s=n("3Pt+"),a=n("TEn/"),o=n("tyNb"),l=n("WOYU"),r=n("fXoL");function c(t,e){let n,i;return t=Math.min(t,l.c/devicePixelRatio),(e=Math.min(e,l.e/devicePixelRatio))/t>l.e/l.c?(i=t,n=t/l.c*l.e):(n=e,i=e/l.e*l.c),n*i}const u=[{path:"tab",component:(()=>{class t{constructor(t){this.router=t,this.updateUseSmallUI=()=>{this.useSmallUI=c(window.innerHeight-44-50-6,window.innerWidth-6)<c(window.innerHeight-44-25-6,window.innerWidth-6)},this.useSmallUI=!1,window.addEventListener("resize",this.updateUseSmallUI),this.updateUseSmallUI()}get smallUI(){return"/tab/emulation"===this.router.url&&this.useSmallUI}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(o.g))},t.\u0275cmp=r.Db({type:t,selectors:[["app-tabs"]],decls:14,vars:2,consts:[["slot","bottom"],["tab","emulation"],["name","phone-portrait-outline"],["tab","sessions"],["name","albums-outline"],["tab","settings"],["name","cog-outline"]],template:function(t,e){1&t&&(r.Mb(0,"ion-tabs"),r.Mb(1,"ion-tab-bar",0),r.Mb(2,"ion-tab-button",1),r.Kb(3,"ion-icon",2),r.Mb(4,"ion-label"),r.hc(5,"Emulator"),r.Lb(),r.Lb(),r.Mb(6,"ion-tab-button",3),r.Kb(7,"ion-icon",4),r.Mb(8,"ion-label"),r.hc(9,"Sessions"),r.Lb(),r.Lb(),r.Mb(10,"ion-tab-button",5),r.Kb(11,"ion-icon",6),r.Mb(12,"ion-label"),r.hc(13,"About / Settings"),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.zb(1),r.Bb("small-ui",e.smallUI))},directives:[a.t,a.r,a.s,a.g,a.m],styles:["ion-tab-bar.small-ui[_ngcontent-%COMP%]{height:25px}ion-tab-bar.small-ui[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:21px}ion-tab-bar.small-ui[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:none}"]}),t})(),children:[{path:"emulation",loadChildren:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"6aA7")).then(t=>t.EmulationPageModule)},{path:"sessions",loadChildren:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"/NlI")).then(t=>t.SessionsPageModule)},{path:"settings",loadChildren:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"07hj")).then(t=>t.SettingsPageModule)},{path:"",redirectTo:"/tab/emulation",pathMatch:"full"}]},{path:"",redirectTo:"/tab/sessions",pathMatch:"full"}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[o.i.forChild(u)],o.i]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[a.w,i.b,s.e,h]]}),t})()}}]);