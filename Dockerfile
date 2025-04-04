# Usa uma imagem oficial do Node.js como base
FROM node:22.13.1

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

RUN npm install -g npm@latest

# Copia os arquivos de dependência primeiro para aproveitar o cache
COPY package.json package-lock.json tsconfig.json ./

# Instala as dependências antes de copiar os arquivos da aplicação
COPY entrypoint.sh /entrypoint.sh

# Instala as dependências com log detalhado para diagnóstico
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta 3321
EXPOSE 3321

# Dá permissão de execução ao script de entrada
RUN chmod +x /entrypoint.sh

# Comando para iniciar a aplicação
CMD ["/entrypoint.sh"]
