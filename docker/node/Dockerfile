FROM node:21-slim

RUN apt install bash

# RUN chmod +x .scripts/docker/start.sh

WORKDIR /home/node/app

USER node

CMD [ ".scripts/docker/start.sh" ]


# FROM node:21-slim

# RUN apt-get update && apt-get install -y
# RUN apt-get clean

# RUN mkdir -p /home/node/app

# WORKDIR /home/node/app

# RUN npm install -g @nestjs/cli

# COPY . /home/node/app

# # COPY api/package*.json /home/node/app/api

# USER node

# CMD [ ".scripts/docker/start.sh" ]




# FROM node:21-slim

# # WORKDIR /home/node/backend/api
# # WORKDIR /usr/src/api
# WORKDIR /usr/src/desafio

# COPY . .
# # COPY .dotenv_files/.env.production .dotenv_files/.env

# # RUN npm install --quiet --no-optional --no-fund --loglevel=error
# RUN npm install

# RUN npm build

# USER node

# CMD [ "npm", "run", "start:prod" ]