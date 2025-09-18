// Complete a função que verifica se um número é par ou ímpar
let numero = 3

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Teste a função
console.log(verificarParImpar(8));  // deve retornar "par"
console.log(verificarParImpar(7));  // deve retornar "ímpar"