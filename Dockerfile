FROM node:16.20.0-alpine

WORKDIR /app

ENV PORT=3000

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]