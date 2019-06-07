FROM node:10.16
WORKDIR /home/myserver
COPY . .
EXPOSE 3000
CMD node /home/myserver/server.js