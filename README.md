  <p align="center">
    <img src="app/src/images/logo-circular-brown.png" width=250 height=250 frameBorder="0"></img>
  </p>
# :hamburger: Hamburgueria Ipê

Acesse nossa aplicação [clicando aqui](http://hamburgueria-ipe.vercel.app/)

***

##Índice

  - [1. Introdução](#1-introdução)
  - [2. Sobre a aplicação](#2-sobre-a-aplicação)
  - [3. Histórias de usuários](#3-histórias-de-usuários)
  - [4. Funcionalidades](#4-funcionalidades)
  - [5. Processo de criação](#5-processo-de-criação)
  - [5. Ferramentas](#5-ferramentas)
  - [6. Desenvolvedoras](#6-desenvolvedoras)

***

### 1. Introdução

**[Hamburgueria Ipê](http://hamburgueria-ipe.vercel.app/)** é uma aplicação *web* escalável, desenvolvida para a gestão de uma hamburgueria com foco em *tablets* e atendendo todas as necessidades de seus usuários.

As premissas partem do desafio [Burger Queen](https://github.com/Laboratoria/SAP005-burger-queen) proposto pela Laboratória.


  <p align="center">
    <img src="https://media.giphy.com/media/xT9KVzVj01qfRPiJr2/giphy.gif" width=480 height=200 frameBorder="0"></img>
  </p>


### 2. Sobre a aplicação
A hamburgueria Ipê lançou o serviço 24h e teve um resultado muito positivo. Para manter o crescimento, precisa de uma aplicação *web* pensada para *tablets*, que permita armazenar os pedidos dos cardápios **Principal** e **Café da Manhã**, englobar todos os extras, enviar para a cozinha e informar aos atendentes quando os pedidos podem ser servidos aos clientes.

### 3. Histórias de usuários

O cliente nos forneceu as seguintes histórias de usuário:

:writing_hand: **História de usuário #1**

Eu, como funcionário da hamburgueria:

* Quero entrar na plataforma e ver apenas a tela importante para o meu trabalho

:writing_hand: **História de usuário #2**

Eu, como atendente:

* Quero poder anotar o meu pedido
* Saber o valor de cada produto
* Poder enviar o pedido para a cozinha para ser preparado

:writing_hand: **História de usuário #3**

Eu, como *chef* de cozinha:

* Quero ver os pedidos dos clientes em ordem
* Poder marcar quando os pedidos estão prontos
* Poder notificar os atendentes que o pedido está pronto para ser entregue ao cliente

:writing_hand: **História de usuário #4**

Eu, como atendente:

* Quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes


### 4. Funcionalidades
Para atender todas as necessidades dos usuários, definimos que a aplicação *web* deve ter as seguintes funcionalidades:

  ✔️   Criar login e senha
  ✔️  Registar tipo de usuário conforme área (cozinha ou salão)
  ✔️  Entrar na tela correta para cada usuário
  ✔️  Anotar o nome e mesa
  ✔️  Adicionar produtos aos pedidos
  ✔️  Excluir produtos
  ✔️  Ver resumo e o valor total da compra
  ✔️  Enviar o pedido para a cozinha (armazenar em um banco de dados)
  ✔️  Funcionar bem e se adequar a um tablet
  ✔️  Ver os pedidos à medida em que são feitos
  ✔️  Marcar os pedidos que foram preparados e estão prontos para   serem servidos
  ✔️  Ver quanto tempo levou para preparar o pedido até ser marcado como concluído

Também foi definido que os dados **devem ficar armazenados**, mesmo após a conclusão do pedido, para que o cliente possa levantar estatísticas no futuro.


## 5. Processo de criação

#### :clipboard:	Organização 

Utilizamos o método de Kanban no Trello para organizar todo o processo de desenvolvimento da aplicação.

* Definimos padronizações do código
* Divisão de tarefas
* Backlog do Produto e de cada Sprint
* Tempo para entrega de cada tarefa

#### :woman_artist: Identidade Visual

Pensando no nome **Ipê**, optamos por uma paleta de cores que usa os tons da flor Ipê de forma mais suave para tornar a visualização fácil e agradável.

![Paleta de Cores](app/src/images/readme/color-palette.png)

 #### Logo

A partir da definição da paleta de cores, criamos um logotipo adequado a interface visual da hamburgueria.

   <p align="center">
    <img src="app/src/images/logo-horizontal-brown.png"></img>
  </p>


### Wireframe inicial
Para desenvolver a interface visual da aplicação, utilizamos o Figma.

  <p align="center">
    <img src="app/src/images/readme/ipad-baixafidelidade-1.png" width='284' height='399'frameBorder="0"></img>
  </p> 
  
  <p align="center">
    <img src="app/src/images/readme/ipad-baixafidelidade-2.png" width='284' height='399' frameBorder="0"></img>
  </p>

 #### Interface Alta Fidelidade

  <p align="center">
    <img src="app/src/images/readme/ipad-altafidelidade-1.png" width='284' height='399' frameBorder="0"></img>
  </p>

   <p align="center">
    <img src="app/src/images/readme/ipad-altafidelidade-2.png" width='284' height='399' frameBorder="0"></img>
  </p>

#### Página do menu principal
Atendente executando pedido
 <p align="center">
    <img src="app/src/images/readme/menu-principal-lanches.png" width='600' height='600' frameBorder="0"></img>
  </p>
  
 <p align="center">
    <img src="app/src/images/readme/menu-principal-selecao.png" width='600' height='600' frameBorder="0"></img>
  </p>
 
  🔎 Usabilidade

 Realizamos entrevistas e testes com os usuários até chegar na melhor usabilidade da aplicação.
 Em alguns testes, identificamos que:

 ⚠️ Os atendentes precisavam que as cores dos itens mudassem ao realizar pedidos
 
 ✔️ Solução: Criamos input radios que alteram a cor após o clique

  ### 5. Ferramentas

 **Code:**
 
 <img alt="ReactJS" src="app/src/images/readme/react.png">
 <img alt="HTML5" src="app/src/images/readme/html5.png"/>
 <img alt="CSS3" src="app/src/images/readme/css3.png"> 
 <img alt="JSX" src="app/src/images/readme/js.png">
 <img alt="NodeJS" src="app/src/images/readme/nodejs.png">
 <img alt="Vercel" src="app/src/images/readme/vercel.png">

**Planejamento:**

<img alt="Trello" src="app/src/images/readme/trello.png">
<img alt="Figma" src="app/src/images/readme/figma.png">
<img alt="Canva" src="app/src/images/readme/canva.png">

 ## 6. Desenvolvedoras
 
 Hamburgueria Ipê foi orgulhosamente desenvolvido em 4 semanas,  por Akemi Mitsueda e Cris Mantovani, alunas da SAP005 do *bootcamp* da [Laboratória](https://github.com/Laboratoria).
 
 Se você ficou com alguma dúvida, tem sugestões ou quer apenas nos conhecer melhor, por favor, entre em contato :)
 
 <div align="center">
 
 | Akemi Mitsueda        | Cris Mantovani| 
| :---------------------:|:-------------:| 
| <img alt="Akemi" src="app/src/images/readme/akemi_dev.jpg" height='120px'>               | <img alt="Akemi" src="app/src/images/readme/cris_dev.png" height='120px'> | $1600 |
| <img alt="GitHub Akemi" src="app/src/images/readme/github_badge.png"> <img alt="LinkedIn Akemi" src="app/src/images/readme/linkedin_badge.png">             |  <img alt="GitHub Akemi" src="app/src/images/readme/github_badge.png"> <img alt="LinkedIn Akemi" src="app/src/images/readme/linkedin_badge.png">      |

</div>


 [Caroline Akemi Mitsueda](https://github.com/akemimeka)

 [Cristina Mantovani](https://github.com/crismantovani)
