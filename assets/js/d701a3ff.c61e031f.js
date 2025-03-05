"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[841],{4065:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"usage/internal-serivces","title":"Internal services","description":"Internal services are predefined services by the library itself, so you don\'t need to provide any proto files or load options. You can find the available internal services on this page. If no load options are specified, they use the default ones.","source":"@site/docs/usage/internal-serivces.md","sourceDirName":"usage","slug":"/usage/internal-serivces","permalink":"/hera-grpc-docs/next/usage/internal-serivces","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Internal services","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Debugging","permalink":"/hera-grpc-docs/next/usage/debugging"},"next":{"title":"Development","permalink":"/hera-grpc-docs/next/category/development"}}');var t=s(4848),i=s(8453);const a={title:"Internal services",sidebar_position:5},o=void 0,c={},l=[{value:"Available internal services",id:"available-internal-services",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Internal services are predefined services by the library itself, so you don't need to provide any proto files or load options. You can find the available internal services on this page. If no load options are specified, they use the default ones."}),"\n",(0,t.jsxs)(n.p,{children:["To use internal services, you simply define a ",(0,t.jsx)(n.code,{children:"route"})," and provide the internal service name. For example to register ",(0,t.jsx)(n.code,{children:"route"})," for the ",(0,t.jsx)(n.a,{href:"#available-internal-services",children:(0,t.jsx)(n.code,{children:"hera.internal.v1.JsonService"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// sc = ServiceClient instance\nsc.registerService({\n\troutes: '/slechtaj-1.0.0/dev~service_route/json',\n\tserviceName: 'hera.internal.v1.JsonService',\n\thandlers: {\n\t\tjsonRpc: function (call, callback) {/** handle */}\n\t},\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"available-internal-services",children:"Available internal services"}),"\n",(0,t.jsxs)(n.p,{children:["Service name ",(0,t.jsx)(n.code,{children:"hera.internal.v1.JsonService"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-proto3",children:'syntax="proto3";\n\npackage hera.internal.v1;\n\nservice JsonService {\n\trpc JsonRpc(JsonRequest) returns (JsonResponse) {}\n}\n\nmessage JsonRequest {\n\tbytes data = 1;\n}\n\nmessage JsonResponse {\n\tbytes data = 1;\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);