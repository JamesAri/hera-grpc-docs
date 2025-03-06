---
title: Environment variables
sidebar_position: 3
---

## Tracing variables:

- `OTEL_SERVICE_NAME='some-service-name'`
- `OTEL_SERVICE_VERSION='1.0.0'`

## OpenTelemetry experimental feature

- `EXPERIMENTAL_OTEL=1` enables OTLP experimental features (currently only for local development)

**Current stack:** OpenTelemetry Collector, Loki (logs), Prometheus (metrics), Tempo (traces)
