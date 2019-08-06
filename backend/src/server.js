/**
 * Importando a biblioteca express, que vem como uma função para criar um novo servidor, ou seja, uma nova porta de entrada que podemos receber requisições
 * e retornar respostas.
 **/
const express = require("express");

// Criando um servidor do express.
const server = express();

/**
 * Toda vez que eu chamo o server desta forma, temos todos os métodos HTTP.
 * (GET -> buscar informação, POST -> inserir uma informação, PUT -> Editar uma informação, DELETE -> Deletar uma informação).
 * O método PUT e o método DELETE não é possível enviar via HTML.
 * Ele está esperando alguma coisa. Neste caso, não estamos passando nada na rota, apenas a rota raiz.
 */
server.get("/", (req, res) => {
  return res.json({
    message: `Hello ${req.query.name}`,
    nome: req.query.name,
  });
});

server.listen(3333); // PORTA QUE O SERVIDOR ESTÁ OUVINDO
