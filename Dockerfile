FROM node:14-alpine3.14

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run dev

EXPOSE ${APP_PORT}