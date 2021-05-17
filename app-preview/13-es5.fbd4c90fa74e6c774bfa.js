!function(){function e(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw o}}}}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6aA7":function(n,i,r){"use strict";r.r(i),r.d(i,"EmulationPageModule",function(){return Q});var s,c,u,l,v=r("ofXK"),h=r("tyNb"),d=r("mrSG"),f=r("fXoL"),b=r("bucj"),m=r("95eT"),p=r("TEn/"),g=r("G5Yk"),S=r("shLW"),k=r("Ld/c"),y=r("hq03"),w=((c=function(){function e(t,n,i,r,o,s){a(this,e),this.emulationService=t,this.loadingController=n,this.snapshotService=i,this.fileService=r,this.emulationStateService=o,this.alertService=s}return o(e,[{key:"saveBackup",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,i,a,r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.emulationStateService.getCurrentSession()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.loadingController.create();case 5:return n=e.sent,e.next=8,n.present();case 8:return a=[],e.next=11,this.emulationService.pause();case 11:return e.next=13,this.snapshotService.waitForPendingSnapshot();case 13:return e.prev=13,e.next=16,this.emulationService.cloudpilot;case 16:return r=e.sent,e.next=19,r.backup(function(e){return Object(d.a)(o,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.Init();case 1:if(!e.IsInProgress()){t.next=8;break}return n=e.GetCurrentDatabase(),e.Save()||a.push(n),t.next=6,new Promise(function(e){return setTimeout(e,0)});case 6:t.next=1;break;case 8:i=r.getArchive(e);case 9:case"end":return t.stop()}},t)}))});case 19:return e.prev=19,e.next=22,n.dismiss();case 22:return e.next=24,this.emulationService.resume();case 24:return e.finish(19);case 25:if(!i){e.next=34;break}if(!(a.length>0)){e.next=31;break}return e.next=29,this.alertService.message("Backup complete","\n                    ".concat(Object(m.a)(a)," failed  to backup.\n                    <br/><br/>\n                    Open databases cannot be backuped. Please run backup from the launcher\n                    in order to backup all databases.\n                "),{"Save Backup":function(){return o.fileService.saveFile(Object(m.b)(t),i)}},"Cancel");case 29:e.next=32;break;case 31:this.fileService.saveFile(Object(m.b)(t),i);case 32:e.next=36;break;case 34:return e.next=36,this.alertService.errorMessage("Backup failed.");case 36:case"end":return e.stop()}},e,this,[[13,,19,25]])}))}}]),e}()).\u0275fac=function(e){return new(e||c)(f.Qb(b.a),f.Qb(p.C),f.Qb(g.a),f.Qb(S.a),f.Qb(k.a),f.Qb(y.a))},c.\u0275prov=f.Fb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),M=((s=function(){function e(t,n){a(this,e),this.emulationService=t,this.backupService=n,this.onClick=function(){},this.showHelp=function(){}}return o(e,[{key:"ngOnInit",value:function(){}},{key:"reset",value:function(){this.emulationService.reset(),this.onClick()}},{key:"resetNoExtensions",value:function(){this.emulationService.resetNoExtensions(),this.onClick()}},{key:"resetHard",value:function(){this.emulationService.resetHard(),this.onClick()}},{key:"power",value:function(){this.emulationService.engagePower(),this.onClick()}},{key:"help",value:function(){this.showHelp(),this.onClick()}},{key:"backup",value:function(){this.backupService.saveBackup(),this.onClick()}},{key:"backupDisabled",get:function(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}}]),e}()).\u0275fac=function(e){return new(e||s)(f.Jb(b.a),f.Jb(w))},s.\u0275cmp=f.Db({type:s,selectors:[["app-emulation-context-menu"]],inputs:{onClick:"onClick",showHelp:"showHelp"},decls:13,vars:11,consts:[["button","",3,"detail","disabled","click"],["button","",3,"detail","click"]],template:function(e,t){1&e&&(f.Mb(0,"ion-list"),f.Mb(1,"ion-item",0),f.Ub("click",function(){return t.power()}),f.hc(2," Power "),f.Lb(),f.Mb(3,"ion-item",0),f.Ub("click",function(){return t.reset()}),f.hc(4," Reset "),f.Lb(),f.Mb(5,"ion-item",0),f.Ub("click",function(){return t.resetNoExtensions()}),f.hc(6," Reset (no extensions) "),f.Lb(),f.Mb(7,"ion-item",0),f.Ub("click",function(){return t.resetHard()}),f.hc(8," Hard reset "),f.Lb(),f.Mb(9,"ion-item",0),f.Ub("click",function(){return t.backup()}),f.hc(10," Save backup "),f.Lb(),f.Mb(11,"ion-item",1),f.Ub("click",function(){return t.help()}),f.hc(12," Help "),f.Lb(),f.Lb()),2&e&&(f.zb(1),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",t.backupDisabled),f.zb(2),f.Zb("detail",!1))},directives:[p.o,p.j],styles:[""]}),s),x=r("7yca"),C=r("oOyw"),D=r("xOb2"),E=r("pEgL"),L=((u=function(){function n(i,r,o){var s=this;a(this,n),this.emulationService=i,this.canvasDisplayService=r,this.ngZone=o,this.handleMouseDown=function(e){var n;if(0===e.button){var i=s.canvasDisplayService.eventToPalmCoordinates(e);if(i){var a=s.determineArea(i);if(0===a)s.interactionMouse={area:a},(n=s.emulationService).handlePointerMove.apply(n,t(i));else{var r=s.canvasDisplayService.determineButton(i);s.interactionMouse={area:a,button:r},s.handleButtonDown(r)}}}},this.handleMouseMove=function(e){var n,i;if(1&e.buttons&&0===(null===(i=s.interactionMouse)||void 0===i?void 0:i.area)){var a=s.canvasDisplayService.eventToPalmCoordinates(e,!0);a&&(n=s.emulationService).handlePointerMove.apply(n,t(a))}},this.handeMouseUp=function(e){if(0===e.button){var t=s.interactionMouse;switch(s.interactionMouse=void 0,null==t?void 0:t.area){case 1:s.handleButtonUp(t.button);break;case 0:s.emulationService.handlePointerUp()}}},this.handleTouchStart=function(e){for(var n=0;n<e.changedTouches.length;n++){var i,a=e.changedTouches.item(n);if(a){var r=s.canvasDisplayService.eventToPalmCoordinates(a);if(r){var o=s.determineArea(r);if(0===o)s.interactionsTouch.set(a.identifier,{area:o}),(i=s.emulationService).handlePointerMove.apply(i,t(r));else{var c=s.canvasDisplayService.determineButton(r);s.interactionsTouch.set(a.identifier,{area:o,button:c}),s.handleButtonDown(c)}}}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchMove=function(e){for(var n,i=0;i<e.changedTouches.length;i++){var a=e.changedTouches.item(i);if(a&&0===(null===(n=s.interactionsTouch.get(a.identifier))||void 0===n?void 0:n.area)){var r,o=s.canvasDisplayService.eventToPalmCoordinates(a,!0);if(!o)continue;(r=s.emulationService).handlePointerMove.apply(r,t(o))}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchEnd=function(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches.item(t);if(n){var i=s.interactionsTouch.get(n.identifier);switch(s.interactionsTouch.delete(n.identifier),null==i?void 0:i.area){case 1:s.handleButtonUp(i.button);break;case 0:s.emulationService.handlePointerUp()}}}!1!==e.cancelable&&e.preventDefault()},this.handleKeyDown=function(e){if(s.isToggleGameMode(e))return e.preventDefault(),void s.ngZone.run(function(){return s.gameMode=!s.gameMode});var t=s.buttonFromEvent(e);if(void 0!==t)return s.handleButtonDown(t),void e.preventDefault();var n=s.keyCodeFromEvent(e);void 0!==n&&(s.emulationService.handleKeyDown(n),e.preventDefault())},this.handleKeyUp=function(t){var n=s.buttonFromEvent(t);if(void 0!==n)return s.handleButtonUp(n),void t.preventDefault();if("Control"===t.key){var i,a=e(s.activeButtons);try{for(a.s();!(i=a.n()).done;){var r=i.value;s.emulationService.handleButtonUp(r)}}catch(o){a.e(o)}finally{a.f()}s.activeButtons.clear(),s.canvasDisplayService.drawButtons([])}},this.interactionsTouch=new Map,this.activeButtons=new Set,this.gameMode=!1}return o(n,[{key:"bind",value:function(e){var t=this;this.canvas&&this.release(),this.canvas=e,this.ngZone.runOutsideAngular(function(){e.addEventListener("mousedown",t.handleMouseDown),window.addEventListener("mouseup",t.handeMouseUp),window.addEventListener("mousemove",t.handleMouseMove),e.addEventListener("touchstart",t.handleTouchStart),e.addEventListener("touchmove",t.handleTouchMove),e.addEventListener("touchend",t.handleTouchEnd),e.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("keydown",t.handleKeyDown),window.addEventListener("keyup",t.handleKeyUp)})}},{key:"release",value:function(){if(this.canvas){this.canvas.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp);var t,n=e(this.activeButtons);try{for(n.s();!(t=n.n()).done;){var i=t.value;this.handleButtonUp(i)}}catch(a){n.e(a)}finally{n.f()}this.activeButtons.clear(),this.interactionsTouch.clear(),this.interactionMouse=void 0,this.canvas=void 0}}},{key:"isGameMode",value:function(){return this.gameMode}},{key:"determineArea",value:function(e){return this.canvasDisplayService.isButtons(e)?1:0}},{key:"handleButtonDown",value:function(e){this.activeButtons.has(e)||(this.activeButtons.add(e),this.emulationService.handleButtonDown(e),this.canvasDisplayService.drawButtons(Array.from(this.activeButtons.values())))}},{key:"handleButtonUp",value:function(e){this.activeButtons.has(e)&&(this.activeButtons.delete(e),this.emulationService.handleButtonUp(e),this.canvasDisplayService.drawButtons(Array.from(this.activeButtons.values())))}},{key:"isToggleGameMode",value:function(e){return"Shift"===e.key&&e.ctrlKey||"Control"===e.key&&e.shiftKey}},{key:"isGameModeActive",value:function(e){return!this.gameMode&&e.ctrlKey||this.gameMode&&!e.ctrlKey}},{key:"buttonFromEvent",value:function(e){switch(e.key){case"PageUp":return 4;case"PageDown":return 5}if(this.isGameModeActive(e))switch(e.key){case"w":case"i":case"ArrowUp":return 4;case"s":case"k":case"ArrowDown":return 5;case"a":case"j":case"y":case"z":case"ArrowLeft":return 0;case"q":case"u":case"x":return 1;case"e":case"o":case"c":return 2;case"d":case"l":case"v":case"ArrowRight":return 3}}},{key:"keyCodeFromEvent",value:function(e){if(!this.isGameModeActive(e)){if(1===e.key.length&&e.key.charCodeAt(0)<=255)return e.key.charCodeAt(0);switch(e.key){case"ArrowLeft":return 28;case"ArrowRight":return 29;case"ArrowUp":return 30;case"ArrowDown":return 31;case"Backspace":return 8;case"Tab":return 9;case"Enter":return 10;default:return}}}}]),n}()).\u0275fac=function(e){return new(e||u)(f.Qb(b.a),f.Qb(E.a),f.Qb(f.B))},u.\u0275prov=f.Fb({token:u,factory:u.\u0275fac,providedIn:"root"}),u),T=r("ZW/x"),B=r("4otK"),A=((l=function(){function t(e,n,i,r,o){a(this,t),this.emulationService=e,this.loadingController=n,this.snapshotService=i,this.emulationStateService=r,this.alertService=o}return o(t,[{key:"installFiles",value:function(t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i,a,r,o,s,c,u,l,v,h=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Installing..."});case 2:return i=n.sent,n.next=5,i.present();case 5:return n.next=7,this.emulationService.pause();case 7:return n.next=9,this.snapshotService.waitForPendingSnapshot();case 9:a=[],r=[],o=[],n.prev=10,s=e(t),n.prev=12,s.s();case 14:if((c=s.n()).done){n.next=34;break}if(u=c.value,!/\.(prc|pdb|pqa)$/i.test(u.name)){n.next=31;break}return n.next=19,this.emulationService.installDb(u.content);case 19:n.t0=n.sent,n.next=-1===n.t0?22:2===n.t0?24:1===n.t0?26:27;break;case 22:return r.push(u.name),n.abrupt("break",27);case 24:return o.push(u.name),a.push(u.name),n.abrupt("break",27);case 26:a.push(u.name);case 27:return n.next=29,new Promise(function(e){return setTimeout(e,0)});case 29:n.next=32;break;case 31:r.push(u.name);case 32:n.next=14;break;case 34:n.next=39;break;case 36:n.prev=36,n.t1=n.catch(12),s.e(n.t1);case 39:return n.prev=39,s.f(),n.finish(39);case 42:return n.prev=42,i.dismiss(),this.emulationService.resume(),n.finish(42);case 45:l=[this.messageSucces(a),this.messageFailed(r),this.messageRequireReset(o)].filter(function(e){return!!e}).join("<br/><br/>"),v=0===r.length?"Installation successful":0===a.length?"Installation failed":"Installation errors",this.alertService.message(v,l,o.length>0?{"Reset now":function(){return h.emulationService.reset()}}:void 0);case 47:case"end":return n.stop()}},n,this,[[10,,42,45],[12,36,39,42]])}))}},{key:"messageSucces",value:function(e){switch(e.length){case 0:return;case 1:return"Installation of ".concat(e[0]," successful.");default:return"Installation of ".concat(e.length," files successful.")}}},{key:"messageFailed",value:function(e){return e.length>0?"Installation of  ".concat(Object(m.a)(e)," failed."):void 0}},{key:"messageRequireReset",value:function(e){return e.length>0?"".concat(Object(m.a)(e)," require a device reset."):void 0}}]),t}()).\u0275fac=function(e){return new(e||l)(f.Qb(b.a),f.Qb(p.C),f.Qb(g.a),f.Qb(k.a),f.Qb(y.a))},l.\u0275prov=f.Fb({token:l,factory:l.\u0275fac,providedIn:"root"}),l),P=["canvas"];function R(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",4),f.Ub("click",function(){return f.cc(n),f.Wb().mute(!1)}),f.Kb(1,"ion-icon",10),f.Lb()}}function U(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",4),f.Ub("click",function(){return f.cc(n),f.Wb().mute(!0)}),f.Kb(1,"ion-icon",11),f.Lb()}}function O(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",4),f.Ub("click",function(){return f.cc(n),f.Wb().showGameModeHint()}),f.Kb(1,"ion-icon",12),f.Lb()}}function I(e,t){1&e&&(f.Mb(0,"div",13),f.Mb(1,"div"),f.hc(2,"No session selected"),f.Lb(),f.Lb())}var H,j,F,z=[{path:"",component:(H=function(){function e(t,n,i,r,o,s,c,u,l,v,h,d,f){var b=this;a(this,e),this.emulationService=t,this.emulationState=n,this.storageService=i,this.eventHandlingService=r,this.canvasDisplayService=o,this.kvsService=s,this.audioService=c,this.popoverController=u,this.modalController=l,this.alertService=v,this.fileService=h,this.snapshotService=d,this.installlationService=f,this.onSnapshot=function(e){b.kvsService.kvs.showStatistics&&b.canvasDisplayService.drawStatistics(e,b.emulationService.getStatistics())},this.onNewFrame=function(e){b.canvasDisplayService.drawEmulationCanvas(e)}}return o(e,[{key:"ngAfterViewInit",value:function(){}},{key:"cssWidth",get:function(){return this.canvasDisplayService.width/devicePixelRatio+"px"}},{key:"cssHeight",get:function(){return this.canvasDisplayService.height/devicePixelRatio+"px"}},{key:"ionViewDidEnter",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.emulationState.getCurrentSession(),n=Object(C.b)(),e.t0=t||void 0===n,e.t0){e.next=7;break}return e.next=6,this.storageService.getSession(n);case 6:t=e.sent;case 7:this.canvasDisplayService.initialize(this.canvasRef.nativeElement,t).then(function(){i.kvsService.kvs.showStatistics&&i.canvasDisplayService.drawStatistics()}),this.onNewFrame(this.emulationService.getCanvas()),this.emulationService.newFrameEvent.addHandler(this.onNewFrame),this.snapshotService.snapshotEvent.addHandler(this.onSnapshot),this.emulationService.resume(),this.eventHandlingService.bind(this.canvasRef.nativeElement);case 13:case"end":return e.stop()}},e,this)}))}},{key:"ionViewWillLeave",value:function(){this.emulationService.pause(),this.emulationService.newFrameEvent.removeHandler(this.onNewFrame),this.snapshotService.snapshotEvent.removeHandler(this.onSnapshot),this.eventHandlingService.release()}},{key:"openContextMenu",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverController.create({component:M,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onClick:function(){return n.dismiss()},showHelp:function(){return i.showHelp()}}});case 2:(n=t.sent).present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"installFiles",value:function(){this.fileService.openFiles(this.installlationService.installFiles.bind(this.installlationService))}},{key:"showHelp",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:x.a,componentProps:{url:"assets/doc/emulation.md"}});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"showGameModeHint",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertService.message("Game mode","\n                The keyboard is in game mode and controls the hardware buttons.\n                Press ctrl-shift in order to exit game mode.\n                <br/><br/>\n                Check the help page for a description of the different keyboard mappings.\n            ",{Help:function(){return t.showHelp()}});case 2:case"end":return e.stop()}},e,this)}))}},{key:"installFileDisabled",get:function(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}},{key:"title",get:function(){var e;return(null===(e=this.emulationState.getCurrentSession())||void 0===e?void 0:e.name)||""}},{key:"isMuted",get:function(){return!this.audioService.isInitialized()||this.audioService.isMuted()}},{key:"isAudioOff",get:function(){return this.kvsService.kvs.volume<=0}},{key:"mute",value:function(e){e?this.audioService.mute(!0):this.audioService.isInitialized()?this.audioService.mute(!1):this.audioService.initialize()}}]),e}(),H.\u0275fac=function(e){return new(e||H)(f.Jb(b.a),f.Jb(k.a),f.Jb(D.b),f.Jb(L),f.Jb(E.a),f.Jb(T.a),f.Jb(B.a),f.Jb(p.E),f.Jb(p.D),f.Jb(y.a),f.Jb(S.a),f.Jb(g.a),f.Jb(A))},H.\u0275cmp=f.Db({type:H,selectors:[["app-emulation"]],viewQuery:function(e,t){var n;1&e&&f.lc(P,1),2&e&&f.ac(n=f.Vb())&&(t.canvasRef=n.first)},decls:18,vars:14,consts:[["slot","end"],[3,"disabled","click"],["name","download-outline"],["slot","start"],[3,"click"],["name","ellipsis-vertical-outline"],[3,"click",4,"ngIf"],[1,"container","running-session"],["canvas",""],["class","container no-session",4,"ngIf"],["name","volume-mute-outline"],["name","volume-high-outline"],["name","game-controller-outline"],[1,"container","no-session"]],template:function(e,t){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar"),f.Mb(2,"ion-title"),f.hc(3),f.Lb(),f.Mb(4,"ion-buttons",0),f.Mb(5,"ion-button",1),f.Ub("click",function(){return t.installFiles()}),f.Kb(6,"ion-icon",2),f.Lb(),f.Lb(),f.Mb(7,"ion-buttons",3),f.Mb(8,"ion-button",4),f.Ub("click",function(e){return t.openContextMenu(e)}),f.Kb(9,"ion-icon",5),f.Lb(),f.gc(10,R,2,0,"ion-button",6),f.gc(11,U,2,0,"ion-button",6),f.gc(12,O,2,0,"ion-button",6),f.Lb(),f.Lb(),f.Lb(),f.Mb(13,"ion-content"),f.Mb(14,"div",7),f.Kb(15,"canvas",null,8),f.Lb(),f.gc(17,I,3,0,"div",9),f.Lb()),2&e&&(f.zb(3),f.ic(t.title),f.zb(2),f.Zb("disabled",t.installFileDisabled),f.zb(5),f.Zb("ngIf",t.isMuted&&!t.isAudioOff),f.zb(1),f.Zb("ngIf",!t.isMuted&&!t.isAudioOff),f.zb(1),f.Zb("ngIf",t.eventHandlingService.isGameMode()),f.zb(2),f.fc("display",t.emulationState.getCurrentSession()?void 0:"none"),f.zb(1),f.fc("width",t.cssWidth)("height",t.cssHeight)("display",t.emulationState.getCurrentSession()?"block":"none"),f.zb(2),f.Zb("ngIf",!t.emulationState.getCurrentSession()))},directives:[p.g,p.z,p.x,p.e,p.d,p.h,v.i,p.f],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;justify-content:center;padding:3px;width:100%}.container.running-session[_ngcontent-%COMP%]{background:radial-gradient(circle,#ccc 0,#eee 100%)}@media (prefers-color-scheme:dark){.container.running-session[_ngcontent-%COMP%]{background:none}}canvas[_ngcontent-%COMP%]{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}"]}),H)}],K=((j=function e(){a(this,e)}).\u0275fac=function(e){return new(e||j)},j.\u0275mod=f.Hb({type:j}),j.\u0275inj=f.Gb({imports:[[h.i.forChild(z)],h.i]}),j),J=r("3Pt+"),G=r("vy64"),Q=((F=function e(){a(this,e)}).\u0275fac=function(e){return new(e||F)},F.\u0275mod=f.Hb({type:F}),F.\u0275inj=f.Gb({imports:[[v.b,J.e,p.A,K,G.a]]}),F)}}])}();
//# sourceMappingURL=13-es5.fbd4c90fa74e6c774bfa.js.map