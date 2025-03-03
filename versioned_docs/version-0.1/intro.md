---
slug: /
sidebar_position: 1
---

# Introduction

Hera-GRPC is a library built around Node.js gRPC ([@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js)) for efficient data transfer between microservices in a distributed system **without the need of a centralized repository for protocol buffer files (gRPC IDL)**.

Most current solutions for sharing proto files rely on centralized repositories, which do not support dynamic development (e.g. [Google APIs](https://github.com/googleapis/googleapis/tree/master/google)). This means that deploying a new gRPC service typically requires additional setup before it can be used.

This library leverages the ability of Node.js gRPC’s support for [dynamically generating the code at runtime](https://grpc.io/docs/languages/node/basics/#example-code-and-setup).

The basic workflow is as follows:

user will define a `route` along with:
- service name
- service handlers
- service proto file
- service load options (optional)

These concepts should be familiar to anyone working with gRPC and proto files. If you are new to gRPC, I highly recommend checking out some of the basic resources [here](./development/references.md).

Once defined, the service is registered within the distributed system and becomes callable by its `route` without the need to locate the service proto files.

---

Hera-GRPC depends on [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js). To access its utilities (such as Metadata, status, etc.), import it as follows:

```js
const { grpc } = require('hera-grpc')
```
