FROM node:alpine

RUN mkdir -p /usr/src/app/nunu
WORKDIR /usr/src/app/nunu

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm","run", "start" ]