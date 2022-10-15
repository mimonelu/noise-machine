(function(t){function e(e){for(var n,a,r=e[0],u=e[1],l=e[2],c=0,d=[];c<r.length;c++)a=r[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var u=o[r];0!==s[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/noise-machine/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var h=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"1e14":function(t,e,o){"use strict";var n=o("5c7b"),s=o.n(n);s.a},"51d1":function(t,e,o){"use strict";var n=o("840b"),s=o.n(n);s.a},"5c7b":function(t,e,o){},"840b":function(t,e,o){},b879:function(t,e,o){},c1c3:function(t,e,o){},cd49:function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=o("9ab4"),r=o("60a3");const u=(t,e)=>Math.floor(Math.random()*(e-t+1))+t;var l=function(t,e,o,n,s){const i=document.createElement("canvas");i.setAttribute("width",e.toString()),i.setAttribute("height",o.toString());const a=i.getContext("2d");if(a){const e=a.getImageData(0,0,i.width,i.height),o={r:u(n.r[0],n.r[1]),g:u(n.g[0],n.g[1]),b:u(n.b[0],n.b[1]),a:u(n.a[0],n.a[1])};for(let t=0;t<e.height;t++)for(let i=0;i<e.width;i++){const a=4*(e.width*t+i);0===u(0,s)&&(o.r=u(n.r[0],n.r[1]),o.g=u(n.g[0],n.g[1]),o.b=u(n.b[0],n.b[1]),o.a=u(n.a[0],n.a[1])),e.data[a]=o.r,e.data[a+1]=o.g,e.data[a+2]=o.b,e.data[a+3]=o.a}a.putImageData(e,0,0,0,0,i.width,i.height),t.style.backgroundImage=`url(${i.toDataURL()})`}};let h=class extends r["c"]{mounted(){l(this.$el,640,640,{r:[0,24],g:[0,40],b:[0,56],a:[255,255]},16)}};h=Object(a["a"])([r["a"]],h);var c=h,d=c,p=(o("e63a"),o("2877")),g=Object(p["a"])(d,s,i,!1,null,"38735b65",null),v=g.exports,f=o("9483");Object(f["a"])("/noise-machine/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var m=o("8c4f"),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("h1",[t._v("Noise Machine")]),o("ul",{staticClass:"range-container"},[o("li",[o("h3",[t._v("Volume")]),o("range",{attrs:{min:0,max:1,step:.1,value:t.volume},on:{change:t.setVolume}}),o("span",[t._v(t._s(t.volume))])],1),o("li",[o("h3",[t._v("Roughness")]),o("range",{attrs:{min:1,max:30,step:1,value:t.roughness},on:{change:t.setRoughness}}),o("span",[t._v(t._s(t.roughness))])],1),o("li",[o("h3",[t._v("Detail")]),o("range",{attrs:{min:1,max:10,step:1,value:t.detail},on:{change:t.setDetail}}),o("span",[t._v(t._s(t.detail))])],1)]),o("button",{ref:"playButton",staticClass:"form--button",on:{click:t.toggle}},[t._v(t._s(t.playButtonLabel))]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("small",[t._v("Noise Machine v1.1 © 2020-2022 "),o("a",{attrs:{href:"https://twitter.com/mimonelu",target:"_blank",noreferrer:""}},[t._v("@mimonelu")])])])}];o("ddb0");const w=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,_=(t,e)=>Math.random()*(e-t)+t;var x=class{constructor(){this.buffer=null,this.source=null,this.playing=!1;const t=window.AudioContext||window.webkitAudioContext;this.context=new t,window.addEventListener("mousedown",()=>{"running"!==this.context.state&&this.context.resume().then(()=>{})},!1)}prepare(t){const e=2,o=48e3,n=10*e;this.buffer=this.context.createBuffer(1,o*n,o);const s=this.buffer.getChannelData(0),i=t.volume,a=t.roughness,r=t.detail;for(let u=0,l=s.length,h=0,c=w(1,10*a),d=0;u<l;u++,h++)u%c===0&&(h=0,c=w(1,10*a),d=_(-1,1)*_(-1,1)),s[u]=Math.min(1,Math.max(-1,d*Math.sin(h/c*Math.PI*r)*i))}play(){this.playing||(this.source=this.context.createBufferSource(),this.source.buffer=this.buffer,this.source.loop=!0,this.source.connect(this.context.destination),this.source.start(this.context.currentTime),this.playing=!0)}stop(){this.source&&this.playing&&(this.source.stop(),this.playing=!1)}},O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"range"},[o("div",{staticClass:"range__bar"},[o("div",{staticClass:"range__knob"})])])}];let S=class extends r["c"]{constructor(){super(...arguments),this.pseudoValue=this.value,this.knobNode=null,this.inputStarted=!1}mounted(){this.knobNode=this.$el.querySelector(".range__knob"),this.knobNode&&(this.updateKnobPosition(),"ontouchstart"in window?(this.$el.addEventListener("touchstart",this.onInputStart),document.body.addEventListener("touchmove",this.onInputMove),document.body.addEventListener("touchend",this.onInputEnd)):(this.$el.addEventListener("mousedown",this.onInputStart),document.body.addEventListener("mousemove",this.onInputMove),document.body.addEventListener("mouseup",this.onInputEnd)),window.addEventListener("resize",this.updateKnobPosition))}onInputStart(t){this.inputStarted=!0,this.moveKnob(t)}onInputMove(t){this.inputStarted&&this.moveKnob(t)}onInputEnd(){this.inputStarted=!1}moveKnob(t){const e=this.$el.clientWidth,o=(t.touches?t.touches[0]:t).pageX,n=this.$el.getBoundingClientRect(),s=Math.max(0,Math.min(e,o-n.left));this.pseudoValue=s/e*(this.max-this.min)+this.min,this.updateKnobPosition()}updateKnobPosition(){const t=this.$el.clientWidth;this.pseudoValue=Math.round(this.pseudoValue/this.step)*this.step,this.pseudoValue=Number(this.pseudoValue.toFixed((String(this.step).split(".")[1]||"0").length));const e=(this.pseudoValue-this.min)/(this.max-this.min)*t;this.knobNode&&(this.knobNode.style.left=e+"px"),this.$emit("change",this.pseudoValue)}};Object(a["a"])([Object(r["b"])({default:0})],S.prototype,"min",void 0),Object(a["a"])([Object(r["b"])({default:100})],S.prototype,"max",void 0),Object(a["a"])([Object(r["b"])({default:1})],S.prototype,"step",void 0),Object(a["a"])([Object(r["b"])({default:0})],S.prototype,"value",void 0),S=Object(a["a"])([r["a"]],S);var M=S,k=M,E=(o("51d1"),Object(p["a"])(k,O,j,!1,null,"d0850da4",null)),$=E.exports;let I=class extends r["c"]{constructor(){super(...arguments),this.audio=new x,this.volume=.5,this.roughness=10,this.detail=1}created(){this.loadData()}mounted(){this.$refs.playButton&&this.$refs.playButton.focus()}loadData(){const t=JSON.parse(localStorage.getItem("data")||"{}");t.volume=void 0===t.volume?this.volume:t.volume,t.roughness=void 0===t.roughness?this.roughness:t.roughness,t.detail=void 0===t.detail?this.detail:t.detail,this.setVolume(t.volume),this.setRoughness(t.roughness),this.setDetail(t.detail)}saveData(){localStorage.setItem("data",JSON.stringify({volume:this.volume,roughness:this.roughness,detail:this.detail}))}setVolume(t){const e=this.volume!==t;this.volume=t,e&&this.audio.playing&&(this.audio.stop(),this.play()),this.saveData()}setRoughness(t){const e=this.roughness!==t;this.roughness=t,e&&this.audio.playing&&(this.audio.stop(),this.play()),this.saveData()}setDetail(t){const e=this.detail!==t;this.detail=t,e&&this.audio.playing&&(this.audio.stop(),this.play()),this.saveData()}get playButtonLabel(){return this.audio.playing?"Stop":"Play"}toggle(){this.audio.playing?this.audio.stop():this.play()}play(){this.audio.prepare({volume:this.volume,roughness:this.roughness,detail:this.detail}),this.audio.play()}};I=Object(a["a"])([Object(r["a"])({components:{Range:$}})],I);var D=I,N=D,P=(o("1e14"),Object(p["a"])(N,b,y,!1,null,"1e888772",null)),C=P.exports;n["a"].use(m["a"]);const V=[{path:"/",name:"Home",component:C},{path:"*",component:C}],L=new m["a"]({mode:"history",base:"/noise-machine/",routes:V});var B=L;n["a"].config.productionTip=!1,o("c1c3"),new n["a"]({router:B,render:t=>t(v)}).$mount("#app")},e63a:function(t,e,o){"use strict";var n=o("b879"),s=o.n(n);s.a}});