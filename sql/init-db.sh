#!/bin/bash

# Set the PostgreSQL user and password
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="postgres"

# Set the data directory for the PostgreSQL database
CONTAINER_NAME="postgresql-pdaw"

# Set the PostgreSQL port
POSTGRES_PORT=5432

# Set the volume name
VOLUME_NAME="postgres-data"

# Run the PostgreSQL container
docker run -d \
  --name "$CONTAINER_NAME" \
  -p "$POSTGRES_PORT:5432" \
  -e POSTGRES_USER="$POSTGRES_USER" \
  -e POSTGRES_PASSWORD="$POSTGRES_PASSWORD" \
  -v "$VOLUME_NAME:/var/lib/postgresql/data" \
  postgres:latest
