(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6aA7":function(e,t,i){"use strict";i.r(t),i.d(t,"EmulationPageModule",function(){return A});var n=i("ofXK"),s=i("tyNb"),o=i("mrSG"),a=i("pEgL"),r=i("fXoL"),c=i("bucj"),l=i("95eT"),h=i("TEn/"),u=i("G5Yk"),d=i("shLW"),v=i("Ld/c"),b=i("hq03");let m=(()=>{class e{constructor(e,t,i,n,s,o){this.emulationService=e,this.loadingController=t,this.snapshotService=i,this.fileService=n,this.emulationStateService=s,this.alertService=o}saveBackup(){return Object(o.a)(this,void 0,void 0,function*(){const e=this.emulationStateService.getCurrentSession();if(!e)return;const t=yield this.loadingController.create();yield t.present();let i,n=[];yield this.emulationService.pause(),yield this.snapshotService.waitForPendingSnapshot();try{const e=yield this.emulationService.cloudpilot;yield e.backup(t=>Object(o.a)(this,void 0,void 0,function*(){for(t.Init();t.IsInProgress();){const e=t.GetCurrentDatabase();t.Save()||n.push(e),yield new Promise(e=>setTimeout(e,0))}i=e.getArchive(t)}))}finally{yield t.dismiss(),yield this.emulationService.resume()}i?n.length>0?yield this.alertService.message("Backup complete",`\n                    ${Object(l.a)(n)} failed  to backup.\n                    <br/><br/>\n                    Open databases cannot be backuped. Please run backup from the launcher\n                    in order to backup all databases.\n                `,{"Save Backup":()=>this.fileService.saveFile(Object(l.b)(e),i)},"Cancel"):this.fileService.saveFile(Object(l.b)(e),i):yield this.alertService.errorMessage("Backup failed.")})}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(c.a),r.Qb(h.A),r.Qb(u.a),r.Qb(d.a),r.Qb(v.a),r.Qb(b.a))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),f=(()=>{class e{constructor(e,t){this.emulationService=e,this.backupService=t,this.onClick=()=>{},this.showHelp=()=>{}}ngOnInit(){}reset(){this.emulationService.reset(),this.onClick()}resetNoExtensions(){this.emulationService.resetNoExtensions(),this.onClick()}resetHard(){this.emulationService.resetHard(),this.onClick()}power(){this.emulationService.engagePower(),this.onClick()}help(){this.showHelp(),this.onClick()}backup(){this.backupService.saveBackup(),this.onClick()}get backupDisabled(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(c.a),r.Jb(m))},e.\u0275cmp=r.Db({type:e,selectors:[["app-emulation-context-menu"]],inputs:{onClick:"onClick",showHelp:"showHelp"},decls:13,vars:11,consts:[["button","",3,"detail","disabled","click"],["button","",3,"detail","click"]],template:function(e,t){1&e&&(r.Mb(0,"ion-list"),r.Mb(1,"ion-item",0),r.Ub("click",function(){return t.power()}),r.hc(2," Power "),r.Lb(),r.Mb(3,"ion-item",0),r.Ub("click",function(){return t.reset()}),r.hc(4," Reset "),r.Lb(),r.Mb(5,"ion-item",0),r.Ub("click",function(){return t.resetNoExtensions()}),r.hc(6," Reset (no extensions) "),r.Lb(),r.Mb(7,"ion-item",0),r.Ub("click",function(){return t.resetHard()}),r.hc(8," Hard reset "),r.Lb(),r.Mb(9,"ion-item",0),r.Ub("click",function(){return t.backup()}),r.hc(10," Save backup "),r.Lb(),r.Mb(11,"ion-item",1),r.Ub("click",function(){return t.help()}),r.hc(12," Help "),r.Lb(),r.Lb()),2&e&&(r.zb(1),r.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),r.zb(2),r.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),r.zb(2),r.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),r.zb(2),r.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),r.zb(2),r.Zb("detail",!1)("disabled",t.backupDisabled),r.zb(2),r.Zb("detail",!1))},directives:[h.o,h.j],styles:[""]}),e})();var p=i("7yca"),g=i("oOyw"),S=i("xOb2");let w=(()=>{class e{constructor(e,t,i){this.emulationService=e,this.canvasDisplayService=t,this.ngZone=i,this.handleMouseDown=e=>{if(0!==e.button)return;const t=this.eventToPalmCoordinates(e);if(!t)return;const i=this.determineArea(t);if(0===i)this.interactionMouse={area:i},this.emulationService.handlePointerMove(...t);else{const e=this.determineButton(t);this.interactionMouse={area:i,button:e},this.handleButtonDown(e)}},this.handleMouseMove=e=>{var t;if(!(1&e.buttons)||0!==(null===(t=this.interactionMouse)||void 0===t?void 0:t.area))return;const i=this.eventToPalmCoordinates(e,!0);i&&this.emulationService.handlePointerMove(...i)},this.handeMouseUp=e=>{if(0!==e.button)return;const t=this.interactionMouse;switch(this.interactionMouse=void 0,null==t?void 0:t.area){case 1:this.handleButtonUp(t.button);break;case 0:this.emulationService.handlePointerUp()}},this.handleTouchStart=e=>{for(let t=0;t<e.changedTouches.length;t++){const i=e.changedTouches.item(t);if(!i)continue;const n=this.eventToPalmCoordinates(i);if(!n)continue;const s=this.determineArea(n);if(0===s)this.interactionsTouch.set(i.identifier,{area:s}),this.emulationService.handlePointerMove(...n);else{const e=this.determineButton(n);this.interactionsTouch.set(i.identifier,{area:s,button:e}),this.handleButtonDown(e)}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchMove=e=>{var t;for(let i=0;i<e.changedTouches.length;i++){const n=e.changedTouches.item(i);if(n&&0===(null===(t=this.interactionsTouch.get(n.identifier))||void 0===t?void 0:t.area)){const e=this.eventToPalmCoordinates(n,!0);if(!e)continue;this.emulationService.handlePointerMove(...e)}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchEnd=e=>{for(let t=0;t<e.changedTouches.length;t++){const i=e.changedTouches.item(t);if(!i)continue;const n=this.interactionsTouch.get(i.identifier);switch(this.interactionsTouch.delete(i.identifier),null==n?void 0:n.area){case 1:this.handleButtonUp(n.button);break;case 0:this.emulationService.handlePointerUp()}}!1!==e.cancelable&&e.preventDefault()},this.handleKeyDown=e=>{if(this.isToggleGameMode(e))return e.preventDefault(),void this.ngZone.run(()=>this.gameMode=!this.gameMode);const t=this.buttonFromEvent(e);if(void 0!==t)return this.handleButtonDown(t),void e.preventDefault();const i=this.keyCodeFromEvent(e);void 0!==i&&(this.emulationService.handleKeyDown(i),e.preventDefault())},this.handleKeyUp=e=>{const t=this.buttonFromEvent(e);if(void 0!==t)return this.handleButtonUp(t),void e.preventDefault();if("Control"===e.key){for(const e of this.activeButtons)this.emulationService.handleButtonUp(e);this.activeButtons.clear(),this.canvasDisplayService.drawButtons([])}},this.interactionsTouch=new Map,this.activeButtons=new Set,this.gameMode=!1}bind(e){this.canvas&&this.release(),this.canvas=e,this.ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handeMouseUp),window.addEventListener("mousemove",this.handleMouseMove),e.addEventListener("touchstart",this.handleTouchStart),e.addEventListener("touchmove",this.handleTouchMove),e.addEventListener("touchend",this.handleTouchEnd),e.addEventListener("touchcancel",this.handleTouchEnd),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)})}release(){if(this.canvas){this.canvas.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp);for(const e of this.activeButtons)this.handleButtonUp(e);this.activeButtons.clear(),this.interactionsTouch.clear(),this.interactionMouse=void 0,this.canvas=void 0}}isGameMode(){return this.gameMode}eventToPalmCoordinates(e,t=!1){if(!this.canvas)return;const i=this.canvas.getBoundingClientRect();let n,s,o,r;i.width/i.height>a.e/a.c?(r=i.height,o=a.e/a.c*i.height,s=i.top,n=i.left+(i.width-o)/2):(o=i.width,r=a.c/a.e*i.width,n=i.left,s=i.top+(i.height-r)/2);let c=Math.floor((e.clientX-n)/o*a.e/a.d)-a.a/a.d,l=Math.floor((e.clientY-s)/r*a.c/a.d)-a.a/a.d;if(l>=161&&(l-=1),t)c<0&&(c=0),c>159&&(c=159),l<0&&(l=0),l>249&&(l=249);else if(c<0||c>=160||l<0||l>=250)return;return[c,l]}determineArea([,e]){return e>=220?1:0}determineButton([e,t]){return e>=130?3:e>=100?2:e>=60?t>=236?5:4:e>=30?1:0}handleButtonDown(e){this.activeButtons.has(e)||(this.activeButtons.add(e),this.emulationService.handleButtonDown(e),this.canvasDisplayService.drawButtons(Array.from(this.activeButtons.values())))}handleButtonUp(e){this.activeButtons.has(e)&&(this.activeButtons.delete(e),this.emulationService.handleButtonUp(e),this.canvasDisplayService.drawButtons(Array.from(this.activeButtons.values())))}isToggleGameMode(e){return"Shift"===e.key&&e.ctrlKey||"Control"===e.key&&e.shiftKey}isGameModeActive(e){return!this.gameMode&&e.ctrlKey||this.gameMode&&!e.ctrlKey}buttonFromEvent(e){switch(e.key){case"PageUp":return 4;case"PageDown":return 5}if(this.isGameModeActive(e))switch(e.key){case"w":case"i":case"ArrowUp":return 4;case"s":case"k":case"ArrowDown":return 5;case"a":case"j":case"y":case"z":case"ArrowLeft":return 0;case"q":case"u":case"x":return 1;case"e":case"o":case"c":return 2;case"d":case"l":case"v":case"ArrowRight":return 3}}keyCodeFromEvent(e){if(!this.isGameModeActive(e)){if(1===e.key.length&&e.key.charCodeAt(0)<=255)return e.key.charCodeAt(0);switch(e.key){case"ArrowLeft":return 28;case"ArrowRight":return 29;case"ArrowUp":return 30;case"ArrowDown":return 31;case"Backspace":return 8;case"Tab":return 9;case"Enter":return 10;default:return}}}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(c.a),r.Qb(a.b),r.Qb(r.B))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=i("ZW/x"),y=i("4otK");let M=(()=>{class e{constructor(e,t,i,n,s){this.emulationService=e,this.loadingController=t,this.snapshotService=i,this.emulationStateService=n,this.alertService=s}installFiles(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({message:"Installing..."});yield t.present(),yield this.emulationService.pause(),yield this.snapshotService.waitForPendingSnapshot();const i=[],n=[],s=[];try{for(const t of e)if(/\.(prc|pdb)$/i.test(t.name)){switch(yield this.emulationService.installDb(t.content)){case-1:n.push(t.name);break;case 2:s.push(t.name),i.push(t.name);break;case 1:i.push(t.name)}yield new Promise(e=>setTimeout(e,0))}else n.push(t.name)}finally{t.dismiss(),this.emulationService.resume()}const o=[this.messageSucces(i),this.messageFailed(n),this.messageRequireReset(s)].filter(e=>!!e).join("<br/><br/>");let a;a=0===n.length?"Installation successful":0===i.length?"Installation failed":"Installation errors",this.alertService.message(a,o,s.length>0?{"Reset now":()=>this.emulationService.reset()}:void 0)})}messageSucces(e){switch(e.length){case 0:return;case 1:return`Installation of ${e[0]} successful.`;default:return`Installation of ${e.length} files successful.`}}messageFailed(e){return e.length>0?`Installation of  ${Object(l.a)(e)} failed.`:void 0}messageRequireReset(e){return e.length>0?`${Object(l.a)(e)} require a device reset.`:void 0}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(c.a),r.Qb(h.A),r.Qb(u.a),r.Qb(v.a),r.Qb(b.a))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const C=["canvas"];function L(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-button",4),r.Ub("click",function(){return r.cc(e),r.Wb().mute(!1)}),r.Kb(1,"ion-icon",11),r.Lb()}}function E(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-button",4),r.Ub("click",function(){return r.cc(e),r.Wb().mute(!0)}),r.Kb(1,"ion-icon",12),r.Lb()}}function D(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-button",4),r.Ub("click",function(){return r.cc(e),r.Wb().showGameModeHint()}),r.Kb(1,"ion-icon",13),r.Lb()}}function B(e,t){1&e&&(r.Mb(0,"div",14),r.Mb(1,"div"),r.hc(2,"No session selected"),r.Lb(),r.Lb())}const T=[{path:"",component:(()=>{class e{constructor(e,t,i,n,s,o,a,r,c,l,h,u,d,v){this.emulationService=e,this.emulationState=t,this.storageService=i,this.eventHandlingService=n,this.canvasDisplayService=s,this.kvsService=o,this.audioService=a,this.popoverController=r,this.modalController=c,this.alertService=l,this.fileService=h,this.loadingController=u,this.snapshotService=d,this.installlationService=v,this.onSnapshot=e=>{this.kvsService.kvs.showStatistics&&this.canvasDisplayService.drawStatistics(e,this.emulationService.getStatistics())},this.onNewFrame=e=>{this.canvasDisplayService.drawEmulationCanvas(e)}}ngAfterViewInit(){}get canvasWidth(){return a.e}get canvasHeight(){return a.c}get cssWidth(){return this.canvasWidth/devicePixelRatio+"px"}get cssHeight(){return this.canvasHeight/devicePixelRatio+"px"}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,function*(){let e=this.emulationState.getCurrentSession();const t=Object(g.b)();e||void 0===t||(e=yield this.storageService.getSession(t)),this.canvasDisplayService.initialize(this.canvasRef.nativeElement,e).then(()=>{this.kvsService.kvs.showStatistics&&this.canvasDisplayService.drawStatistics()}),this.onNewFrame(this.emulationService.getCanvas()),this.emulationService.newFrameEvent.addHandler(this.onNewFrame),this.snapshotService.snapshotEvent.addHandler(this.onSnapshot),this.emulationService.resume(),this.eventHandlingService.bind(this.canvasRef.nativeElement)})}ionViewWillLeave(){this.emulationService.pause(),this.emulationService.newFrameEvent.removeHandler(this.onNewFrame),this.snapshotService.snapshotEvent.removeHandler(this.onSnapshot),this.eventHandlingService.release()}openContextMenu(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:f,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onClick:()=>t.dismiss(),showHelp:()=>this.showHelp()}});t.present()})}installFiles(){this.fileService.openFiles(this.installlationService.installFiles.bind(this.installlationService))}showHelp(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:p.a,componentProps:{url:"assets/doc/emulation.md"}});yield e.present()})}showGameModeHint(){return Object(o.a)(this,void 0,void 0,function*(){yield this.alertService.message("Game mode","\n                The keyboard is in game mode and controls the hardware buttons.\n                Press ctrl-shift in order to exit game mode.\n                <br/><br/>\n                Check the help page for a description of the different keyboard mappings.\n            ",{Help:()=>this.showHelp()})})}get installFileDisabled(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}get title(){var e;return(null===(e=this.emulationState.getCurrentSession())||void 0===e?void 0:e.name)||""}get isMuted(){return!this.audioService.isInitialized()||this.audioService.isMuted()}get isAudioOff(){return this.kvsService.kvs.volume<=0}mute(e){e?this.audioService.mute(!0):this.audioService.isInitialized()?this.audioService.mute(!1):this.audioService.initialize()}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(c.a),r.Jb(v.a),r.Jb(S.b),r.Jb(w),r.Jb(a.b),r.Jb(k.a),r.Jb(y.a),r.Jb(h.C),r.Jb(h.B),r.Jb(b.a),r.Jb(d.a),r.Jb(h.A),r.Jb(u.a),r.Jb(M))},e.\u0275cmp=r.Db({type:e,selectors:[["app-emulation"]],viewQuery:function(e,t){if(1&e&&r.lc(C,1),2&e){let e;r.ac(e=r.Vb())&&(t.canvasRef=e.first)}},decls:18,vars:16,consts:[["slot","end"],[3,"disabled","click"],["name","download-outline"],["slot","start"],[3,"click"],["name","ellipsis-vertical-outline"],[3,"click",4,"ngIf"],[1,"container","running-session"],[3,"width","height"],["canvas",""],["class","container no-session",4,"ngIf"],["name","volume-mute-outline"],["name","volume-high-outline"],["name","game-controller-outline"],[1,"container","no-session"]],template:function(e,t){1&e&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-title"),r.hc(3),r.Lb(),r.Mb(4,"ion-buttons",0),r.Mb(5,"ion-button",1),r.Ub("click",function(){return t.installFiles()}),r.Kb(6,"ion-icon",2),r.Lb(),r.Lb(),r.Mb(7,"ion-buttons",3),r.Mb(8,"ion-button",4),r.Ub("click",function(e){return t.openContextMenu(e)}),r.Kb(9,"ion-icon",5),r.Lb(),r.gc(10,L,2,0,"ion-button",6),r.gc(11,E,2,0,"ion-button",6),r.gc(12,D,2,0,"ion-button",6),r.Lb(),r.Lb(),r.Lb(),r.Mb(13,"ion-content"),r.Mb(14,"div",7),r.Kb(15,"canvas",8,9),r.Lb(),r.gc(17,B,3,0,"div",10),r.Lb()),2&e&&(r.zb(3),r.ic(t.title),r.zb(2),r.Zb("disabled",t.installFileDisabled),r.zb(5),r.Zb("ngIf",t.isMuted&&!t.isAudioOff),r.zb(1),r.Zb("ngIf",!t.isMuted&&!t.isAudioOff),r.zb(1),r.Zb("ngIf",t.eventHandlingService.isGameMode()),r.zb(2),r.fc("display",t.emulationState.getCurrentSession()?void 0:"none"),r.zb(1),r.fc("width",t.cssWidth)("height",t.cssHeight)("display",t.emulationState.getCurrentSession()?"block":"none"),r.Zb("width",t.canvasWidth)("height",t.canvasHeight),r.zb(2),r.Zb("ngIf",!t.emulationState.getCurrentSession()))},directives:[h.g,h.x,h.v,h.e,h.d,h.h,n.i,h.f],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:3px}.container.running-session[_ngcontent-%COMP%]{background:radial-gradient(circle,#ccc 0,#eee 100%)}@media (prefers-color-scheme:dark){.container.running-session[_ngcontent-%COMP%]{background:none}}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({imports:[[s.i.forChild(T)],s.i]}),e})();var H=i("3Pt+"),U=i("vy64");let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({imports:[[n.b,H.e,h.y,P,U.a]]}),e})()}}]);
//# sourceMappingURL=13-es2015.bdf83e5bdad667541e48.js.map