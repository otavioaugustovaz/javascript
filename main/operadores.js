//-OPERADORES de Atribuição
let valorComputador = 2500;
valorComputador += valorComputador;
console.log(valorComputador);




//-OPERADORS de igualdade
console.log( 1 === 1);
console.log('1' === 1);
console.log(1 == '1');
console.log(1 == 'otavio');
//USAR SEMPRE A COMPARAÇÃO COM === E NÃO COM ==




//-OPERADORES ternário
let dinheiro = 1000;
let tipo = dinheiro > 500 ? 'Caro' : 'Barato';
console.log(tipo);


let dinheiroIngresso = 200;
let valor = dinheiroIngresso > 300 ? 'Barato' : 'Caro';
console.log(valor);



//-OPERADORES Lógicos
// operador && 
let dinheiroCarro = true;
let dinheiroCasa = true;
validar = dinheiroCarro && dinheiroCasa;
console.log(validar);


//operador ou(||) se um só for true ele retorna true
let financiaCarro = true;
let entradaCarro = false;
let liberaFinanciamento = financiaCarro || entradaCarro;
console.log(liberaFinanciamento);


var nota1 = prompt('Digite um número');
nota1 = parseFloat(nota1);

var nota2 = parseFloat(prompt('Digite outro número'));

var media = (nota1 + nota2) / 2;

alert(media > 5);

if(media > 5){
    alert('Parabéns! Você foi aprovado');
} else {
    alert('Desculpe, mas não foi dessa vez');
}


var valor1 = prompt('Digite um valor:');
var valor2 = prompt('Digite outro valor');
valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

var mediaValor = ( valor1 + valor2);
alert(media > 6);

if(media > 6){
    alert('Parabéns você foi aprovado!');
} else {
    alert('Não foi dessa vez!');
}

