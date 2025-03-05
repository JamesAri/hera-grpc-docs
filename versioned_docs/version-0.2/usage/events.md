---
title: Events
sidebar_position: 2
---

### Event: `'registered'`

Services registered to zookeeper, gRPC server is listening, everything should be ready to handle incoming requests. This event should always occur before `'connected'` event.

### Event: `'connected'`

Connected to the service network and ready to send requests.

### Event: `'close'`

The `ServiceClient` was closed (either by graceful or force shutdown).

