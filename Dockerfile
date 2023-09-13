FROM node:16 AS build
WORKDIR /app
COPY . .
RUN npm install -g npm@9.6.1
RUN npm install
RUN npm start

