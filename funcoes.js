//-FUNÇÕES OBS: SEMPRE SEGUIDO DE UM VERBO + SUBSTANTIVO
 
let dadosPessoais = 'otavio';
 function resetaDados(nome, idade, altura, profissao){

    dadosPessoais = nome + idade + altura + profissao;
 }

 console.log(dadosPessoais);
 resetaDados('otavio augusto', ' 21', ' 1.80', ' programador');
 console.log(dadosPessoais);


let infOtavio = 'Programador';
function trocaDados (profissao, idade, tempo){
    infOtavio = profissao + idade + tempo;
}

console.log(infOtavio);
trocaDados('Programador Junior ', '20 Anos ', 'e 1 ano de profissão!')
console.log(infOtavio);

//-TIPOS DE FUNÇÕES
//Realiza uma tarefa e não devolve nada...

function dizerNome(){
    console.log('otavio augusto')
};
dizerNome();

function multiplicarPorCinco(valor){
    return valor* 5
};

let resultado = multiplicarPorCinco(6);

console.log(resultado);




  