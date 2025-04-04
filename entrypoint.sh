#!/bin/sh
set -e 

echo "Instalando dependências..."
npm install

echo "Rodando a aplicação..."
npm run dev
