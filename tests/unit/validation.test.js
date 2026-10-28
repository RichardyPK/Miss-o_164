// Importa as funções 'normalizeTitle' e 'validateTaskInput'
const { normalizeTitle, validateTaskInput } = require('../../src/validation');

// Agrupa um bloco de testes relacionados para manter
// a organização
describe('Validação de tarefas', () => {

  test('Remove espaços do início e do fim do título', () => {
    expect(normalizeTitle(' Teste Unitário ')).toBe('Teste Unitário');
  });

  test('Retorna string vazia se o título não for uma string', () => {
    expect(normalizeTitle(15487)).toBe('');
  });

  // Casos de teste: entrada nula
  // Casos de teste: entrada indefinida
  test('Retorna string vazia se o título for nulo', () => {
    expect(normalizeTitle(null)).toBe('');
  });

  test('Retorna string vazia se o título for undefined', () => {
    expect(normalizeTitle(undefined)).toBe('');
  });

  // Caso de teste 1: dados válidos
  test('Aceita dados válidos e remove espaços extras', () => {
    const input = { title: '  Estudar JS  ', description: '  Revisar funções  ' };

    expect(validateTaskInput(input)).toEqual({
      valid: true,
      data: { title: 'Estudar JS', description: 'Revisar funções' },
    });
  });

  // Caso de teste 2: título obrigatório
  test.each([
    ['vazio', { title: '' }],
    ['só espaços', { title: '   ' }],
    ['null', { title: null }],
    ['número', { title: 432432 }],
    ['undefined', { title: undefined }],
  ])('Lança erro se o título for %s', (_nome, input) => {
    expect(() => validateTaskInput(input)).toThrow('O título da tarefa é obrigatório.');
  });

  // Caso de teste 3: limite de 120 caracteres
  test('Lança erro se o título tiver mais de 120 caracteres', () => {
    const input = { title: 'a'.repeat(121) };

    expect(() => validateTaskInput(input)).toThrow(
      'O título deve ter no máximo 120 caracteres.'
    );
  });
});

// 