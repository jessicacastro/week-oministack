/**
 * Importando a biblioteca express, que vem como uma função para criar um novo servidor, ou seja, uma nova porta de entrada que podemos receber requisições
 * e retornar respostas.
 **/
const express = require("express");

// Importando o mongoose para utilizar sintaxe javascript na manipulação de banco.
const mongoose = require('mongoose');

// Importanto arquivo de rotas.
const routes = require('./routes');

// Criando um servidor do express.
const server = express();

// Fazendo a conexão com o banco de dados.
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-21gmd.mongodb.net/omnistack?retryWrites=true&w=majority', { useNewUrlParser : true})

// Indicando ao express que a aplicação back irá receber requisições com JSON.
server.use(express.json());

// Colocando a configuração de rotas para ser usada pelo server
server.use(routes);

server.listen(3333); // PORTA QUE O SERVIDOR ESTÁ OUVINDO
