FROM node:21-slim

RUN apt install bash

# RUN chmod +x .scripts/docker/start.sh

WORKDIR /home/node/app

USER node

CMD [ ".scripts/docker/api-start.sh" ]
