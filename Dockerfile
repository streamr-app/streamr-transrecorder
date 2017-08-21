FROM node:8.4.0-alpine

RUN apk update
RUN apk add ffmpeg

RUN mkdir /app
ADD package.json /app
ADD yarn.lock /app
WORKDIR /app

RUN yarn install

ADD . /app
RUN yarn dist

WORKDIR /app/dist
CMD ["node", "/app/dist/index.js"]
