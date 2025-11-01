FROM node:20-alpine
WORKDIR /files_docker
COPY package*.json ./
RUN npm install --production
COPY . . 
CMD ["node" , "server.js"]

