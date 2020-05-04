# API desenvolvida para o sistema DietController

O intuito desta API é servir as informações do DietController para as diversas aplicações front-end deste sistema

## Configuração do ambiente

Para utilizar a API:

1- Instale o NodeJS

2- Clone o repositório

3- Instale as dependências através do comando 

```
npm install
```

4- Crie um Banco de Dados e configure-o  no arquivo knexfile.js (caso não utilize o banco como development, modifique no arquivo database/connection, para se adequar às configurações)

5- Execute as migrations através do comando 

```
npx knex migrate:latest
```

6- Execute a API através do comando 

```
npm start
```

## Rotas

### Users:

#### POST /users 
Cria um novo usuário, deve conter um JSON no body seguindo o modelo: 

    {
        "name":"Username", 
        "birth":"1998-06-25",
        "gender":"m", 
        "email":"example@email.com", 
        "password":"password" 
    }

#### GET /users 
Lista todos os usuários

#### GET /users/:id
Retorna as informações de um usuário específico 

### Measures:

#### POST /measures 
Cria uma nova medida associada a um usuário, deve conter um JSON no body seguindo o modelo: 

    {
        "weight":71,
        "height":170,
        "update_date":"2020-05-03T20:00:00.000Z"
    }

Também deve conter um parâmetro Authorization no header contendo o Id do usuário associado à medida

#### GET /measures 
Lista todas as medidas

#### GET /measures/:user_id
Lista todas as medidas de um usuário específico

#### DELETE /measures/:id
Apaga a medida com o id informado

### Foods:

#### POST /foods 
Cria uma nova comida, deve conter um JSON no body seguindo o modelo: 

    {
        "name": "Arroz integral cozido",
        "protein": "2.6",
        "fat": "1",
        "carb": "25.8"
    }

#### GET /foods 
Lista todas as comidas

### Ingested Foods

#### POST /ingest 
Cria um registro de ingestão de determinado alimento por um determinado usuário, deve conter um JSON no body seguindo o modelo: 

    {
        "user_id":"2",
        "food_id":"2",
        "amount":"200",
        "time":"2020-05-03T20:00:00.000Z" 
    }

#### GET /ingest 
Lista todas as ingestões

#### GET /ingest/:user_id
Retorna as ingestões de um usuário específico 

#### DELETE 
