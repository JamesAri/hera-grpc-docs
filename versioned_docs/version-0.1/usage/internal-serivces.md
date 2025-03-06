---
title: Internal services
sidebar_position: 5
---

To use internal services, you simply define a `route` and provide the service name listed here as internal.

For example to register `route` for the [`hera.internal.v1.JsonService`](#available-internal-services):

```js
// sc = ServiceClient instance
sc.registerService({
	routes: '/slechtaj-1/dev~service_route/json',
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

message JsonRequest {
	bytes data = 1;
}

message JsonResponse {
	bytes data = 1;
}

service JsonService {
	rpc JsonRpc(JsonRequest) returns (JsonResponse) {}
}
```
