FROM node:21-alpine

USER node

WORKDIR /home/node/app/frontend

COPY . .

# RUN npm install -g @angular/cli
# RUN npm install

EXPOSE 8001

# CMD [ "ng", "serve", "--host", "0.0.0.0"]
# CMD [ "ng", "serve", "--open" ]
CMD [ "npm", "run", "start" ]
# CMD [ ".scripts/docker/frontend-start.sh" ]
