FROM node:alpine

RUN mkdir -p /usr/src/app/olivia
WORKDIR /usr/src/app/olivia

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm","run", "start" ]