CLIMATEMPO
A ClimaTempo é uma API que permite consultar as condições climáticas de uma cidade, utilizando uma requisição HTTP. Através de parâmetros específicos, é possível definir filtros para personalizar as informações desejadas.
A manipulação destes dados é documentada conforme SWAGGER no link /swagger.

Para melhor compreensão esta api possui as seguintes configurações:
Framework: Node.js;
Linguagem: Typescript;
Pacote: NPM;
Bibliotecas: Express, MySQL2, JsonWebToken, UUID, Swagger-Jsdoc, Swagger-UI-Express

COMO FUNCIONA?
Esta aplicação funciona de forma similar mas não essencialmente igual ao Javascript, pois sua forma de desenvolvimento inicia-se com o comando "npm run dev", enquanto para a produção o comando é gerar e iniciar, ou seja, "npm run build" e "npm run start" respectivamente. Ao gerar a produção, os arquivos são gerados em uma pasta com o nome de dist, onde foram gerados os arquivos estáticos em Javascript.

A pergunta talvez seja: Por que não desenvolver diretamente em Javascript? O Typescript, além de uma linguagem que baseia-se também no ECMASCRIPT, também melhora em relação a outra linguagem devido sua tipagem, ou seja, sistema que define como as variáveis são manipuladas em relação aos tipos de dados. Dessa maneira, a aplicação responderá com um erro caso o tipo de dado tratado não enquadra-se ao que é esperado.

Felizmente, esta aplicação é razoavelmente fácil de ser interpretada por qualquer pessoa experiente em Javascript.

ORGANIZAÇÃO DE PASTAS
/(raiz)
    /src            pasta de recursos da aplicação
    /services       pasta de arquivos de manipulação com o banco de dados
    /controllers    pasta de arquivos de manipulação lógica das rotas
    /routes         pasta de arquivos de manipulação de rotas
    /swagger        pasta de arquivos para padronização de schemas
    /interfaces     pasta de arquivos para tipagem de dados em Services e Controllers
/node_modules       pasta gerada pelo pacote npm com base nas dependências da aplicação
/dist               pasta gerada pelos comandos de produção

PARA INICIALIZAÇÃO DA APLICAÇÃO
Esta aplicação deve ser baixada em uma pasta local, e seguir o passo a seguir para construção de container:
Build da Imagem e Inicialização dos Containers: docker-compose up --build

Verificar Logs
docker logs -f node_api_container
docker logs -f mysql_container

Acessar o MySQL Dentro do Container
docker exec -it mysql_container mysql -u usuario -p

Modalidades de Contratação
● (código = 1) Leilão - Eletrônico
● (código = 2) Diálogo Competitivo
● (código = 3) Concurso
● (código = 4) Concorrência - Eletrônica
● (código = 5) Concorrência - Presencial
● (código = 6) Pregão - Eletrônico
● (código = 7) Pregão - Presencial
● (código = 8) Dispensa de Licitação
● (código = 9) Inexigibilidade
● (código = 10) Manifestação de Interesse
● (código = 11) Pré-qualificação
● (código = 12) Credenciamento
● (código = 13) Leilão - Presencial

Identificação de Usuários
São sistemas que obtiveram o credenciamento ao PCNCP no ambiente de produção, sendo até o momento 286 o total de integrados.
Acesse https://www.gov.br/pncp/pt-br/pncp/portais-integrados-ao-pncp
O código padrão é 3 para divulgações realizadas pelo Compras.gov.br

https://pncp.gov.br/app/entidades-dominio
https://catalogo.compras.gov.br/cnbs-web/busca
PCA: plano de contratações anual definido na lei 14.133/2021
https://www.gov.br/pncp/pt-br/central-de-conteudo/manuais/versoes-anteriores/ManualPNCPAPIConsultasVerso1.0.pdf


