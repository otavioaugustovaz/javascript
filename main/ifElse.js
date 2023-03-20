//TROCANDO VALOR(IF ELSE)
let horaTreinar = 20;

if (horaTreinar > 06 && horaTreinar < 12){
    console.log('Bom dia vamos treinar!');
}
else if(horaTreinar > 12 && horaTreinar < 18){
    console.log('Boa tarde vamos treinar!');
}
else{
    console.log('Boa noite vamos treinar!');
}



let horaTrabalhar = 20;

if (horaTrabalhar > 06 && horaTrabalhar < 12){
    console.log('Bom dia o trabalho se inicia!');
}
else if (horaTrabalhar > 12 && horaTrabalhar < 18){
    console.log('Boa tarde o trabalho já está encerrando!');
} else{
    console.log('Hora de ir para a casa!');
}



let periodoDiario = 07;

if (periodoDiario > 06 && periodoDiario < 12){
    console.log('Estamos no periodo da manhã!')
}
else if (periodoDiario > 12 && periodoDiario < 18){
    console.log('Estamos no periodo da tarde!')
}else{
    console.log('Estamos no periodo da noite!')
}


let financiaCarro = 6.000;
if (financiaCarro > 8.500 && financiaCarro < 15.000){
    console.log('Está Aprovado o Carro para o financiamento!')
} 
else if (financiaCarro > 5.000 && financiaCarro > 8.000){
    console.log('Carro não aprovado para o financiamento!');
}
else{
    console.log('Não encontramos seu crédito, tente novamente!')
}




let financiaCasa = 10;
if (financiaCasa > 06 && financiaCasa < 12){
    console.log('Está Aprovado sua casa!')
}
else if(financiaCasa > 01 && financiaCasa < 05){
    console.log('Infelizmente não conseguimos financia seu crédito!')
}
else{
    console.log('Não encontramos seu cadastro em nosso sistema!');
}