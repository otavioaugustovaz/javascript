//-COMPARAÇÕES NÃO BOLEANOS
let corInicio = '';
let corSegunda = 'azul';
let corpadrao = corInicio || corSegunda;
console.log(corpadrao);



//-TROCANDO VALOR(MINI PROJETO)
let corPrincipal = 'azul';
let corSecundaria = 'preto';
let corPadrao = corPrincipal;
corPrincipal= corSecundaria;
corSecundaria = corPadrao;
console.log(corPrincipal);
console.log(corSecundaria);

let nomePrimeiro = '';
let nomeSegundo = 'Augusto';
let comparacao = nomePrimeiro || nomeSegundo;
console.log(comparacao);

