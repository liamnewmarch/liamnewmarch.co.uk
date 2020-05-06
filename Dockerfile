FROM node:14-alpine

ENV NODE_ENV=production
EXPOSE 4000
WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . /app

CMD [ "npm", "start" ]
