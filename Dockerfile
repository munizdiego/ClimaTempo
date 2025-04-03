# Usa uma imagem oficial do Node.js como base
FROM node:22.14.0

# Define o diretório de trabalho dentro do container
WORKDIR /api

# Copia os arquivos do projeto
COPY package*.json tsconfig.json ./
COPY . .

# Instala as dependências
RUN npm install

# Compila o TypeScript antes de rodar
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
