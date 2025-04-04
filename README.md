# 🌦️ CLIMATEMPO API

A **ClimaTempo** é uma API que permite consultar as condições climáticas de uma cidade utilizando requisições HTTP. Através de parâmetros específicos, é possível definir filtros para personalizar as informações desejadas.

A documentação completa da API está disponível via **Swagger** no caminho `/swagger`.

---

## 📌 ROTAS DISPONÍVEIS

### 🔒 Geração de token para autenticação Bearer
`Post /auth/login`
- Retorna um token em formato de string, utilizado para autenticação via Authorization Bearer em rotas protegidas.

### 🌍 Consultar condições climáticas em tempo real
`GET /clima`
- Retorna os dados climáticos diretamente da API do OpenWeather.

### 💾 Salvar dados climáticos no banco de dados
`POST /clima/dados`
- Armazena no banco de dados as informações climáticas obtidas da API do OpenWeather.

### 📂 Consultar dados armazenados no banco de dados
`GET /clima/database`
- Retorna as condições climáticas com base nos registros salvos no banco de dados.

---

## 🚀 COMO INICIALIZAR A APLICAÇÃO

### 📥 Clonar e configurar o ambiente
1. Clone este repositório para sua máquina local.
2. Certifique-se de ter o **Docker** instalado.

### 🏗️ Construção e inicialização do container
```sh
docker-compose up --build
```

### 📜 Verificar logs
```sh
docker logs -f node_api_container
docker logs -f mysql_container
```

### 🛠️ Acessar o MySQL dentro do container
```sh
docker exec -it mysql_container mysql -u usuario -p
```

---

## ⚙️ FUNCIONAMENTO DA APLICAÇÃO

A aplicação utiliza **Node.js** e **TypeScript** para proporcionar um ambiente tipado e mais seguro em relação ao JavaScript puro.

### 📌 Comandos principais:
- **Modo desenvolvimento:**
  ```sh
  npm run dev
  ```
- **Construção para produção:**
  ```sh
  npm run build
  ```
- **Execução em produção:**
  ```sh
  npm run start
  ```

### 🎯 Por que TypeScript?
O TypeScript oferece um sistema de **tipagem estática**, ajudando a evitar erros ao definir como as variáveis são manipuladas. Isso garante maior robustez e previsibilidade no desenvolvimento.

---

## 📂 ESTRUTURA DE PASTAS

```
/(raiz)
 ├── /src                # Código-fonte principal
 │   ├── /controllers    # Lógica de manipulação das rotas
 │   ├── /interfaces     # Definição de tipos para Services e Controllers
 │   ├── /lib            # Conexão e manipulação do banco de dados
 │   ├── /routes         # Definição das rotas da API
 │   ├── /services       # Serviços e regras de negócios
 │   ├── /swagger        # Esquemas e documentação da API
 ├── /node_modules       # Pacotes e dependências do projeto
 ├── /dist               # Arquivos gerados para produção
```

---

## 🔧 CONFIGURAÇÕES E TECNOLOGIAS

- **Framework:** Node.js
- **Linguagem:** TypeScript
- **Gerenciador de Pacotes:** NPM
- **Banco de Dados:** MySQL
- **Bibliotecas Principais:**
  - Express
  - MySQL2
  - JsonWebToken
  - UUID
  - Swagger-Jsdoc
  - Swagger-UI-Express

---

## 📝 OBSERVAÇÕES FINAIS

Esta API foi projetada para ser intuitiva e de fácil utilização, facilitando a integração de dados climáticos em diferentes aplicações.

Para dúvidas ou contribuições, sinta-se à vontade para abrir uma **issue** ou um **pull request**. 🌍☁️

