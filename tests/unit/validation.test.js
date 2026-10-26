//Inporta a função 'notmalizeTitle'
const {normalizeTitle} = require('../../src/validation');

// Agrupa um blovo de testes relaionado para manter
// a organização
describe('Validação de tarefas', () => {

    test('Remove espaços do início e do fim do título',
    () => {
        expect(normalizeTitle(' Teste Unitário ')).toBe('Teste Unitário');
    });

    test('Retorna string vazia se o título não for uma string', () => {
        expect(normalizeTitle(15487)).toBe('');
        });

        //Casos de teste 1: entrega nula
        //Casos de teste 2: entrenga indefinida
        test('Retorna string vazia se o título for nulo ou indefinido', () => {
            expect(normalizeTitle(null)).toBe('');
        });
        
        test('Retorna string vazia se o título for undefined', () => {
            expect(normalizeTitle(undefined)).toBe('');
        });
});
