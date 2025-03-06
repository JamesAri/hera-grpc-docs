---
title: Services structure
sidebar_position: 1
---

*Zookeeper is used here as a service discovery. The current watch fetches all services to the distributed nodes on each change - we should monitor the zookeeper performance and make sure it doesn't get overwhelmed overtime.*

The zookeeper structure of a service:

| **Name**  | **Type**  | **Description** |
|-----------|----------|----------------|
| Host  | `string`  | The hostname or IP address of the gRPC server. |
| Port  | `number`  | The port number on which the gRPC server listens. |
| Routes | `Record<string, RouteDetails>` | A mapping of route names to their respective details. |

The `RouteDetails` structure:

| **Name**       | **Type**  | **Description** |
|---------------|----------|----------------|
| serviceName  | `string`  | The fully qualified name of the gRPC service. |
| protoZnode  | `string`  | The path to the protocol buffer [definition in zookeeper](./proto-files) (optional). |
| internal  | `boolean`  | Indicates if the route is using a service defined by the library (optional). |
| loadOptions  | `object`  | Configuration [options for loading the gRPC proto file](https://www.npmjs.com/package/@grpc/proto-loader) (optional). |

**Note:** Either `protoZnode` or `internal` will be defined, but not both - the proto file and load options for `internal` services are predefined.

## Example

`get /hera-grpc/services/service*`

```json title="/hera-grpc/services/service*"
{
  "host": "192.168.1.38",
  "port": 50051,
  "routes": {
    "/slechtaj-1/dev~service_route/chat": {
      "serviceName": "hera.chat.v1.ChatRoom",
      "protoZnode": "/proto/buffer0000003732",
      "loadOptions": {
        "keepCase": true,
        "longs": "String",
        "enums": "String",
        "defaults": true,
        "oneofs": true
      }
    },
    "/slechtaj-1/dev~service_route/poi": {
      "serviceName": "RouteGuide",
      "protoZnode": "/proto/buffer0000003733",
      "loadOptions": {
        "keepCase": true,
        "longs": "String",
        "enums": "String",
        "defaults": true,
        "oneofs": true
      }
    },
    "/slechtaj-1/dev~service_route/file_share": {
      "serviceName": "hera.fileshare.v1.FileShare",
      "protoZnode": "/proto/buffer0000003734"
    },
    "/slechtaj-1/dev~service_route/json": {
      "serviceName": "hera.internal.v1.JsonService",
      "internal": true
    },
    "/slechtaj-1/dev~service_route/simple_proxy": {
      "serviceName": "hera.proxy.v1.SimpleProxy",
      "protoZnode": "/proto/buffer0000003735",
      "loadOptions": {
        "keepCase": true,
        "longs": "String",
        "enums": "String",
        "defaults": true,
        "oneofs": true
      }
    }
  }
}
```
