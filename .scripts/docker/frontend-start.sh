#!/bin/bash

cd frontend

chmod -R 777 frontend

npm install 
npm install -g @angular/cli

# tail -f /dev/null 
ng serve --open