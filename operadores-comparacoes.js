let a = 5;
let b = "5";


/*

"=" Verifica somente o tipo da variável
"==" Verifica somente o conteúdo
"===" Verifica o conteúdo e o tipo da variável

Mema coisa vale pra os tipos dediferentes ( !=, !== )

*/

if (a = b){
    console.log("true");
} else {
    console.log("false");
}

if (a == b){
    console.log("true");
} else {
    console.log("false");
}

if (a === b){
    console.log("true");
} else {
    console.log("false");
}

if (a != b){
    console.log("true");
} else {
    console.log("false");
}

if (a !== b){
    console.log("true");
} else {
    console.log("false");
}