//-COMPARAÇÕES NÃO BOLEANOS
let financiaCarro = '';
let valorFinanciado = '20.000';
let aprovacaoBanco = financiaCarro || valorFinanciado;
console.log(aprovacaoBanco);

let notaAprovada = 5;
let notaReprovada = 4;
let resultadoProva = notaAprovada && notaReprovada;
console.log(resultadoProva);

let recebimentoCheque = 100;
let recebimentoPix = 50;
let somaValores = recebimentoCheque && recebimentoPix;
console.log(somaValores);