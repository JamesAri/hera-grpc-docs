"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8640],{8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}},9084:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>v,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"usage/internal-serivces","title":"Internal services","description":"To use internal services, you simply define a route and provide the service name listed here as internal.","source":"@site/versioned_docs/version-0.1/usage/internal-serivces.md","sourceDirName":"usage","slug":"/usage/internal-serivces","permalink":"/hera-grpc-docs/0.1/usage/internal-serivces","draft":false,"unlisted":false,"tags":[],"version":"0.1","sidebarPosition":5,"frontMatter":{"title":"Internal services","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Debugging","permalink":"/hera-grpc-docs/0.1/usage/debugging"},"next":{"title":"Development","permalink":"/hera-grpc-docs/0.1/category/development"}}');var t=s(4848),i=s(8453);const a={title:"Internal services",sidebar_position:5},c=void 0,o={},l=[{value:"Available internal services",id:"available-internal-services",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To use internal services, you simply define a ",(0,t.jsx)(n.code,{children:"route"})," and provide the service name listed here as internal."]}),"\n",(0,t.jsxs)(n.p,{children:["For example to register ",(0,t.jsx)(n.code,{children:"route"})," for the ",(0,t.jsx)(n.a,{href:"#available-internal-services",children:(0,t.jsx)(n.code,{children:"hera.internal.v1.JsonService"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// sc = ServiceClient instance\nsc.registerService({\n\troutes: '/slechtaj-1.0.0/dev~service_route/json',\n\tserviceName: 'hera.internal.v1.JsonService',\n\thandlers: {\n\t\tjsonRpc: function (call, callback) {/** handle */}\n\t},\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"available-internal-services",children:"Available internal services"}),"\n",(0,t.jsxs)(n.p,{children:["Service name ",(0,t.jsx)(n.code,{children:"hera.internal.v1.JsonService"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-proto3",children:'syntax="proto3";\n\npackage hera.internal.v1;\n\nmessage JsonRequest {\n\tbytes data = 1;\n}\n\nmessage JsonResponse {\n\tbytes data = 1;\n}\n\nservice JsonService {\n\trpc JsonRpc(JsonRequest) returns (JsonResponse) {}\n}\n'})})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);