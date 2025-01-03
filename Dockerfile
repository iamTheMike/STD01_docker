FROM node:20.15.0
#determine dir of container
WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY ./index.js ./ 

EXPOSE 8000

CMD ["node","index.js"]