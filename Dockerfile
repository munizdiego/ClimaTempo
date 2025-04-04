# Usa uma imagem oficial do Node.js como base
FROM node:22.13.1

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos necessários
COPY package*.json tsconfig.json ./

# Copia o restante dos arquivos
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta 3321
EXPOSE 3321

# Comando para iniciar a aplicação
CMD ["npm", "install"]
