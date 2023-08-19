#!/bin/bash

# sudo chown -R 1000:1000 "/home/node/.npm"

npm install

npm install prisma -D

npm run build

npm run start:dev