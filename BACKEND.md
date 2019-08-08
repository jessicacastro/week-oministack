## BACKEND

### PASSO A PASSO DO PROJETO (RESUMO)

_Para acesso a informações mais detalhadas, continue descendo a página_

1. [x] Criar a pasta backend
2. [x] Iniciar o projeto com o comando "yarn init -y" dentro da pasta _backend_
3. [x] Abrir o projeto no VS Code
4. [x] Adicionar o express com o comando "yarn add express"
5. [x] Adicionar a pasta src com seu arquivo principal, no nosso caso server.js
6. [x] Definir a porta que o servidor irá ouvir com server.listen(port)
7. [x] Adicionar o nodemon com o comando "yarn add nodemon -D"
8. [x] Testar o retorno da aplicação com o insomnia
9. [x] Configurar o MongoDB Atlas
10. [x] Instalar o mongoose com o comando "yarn add mongoose"
11. [x] Configurar o mongoose e o banco de dados no server.js
12. [x] Criar a pasta model em SRC e o arquivo Dev.js

### ANOTAÇÕES

##### PACKAGE.JSON

> Arquivo presente em toda a aplicação que envolva javascript, seja backend, frontend ou mobile.
> Ele tem nome, versão, arquivo principal do projeto, licensa e tudo mais.
> Responsabilidade principal dentro de um projeto javascript: Anotar informações de dependências sendo utilizadas dentro do projeto.
> Nesta aplicação utilizamos o express.

#### EXPRESS

> Microframework para o node que ajuda a lidar com rotas (exemplo de rota:www.example.com/minharota:1), requisições e respostas para o servidor.

###### Métodos do express que utilizamos no projeto:
Aqui temos alguns métodos do express que estamos utilizando durante o projeto, iremos ver a sua utilização conforme o projeto for desenvolvido.

Este método utilizamos para definir o servidor em uma variável:
```
const server = express();
```

Este método utilizamos para definir que utilizaremos alguma coisa no servidor (arquivo de rotas, json). Ao indicarmos no server.js que iremos utilizar json, devemos nos certificar que essa linha esteja antes das rotas:
```
server.use(express.json());
server.use(routes);

```

Este método utilizamos para indicar que utilizaremos o JSON para receber requests no server.
```
express.json();
```

#### NODEMON

> Ferramente do node responsável por não termos que ficar reiniciando o servidor node na mão a cada alteração que realizamos no código, ele irá gerenciar isso e reiniciar a aplicação para nós. O -D no final é para indicar que essa ferramente só será utilizada em desenvolvimento e não em produção.

1. Após instalar o nodemon, abra o "package.json" e após "licence", coloque a chave (propriedade) "scripts". Essa chave é um objeto, onde você pode colocar scripts que irão rodar com o yarn. Criaremos o script chamado "dev", que será responsável rodar o nodemon até o nosso arquivo server.js:
   ```
   "scripts": {
       "dev": "nodemon src/server.js"
   }
   ```
   Após isso, basta rodar o yarn com o nome do seu script e ele começará a rodar o servidor de uma forma diferente, inserindo diretamente as alterações:
   ```
   yarn dev
   ```
   _Podemos utilizar dois terminais no VS Code, dividindo o mesmo em dois na parte superior direita do terminal. Isso é útil para utilizarmos um terminal para olhar o status da aplicação e o outro para instalar dependências e outras alterações no sistema._
   ![](imgs/vscode-sliced.PNG)

#### YARN.LOCK

> Arquivo de cache que deve ser mantido dentro da aplicação que armazena informações entre as dependências das dependências. Ou seja, o express usa diversas dependências e instala as mesmas em node_modules. O yarn.lock consegue mapear quais são essas dependências adicionais. Isso tudo fica cacheado e a instalação fica mais rápida depois.

#### SRC

> Pasta que gere o código mexido pelo time desenvolvedor no projeto. O arquivo dentro, no caso desta aplicação backend, 'server.js' é indiferente. Você pode nomeá-lo como desejar.

## CONFIGURAÇÃO

1. Ao criar o server.js, devemos instanciar o express, definí-lo em uma variável constante de server e indicar qual porta o mesmo ouvirá (aqui usamos a porta 3333):

   ```
   const express = require('express');
   const server = express();
   server.listen(3333);
   ```

2. Após iniciar o servidor com o comando 'node src/server.js', ele não irá retornar nada se acessarmos no navegador, para mostrar algo devemos por métodos http ou outros para definir o que nossa aplicação espera e o que irá responder, nesse caso estamos setando quando não passamos qualquer valor para a raiz, somente o / puro. De acordo com o ES6, uma arrowFunction foi feita, mas podemos fazer no método antigo de função do ES5:

   ```
   server.get('/', (req, res) => {
       return res.send("HELLO WORLD");
   });
   ```

   Em caso de você querer retornar algum parâmetro passado na URL como por exemplo: localhost:3333?name=User, utilize:

   ```
   server.get('/', (req, res) => {
       return res.send(`Hello ${req.query.name}`);
   });
   ```

   Mas nesse caso estamos apenas passando o básico (base) de requisições para o express no Node.js. Temos uma rota, uma requisição, fazemos algo com a requisição e devolvemos uma resposta para o frontend.

   Como desenvolveremos API + FRONT, utilizaremos uma estrutura de dados unificada, chamada JSON (JavaScript Object Notation), como vemos nos exemplos abaixo:

   ```
   { nome: 'Jessica',
     endereço: 'Rua exemplo'
   }
   ```

   ```
   server.get('/', (req, res) => {
       return res.json({
           message: `Hello ${req.query.name}`,
           nome: req.query.name
       });
   });
   ```

### REFATORANDO A APLICAÇÃO

Apesar de termos feito tudo diretamente no server.js, o ideal é que tenhamos apenas um arquivos para definir todas as rotas que o nosso servidor pode ser acessado pelo front, logo criaremos um routes.js na pasta "SRC". Após criar os arquivos você deve seguir os seguintes passos:

1. Importar o express da mesma forma que importamos no server.js
2. Declarar uma constante para routers onde a mesma recebe "express.Routes();"
3. Incluir a rota (anteriormente inserida em server.js) no arquivo.
4. Garantir que o método HTTP antes visto como server.MÉTODO, seja routes.MÉTODO:
   ```
   routes.get("/", (req, res) => {
        return res.json({
            message: `Hello ${req.query.name}`,
            nome: req.query.name,
        });
   });
   ```
5. Exportar o arquivo de rotas para que ele seja visto pelo arquivo server, definindo o nome que você quer dar para esse arquivo ao ser importado.
    ```
    module.exports = routes;
    ```
6. Importar o arquivo routes no arquivo server
    ```
    const routes = require('./routes');
    ```
    Lembrando que, apesar de estar no mesmo diretório, é importante colocarmos o "./" para realizar o acesso corretamente do arquivo routes.

Após fazer isso, nosso server estará assim:
![](imgs/serverjsrefat.PNG)

E nosso routes estará assim:
![](imgs/routesrefat.PNG)

### EXEMPLOS DE ROTAS E DEFINIÇÕES

> Por padrão o navegador sempre envia um método get quando acessamos uma rota, nunca um método POST. Só conseguimos enviar um método POST tendo um formulário na aplicação. Para testar outros métodos além do get devemos usar o INSOMNIA ou o POSTMAN.

[INSOMNIA](https://insomnia.rest/)

[POSTMAN](https://www.getpostman.com/)

Vamos sobre o INSOMNIA após os exemplos de rotas.


#### GET
```
routes.get("/", (req, res) => {
        return res.json({
            message: `Hello ${req.query.name}`,
            nome: req.query.name,
        });
   });
```

Neste caso, quando queremos acessar a informação passada na URL utilizamos o req.query

#### POST
```
routes.post("/devs", (req, res) => {
    return res.json({
        message: `Dev ${req.body.name} cadastrado com sucesso`
    });
});
```
Neste caso, quando queremos acessar a informação passada através de JSON utilizamos o req.body


### INSOMNIA 
Serve para cadastrarmos as rotas da nossa aplicação e enviar para a API parâmetros e informações. Ele é grátis, open-source e conseguimos utilizar ele em qualquer plataforma (linux, mac, windows). 

_ATENÇÃO: O insomnia não tem a versão 32 bits, nesse caso o melhor é optar pelo postman_
_ATENÇÃO: Não entraremos a fundo no INSOMNIA neste momento_

1. Criaremos uma workspace no INSOMNIA.
2. Após ter a workspace criada, devemos adicionar uma requisição, escolher POST e escolher o tipo de BODY da mesma (no nosso caso, JSON).
3. Indicar a rota utilizada no para a requisição.
4. Enviar e testar o retorno das nossas informações.

### MONGODB

Para essa aplicação utilizaremos o MongoDB Atlas, é um banco disponibilizado gratuitamente pela mongo com 150MB. Após entrar no Atlas e criar a conta em "Try Free", devemos criar um Cluster sem mudar as alterações padrão que o mesmo traz. O processo demora de 7 à 10 minutos para a criação do mesmo.

Após o término da criação do Cluster devemos clicar em "Database Access" e criar um novo usuário com a permissão "Read and Write any database".

Com o usuário criado, vamos clicar em "Network Access" e liberar o acesso por qualquer IP ao banco. Por padrão o mesmo vem bloqueado. Então iremos lá e daremos um "Allow access from anywhere". 

Com isso feito e o status do mesmo como "Ativo". Vamos em "Clusters" e clicaremos em "Connect" > "Connect Yout Application". Devemos selecionar o driver "Node.js" e a versão "3.0 or later". 

Com esses dois selecionados podemos clicar em Copy no link disponibilizado.

### MONGOOSE
Essa é uma ferramenta que facilita para trabalhar com banco de dados utilizando unicamente sintaxe de javascript. Ou seja, não precisaremos utilizar sintaxe de banco de dados.

Com o mongoose instalado (comando nas primeiras linhas do documento), devemos importá-lo para o server.js. Lembrando que o mesmo deve ser importado antes das rotas.

```
const mongoose = require('mongoose');
mongoose.connect('[LINK COPIADO NO CLUSTER AQUI]')
```
ATENÇÃO: Ao colocarmos o link que copiamos, devemos alterar o username, o password e o nome do banco neste link. Lembrando que: Devemos retirar a tag toda.
<username> = nome do seu usuário
<password> = senha definida do usuário do banco
<test> = nome do banco de dados que você criou

Caso esse banco não tenha sido criado, o próprio mongo irá se encarregar de criá-lo para nós. Além disso, devemos indicar pro mongoose que iremos utilizar um novo formato. Ficará algo como:

```
// Fazendo a conexão com o banco de dados.
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-21gmd.mongodb.net/omnistack?retryWrites=true&w=majority', { useNewUrlParser : true})
```

Com isso feito, temos o banco de dados configurado.

## COMEÇANDO EFETIVAMENTE A APLICAÇÃO 
Utilizamos o modelo MVC (Model - View - Controller) para a aplicação, mas nesse caso como temos o frontend separado do back, não faremos a view, somente o model e o controller.

Criaremos o diretório model dentro de "src" e dentro dela o arquivo Dev.js.

