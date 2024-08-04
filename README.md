# Cypress Trello Automation

Este projeto contém testes automatizados utilizando Cypress para a API do Trello. O objetivo é validar funcionalidades chave como criação e exclusão de boards e cards. 

# Cypress Trello Automation

## Índice
1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
3. [Configuração](#configuração)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Executando os Testes](#executando-os-testes)
6. [Descrição dos Testes](#descrição-dos-testes)
7. [Estratégia de Testes](#estratégia-de-testes)
8. [Publicação](#publicação)
9. [Contribuição](#contribuição)
10. [Licença](#licença)

## Pré-requisitos
- Node.js
- NPM ou Yarn
- Cypress

## Instalação
1. Clone o repositório:
    ```bash
    git clone <URL-do-repositório>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd cypress-trello-automation
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

## Configuração
- Configure as credenciais e URL do Trello no arquivo `cypress.json`.

## Estrutura do Projeto
- `cypress/fixtures/`: Arquivos de dados usados nos testes.
- `cypress/integration/trello/`: Especificações dos testes para o Trello.
    - `createBoard.spec.js`: Teste para criar um quadro.
    - `createCard.spec.js`: Teste para criar um cartão.
    - `deleteBoard.spec.js`: Teste para deletar um quadro.
    - `deleteCard.spec.js`: Teste para deletar um cartão.
- `cypress/plugins/`: Plugins do Cypress.
- `cypress/support/`: Comandos e configurações de suporte.

## Executando os Testes
Para executar os testes, use o seguinte comando:
```bash
npx cypress open
```
