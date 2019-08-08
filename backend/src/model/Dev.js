//  Utilizando desestruturação para chamar várias dependências do pacote mongoose.
const { 
    Schema,
    model
} = require('mongoose');

// Indicando a estrutura da tabela dev no banco de dados.
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    user: {
        type: String, 
        required: true,
    }, 
    bio: String, 
    avatar: {
        type: String,
        required: true,
    }, 

}, {
    // Cria o createdAt e o updatedAt
    // createdAt: Armazena a criação de um registro dentro do banco
    // updatedAt: Data da última alteração do registro. 
    timestamps: true,
});

module.exports = model('Dev', DevSchema);