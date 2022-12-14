(globalThis["webpackChunk_26f_studio"]=globalThis["webpackChunk_26f_studio"]||[]).push([[331],{8728:(t,o,e)=>{"use strict";e.d(o,{Z:()=>b});var a=e(9835),r=e(6970);const n={class:"full-width relative-position overflow-hidden"};function s(t,o,s,i,c,l){const d=(0,a.up)("q-resize-observer"),u=(0,a.up)("q-img");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(u,{class:"full-width",fit:"cover",loading:t.eager?"eager":"lazy","no-spinner":"","no-transition":"",src:"string"===typeof t.src?t.src:e(1707),style:(0,r.j5)(t.style),onLoad:t.onImgLoaded},{default:(0,a.w5)((()=>[(0,a.WI)(t.$slots,"default"),t.maskPosition?((0,a.wg)(),(0,a.j4)(d,{key:0,onResize:t.onResize,debounce:"50"},null,8,["onResize"])):(0,a.kq)("",!0)])),_:3},8,["loading","src","style","onLoad"])])}e(6727);var i=e(9302),c=e(499);const l=(0,a.aZ)({name:"BackgroundImage",props:{eager:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},imgStyle:{type:Object,default:()=>({})},maskPosition:{type:String,validator:t=>["bottom","left","right","top"].includes(t)},maskStart:{type:Object,default:()=>({ratio:.9,control:[.4,1.1]})},maskEnd:{type:Object,default:()=>({ratio:.7,control:[.6,.7]})}},setup(t){const o=(0,i.Z)(),r=(0,a.Fl)((()=>{for(const t of Object.keys(o.screen.sizes))if(o.screen[t])return e(5664)(`./background-${t}.webp`);return e(3539)})),n=t.maskPosition?(0,a.Fl)((()=>o.dark.isActive?"#121212":"#fff")):void 0,s=(0,c.iH)(!1),l=()=>{s.value=!0},d=(0,c.iH)(""),u=(0,a.Fl)((()=>({...t.imgStyle,clipPath:t.maskPosition&&s.value?`path('${d.value}')`:void 0}))),m=(o,e)=>{switch(t.maskPosition){case"bottom":return`M0,${e} L0,${e*t.maskStart.ratio} C${o*t.maskStart.control[0]},${e*t.maskStart.control[1]} ${o*t.maskEnd.control[0]},${e*t.maskEnd.control[1]} ${o},${e*t.maskEnd.ratio} L${o},${e} Z`;case"left":return`M0,0 L${o*t.maskStart.ratio},0 C${o*t.maskStart.control[0]},${e*t.maskStart.control[1]} ${o*t.maskEnd.control[0]},${e*t.maskEnd.control[1]} ${o*t.maskEnd.ratio},${e} L0,${e} Z`;case"right":return`M${o},${e} L${o*t.maskStart.ratio},${e} C${o*t.maskStart.control[0]},${e*t.maskStart.control[1]} ${o*t.maskEnd.control[0]},${e*t.maskEnd.control[1]} `+o*t.maskEnd.ratio+",0 "+`L${o},0 Z`;case"top":return`M0,0 L0,${e*t.maskStart.ratio} C${o*t.maskStart.control[0]},${e*t.maskStart.control[1]} ${o*t.maskEnd.control[0]},${e*t.maskEnd.control[1]} ${o},${e*t.maskEnd.ratio} L${o},0 Z`;default:return""}},k=({width:o,height:e})=>{t.maskPosition&&(d.value=m(o,e))};return{src:r,fill:n,calculatePath:m,style:u,onImgLoaded:l,onResize:k}}});var d=e(1639),u=e(1487),m=e(883),k=e(9984),g=e.n(k);const p=(0,d.Z)(l,[["render",s]]),b=p;g()(l,"components",{QImg:u.Z,QResizeObserver:m.Z})},8331:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>k});var a=e(9835);function r(t,o,e,r,n,s){const i=(0,a.up)("BackgroundImage"),c=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(c,{class:"flex column"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{"img-style":{height:"100vh"},mask:"","mask-position":"left","mask-start":{ratio:.3,control:[.3,.2]},"mask-end":{ratio:.4,control:[.4,.8]}},null,8,["mask-start","mask-end"])])),_:1})}var n=e(7712),s=e(8728);const i=(0,a.aZ)({name:"LoginPage",components:{BackgroundImage:s.Z},setup(){const t=(0,n.QT)({useScope:"global"}),o=o=>t.t("pages.login."+o);return{i18n:o}}});var c=e(1639),l=e(9885),d=e(9984),u=e.n(d);const m=(0,c.Z)(i,[["render",r]]),k=m;u()(i,"components",{QPage:l.Z})},2098:(t,o,e)=>{t.exports=e.p+"img/background-lg.5145db34.webp"},676:(t,o,e)=>{t.exports=e.p+"img/background-md.5217e3c4.webp"},935:(t,o,e)=>{t.exports=e.p+"img/background-sm.a8fa81d7.webp"},5218:(t,o,e)=>{t.exports=e.p+"img/background-xl.ed91cee0.webp"},3539:(t,o,e)=>{t.exports=e.p+"img/background-xs.243b1df3.webp"},1707:(t,o,e)=>{t.exports=e.p+"img/background.14686f2c.png"},5664:(t,o,e)=>{var a={"./background-lg.webp":2098,"./background-md.webp":676,"./background-sm.webp":935,"./background-xl.webp":5218,"./background-xs.webp":3539};function r(t){var o=n(t);return e(o)}function n(t){if(!e.o(a,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=5664}}]);