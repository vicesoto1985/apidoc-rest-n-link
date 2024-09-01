FROM node:18
RUN mkdir /home/node/app
WORKDIR /home/node/app
RUN apt-get update && apt-get install -y python3
COPY package*.json ./
COPY swagger.json ./
COPY app.js ./
RUN npm install
CMD [ "node", "app.js"]