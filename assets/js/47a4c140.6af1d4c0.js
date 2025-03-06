"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1571],{1596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"usage/examples","title":"Examples","description":"HelloWorld example","source":"@site/docs/usage/examples.mdx","sourceDirName":"usage","slug":"/usage/examples","permalink":"/hera-grpc-docs/next/usage/examples","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Examples","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Usage","permalink":"/hera-grpc-docs/next/category/usage"},"next":{"title":"Events","permalink":"/hera-grpc-docs/next/usage/events"}}');var s=t(4848),l=t(8453);const o={title:"Examples",sidebar_position:1},c=void 0,i={},a=[{value:"HelloWorld example",id:"helloworld-example",level:2},{value:"Propagated (or nested) calls",id:"propagated-or-nested-calls",level:2},{value:"POI service example",id:"poi-service-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"helloworld-example",children:"HelloWorld example"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we will try to define a basic service using proto buffers, register it using the service client and calling it by its route."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Proto file definition:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-proto3",metastring:'title="helloworld.proto"',children:'syntax="proto3";\n\npackage my.package.v1;\n\nservice HelloWorld {\n\trpc addOne(Request) returns (Response) {}\n}\n\nmessage Request {\n\tint32 value = 1;\n}\n\nmessage Response {\n\tint32 value = 1;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Callee (server):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="callee.js"',children:"const path = require('path')\n\nconst { ServiceClient } = require('hera-grpc')\n\nconst sc = new ServiceClient({\n\thost: 'localhost',\n\tport: 50051,\n\tzk: 'zk://localhost:2181/hera-test',\n})\n\nsc.registerService({\n\troutes: '/example-1.0.0/dev~service_route/helloworld',\n\tserviceName: 'my.package.v1.HelloWorld',\n\tfilename: path.join(__dirname, 'helloworld.proto'),\n\thandlers: {\n\t\taddOne: (call, callback) => {\n\t\t\tconst { request } = call\n\t\t\tcallback(null, { value: request.value + 1 })\n\t\t},\n\t},\n})\n\nconst run = async () => {\n\tawait sc.connect()\n}\n\nrun().catch(console.error)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["this will register the ",(0,s.jsx)(n.code,{children:"HelloWorld"})," service for route ",(0,s.jsx)(n.code,{children:"/example-1.0.0/dev~service_route/helloworld"})," and start the grpc server on ",(0,s.jsx)(n.code,{children:"localhost:50051"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Registered event",type:"info",children:(0,s.jsxs)(n.p,{children:["The service client will emit ",(0,s.jsx)(n.code,{children:"registered"})," event when it's ready to handle requests - for more details check ",(0,s.jsx)(n.a,{href:"./events",children:"events"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Caller (client):"})}),"\n",(0,s.jsxs)(n.p,{children:["Client can now call the service by its route ",(0,s.jsx)(n.code,{children:"/example-1.0.0/dev~service_route/helloworld"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="caller.js"',children:"const { assert } = require('console')\nconst promisify = require('util').promisify\n\nconst { ServiceClient } = require('hera-grpc')\n\nconst sc = new ServiceClient({\n\tzk: 'zk://localhost:2181/hera-test',\n})\n\nconst run = async () => {\n\tawait sc.connect()\n\n\t// Get stub with the rpc methods for the specified route\n\tconst stub = await sc.getStub('/example-1.0.0/dev~service_route/helloworld')\n\tstub.addOne = promisify(stub.addOne)\n\n\tconst request = { value: 41 }\n\tconst response = await stub.addOne(request)\n\tstub.close()\n\n\tassert(response.value === 42)\n}\n\nrun().catch(console.error).finally(sc.close)\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Closing client",type:"warning",children:(0,s.jsx)(n.p,{children:"Always make sure you close the client before terminating the process, so it can properly disconnect from the network."})}),"\n",(0,s.jsx)(n.h2,{id:"propagated-or-nested-calls",children:"Propagated (or nested) calls"}),"\n",(0,s.jsxs)(n.p,{children:["This example shows how to call another service within a server rpc handler. You can access ",(0,s.jsx)(n.code,{children:"getStub"})," from any handlers ",(0,s.jsx)(n.code,{children:"Call"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["Lets modify the HelloWorld example from before, the previous service with route ",(0,s.jsx)(n.code,{children:"/example-1.0.0/dev~service_route/helloworld"}),' will become "lazy" and call another service to process the request:']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Lazy Callee (server1):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="callee-lazy.js"',children:"const path = require('path')\nconst promisify = require('util').promisify\n\nconst { ServiceClient } = require('hera-grpc')\n\nconst sc = new ServiceClient({\n\thost: 'localhost',\n\tport: 50052,\n\tzk: 'zk://localhost:2181/hera-test',\n})\n\nsc.registerService({\n\troutes: '/example-1.0.0/dev~service_route/helloworld',\n\tserviceName: 'my.package.v1.HelloWorld',\n\tfilename: path.join(__dirname, 'helloworld.proto'),\n\thandlers: {\n\t\taddOne: async (call, callback) => {\n\t\t\tconst { request } = call\n\n\t\t\t// this service is lazy... it will pass the work to another one!\n\t\t\tconst stub = await call.getStub('/hardworking-service')\n\t\t\tstub.addOne = promisify(stub.addOne)\n\n\t\t\tconst response = await stub.addOne({ value: request.value })\n\n\t\t\tcallback(null, { value: response.value })\n\t\t},\n\t},\n})\n\nconst run = async () => {\n\tawait sc.connect()\n}\n\nrun().catch(console.error)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Hard Working Callee (server2):"})}),"\n",(0,s.jsxs)(n.p,{children:["The following service with route ",(0,s.jsx)(n.code,{children:"/hardworking-service"}),"  will actually perform the addition and return it back to the first service handler:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="callee-worker.js"',children:"const path = require('path')\n\nconst { ServiceClient } = require('hera-grpc')\n\nconst sc = new ServiceClient({\n\thost: 'localhost',\n\tport: 50051,\n\tzk: 'zk://localhost:2181/hera-test',\n})\n\nsc.registerService({\n\troutes: '/hardworking-service',\n\tserviceName: 'my.package.v1.HelloWorld',\n\tfilename: path.join(__dirname, 'helloworld.proto'),\n\thandlers: {\n\t\taddOne: async (call, callback) => {\n\t\t\tconst { request } = call\n\t\t\tcallback(null, { value: request.value + 1 })\n\t\t},\n\t},\n})\n\nconst run = async () => {\n\tawait sc.connect()\n}\n\nrun().catch(console.error)\n"})}),"\n",(0,s.jsxs)(n.p,{children:['As you can see, this "hard-working" service is identical to the one from the HelloWorld example\u2014the only difference is the changed ',(0,s.jsx)(n.code,{children:"route"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Caller (client):"})}),"\n",(0,s.jsx)(n.p,{children:"Caller is identical to the one from the HelloWorld example."}),"\n",(0,s.jsx)(n.h2,{id:"poi-service-example",children:"POI service example"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we will try to register and call the demo service from the ",(0,s.jsx)(n.a,{href:"https://grpc.io/docs/languages/node/basics/",children:"Node gRPC Basics tutorial"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Callee (server):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="callee.js"',children:"const path = require('path')\n\nconst { ServiceClient } = require('hera-grpc')\n\n// Handlers from the POI service tutorial\nconst poiHandlers = require('../../poi/handlers')\n\nconst sc = new ServiceClient({\n\thost: 'localhost',\n\tport: 50051,\n\tzk: 'zk://localhost:2181/hera-test',\n})\n\nsc.registerService({\n\troutes: '/example-1.0.0/dev~service_route/poi',\n\tserviceName: 'RouteGuide',\n\thandlers: poiHandlers,\n\tfilename: path.join(__dirname, '../../../proto/poi/poi.proto'),\n\tloadOptions: {\n\t\tkeepCase: true,\n\t\tlongs: String,\n\t\tenums: String,\n\t\tdefaults: true,\n\t\toneofs: true,\n\t},\n})\n\nconst run = async () => {\n\tawait sc.connect()\n}\n\nrun().catch(console.error)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["this will register the poi service for route ",(0,s.jsx)(n.code,{children:"/example-1.0.0/dev~service_route/poi"})," and start the grpc server on ",(0,s.jsx)(n.code,{children:"localhost:50051"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Caller (client):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="caller.js"',children:"const { ServiceClient } = require('hera-grpc')\n\nconst poiClient = require('../../poi/client')\n\nconst sc = new ServiceClient({\n\tzk: 'zk://localhost:2181/hera-test',\n})\n\nconst run = async () => {\n\tawait sc.connect()\n\t// Get stub with the rpc methods for the specified route\n\tconst stub = await sc.getStub('/example-1.0.0/dev~service_route/poi')\n\n\t// Client from the tutorial\n\tawait poiClient(stub)\n\tstub.close()\n}\n\nrun().catch(console.error).finally(sc.close)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(6540);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);