Grupo:

Nome: Caio Alves Caldeira            | Matrícula: 2017068734  
Nome: Gustavo Dias de Oliveira       | Matrícula: 2018054915  
Nome: Roberto Gomes Rosmaninho Neto  | Matrícula: 2018054940  
Nome: Paulo Henrique Maciel Fraga    | Matrícula: 2018054451  

Tema: Adoção de Animais

Requisitos Funcionais:
* Cadastro e Login de Organizações
* Cadastro e Login de Adotantes
* Cadastro de Animais
* Envio de formulário para solicitar adoção

Requisitos Não Funcionais:
* Responsabilidade
* Visualização da descrição de animais e suas fotos
* Visualização de Animais em Grid
* Perfil dos Animais ligados às organizações

Tecnologias:
* Docker
* React
* SQL
* Python
* minIO
* Github Actions
* Trello

Backend:
* Python (Flarks)

Frontend:
* ReactJS
* Python*

Banco:
* Relacional SQLite
* minIO

Organização:
* Trello

Backlog do Produto:
* Permitir que os clientes possam requisitar a adoção em um clique com suas informações de cadastro sendo enviadas diretamente para a organização.
* Enviar notificação quando a requisição de adoção do cliente for pré-aprovada.
* Criar fórum para discussão sobre adoção
* Criar aplicativo para iOS/Android
* Permitir conversas via chat entre organizações e clientes


Backlog da Sprint:  
* Criar Banco de Dados  [Paulo Fraga]
  - Definir a base do modelo relacional;
  - Criar as Organizações;
  - Criar os Animais;
  - Criar as Pessoas.

* Cadastrar, alterar e deletar animais com o usuário de organização: [ Paulo Fraga, Caio Caldeira]
  - Criar função de  cadastro, update, busca de animal no BD;
  - Criar função de remoção do animal no BD;
  - Criar relação do banco de dados com o backend.

* Cadastrar e logar organizações que podem expor os animais para adoção:  [ Paulo Fraga, Caio Caldeira]
  - Criar função de cadastro, update e busca de organização;
  - Permitir que uma organização crie um animal, edite e delete um animal no BD;
  - Permitir que uma organização consulte seus animais.

* Cadastrar e logar pessoas interessadas em adotar um animal:  [ Paulo Fraga, Caio Caldeira] 
  - Criar formulário de demonstração de interesse;
  - Criar função de cadastro, update, busca de pessoas no BD;
  - Criar função de login de pessoas;
  - Permitir que uma pessoa consulte os animais do banco de dados;
  - Permitir que uma pessoa demonstre interesse nos animais.

* Restringir o acesso às páginas para usuários autenticados:
  - Autenticação Básica Inicial;
  - Apenas pessoas e organizações podem alterar seus próprios dados;
  - Apenas organizações podem cadastrar animais;
  - Apenas organizações que cadastraram os animais podem alterar seus dados;
  - Apenas pessoas podem demonstrar interesse em animais.

* Ter visualização web e mobile: [Gustavo Oliveira]
  - Criar página de cadastro de organização, pessoas e animais;
  - Criar página de administração da organização;
  - Criar página de administração de pessoa;
  - Criar página de login de organização e pessoas;
  - Permitir visualização dos animais cadastrados;
  - Criar página de demonstração de interesse em animais cadastrados;

* Criar ambiente de execução do projeto no Docker [Roberto Rosmaninho]
  - Criar Dockerfile;
  - Integrar com GitHub Actions;
  - Cadastrar a imagem no DockerHub.

* Criar um ambiente de Testes inicial [Roberto Rosmaninho]
  - Criar Testes unitários;
  - Integrar testes com GitHub Actions.


