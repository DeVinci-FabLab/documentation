#!/bin/bash

# Set variables
HOST="0.0.0.0"
PORT="3000"
TIMEOUT=5
URL="http://${HOST}:${PORT}/"

echo "Performing health check on ${URL}..."

# Use wget if available, otherwise try curl
if command -v wget &> /dev/null; then
  if wget --spider --quiet --timeout=$TIMEOUT $URL 2>/dev/null; then
    echo "Health check passed: Service is up!"
    exit 0
  else
    echo "Health check failed: Service is down!"
    exit 1
  fi
# Fallback to curl
elif command -v curl &> /dev/null; then
  if curl --output /dev/null --silent --fail --max-time $TIMEOUT $URL; then
    echo "Health check passed: Service is up!"
    exit 0
  else
    echo "Health check failed: Service is down!"
    exit 1
  fi
else
  echo "Health check failed: Neither wget nor curl is available!"
  exit 1
fi