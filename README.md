#Desafio-stefanini
<div align="center">  

<h1> Serverless Challenge </h1>

![Node.js](https://img.shields.io/badge/-Node.js-1e272e?style=for-the-badge&logo=node.js)&nbsp;
![Nestjs](https://img.shields.io/badge/-Nestjs-1e272e?style=for-the-badge&logo=nestjs)&nbsp;
![Typescript](https://img.shields.io/badge/-Typescript-1e272e?style=for-the-badge&logo=typescript)&nbsp;
![Angular](https://img.shields.io/badge/-Angular-1e272e?style=for-the-badge&logo=angular)&nbsp;
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-1e272e?style=for-the-badge&logo=postgresql)&nbsp;
</div>

<h1> Descrição: </h1>
<p>
O desafio se propõe construir uma aplicação onde se deve ter uma API, um banco de dados relacional ou não e um frontend consumindo os dados dessa API. 
Toda a aplicação deverá ser provida em uma estrutura Lambda na AWS.
</p>



<h1> Desenvolvimento: </h1>
<p>

- <b>Backend:</b> A aplicação foi iniciada pelo backend. Para isso, foi desenvolvida uma API em Node.js utilizando NestJS como framework, pois o mesmo já vem com Typescript e Jest e para também suprir a necessidade do tempo de desenvenvolvimento e uma organização melhor da arquitetura. 

- <b>Banco de Dados:</b> Como Banco de Dados foi escolhido o PostgresSQL por ser um banco de dados Relacional simples.

- <b>Obs:</b> A solução foi toda provida em containeres e foi construida utilizando Docker. Assim, conseguimos isolar as aplicações e orquestrar o seu funcionamento.

- <b>Desenvolvimento:</b> O metodo de desenvolvimento escolhido foi o TDD, primeiro construimos um teste inicial que deverá falhar, depois desenvolvemos a solução e testamos novamente. Ser o teste secundário passar, damos a tarefa como feita. Se falhar, reescrevemos a nossa solução até que atenda os requisitos do teste.
Inicialmente construímos a entidade, o Repository e as migrations, e a partir daí damos prosseguimento a construir as rotas de acesso, o controller e o service.

- <b>Front-end:</b> O front-end da aplicação foi construida em Angular, pois era uma necessidade do projeto. O Angular por sua vez também já vem com o Typescript embutido.
</p>


<h1> Considerações: </h1>
<p>
Devido a alguns problemas onde ouve uma grande concentração de tempo e dedicação para poder solucioná-los, a aplicação ainda não está finalizada, tendo em vista o tempo que o desafio foi proposto.
</p>

<h1> Utilizando o projeto: </h1>
<p>
A solução foi construida utilizando containeres. Para isso, é necessário que tenha instalado o Docker.
Para plataformas Linux e MacOS ele já vem instalado.
Para Windows, há necessidade de instalar o WSL e o o Docker Desktop.
</p>

<h3> Baixe o projeto para a sua máquina </h3>

```sh
git clone https://github.com/clevernvs/serverless-challenge.git
```

<h3> Sua a aplicação com os seguintes comandos </h3>

```sh
docker-compose build

docker-compose up -d
```