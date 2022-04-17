FROM node:lts

WORKDIR /app
ADD . /app

RUN yarn
CMD [ "yarn", "start" ]