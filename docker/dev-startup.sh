#!/bin/sh
# Check if we have files in the app directory
if [ ! -f "/app/package.json" ]; then
  echo "No package.json found in /app. Check your volume mounting."
  echo "Current files in /app:"
  ls -la /app
  exit 1
fi

# Continue with normal startup
cd /app
if [ -d "node_modules" ]; then
  exec pnpm start --host 0.0.0.0 --poll 1000
else
  pnpm install
  exec pnpm start --host 0.0.0.0 --poll 1000
fi