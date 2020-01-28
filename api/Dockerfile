FROM node:12.14.1-buster

WORKDIR /api

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]