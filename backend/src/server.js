/**
 * Importando a biblioteca express, que vem como uma função para criar um novo servidor, ou seja, uma nova porta de entrada que podemos receber requisições
 * e retornar respostas.
 **/
const express = require("express");

// Importanto arquivo de rotas.
const routes = require('./routes');

// Criando um servidor do express.
const server = express();

server.use(routes);

server.listen(3333); // PORTA QUE O SERVIDOR ESTÁ OUVINDO
