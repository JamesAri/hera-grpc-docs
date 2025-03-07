---
title: Proto structure
sidebar_position: 2
---

The proto buffers stored in zookeeper follow the [protobufjs JSON descriptors](https://www.npmjs.com/package/protobufjs#using-json-descriptors) definition.

## Example

`get /hera-grpc/proto/buffer*`

```json title="/hera-grpc/proto/buffer*"
{
  "options": { "syntax": "proto3" },
  "nested": {
    "hera": {
      "nested": {
        "fileshare": {
          "nested": {
            "v1": {
              "nested": {
                "FileShare": {
                  "methods": {
                    "DownloadFile": {
                      "requestType": "FileChunk",
                      "requestStream": true,
                      "responseType": "Result"
                    }
                  }
                },
                "FileChunk": {
                  "fields": { "chunk": { "type": "bytes", "id": 1 } }
                },
                "Result": {
                  "oneofs": { "_message": { "oneof": ["message"] } },
                  "fields": {
                    "success": { "type": "bool", "id": 1 },
                    "message": {
                      "type": "string",
                      "id": 2,
                      "options": { "proto3_optional": true }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

which corresponds to this proto file:

```proto3 title="file-share.proto"
syntax="proto3";

package hera.fileshare.v1;

service FileShare {
	// stream files from client to server
	rpc DownloadFile(stream FileChunk) returns (Result) {}
}

message FileChunk {
	bytes chunk = 1;
}

message Result {
	bool success = 1;
	optional string message = 2;
}
```
