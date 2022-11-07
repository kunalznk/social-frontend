FROM node
FROM node:14.12.0-alpine

WORKDIR /app

COPY package.json /app/
RUN npm install
COPY . /app/
CMD ["npm" "run" "start"]