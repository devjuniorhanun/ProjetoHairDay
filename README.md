<p align="center">
Projeto de Hair Day - Sistema de Agendamento.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="Preview do projeto desenvolvido." src="./src/img/preview.png" width="100%">
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript

## Projeto

Nesse projeto foi desenvolvido um Sistema de de Agendamento de um Salão, Usando Html, Css e JavaScrpt

Projeto [Figma](https://www.figma.com/community/file/1360316357733167308/plataforma-de-agendamento)

## Instalação
Primeiramente clonar o projeto.
```
git clone https://github.com/devjuniorhanun/ProjetoHairDay.git nomeProjeto
```

Para rodar o Sistema Primeiro deve subir o Container
```
cd nomeProjeto
docker compose up -d
```
Para Entra no Container
```
docker compose exec nomeContainer bash
```

Instalar as Dependencias do NodeJs
```
npm i
```
Para Subir a Api do Servidor
```
npm run server
```
Para Subir o sistema de Agendamento
```
npm run build
npm run dev
```
Endereço do Sistema
```
http://localhost:3000
```

## Licença
Sistema open-source licenciado em [GNU GENERAL PUBLIC LICENSE](https://fsf.org/).