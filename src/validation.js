/* validation.js — validação dos dados
Verifica se o título foi informado, remove espaços desnecessários e impede títulos com mais de 120 caracteres. Evita que dados inválidos sejam enviados para o banco. */

// Se o título for uma string, remove os espaços em branco
// Validação dos dados tarefas
function normalizeTitle(title) {
  return typeof title === 'string' ? title.trim() : '';
}
 // Validação dos dados da tarefa
function validateTaskInput(input) {
 // E1:"seguunda-feira"
 // E2:("terça-feira") = "terça-feira"
 // E3: null = ""
 // E4: 432432 = ""
 // E5: undefined = ""
  const title = normalizeTitle(input?.title);
// Se o titulo estiver vazio, avisa que o titulo e obrigado
  if (!title) {
    throw new Error('O título da tarefa é obrigatório.');
  }
// Se o titulo tiver mais de 120 caracteres tambem gera um erro
  if (title.length > 120) {
    throw new Error('O título deve ter no máximo 120 caracteres.');
  }
 // Se a descrição for uma 

  const description = typeof input?.description === 'string'
    ? input.description.trim() : '';

  return { valid: true, data: { title, description } };
}

// Exporta as duas funções para que elas possam ser usadas em outros arquivos do seu projeto Node.js
module.exports = { normalizeTitle, validateTaskInput };
