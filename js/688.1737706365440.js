"use strict";(self["webpackChunkvue3_demo"]=self["webpackChunkvue3_demo"]||[]).push([[688],{1688:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var s=t(641),o=t(33),l=t(953);const n={class:"crossTab1"},c={class:"tab-list"},v={class:"tab-item"},d={class:"tab-item"},u={class:"tab-item"},i={class:"tab-item"};var r={__name:"tab1",setup(e){const a=(0,l.KR)(""),t=(0,l.KR)(""),r=(0,l.KR)(""),m=(0,l.KR)("");(0,s.sV)((()=>{g(),k(),_(),b()}));const g=()=>{let e=new BroadcastChannel("myChannel");e.onmessage=e=>{a.value=e.data}},k=()=>{w(),window.addEventListener("storage",(e=>{w()}))},w=()=>{let e=localStorage.getItem("personalName"),a=localStorage.getItem("personalAge");t.value="姓名："+e+"，年龄："+a},_=()=>{window.addEventListener("message",(e=>{console.log(e),r.value=e.data}))},b=()=>{m.value=document.cookie,setInterval((()=>{m.value!=document.cookie&&(m.value=document.cookie,console.log(m.value))}),1e3)};return(e,l)=>((0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("div",c,[(0,s.Lk)("div",v," BroadCast Channel 接收的消息:"+(0,o.v_)(a.value),1),(0,s.Lk)("div",d," LocalStorage window.onstorage 接收的消息:"+(0,o.v_)(t.value),1),(0,s.Lk)("div",u," postMessage window.message 接收的消息:"+(0,o.v_)(r.value),1),(0,s.Lk)("div",i," cookie循环(setInterval)接收的消息:"+(0,o.v_)(m.value),1)])]))}},m=t(6262);const g=(0,m.A)(r,[["__scopeId","data-v-d7c593e4"]]);var k=g}}]);
//# sourceMappingURL=688.1737706365440.js.map