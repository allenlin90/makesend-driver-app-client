(()=>{"use strict";var e={364:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loginProcess=t.checkToken=t.generateHeaders=void 0;var r,a,i,o=t.generateHeaders=(r=u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(l,{method:"post",mod:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return r.apply(this,arguments)});t.checkToken=(a=u(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,n=v(),e.next=4,o();case 4:if(r=e.sent,!n){e.next=10;break}return e.next=8,fetch(p,{method:"post",mod:"cors",responseType:"json",headers:{"Content-Type":"application/json","User-Token":""+n,"Client-Token":r["Client-Token"],"Time-Stamp":r["Time-Stamp"],"Time-Signature":r["Time-Signature"]}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 8:200===e.sent.resCode&&(t=!0);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)}),t.loginProcess=(i=u(regeneratorRuntime.mark((function e(){var t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,e.next=5,fetch(d,{method:"post",headers:{"Content-type":"application/json","Client-Token":t["Client-Token"],"Time-Stamp":t["Time-Stamp"],"Time-Signature":t["Time-Signature"]},body:JSON.stringify({email:r,password:a,keepAlive:i?1:0})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}));case 5:if(200!==(n=e.sent).resCode){e.next=10;break}return i?localStorage.setItem("token",n.token):sessionStorage.setItem("token",n.token),window.location.hash="dashboard",e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),t.userToken=v;var s,c=(s=n(398))&&s.__esModule?s:{default:s};function u(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}var l=c.default.host+"/header",d=c.default.host+"/login",p=c.default.checkToken;function v(){return sessionStorage.getItem("token")||localStorage.getItem("token")||null}},398:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default={host:"https://makesend-driver.herokuapp.com/",checkToken:"https://api.airportels.ninja/api/msd/authPing"}},808:(e,t)=>{function n(e){var t=document.querySelector("#navi_scanner"),n=document.querySelector("#navi_search"),r=document.querySelector("#navi_tasks"),a=document.querySelector("#navi_setting");switch([r,n,t,a].forEach((function(e){e.classList.remove("selected")})),e){case"dashboard":n.classList.add("selected");break;case"scanner":t.classList.add("selected");break;case"tasks":r.classList.add("selected");break;case"setting":a.classList.add("selected");break;default:n.classList.add("selected")}}function r(){var e=document.querySelector("#navi_logout"),t=document.querySelector("body"),n=document.querySelector("footer");e.addEventListener("click",(function(e){e.stopPropagation(),sessionStorage.clear(),localStorage.clear(),n.innerHTML="",t.style.backgroundColor="rgba(0, 0, 0, 0.1)",document.querySelector(".container").style.justifyContent="center",window.location.hash=""}))}Object.defineProperty(t,"__esModule",{value:!0}),t.navigators=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dashboard",t=document.querySelector(".container"),a=document.querySelector("footer");t.innerHTML="",a.innerHTML='\n        <div class="navigator">\n            <div>\n                <a href="#scanner" class="" id="navi_scanner">\n                    <i class="fas fa-qrcode"></i>\n                    <span>Scan</span>\n                </a>\n            </div>\n            <div>\n                <a href="#search" class="" id="navi_search">\n                    <i class="fas fa-search"></i>\n                    <span>Search</span>\n                </a>\n            </div>\n            <div>\n                <a href="#tasks" class="" id="navi_tasks">\n                    <i class="fas fa-tasks"></i>\n                    <span>Tasks</span>\n                </a>\n            </div>\n            <div>\n                <a href="#setting" class="" id="navi_setting">\n                    <i class="fas fa-cog"></i>\n                    <span>Setting</span>\n                </a>\n            </div>\n            <div>\n                <a href="#" class="" id="navi_logout">\n                    <i class="fas fa-sign-out-alt"></i>\n                    <span>Logout</span>\n                </a>\n            </div>\n        </div>\n    ',r(),n(e)}},732:(e,t)=>{var n;function r(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}Object.defineProperty(t,"__esModule",{value:!0}),t.qrScanner=(n=r(regeneratorRuntime.mark((function e(){var t,n,i,o,s,c,u,l,d,p,v,m,f,h,g,b,y=(t=r(regeneratorRuntime.mark((function e(){var t,n,i,o,c,l,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.style.display="none",p.style.display="none",s.hidden=!1,!/iphone|ipad|mac|apple|os\sx/.test(b().toLowerCase())){e.next=23;break}return t=function(){var e=r(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0}).then(function(){var e=r(regeneratorRuntime.mark((function e(n){var r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:if(!(r=e.sent).length){e.next=12;break}return a=r.filter((function(e){return"videoinput"===e.kind})),i=d.value,d.innerHTML="",a.forEach((function(e,t){var n=document.createElement("option");n.value=e.deviceId,n.text=e.label||"camera "+(t+1),d.appendChild(n)})),d.value=i,e.abrupt("return",r);case 12:f(),console.log("trigger");case 14:case"end":return e.stop()}}),e,t)})));return function(t){return e.apply(this,arguments)}}()).catch(f);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),e.prev=5,window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),e.next=9,t();case 9:n=e.sent,i=n.filter((function(e){return"videoinput"===e.kind&&/(back|rear)/g.test(e.label.toLowerCase())})),{},c=d.value,o=i.length?{video:{deviceId:c?{exact:c}:i[i.length-1].deviceId}}:{video:{deviceId:{exact:void 0}}},console.log(o),navigator.mediaDevices.getUserMedia(o).then(m).then(k).catch(f),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),f(e.t0);case 21:e.next=24;break;case 23:try{if(window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),l=d.value,v=null,a.rearCameras.length)v={video:{deviceId:l?{exact:l}:{exact:a.rearCameras[a.rearCameras.length-1].deviceId}}},navigator.mediaDevices.getUserMedia(v).then(m).then(k).catch(f);else{v={video:{deviceId:void 0}};try{v={video:{facingMode:"environment"}},navigator.mediaDevices.getUserMedia(v).then(m).then(k).catch(f)}catch(e){console.log("no rear camera"),v={video:!0},navigator.mediaDevices.getUserMedia(v).then(m).then(k).catch(f)}}console.log(v)}catch(e){console.log(e)}case 24:case"end":return e.stop()}}),e,this,[[5,18]])}))),function(){return t.apply(this,arguments)}),k=(n=r(regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices().then((function(e){return e})).catch((function(e){return e}));case 2:if(t=e.sent,!(n=t.filter((function(e){return"videoinput"===e.kind}))).length){e.next=14;break}return r=d.value,d.innerHTML="",n.forEach((function(e,t){var n=document.createElement("option");n.value=e.deviceId,n.text=e.label||"camera "+(t+1),d.appendChild(n)})),d.value=r,i=t.filter((function(e){return/(back|rear)/g.test(e.label.toLowerCase())})),a.rearCameras=i,e.abrupt("return",t);case 14:f("This device has no available camera");case 15:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)});return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=function(){var e=navigator.userAgent.match(/\((.*?)\)/g)[0];return e.slice(1,e.length-1)},g=function e(){try{qrcode.decode()}catch(t){setTimeout(e,300)}},h=function e(){s.height=a.video.videoHeight,s.width=a.video.videoWidth,c.drawImage(a.video,0,0,s.width,s.height),a.scanning&&requestAnimationFrame(e)},f=function(e){var t="<h1>App can't start camera because </h1>\n            <p>\""+e+'"</p>\n            <div id="refresh_page" class="btn btn-light" style="margin: 0 auto;">Reload Page</div>';document.querySelector("#qrcode_scanner").innerHTML=t,document.querySelector("#refresh_page").addEventListener("click",(function(e){e.stopPropagation(),location.reload()})),console.log(e)},m=function(e){window.stream=e,a.scanning=!0,a.video.setAttribute("playsinline",!0),a.video.srcObject=e,a.video.play(),h(),g()},v=function(e){e&&(u.style.display="block",l.innerText=e,p.style.display="block",a.scanning=!1,a.video.srcObject.getTracks().forEach((function(e){e.stop()})),s.hidden=!0)},(i=document.querySelector(".container")).style.justifyContent="space-between",i.innerHTML='\n        <div id="qrcode_scanner">\n            <div>\n                <h1>QR Code Scanner</h1>\n            </div>\n            <div id="videoSelect">\n                <label for="videoSource">Change Camera</label>\n                <select id="videoSource" class="custom-select"></select>\n            </div>\n            <canvas id="qr-canvas"></canvas>\n            <div id="qr-result">\n                <b>Result:</b><span id="outputData"></span>\n            </div>\n            <div id="startScanBtn">\n                <label>\n                    <img src="https://uploads.sitepoint.com/wp-content/uploads/2017/07/1499401426qr_icon.svg">\n                    <p>Scan Again</p>\n                </label>\n            </div>\n        </div>\n    ',o=document.createElement("video"),a.video=o,(s=document.querySelector("#qr-canvas")).width=s.offsetHeight/3*4,c=s.getContext("2d"),u=document.querySelector("#qr-result"),l=document.querySelector("#outputData"),d=document.querySelector("#videoSource"),p=document.querySelector("#startScanBtn"),d.onchange=y,e.next=21,k();case 21:y(),qrcode.callback=v,p.onclick=y;case 25:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),t.stopStream=function(){a.scanning&&(a.video.srcObject.getTracks().forEach((function(e){e.stop()})),a.scanning=!1,a.video=null)};var a={rearCameras:[],cameras:[],appleDevice:null,scanning:!1,video:null}},400:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r,a,i=(r=p(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.match(/^0\d{9}/g)){e.next=20;break}return e.prev=2,e.next=5,(0,d.generateHeaders)();case 5:return n=e.sent,console.log(n),e.next=9,fetch(v,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","User-Token":""+(localStorage.getItem("token")||sessionStorage.getItem("token")),"Client-Token":n["Client-Token"],"Time-Stamp":n["Time-Stamp"],"Time-Signature":n["Time-Signature"]},body:JSON.stringify({receiver_phone:t})}).then((function(e){return e.json()})).then((function(e){return e}));case 9:r=e.sent,console.log(r),f.parcels=r.map((function(e){var t=e.service_date.slice(0,10);return e.service_date=t,e})),f.parcels.length?y():b(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),k(e.t0);case 18:e.next=22;break;case 20:g("Phone number starts with 0 and is in 10 digits!");case 22:case"end":return e.stop()}}),e,this,[[2,15]])}))),function(e){return r.apply(this,arguments)}),o=(a=p(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=/^[eE][xX]\d{13}/g.exec(t))){e.next=18;break}return e.prev=2,e.next=5,(0,d.generateHeaders)();case 5:return r=e.sent,e.next=8,fetch(m,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","User-Token":""+(localStorage.getItem("token")||sessionStorage.getItem("token")),"client-token":r["client-token"],"time-stamp":r["time-stamp"],"time-signature":r["time-signature"]},body:JSON.stringify({shipmentIDs:[n[0]]})}).then((function(e){return e.json()})).then((function(e){return e}));case 8:a=e.sent,f.parcels=a.results,f.parcels.length?y():b(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),k(e.t0);case 16:e.next=20;break;case 18:g("Your tracking ID is invalid!");case 20:case"end":return e.stop()}}),e,this,[[2,13]])}))),function(e){return a.apply(this,arguments)});t.handleSubmitEvent=function(){document.querySelector("form").onsubmit=function(e){e.preventDefault(),h()}},t.handleInputEvent=function(){document.querySelector("input").oninput=function(e){f.input=e.target.value,document.querySelector("#result_list ul").innerHTML="",f.timeoutId&&clearTimeout(f.timeoutId);var t=setTimeout((function(){h()}),500);f.timeoutId=t}};var s,c=n(292),u=n(926),l=(s=n(398))&&s.__esModule?s:{default:s},d=n(364);function p(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}var v=l.default.host+"/parcel",m="https://api.airportels.ninja/api/waybill/detail",f={input:"",timeoutId:null,parcels:[]};function h(){var e=document.querySelector("input");"receiver_phone"===e.id?i(f.input):"tracking_id"===e.id&&o(f.input)}function g(e){document.querySelector("#result_list ul").innerHTML='\n    <li id="input_error" class="list-group-item" style="color: red; font-weight: bold;"></li>\n    ',document.querySelector("#input_error").innerText=e}function b(){document.querySelector("#result_list ul").innerHTML='\n    <li id="input_error" class="list-group-item" style="color: red; font-weight: bold;"></li>\n    ',document.querySelector("#input_error").innerText='No result from "'+f.input+'"'}function y(){var e=f.parcels.map((function(e){var t="",n="";switch(e.status.toLowerCase().trim()){case"pending":case"in hub":case"delivering":case"delivering (delay)":case"returning":case"re-deilvering":t="primary";break;case"delivered":case"delivered (delay)":case"returned":t="primary",n="disabled";break;case"canceled":case"failed delivery":case"not found":t="danger",n="disabled";break;default:t="primary"}return'\n        <div class="card" data-shipment-id="'+e.shipmentID+'">\n            <div class="card-body">\n                <h5 class="card-title">Parcel ID: '+e.shipmentID+'</h5>\n                <h6 class="card-subtitle mb-2 text-muted">Service Date: '+e.service_date+'</h6>\n                <h6 class="card-subtitle mb-2 text-muted">Delivery Status: '+e.status+'</h6>\n                <p class="card-text">'+e.receiver_name+" "+e.receiver_no+'</p>\n                <p class="card-text">'+e.dropoff_address+", "+e.dropoff_district+", "+e.dropoff_province+" "+e.dropoff_postcode+'</p>\n                <p class="card-text">'+e.note+'</p>\n                <div class="card-link btn btn-primary" data-type="photo">Photo</div>\n                <div class="card-link btn btn-'+t+" "+n+'" data-type="signature">Singature</div>\n            </div>\n        </div>\n        '})).join("");document.querySelector("#result_list ul").innerHTML=e,[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(document.querySelector(".list-group.list-group-flush").children)).forEach((function(e){e.querySelector("div[data-type=signature]").addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),(0,c.createSignaturePad)(e.dataset.shipmentId)})),e.querySelector("div[data-type=photo]").addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),(0,u.createImageUploader)(e.dataset.shipmentId)}))}))}function k(e){var t=document.querySelector("header");t.innerHTML='\n    <div id="warning" class="alert alert-danger" role="alert">\n        Something went wrong: '+e+"\n    </div>\n    ",setTimeout((function(){t.innerHTML=""}),5e3)}},560:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.searchFeatures=function(){var e=document.querySelector(".container");e.style.justifyContent="space-between",e.innerHTML='\n    <div id="search_parcel">\n        <div id="search_functions">\n            <div id="search_by_phone_btn" class="btn btn-warning">Receiver Phone</div>\n            <div id="search_by_tracking_id_btn" class="btn btn-dark">Tracking ID</div>\n        </div>\n        <div id="search_list">\n            <div id="search_bar">\n                <form action="">\n                    <input class="form-control" id="receiver_phone" type="tel" name="receiver_phone" value=""\n                        inputmode="numeric" placeholder="E.g. 0632166699" autocomplete="off" pattern="[0-9]{10}">\n                    <button type="submit"><i class="fa fa-search"></i></button>\n                </form>\n            </div>            \n            <div id="result_list">\n                <ul class="list-group list-group-flush">\n                    <li class="list-group-item">Please search parcel by <br> <b>Receiver Phone</b> or <br> <b>Tracking ID</b></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    ',(0,r.handleSubmitEvent)(),(0,r.handleInputEvent)();var t=document.querySelector("#search_by_phone_btn"),n=document.querySelector("#search_by_tracking_id_btn"),a=document.querySelector("#search_bar");function i(e){var t=this;e.stopPropagation(),[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.parentNode.children)).forEach((function(e){e===t?(e.classList.add("btn-warning"),e.classList.remove("btn-dark")):(e.classList.add("btn-dark"),e.classList.remove("btn-warning"))})),"search_by_tracking_id_btn"===this.id?a.innerHTML='\n    <form action="" class="form-group">\n        <input class="form-control" id="tracking_id" type="text" name="tracking_id" value=""\n            placeholder="#EX1234567890123" autocomplete="off">\n        <button type="submit"><i class="fa fa-search"></i></button>        \n    </form>\n    ':"search_by_phone_btn"===this.id&&(a.innerHTML='\n    <form action="">\n        <input class="form-control" id="receiver_phone" type="tel" name="receiver_phone" value=""\n            inputmode="numeric" placeholder="E.g. 0632166699" autocomplete="off" pattern="[0-9]{10}">\n        <button type="submit"><i class="fa fa-search"></i></button>\n    </form>\n    '),document.querySelector("#result_list ul").innerHTML='<li class="list-group-item">Please search parcel by <br> <b>Receiver Phone</b> or <br> <b>Tracking ID</b></li>',(0,r.handleSubmitEvent)(),(0,r.handleInputEvent)()}t.addEventListener("click",i),n.addEventListener("click",i)};var r=n(400)},292:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSignaturePad=function(e){var t=document.querySelector("footer");t.remove();var n=document.querySelector(".container"),i=document.createElement("div");i.className="modal-dialog modal-dialog-scrollable update-pod",i.innerHTML='\n    <div class="modal-content">\n        <div class="modal-header">\n            <h5 class="modal-title" id="exampleModalScrollableTitle">Tracking ID: '+e+'</h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <div id="signature_upload" class="signature-pad">\n                <div class="signature-pad--body">\n                    <canvas id="signature_canvas">This browser doesn\'t support canvas</canvas>\n                </div>\n                <div class="signature-pad--footer">\n                    <div class="description">Sign above</div>\n                    <div class="signature-pad--actions">\n                        <div>\n                            <button type="button" class="button clear" data-action="clear">Clear</button>\n                            <button type="button" class="button" data-action="undo">Undo</button>\n                        </div>\n                        <div>\n                            <button type="button" class="button save" data-action="save-png">Save\n                                as\n                                PNG</button>\n                            <button type="button" class="button save" data-action="save-jpg">Save\n                                as\n                                JPG</button>                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="modal-footer">\n            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n            <button type="button" class="btn btn-primary" data-action="upload-signature">Upload</button>\n        </div>\n    </div>\n    ',n.appendChild(i);var o,s,c=i.querySelector("[data-action=clear]"),u=i.querySelector("[data-action=undo]"),l=i.querySelector("[data-action=save-png]"),d=i.querySelector("[data-action=save-jpg]"),p=i.querySelector("#signature_canvas"),v=new SignaturePad(p,{backgroundColor:"rgb(255, 255, 255)"});function m(){p.width=p.offsetWidth,p.height=p.offsetHeight,p.getContext("2d"),v.clear()}function f(e,t){var n=function(e){for(var t=e.split(";base64,"),n=t[0].split(":")[1],r=window.atob(t[1]),a=r.length,i=new Uint8Array(a),o=0;o<a;++o)i[o]=r.charCodeAt(o);return new Blob([i],{type:n})}(e),r=window.URL.createObjectURL(n),a=document.createElement("a");a.style="display: none",a.href=r,a.download=t,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(r)}function h(){i.remove(),n.insertAdjacentElement("afterend",t)}window.addEventListener("resize",m),m(),c.addEventListener("click",(function(e){v.clear()})),u.addEventListener("click",(function(e){var t=v.toData();t&&(t.pop(),v.fromData(t))})),l.addEventListener("click",(function(e){v.isEmpty()?alert("Please provide a signature first."):f(v.toDataURL(),"signature.png")})),d.addEventListener("click",(function(e){v.isEmpty()?alert("Please provide a signature first."):f(v.toDataURL("image/jpeg"),"signature.jpg")})),n.querySelector("[data-action=upload-signature]").onclick=(o=regeneratorRuntime.mark((function t(n){var i,o,s,c,u,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=v.toDataURL("image/jpeg"),!(o=(0,r.userToken)())){t.next=12;break}return t.next=5,(0,r.generateHeaders)();case 5:return s=t.sent,t.next=8,fetch("https://api.airportels.ninja/api/msd/delivery/uploadPOD",{method:"post",headers:{"Content-Type":"application/json","User-Token":""+o,"Client-Token":s["Client-Token"],"Time-Stamp":s["Time-Stamp"],"Time-Signature":s["Time-Signature"]},body:JSON.stringify({trackingID:e,type:"signature",PODImage:[i],fileName:"signatuer_"+e})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return alert(e)}));case 8:200===(c=t.sent).resCode&&c.result.length?(u="upload signature for "+e+" success!",console.log(u),alert(u),h()):(l="Error! Upload signature for "+e+" failed!",console.log(l),alert(l)),t.next=14;break;case 12:alert("token is invalid!"),(0,a.userLogin)();case 14:case"end":return t.stop()}}),t,this)})),s=function(){var e=o.apply(this,arguments);return new Promise((function(t,n){return function r(a,i){try{var o=e[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(s)}("next")}))},function(e){return s.apply(this,arguments)}),n.querySelector(".modal-header button").onclick=h,n.querySelector(".modal-footer button").onclick=h};var r=n(364),a=n(93)},926:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createImageUploader=function(e){var t,n=(t=a(regeneratorRuntime.mark((function t(){var n,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments[1];return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,r.userToken)(),t.next=3,(0,r.generateHeaders)();case 3:if(a=t.sent,!n){t.next=9;break}return t.next=7,fetch("https://api.airportels.ninja/api/msd/delivery/uploadPOD",{method:"post",headers:{"Content-Type":"application/json","User-Token":""+n,"Client-Token":a["Client-Token"],"Time-Stamp":a["Time-Stamp"],"Time-Signature":a["Time-Signature"]},body:JSON.stringify({trackingID:e,type:"image",PODImage:i,fileName:"pod_"+e+"_"+(new Date).toISOString()})}).then((function(e){return e.json()})).then((function(t){if(200===t.resCode&&t.result.length){var n=t.result.length>1?"images":"image",r="upload "+t.result.length+" "+n+" for "+e+" success!";console.log(r),alert(r),o.clearPreviewPanel(),d()}else{var a="upload image for "+e+" failed";console.log(a),alert(a)}})).catch((function(e){alert(e)}));case 7:t.next=11;break;case 9:alert("token is invalid!"),userLogin();case 11:case"end":return t.stop()}}),t,this)}))),function(){return t.apply(this,arguments)}),o=document.querySelector("footer");o.remove();var s=document.querySelector(".container"),c=document.createElement("div");c.className="modal-dialog modal-dialog-scrollable update-pod",c.innerHTML='\n    <div class="modal-content">\n        <div class="modal-header">\n            <h5 class="modal-title" id="exampleModalScrollableTitle">Tracking ID: '+e+'</h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <div id="photo_upload">\n                <div class="custom-file-container" data-upload-id="imageUploader">\n                    <div class="image-upload-btns">\n                        <label class="custom-file-container__custom-file card shadow bg-white roundedcard shadow bg-white rounded">\n                            <div id="photo_btn">\n                                <img src="https://img.icons8.com/plasticine/camera.png" alt="photo_button">\n                                <p>Take a photo</p>\n                            </div>\n                            <input type="file" class="custom-file-container__custom-file__custom-file-input"\n                                accept="image/jpeg, image/png, image/gif" multiple aria-label="Choose File" style="display:none" />\n                            <input type="hidden" name="MAX_FILE_SIZE" value="10485760" style="display:none" />\n                            <span class="custom-file-container__custom-file__custom-file-control" style="display:none"></span>\n                        </label>\n                        \n                    </div>\n                    <div class="custom-file-container__image-preview"></div>\n                    <label><span>Remove All Photos</span>\n                            <a href="javascript:void(0)" class="custom-file-container__image-clear"\n                                title="Clear Image">&times;</a>\n                        </label>\n                </div>\n            </div>\n        </div>\n        <div class="modal-footer">\n            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n            <button type="button" class="btn btn-primary" data-action="upload-image">Upload</button>\n        </div>\n    </div>\n    ',s.appendChild(c);var u,l=new FileUploadWithPreview("imageUploader");function d(){c.remove(),s.insertAdjacentElement("afterend",o)}s.querySelector("[data-action=upload-image]").onclick=(u=a(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=l.cachedFileArray).length&&r.forEach((function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){var t=document.createElement("img");t.src=e.target.result,t.onload=function(e){var t=document.createElement("canvas"),a=400/e.target.width;t.width=400,t.height=e.target.height*a;var o=t.getContext("2d");o.drawImage(e.target,0,0,t.width,t.height);var s=o.canvas.toDataURL(e.target,"image/jpeg",.92);i.compressedFiles.push(s),i.compressedFiles.length===r.length&&n(i.compressedFiles,l)}}}));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)}),s.querySelector(".modal-header button").onclick=d,s.querySelector(".modal-footer button").onclick=d};var r=n(364);function a(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}var i={files:[],compressedFiles:[]}},93:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.userLogin=function(){sessionStorage.clear(),localStorage.clear(),window.location.hash="",a.innerHTML='\n        <div id="login_form">\n            <div id="makesend_logo">\n                <img src="https://www.makesend.asia/wp-content/uploads/2018/06/logo-makesend.png" alt="ms_logo">\n            </div>\n            <form action="" autocomplete="off">\n                <div class="mb-3">\n                    <label for="email" class="form-label">Email</label>\n                    <input type="text" class="form-control" id="email" aria-describedby="emailHelp"\n                        autocomplete="off">\n                    <div class="invalid-feedback">Your email is not correct</div>\n                </div>\n                <div class="mb-3">\n                    <label for="password" class="form-label">Password</label>\n                    <input type="password" class="form-control" id="password">\n                    <div class="invalid-feedback">Your password is not correct</div>\n                </div>\n                <div class="mb-3 form-check">\n                    <input type="checkbox" class="form-check-input" id="remember_me" checked>\n                    <label class="form-check-label" for="remember_me">Remember me</label>\n                </div>\n                <button type="submit" class="btn btn-warning">Login</button>\n            </form>\n        </div>\n    ';var e,t,n=document.querySelector("#login_form"),i=document.querySelector("#email"),o=document.querySelector("#password"),s=document.querySelector("#remember_me");function c(){o.classList.remove("is-invalid"),i.classList.remove("is-invalid")}i.addEventListener("input",c),o.addEventListener("input",c),n.addEventListener("submit",(e=regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=i.value,a=o.value,n&&a){e.next=9;break}i.classList.add("is-invalid"),o.classList.add("is-invalid"),e.next=17;break;case 9:if(!n||!a){e.next=15;break}return e.next=12,(0,r.loginProcess)(n,a,s.checked);case 12:if(!e.sent){e.next=15;break}return e.abrupt("return");case 15:i.classList.add("is-invalid"),o.classList.add("is-invalid");case 17:case"end":return e.stop()}}),e,this)})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))},function(e){return t.apply(this,arguments)}))};var r=n(364),a=document.querySelector(".container")}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{var e=n(93),t=n(808),r=n(364),a=n(560),i=n(732);function o(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}window.onload=o(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(s=localStorage.getItem("token")||sessionStorage.getItem("token"))){n.next=8;break}return n.next=4,(0,r.checkToken)(s);case 4:n.sent?(window.location.hash="dashboard",(0,t.navigators)(),(0,a.searchFeatures)()):(0,e.userLogin)(),n.next=9;break;case 8:(0,e.userLogin)();case 9:window.onhashchange=o(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("path changes!"),n.next=3,(0,r.checkToken)();case 3:if(o=n.sent,(0,i.stopStream)(),!o){n.next=25;break}n.t0=window.location.hash,n.next="#dashboard"===n.t0?9:"#scanner"===n.t0?12:"#search"===n.t0?15:"#tasks"===n.t0?18:"#setting"===n.t0?20:22;break;case 9:return(0,t.navigators)(),(0,a.searchFeatures)(),n.abrupt("break",23);case 12:return(0,t.navigators)("scanner"),(0,i.qrScanner)(),n.abrupt("break",23);case 15:return(0,t.navigators)("search"),(0,a.searchFeatures)(),n.abrupt("break",23);case 18:return(0,t.navigators)("tasks"),n.abrupt("break",23);case 20:return(0,t.navigators)("setting"),n.abrupt("break",23);case 22:window.location.hash="";case 23:n.next=26;break;case 25:(0,e.userLogin)();case 26:case"end":return n.stop()}}),n,this)})));case 10:case"end":return n.stop()}}),n,this)})))})()})();