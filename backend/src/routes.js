const express = require('express');

// Função que utilizamos para criar um objeto específico para rotas. Tem todos os métodos HTTP.
const routes = express.Router();

/**
 * Toda vez que eu chamo o server desta forma, temos todos os métodos HTTP.
 * (GET -> buscar informação, POST -> inserir uma informação, PUT -> Editar uma informação, DELETE -> Deletar uma informação).
 * O método PUT e o método DELETE não é possível enviar via HTML.
 * Ele está esperando alguma coisa. Neste caso, não estamos passando nada na rota, apenas a rota raiz.
 */
routes.get("/", (req, res) => {
  return res.json({
    message: `Hello ${req.query.name}`,
    nome: req.query.name,
  });
});


//Exportando as rotas para o server reconhecer as rotas.
module.exports = routes;
