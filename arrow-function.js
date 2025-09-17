// função tradicional
function soma(a, b) {
    return a + b ;
}

//arrow function
const somaArrow = (a, b) => a + b;

let result = soma(3, 4);

console.log("Function arro: " + somaArrow(3, 4)); // 7

console.log(`Resultado de função tradicional: ${result}`); // 7

function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(5))

const ehParArrow = numero => numero % 2 === 0;

console.log(ehParArrow(6))


function tabuada(numero){
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

result = tabuada(3)

const tabuadaArrow = numero => {
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


console.log("----------------------------------")


function calculadora(n1, n2, operacao){
    switch(operacao){
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero!";
        default: "Operação inválida"
    }
}

