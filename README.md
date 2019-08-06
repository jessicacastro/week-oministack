# WEEK OMINISTACK - BACKEND

### INICIANDO

1. [x] Criar a pasta backend
2. [x] Iniciar o projeto com o comando "yarn init -y" dentro da pasta _backend_
3. [x] Abrir o projeto no VS Code
4. [x] Adicionar o express com o comando "yarn add express"
5. [x] Adicionar a pasta src com seu arquivo principal, no nosso caso server.js
6. [x] Definir a porta que o servidor irá ouvir com server.listen(port)



### ANOTAÇÕES

##### PACKAGE.JSON 
> Arquivo presente em toda a aplicação que envolva javascript, seja backend, frontend ou mobile.
> Ele tem nome, versão, arquivo principal do projeto, licensa e tudo mais. 
> Responsabilidade principal dentro de um projeto javascript: Anotar informações de dependências sendo utilizadas dentro do projeto. 
> Nesta aplicação utilizamos o express.

#### EXPRESS
> Microframework para o node que ajuda a lidar com rotas (exemplo de rota:www.example.com/minharota:1), requisições e respostas para o servidor.

#### YARN.LOCK
> Arquivo de cache que deve ser mantido dentro da aplicação que armazena informações entre as dependências das dependências. Ou seja, o express usa diversas dependências e instala as mesmas em node_modules. O yarn.lock consegue mapear quais são essas dependências adicionais. Isso tudo fica cacheado e a instalação fica mais rápida depois.

#### SRC 
> Pasta que gere o código mexido pelo time desenvolvedor no projeto. O arquivo dentro, no caso desta aplicação backend, 'server.js' é indiferente. Você pode nomeá-lo como desejar.

### SHORTCUTS VS CODE 
- CTRL + SHIFT + P: Para abrir a tela de search
    - Você pode procurar por install e selecionar o "Install 'code' command in PATH" para abrir diretamente seu projeto do terminal no VS Code com o comando "code + [pasta do projeto]" ou "code ." (Caso já esteja na pasta do mesmo no terminal)


### CONFIGURAÇÃO INICIAL

1. Ao criar o server.js, devemos instanciar o express, definí-lo em uma variável constante de server e indicar qual porta o mesmo ouvirá (aqui usamos a porta 3333):
    ```
    const express = require('express');
    const server = express();
    server.listen(3333);
    ```

2. Após iniciar o servidor com o comando 'node src/server.js', ele não irá retornar nada se acessarmos no navegador, para mostrar algo devemos por métodos http ou outros para definir o que nossa aplicação espera e o que irá responder, nesse caso estamos setando quando não passamos qualquer valor para a raiz, somente o / puro. De acordo com o ES6, uma arrowFunction foi feita, mas podemos fazer no método antigo de função do ES5: 
    ```
    server.get('/'m (req, res) => {
        return res.send("HELLO WORLD");
    });
    ```
Em caso de você querer retornar algum parâmetro passado na URL como por exemplo: localhost:3333?name=User, utilize: 
    ```
    server.get('/'m (req, res) => {
        return res.send(`Hello ${req.query.name}`);
    });
    ```


