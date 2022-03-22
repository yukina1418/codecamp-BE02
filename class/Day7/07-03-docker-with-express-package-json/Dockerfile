FROM node:14

WORKDIR /myfolder
COPY ./pacgake.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install

COPY . /myfolder/
CMD node index.js