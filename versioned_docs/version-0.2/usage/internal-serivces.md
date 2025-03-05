---
title: Internal services
sidebar_position: 5
---

Internal services are predefined services by the library itself, so you don't need to provide any proto files or load options. You can find the available internal services on this page. If no load options are specified, they use the default ones.

To use internal services, you simply define a `route` and provide the internal service name. For example to register `route` for the [`hera.internal.v1.JsonService`](#available-internal-services):

```js
// sc = ServiceClient instance
sc.registerService({
	routes: '/slechtaj-1.0.0/dev~service_route/json',
	serviceName: 'hera.internal.v1.JsonService',
	handlers: {
		jsonRpc: function (call, callback) {/** handle */}
	},
})
```

## Available internal services

Service name `hera.internal.v1.JsonService`

```proto3
syntax="proto3";

package hera.internal.v1;

service JsonService {
	rpc JsonRpc(JsonRequest) returns (JsonResponse) {}
}

message JsonRequest {
	bytes data = 1;
}

message JsonResponse {
	bytes data = 1;
}
```
