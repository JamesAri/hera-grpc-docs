"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[683],{4778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"development/zookeeper-structure/proto-files","title":"Proto structure","description":"The proto buffers stored in zookeeper follow the protobufjs JSON descriptors definition.","source":"@site/versioned_docs/version-0.1/development/zookeeper-structure/proto-files.md","sourceDirName":"development/zookeeper-structure","slug":"/development/zookeeper-structure/proto-files","permalink":"/hera-grpc-docs/development/zookeeper-structure/proto-files","draft":false,"unlisted":false,"tags":[],"version":"0.1","sidebarPosition":2,"frontMatter":{"title":"Proto structure","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Services structure","permalink":"/hera-grpc-docs/development/zookeeper-structure/services"},"next":{"title":"References","permalink":"/hera-grpc-docs/development/references"}}');var r=t(4848),s=t(8453);const i={title:"Proto structure",sidebar_position:2},c=void 0,p={},l=[{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The proto buffers stored in zookeeper follow the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/protobufjs#using-json-descriptors",children:"protobufjs JSON descriptors"})," definition."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"get /hera-grpc/proto/buffer*"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="/hera-grpc/proto/buffer*"',children:'{\n  "options": { "syntax": "proto3" },\n  "nested": {\n    "hera": {\n      "nested": {\n        "fileshare": {\n          "nested": {\n            "v1": {\n              "nested": {\n                "FileShare": {\n                  "methods": {\n                    "DownloadFile": {\n                      "requestType": "FileChunk",\n                      "requestStream": true,\n                      "responseType": "Result"\n                    }\n                  }\n                },\n                "FileChunk": {\n                  "fields": { "chunk": { "type": "bytes", "id": 1 } }\n                },\n                "Result": {\n                  "oneofs": { "_message": { "oneof": ["message"] } },\n                  "fields": {\n                    "success": { "type": "bool", "id": 1 },\n                    "message": {\n                      "type": "string",\n                      "id": 2,\n                      "options": { "proto3_optional": true }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"which corresponds to this proto file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-proto3",metastring:'title="file-share.proto"',children:'syntax="proto3";\n\npackage hera.fileshare.v1;\n\nservice FileShare {\n\t// stream files from client to server\n\trpc DownloadFile(stream FileChunk) returns (Result) {}\n}\n\nmessage FileChunk {\n\tbytes chunk = 1;\n}\n\nmessage Result {\n\tbool success = 1;\n\toptional string message = 2;\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);