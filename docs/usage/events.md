---
title: Events
sidebar_position: 2
---

### Event: `'registered'`

Services registered to zookeeper, gRPC server is listening, everything should be ready to handle incoming requests.

### Event: `'connected'`

Connected to the service network and ready to send requests.

### Event: `'error'`

Errors encountered in the `ServiceClient` after connecting.

### Event: `'close'`

The `ServiceClient` was closed (either by graceful or force shutdown).

