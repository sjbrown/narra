#!/usr/bin/env bash
set -euo pipefail

if [ `basename $(pwd)` != "narra" ]; then
  echo "You must be in the narra directory to run this command"
  exit 1
fi

set -euo pipefail

echo "▶ Starting narra dev environment..."
echo "  App:       http://localhost:8080"

exec docker compose \
    -f "docker/docker-compose.dev.yml" \
    up --build



