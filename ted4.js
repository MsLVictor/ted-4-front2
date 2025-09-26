//Crie um array com 5 nomes e exiba o terceiro nome no console.

let nomes = ['Teresa', 'Ana', 'Julia', 'Jessica', 'Thais'];

console.log(nomes[2]);

//  • Adicione um nome ao final e um no início do array. • 
nomes.push('Victor');
nomes.unshift('Stefania');

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log("--------------------");

// Remova o último nome e exiba o array atualizado. 
nomes.pop();

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log("--------------------");

// • Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
let numeros = [2, 4, 6, 8];

let numerosDobrados = numeros.map(function(numeros) {
    return numeros * 2;
});

console.log(numerosDobrados);
//  • Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]

console.log("--------------------");

let numeros2 = [1,3,5,7,9];

let filtrados = numeros2.filter((valor, indice, array) => {
    console.log(`valor: ${valor}, Índice: ${indice}, Array: [${array}]`);
    return valor > 5;
});

console.log(filtrados);