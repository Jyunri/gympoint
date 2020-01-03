# :rocket: GoStack - Desafio Final

Esse repositório contém os projetos back-end, front-end e mobile (iOS) da aplicação Gympoint, referente ao Desafio Final do programa de bootcamp GoStack da rocketseat

## Dependências
- node
- yarn
- docker
- react-native-cli

### Disclaimer

Queria colocar tudo em um docker compose, mas não sabia como lidar com o RN e a baleia, sorry :whale:

---

# Backend
<details>

  ## Setup
  Abrir diretório `gympoint-backend` e seguir as instruções abaixo

  ### Node modules
  ```
  yarn install
  ```

  ### Banco de Dados

  Subir um container postgres e criar um database `gympoint` seguindo as configurações de `src/config/database.js`

  ```
  docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
  ```

  Rodar as migrations para criar as tabelas

  ```
  yarn sequelize db:migrate
  ```

  Rodar as seeds para popular as tabelas

  ```
  yarn sequelize db:seed:all
  ```

  ### Redis

  Utilizaremos o redis para armazenar os jobs de envio de email. Subir um container seguindo as configurações de `src/config/redis.js`

  ```
  docker run --name gympoint -p 6379:6379 -d redis:alpine
  ```

  ### Rodando a aplicação

  Executar o comando abaixo. A aplicação estará rodando na porta 3333
  ```
  yarn dev
  ```

  Em um outro terminal, deixar rodando o consumidor dos jobs

  ```
  yarn queue
  ```

  ### Api
  Uma collection do `Postman` pode ser importada a partir desse link https://www.getpostman.com/collections/9cbe7749b2497f14ddce (não usei `Insomnia` pois eu precisava sincronizar em duas máquinas :alien:)

</details>


# Frontend

<details>

  ## Setup
  Abrir diretório `gympoint-web` e seguir as instruções abaixo

  ### Node modules
  ```
  yarn install
  ```

  ### Rodando a aplicação

  ```
  yarn start
  ```

  ### Obs
  Deixei um TODO list dentro do readme do projeto, com algumas dúvidas pendentes

</details>


# Mobile

**Importante**

A aplicação mobile foi testada apenas no `iOS`, apesar de ter implementação dos componentes para ambas as plataformas

<details>

  ## Setup
  Abrir diretório `gympoint_mobile` e seguir as instruções abaixo

  ### Rodando a aplicação

  ```
  react-native run-ios
  ```

</details>
