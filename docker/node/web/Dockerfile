
# COPY . .

# RUN yarn install

# CMD [ "ng", "serve", "--host", "0.0.0.0"]

FROM node:21-alpine

USER node

WORKDIR /home/node/app/frontend

COPY . .
# RUN npm install
# RUN npm install -g @angular/cli

EXPOSE 8001

# RUN npm run start

# CMD [ "ng", "serve", "--open" ]
CMD [ "npm", "run", "start" ]
# CMD [ ".scripts/docker/frontend-start.sh" ]
