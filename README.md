# RansomwareNodeJs

<p align="center">Projeto desenvolvido para o curso Criação de <strong>Ransomware<strong> multiplataforma com JavaScript</p>
<p align="center">
  <a aria-label="Versão do Node" href="https://nodejs.org/pt-br/">
    <img src="https://img.shields.io/badge/Node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Gerenciador de pacotes" href="https://yarnpkg.com/">
    <img src="https://img.shields.io/badge/yarn-1.19.0-informational?logo=yarn"></img>
    <a aria-label="Versão do MySql" href="https://www.mysql.com/">
    <img src="https://img.shields.io/badge/MySql-5.7.26-informational?logo=mysql"></img>
  <a aria-label="Concluindo em " href="#">
    <img src="https://img.shields.io/badge/Dias-4-green"></img>
  </a>
</p>

## Descrição


criptografia pkcs1
Arquivo encryptado a 512 Bytes  por vez 

## Instalação
Para instalar o banco de dados:
```bash
create database c2_server; create user 'c2_server'@'localhost'  IDENTIFIED WITH mysql_native_password BY 'secret'; grant all privileges on c2_server.* to 'c2_server'@'localhost';

flush privileges;
```
Para iniciar o servidor configure o arquivo `.env.exmple` renomeado-o para `.env` e adicionando informações do banco de dados conforme a baixo:
```bash
HOST=127.0.0.1              -> Endereço do servidor
PORT=3333                   -> Porta do servidor
NODE_ENV=development        
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
DB_CONNECTION=mysql        -> Banco de dados
DB_HOST=127.0.0.1          -> Endereço do banco
DB_PORT=3306               -> Porta do banco
DB_USER=root               -> Usuário do banco
DB_PASSWORD=               -> Senha do banco
DB_DATABASE=adonis         -> Base de dados
HASH_DRIVER=bcrypt
```
Logo após execute:
```bash
cd server
npm i -g @adonisjs/cli
yarn install
adonis migrations:refresh
adonis key:generate

adonis serve --dev
```
Para iniciar o client execute:
```bash
cd client
yarn install
```

## Licença

[MIT](./LICENSE) &copy; 
