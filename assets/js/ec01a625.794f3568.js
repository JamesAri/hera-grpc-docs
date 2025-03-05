"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7436],{4225:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"development/zookeeper-structure/services","title":"Services structure","description":"Zookeeper is used here as a service discovery. The current watch fetches all services to the distributed nodes on each change - we should monitor the zookeeper performance and make sure it doesn\'t get overwhelmed overtime.","source":"@site/versioned_docs/version-0.1/development/zookeeper-structure/services.md","sourceDirName":"development/zookeeper-structure","slug":"/development/zookeeper-structure/services","permalink":"/hera-grpc-docs/0.1/development/zookeeper-structure/services","draft":false,"unlisted":false,"tags":[],"version":"0.1","sidebarPosition":1,"frontMatter":{"title":"Services structure","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Zookeeper structure","permalink":"/hera-grpc-docs/0.1/category/zookeeper-structure"},"next":{"title":"Proto structure","permalink":"/hera-grpc-docs/0.1/development/zookeeper-structure/proto-files"}}');var s=t(4848),o=t(8453);const i={title:"Services structure",sidebar_position:1},c=void 0,d={},l=[{value:"Example",id:"example",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"Zookeeper is used here as a service discovery. The current watch fetches all services to the distributed nodes on each change - we should monitor the zookeeper performance and make sure it doesn't get overwhelmed overtime."})}),"\n",(0,s.jsx)(r.p,{children:"The zookeeper structure of a service:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Name"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Type"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Description"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Host"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"The hostname or IP address of the gRPC server."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Port"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)(r.td,{children:"The port number on which the gRPC server listens."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Routes"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Record<string, RouteDetails>"})}),(0,s.jsx)(r.td,{children:"A mapping of route names to their respective details."})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"RouteDetails"})," structure:"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Name"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Type"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Description"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"serviceName"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"The fully qualified name of the gRPC service."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"protoZnode"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsxs)(r.td,{children:["The path to the protocol buffer ",(0,s.jsx)(r.a,{href:"./proto-files",children:"definition in zookeeper"})," (optional)."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"internal"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"boolean"})}),(0,s.jsx)(r.td,{children:"Indicates if the route is using a service defined by the library (optional)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"loadOptions"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"object"})}),(0,s.jsxs)(r.td,{children:["Configuration ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/@grpc/proto-loader",children:"options for loading the gRPC proto file"})," (optional)."]})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," Either ",(0,s.jsx)(r.code,{children:"protoZnode"})," or ",(0,s.jsx)(r.code,{children:"internal"})," will be defined, but not both - the proto file and load options for ",(0,s.jsx)(r.code,{children:"internal"})," services are predefined."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"get /hera-grpc/services/service*"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",metastring:'title="/hera-grpc/services/service*"',children:'{\n  "host": "192.168.1.38",\n  "port": 50051,\n  "routes": {\n    "/slechtaj-1.0.0/dev~service_route/chat": {\n      "serviceName": "hera.chat.v1.ChatRoom",\n      "protoZnode": "/proto/buffer0000003732",\n      "loadOptions": {\n        "keepCase": true,\n        "longs": "String",\n        "enums": "String",\n        "defaults": true,\n        "oneofs": true\n      }\n    },\n    "/slechtaj-1.0.0/dev~service_route/poi": {\n      "serviceName": "RouteGuide",\n      "protoZnode": "/proto/buffer0000003733",\n      "loadOptions": {\n        "keepCase": true,\n        "longs": "String",\n        "enums": "String",\n        "defaults": true,\n        "oneofs": true\n      }\n    },\n    "/slechtaj-1.0.0/dev~service_route/file_share": {\n      "serviceName": "hera.fileshare.v1.FileShare",\n      "protoZnode": "/proto/buffer0000003734"\n    },\n    "/slechtaj-1.0.0/dev~service_route/json": {\n      "serviceName": "hera.internal.v1.JsonService",\n      "internal": true\n    },\n    "/slechtaj-1.0.0/dev~service_route/simple_proxy": {\n      "serviceName": "hera.proxy.v1.SimpleProxy",\n      "protoZnode": "/proto/buffer0000003735",\n      "loadOptions": {\n        "keepCase": true,\n        "longs": "String",\n        "enums": "String",\n        "defaults": true,\n        "oneofs": true\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(6540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);