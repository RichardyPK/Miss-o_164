# UC10 - Realizar Testes nas Aplicações Desenvolvidas
## Richardy de Oliveira Coutinho

## Descrição e funcinalidades

- Aplicação de controle de tarefas.
- Cadastrar tarefas: INSERT -> CREATE
- Consultar/lista tarefas: SELECT -> READ
- Atualiza tarefas: UPDATE -> UPDATE
- Excluir tarefas: DELETE -> DELETE

## Tecnologias 

| Tecnologia | Função |
| ---------- | ------ |
| HTML | Estrutura/esqueleto da página web |
| CSS | Estilização/design da página |
| JavaScript | Interatividade/comportamento |
| Node.js | Ambiente de execução que permite executar os JS no Servidor |
| Jest | Framework de testes automatizados |
| SQLite | Banco de dados relacional |
| Express | Framework back-end que recebe requisições do front-end |
| Supertest | Ferramenta que simula requisições HTTP para testar a sua API | 

# Testes

## Testes Unitários

| Caso de teste | Entrada | Saída esperada |
| ------------- | ------- | -------------- |
| 1 | `{ title: "  Estudar JS  ", description: "  Revisar funções  " }` | `{ valid: true, data: { title: "Estudar JS", description: "Revisar funções" } }` |
| 2 | `{ title: "   " }` (também `null`, `432432`, `undefined`) | Lança erro: `"O título da tarefa é obrigatório."` |
| 3 | `{ title: "a".repeat(121) }` | Lança erro: `"O título deve ter no máximo 120 caracteres."` |