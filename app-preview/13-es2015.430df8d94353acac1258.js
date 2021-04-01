(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6aA7":function(e,t,n){"use strict";n.r(t),n.d(t,"EmulationPageModule",function(){return T});var i=n("ofXK"),s=n("tyNb"),o=n("mrSG"),a=n("WOYU"),r=n("oOyw"),c=n("fXoL"),l=n("bucj"),h=n("TEn/");let u=(()=>{class e{constructor(e){this.emulationService=e,this.onClick=()=>{},this.showHelp=()=>{}}ngOnInit(){}reset(){this.emulationService.reset(),this.onClick()}resetNoExtensions(){this.emulationService.resetNoExtensions(),this.onClick()}resetHard(){this.emulationService.resetHard(),this.onClick()}power(){this.emulationService.engagePower(),this.onClick()}help(){this.showHelp(),this.onClick()}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-emulation-context-menu"]],inputs:{onClick:"onClick",showHelp:"showHelp"},decls:11,vars:9,consts:[["button","",3,"detail","disabled","click"],["button","",3,"detail","click"]],template:function(e,t){1&e&&(c.Mb(0,"ion-list"),c.Mb(1,"ion-item",0),c.Ub("click",function(){return t.power()}),c.hc(2," Power "),c.Lb(),c.Mb(3,"ion-item",0),c.Ub("click",function(){return t.reset()}),c.hc(4," Reset "),c.Lb(),c.Mb(5,"ion-item",0),c.Ub("click",function(){return t.resetNoExtensions()}),c.hc(6," Reset (no extensions) "),c.Lb(),c.Mb(7,"ion-item",0),c.Ub("click",function(){return t.resetHard()}),c.hc(8," Hard reset "),c.Lb(),c.Mb(9,"ion-item",1),c.Ub("click",function(){return t.help()}),c.hc(10," Help "),c.Lb(),c.Lb()),2&e&&(c.zb(1),c.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),c.zb(2),c.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),c.zb(2),c.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),c.zb(2),c.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),c.zb(2),c.Zb("detail",!1))},directives:[h.n,h.i],styles:[""]}),e})();function d(e){if(e.ctrlKey)switch(e.key){case"o":return 4;case"l":return 5;case"y":case"z":return 0;case"x":return 1;case"c":return 2;case"v":return 3}}class v{constructor(e,t,n){this.canvas=e,this.emulationService=t,this.canvasHelper=n,this.handleMouseDown=e=>{if(0!==e.button)return;const t=this.eventToPalmCoordinates(e);if(!t)return;const n=this.determineArea(t);if(0===n)this.interactionMouse={area:n},this.emulationService.handlePointerMove(...t);else{const e=this.determineButton(t);this.interactionMouse={area:n,button:e},this.handleButtonDown(e)}},this.handleMouseMove=e=>{var t;if(!(1&e.buttons)||0!==(null===(t=this.interactionMouse)||void 0===t?void 0:t.area))return;const n=this.eventToPalmCoordinates(e,!0);n&&this.emulationService.handlePointerMove(...n)},this.handeMouseUp=e=>{if(0!==e.button)return;const t=this.interactionMouse;switch(this.interactionMouse=void 0,null==t?void 0:t.area){case 1:this.handleButtonUp(t.button);break;case 0:this.emulationService.handlePointerUp()}},this.handleTouchStart=e=>{for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches.item(t);if(!n)continue;const i=this.eventToPalmCoordinates(n);if(!i)continue;const s=this.determineArea(i);if(0===s)this.interactionsTouch.set(n.identifier,{area:s}),this.emulationService.handlePointerMove(...i);else{const e=this.determineButton(i);this.interactionsTouch.set(n.identifier,{area:s,button:e}),this.handleButtonDown(e)}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchMove=e=>{var t;for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches.item(n);if(i&&0===(null===(t=this.interactionsTouch.get(i.identifier))||void 0===t?void 0:t.area)){const e=this.eventToPalmCoordinates(i,!0);if(!e)continue;this.emulationService.handlePointerMove(...e)}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchEnd=e=>{for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches.item(t);if(!n)continue;const i=this.interactionsTouch.get(n.identifier);switch(this.interactionsTouch.delete(n.identifier),null==i?void 0:i.area){case 1:this.handleButtonUp(i.button);break;case 0:this.emulationService.handlePointerUp()}}!1!==e.cancelable&&e.preventDefault()},this.handleKeyDown=e=>{const t=d(e);if(void 0!==t)return this.handleButtonDown(t),void e.preventDefault();const n=function(e){if(1===e.length&&e.charCodeAt(0)<=255)return e.charCodeAt(0);switch(e){case"ArrowLeft":return 28;case"ArrowRight":return 29;case"ArrowUp":return 30;case"ArrowDown":return 31;case"Backspace":return 8;case"Tab":return 9;case"Enter":return 10;default:return}}(e.key);e.ctrlKey||void 0===n||(this.emulationService.handleKeyDown(n),e.preventDefault())},this.handleKeyUp=e=>{const t=d(e);if(void 0!==t)return this.handleButtonUp(t),void e.preventDefault();if("Control"===e.key){for(const e of this.activeButtons)this.emulationService.handleButtonUp(e);this.activeButtons.clear(),this.canvasHelper.drawButtons([])}},this.interactionsTouch=new Map,this.bound=!1,this.activeButtons=new Set}bind(){this.bound||(this.canvas.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handeMouseUp),window.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd),this.canvas.addEventListener("touchcancel",this.handleTouchEnd),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),this.bound=!0)}release(){if(this.bound){this.canvas.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp);for(const e of this.activeButtons)this.handleButtonUp(e);this.activeButtons.clear(),this.interactionsTouch.clear(),this.interactionMouse=void 0,this.bound=!1}}eventToPalmCoordinates(e,t=!1){const n=this.canvas.getBoundingClientRect();let i,s,o,r;n.width/n.height>a.e/a.c?(r=n.height,o=a.e/a.c*n.height,s=n.top,i=n.left+(n.width-o)/2):(o=n.width,r=a.c/a.e*n.width,i=n.left,s=n.top+(n.height-r)/2);let c=Math.floor((e.clientX-i)/o*a.e/a.d)-a.a/a.d,l=Math.floor((e.clientY-s)/r*a.c/a.d)-a.a/a.d;if(l>=161&&(l-=1),t)c<0&&(c=0),c>159&&(c=159),l<0&&(l=0),l>249&&(l=249);else if(c<0||c>=160||l<0||l>=250)return;return[c,l]}determineArea([,e]){return e>=220?1:0}determineButton([e,t]){return e>=130?3:e>=100?2:e>=60?t>=236?5:4:e>=30?1:0}handleButtonDown(e){this.activeButtons.has(e)||(this.activeButtons.add(e),this.emulationService.handleButtonDown(e),this.canvasHelper.drawButtons(Array.from(this.activeButtons.values())))}handleButtonUp(e){this.activeButtons.has(e)&&(this.activeButtons.delete(e),this.emulationService.handleButtonUp(e),this.canvasHelper.drawButtons(Array.from(this.activeButtons.values())))}}var b=n("7yca"),m=n("Ld/c"),f=n("xOb2"),p=n("ZW/x"),g=n("4otK"),w=n("hq03"),S=n("shLW");const M=["canvas"];function k(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-button",4),c.Ub("click",function(){return c.cc(e),c.Wb().mute(!1)}),c.Kb(1,"ion-icon",11),c.Lb()}}function y(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-button",4),c.Ub("click",function(){return c.cc(e),c.Wb().mute(!0)}),c.Kb(1,"ion-icon",12),c.Lb()}}function L(e,t){1&e&&(c.Mb(0,"div",13),c.Mb(1,"div"),c.hc(2,"No session selected"),c.Lb(),c.Lb())}const C=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,o,a,r,c,l,h){this.emulationService=e,this.emulationState=t,this.storageService=n,this.kvsService=i,this.audioService=s,this.popoverController=o,this.modalController=a,this.alertService=r,this.fileService=c,this.loadingController=l,this.ngZone=h,this.onNewFrame=e=>{this.canvasHelper.drawEmulationCanvas(e)}}ngAfterViewInit(){const e=this.canvasRef.nativeElement;this.canvasHelper=new a.b(e),this.eventHandler=new v(e,this.emulationService,this.canvasHelper)}get canvasWidth(){return a.e}get canvasHeight(){return a.c}get cssWidth(){return this.canvasWidth/devicePixelRatio+"px"}get cssHeight(){return this.canvasHeight/devicePixelRatio+"px"}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,function*(){let e=this.emulationState.getCurrentSession();const t=Object(r.b)();e||void 0===t||(e=yield this.storageService.getSession(t)),this.canvasHelper.clear(e),this.onNewFrame(this.emulationService.getCanvas()),this.emulationService.newFrameEvent.addHandler(this.onNewFrame),this.emulationService.resume(),this.ngZone.runOutsideAngular(()=>this.eventHandler.bind())})}ionViewWillLeave(){this.emulationService.pause(),this.emulationService.newFrameEvent.removeHandler(this.onNewFrame),this.eventHandler.release()}openContextMenu(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:u,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onClick:()=>t.dismiss(),showHelp:()=>this.showHelp()}});t.present()})}installFiles(){this.fileService.openFiles(this.processFilesForInstallation.bind(this))}showHelp(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:b.a,componentProps:{url:"assets/doc/emulation.md"}});yield e.present()})}get installFileDisabled(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}get title(){var e;return(null===(e=this.emulationState.getCurrentSession())||void 0===e?void 0:e.name)||""}get isMuted(){return!this.audioService.isInitialized()||this.audioService.isMuted()}get isAudioOff(){return this.kvsService.kvs.volume<=0}mute(e){e?this.audioService.mute(!0):this.audioService.isInitialized()?this.audioService.mute(!1):this.audioService.initialize()}processFilesForInstallation(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({message:"Installing..."});yield t.present();const n=[],i=[];try{for(const t of e)/\.(prc|pdb)$/i.test(t.name)&&0==(yield this.emulationService.installFile(t.content))?n.push(t.name):i.push(t.name)}finally{t.dismiss()}let s,o;switch(n.length){case 0:s="";break;case 1:s=`Installation of ${n[0]} successful.`;break;default:s=`Installation of ${n.length} files successful.`}switch(i.length>0&&(s+="<br/><br/>"),i.length){case 0:break;case 1:s+=`Installation of ${i[0]} failed.`;break;default:s+=`Installation of ${i.slice(0,i.length>3?3:i.length-1).join(", ")} and ${i.length>3?i.length-3+" more files":i[i.length-1]} failed.`}o=0===i.length?"Installation successful":0===n.length?"Installation failed":"Installation errors",this.alertService.message(o,s)})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(m.a),c.Jb(f.b),c.Jb(p.a),c.Jb(g.a),c.Jb(h.A),c.Jb(h.z),c.Jb(w.a),c.Jb(S.a),c.Jb(h.y),c.Jb(c.B))},e.\u0275cmp=c.Db({type:e,selectors:[["app-emulation"]],viewQuery:function(e,t){if(1&e&&c.lc(M,1),2&e){let e;c.ac(e=c.Vb())&&(t.canvasRef=e.first)}},decls:17,vars:15,consts:[["slot","end"],[3,"disabled","click"],["name","download-outline"],["slot","start"],[3,"click"],["name","ellipsis-vertical-outline"],[3,"click",4,"ngIf"],[1,"container","running-session"],[3,"width","height"],["canvas",""],["class","container no-session",4,"ngIf"],["name","volume-mute-outline"],["name","volume-high-outline"],[1,"container","no-session"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.hc(3),c.Lb(),c.Mb(4,"ion-buttons",0),c.Mb(5,"ion-button",1),c.Ub("click",function(){return t.installFiles()}),c.Kb(6,"ion-icon",2),c.Lb(),c.Lb(),c.Mb(7,"ion-buttons",3),c.Mb(8,"ion-button",4),c.Ub("click",function(e){return t.openContextMenu(e)}),c.Kb(9,"ion-icon",5),c.Lb(),c.gc(10,k,2,0,"ion-button",6),c.gc(11,y,2,0,"ion-button",6),c.Lb(),c.Lb(),c.Lb(),c.Mb(12,"ion-content"),c.Mb(13,"div",7),c.Kb(14,"canvas",8,9),c.Lb(),c.gc(16,L,3,0,"div",10),c.Lb()),2&e&&(c.zb(3),c.ic(t.title),c.zb(2),c.Zb("disabled",t.installFileDisabled),c.zb(5),c.Zb("ngIf",t.isMuted&&!t.isAudioOff),c.zb(1),c.Zb("ngIf",!t.isMuted&&!t.isAudioOff),c.zb(2),c.fc("display",t.emulationState.getCurrentSession()?void 0:"none"),c.zb(1),c.fc("width",t.cssWidth)("height",t.cssHeight)("display",t.emulationState.getCurrentSession()?"block":"none"),c.Zb("width",t.canvasWidth)("height",t.canvasHeight),c.zb(2),c.Zb("ngIf",!t.emulationState.getCurrentSession()))},directives:[h.f,h.v,h.u,h.d,h.c,h.g,i.i,h.e],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:3px}.container.running-session[_ngcontent-%COMP%]{background:radial-gradient(circle,#ccc 0,#eee 100%)}@media (prefers-color-scheme:dark){.container.running-session[_ngcontent-%COMP%]{background:none}}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[s.i.forChild(C)],s.i]}),e})();var B=n("3Pt+"),H=n("vy64");let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[i.b,B.e,h.w,E,H.a]]}),e})()}}]);
//# sourceMappingURL=13-es2015.430df8d94353acac1258.js.map