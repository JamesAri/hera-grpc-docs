---
title: Debugging
sidebar_position: 4
---

### Hera-GRPC

[see debug package](https://www.npmjs.com/package/debug)

- `DEBUG=*`
- `DEBUG=*,-require-in-the-middle` (with OTLP enabled)


### GRPC module

[see grpc-js env variables](https://github.com/grpc/grpc-node/blob/master/doc/environment_variables.md)

- `GRPC_TRACE=all`
- `GRPC_VERBOSITY=DEBUG`


### OpenTelemetry module

[see otel env variables](https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/)

- `OTEL_LOG_LEVEL=debug`
