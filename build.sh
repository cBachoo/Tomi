#!/bin/bash

echo "pulling latest branch"
git pull
echo "redeploying now"
docker compose up -d --build --force-recreate
echo "build done"
