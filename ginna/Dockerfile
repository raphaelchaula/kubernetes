FROM node:alpine

RUN mkdir -p /usr/src/app/ginna
WORKDIR /usr/src/app/ginna

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm","run", "start" ]