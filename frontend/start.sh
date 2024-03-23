#!/bin/bash

npm ls | grep ERR

# Define diretórios de origem e destino
origem="/home/node/cache/node_modules/"
destino="/home/node/app/frontend/node_modules/"

# Verifica se os diretórios de origem e destino existem
if [ ! -d "$origem" ]; then
  echo "Diretório de origem não encontrado: $origem"
  exit 1
fi

if [ ! -d "$destino" ]; then
  echo "Diretório de destino não encontrado: $destino"
  exit 1
fi

# Sincroniza os módulos node
rsync -arv "$origem" "$destino"
if [ $? -ne 0 ]; then
  echo "Erro ao sincronizar os módulos node."
  exit 1
fi

# Inicia o servidor Angular
npm start
if [ $? -ne 0 ]; then
  echo "Erro ao iniciar o servidor Angular."
  exit 1
fi

# Script concluído com sucesso
exit 0