FROM node:20

WORKDIR /src

COPY ./package.json .

RUN npm install --only=prod