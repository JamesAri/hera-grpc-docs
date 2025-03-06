---
title: References
---

Before developing (for Hera-GRPC project) we highly encourage to go through these:

---

#### General understanding of gRPC:

- [Introduction](https://grpc.io/docs/what-is-grpc/introduction/)

- [Core concepts, architecture and lifecycle](https://grpc.io/docs/what-is-grpc/core-concepts/)

- [FAQ](https://grpc.io/docs/what-is-grpc/faq/)

- [Guides](https://grpc.io/docs/guides/) - probably the most important one

---

#### Advanced understanding of gRPC:

- [Docs](https://github.com/grpc/grpc/tree/master/doc)

More specifically:

- [Docs - Service Config](https://github.com/grpc/grpc/blob/master/doc/service_config.md) - e.g. setting LB strategy, retry/hedging polices, ...
	- [Service Config IDL](https://github.com/grpc/grpc-proto/blob/master/grpc/service_config/service_config.proto)
- [Docs - Name Resolution](https://github.com/grpc/grpc/blob/master/doc/naming.md)
- [Docs - Load Balancing](https://github.com/grpc/grpc/blob/master/doc/load-balancing.md)

---

#### Repository [@grpc-js](https://github.com/grpc/grpc-node/tree/master/packages/grpc-js)

- [gRPC Node.js Tests](https://github.com/grpc/grpc-node/tree/master/packages/grpc-js/test) - advanced use cases and undocumented functionality

	*For example the API reference tells us that [`parent` call option](https://grpc.github.io/grpc/node/grpc.Client.html#:~:text=construct%20the%20client.-,parent,-grpc.Client~Call) should be a `grpc.Client~Call`, but it is in fact a [server call](https://github.com/grpc/grpc-node/blob/613c832aad5bc76005b809f45413e2c1c0222c20/packages/grpc-js/test/test-call-propagation.ts#L99C11-L99C50).*

---

#### Node.js gRPC API Reference:

- [Node gRPC API reference](https://grpc.github.io/grpc/node/grpc.html)

---

#### Node.js gRPC Examples:

- [Examples](https://github.com/grpc/grpc-node/tree/master/examples)

---

#### Node.js gRPC Interceptors:

*Interceptors are used for various tasks, such as authentication, tracing, caching or logging.*

- [L5 gRFC proposal on NodeJS Client Interceptors](https://github.com/grpc/proposal/blob/master/L5-node-client-interceptors.md)

- [L112 gRFC proposal on NodeJS Server Interceptors](https://github.com/grpc/proposal/blob/master/L112-node-server-interceptors.md)

---

#### Node.js gRPC List of Supported Channel Options

- [Supported Channel Options](https://github.com/grpc/grpc-node/blob/master/packages/grpc-js/README.md#supported-channel-options)
- [Document with channel argument keys definition](https://grpc.github.io/grpc/core/group__grpc__arg__keys.html)

---

#### Node.js gRPC Environment Variables

- [Environment Variables](https://github.com/grpc/grpc-node/blob/master/doc/environment_variables.md)


