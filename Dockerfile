# Usa uma imagem oficial do Node.js como base
FROM node:22.14.0

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos necessários
COPY package*.json tsconfig.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Compila o TypeScript antes de rodar
RUN npm run build

# Expõe a porta 3321
EXPOSE 3321

# Comando para iniciar a aplicação
CMD ["npm", "start"]
