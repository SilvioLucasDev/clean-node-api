FROM node:20

WORKDIR /src

COPY ./package.json .

RUN npm install --only=prod

COPY ./dist ./dist

EXPOSE 5000

CMD npm start