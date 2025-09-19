
{
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log("Posição: " + i + numeros[i]);
}

}



{
    let frutas = ["maçã", "banana", "laranja"];

    for (let fruta of frutas){
        console.log(fruta);
    }

    frutas.forEach(fruta => console.log("Fruta: ", fruta));
}

{
    let numeros_2 = [5, 3, 8, 1, 4];
    numeros_2.push(10);
    console.log(numeros_2);
}

{
    let numeros_3 = [5, 3, 8, 1, 4];
    numeros_3.pop();
    console.log(numeros_3);
}

console.log("--------------------------------------")

{
    let nomes = ["Ana", "Bruno", "Carlos"];

    nomes.unshift("Daniela");
    console.log(nomes);
}

{
    let carros = ["Ford", "Chevrolet", "Toyota"]

    carros.shift();
    console.log(carros);

    console.log(carros.indexOf("Toyota"));
}

{
    let cores = ["vermelho", "verde", "azul"];
    console.log(cores.includes("verde"));
    console.log(cores.includes("amarelo"));
}

{
    let frutas = ["maçã", "banana", "laranja"];
    console.log(frutas.slice(1, 3)); //["maçã", "banana"]

    let palavra = "Javascript"
    console.log(palavra.slice(0, 4));
}

{
    let nome = "Théo";
    //deixa minusculo e maiusculo
    console.log(nome.toLocaleLowerCase())
    console.log(nome.toLocaleUpperCase())
}
