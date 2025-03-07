"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[3976],{7879:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"intro","title":"Introduction","description":"Hera-GRPC is a library built around Node.js gRPC (@grpc/grpc-js) for efficient data transfer between microservices in a distributed system without the need of a centralized repository for protocol buffer files (gRPC IDL).","source":"@site/docs/intro.md","sourceDirName":".","slug":"/","permalink":"/hera-grpc-docs/next/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Usage","permalink":"/hera-grpc-docs/next/category/usage"}}');var t=r(4848),i=r(8453);const o={slug:"/",sidebar_position:1},c="Introduction",a={},l=[{value:"Installation",id:"installation",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsxs)(s.p,{children:["Hera-GRPC is a library built around Node.js gRPC (",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/@grpc/grpc-js",children:"@grpc/grpc-js"}),") for efficient data transfer between microservices in a distributed system ",(0,t.jsx)(s.strong,{children:"without the need of a centralized repository for protocol buffer files (gRPC IDL)"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Most current solutions for sharing proto files rely on centralized repositories, which do not support dynamic development (e.g. ",(0,t.jsx)(s.a,{href:"https://github.com/googleapis/googleapis/tree/master/google",children:"Google APIs"}),"). This means that deploying a new gRPC service typically requires additional setup before it can be used."]}),"\n",(0,t.jsxs)(s.p,{children:["This library leverages the ability of Node.js gRPC\u2019s support for ",(0,t.jsx)(s.a,{href:"https://grpc.io/docs/languages/node/basics/#example-code-and-setup",children:"dynamically generating the code at runtime"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The basic workflow is as follows:"}),"\n",(0,t.jsxs)(s.p,{children:["user will define a ",(0,t.jsx)(s.code,{children:"route"})," along with:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"service name"}),"\n",(0,t.jsx)(s.li,{children:"service handlers"}),"\n",(0,t.jsx)(s.li,{children:"service proto file"}),"\n",(0,t.jsx)(s.li,{children:"service load options (optional)"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["These concepts should be familiar to anyone working with gRPC and proto files. If you are new to gRPC, we highly recommend checking out some of the basic resources ",(0,t.jsx)(s.a,{href:"/hera-grpc-docs/next/development/references",children:"here"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Once defined, the service is registered within the distributed system and becomes callable by its ",(0,t.jsx)(s.code,{children:"route"})," without the need to locate the service proto files."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"npm install hera-grpc\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Hera-GRPC depends on ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/@grpc/grpc-js",children:"@grpc/grpc-js"}),". To access its utilities (such as ",(0,t.jsx)(s.code,{children:"Metadata"}),", ",(0,t.jsx)(s.code,{children:"status"}),", etc.), import it as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const { grpc } = require('hera-grpc')\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(6540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);