//REFERENTE A AULA 14-Laço/Loop for
for (let i = 0; i < 12; i++) {
    if(i % 2 !== 0) { //modulus
        console.log(i);
    }
}

for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo JS');
}

for (let i = 0; i < 4; i++) {
    console.log('Estou no JS!');
}




for (u = 0; u < 2; u++){
    console.log('Estou estudando pela Udemy!')
}




for (let horario = 0; horario < 10; horario++){
    console.log('Estamos no estudo do Java Script!')
}



for (let chamadosFila = 0; chamadosFila < 8; chamadosFila++){
    console.log('Atenção Pedro você é o proximo da fila!')
}



for (let provaCorrecao = 0; provaCorrecao < 5; provaCorrecao++){
    console.log('Você passou de ano, meus parabéns!')
}



var calculadora = prompt('Digite um numero:');
    calculadora = parseFloat(calculadora);

    var indice = 1;
    while(indice <=100){

    
    document.write(calculadora + ' x ' + indice +' = ' + (calculadora * indice)
    +' <br>');

    if(indice % 10 === 0 && indice > 0){
        document.write('<hr>');
    }
    indice = indice + 1;
    }
    document.write('Saiu do loop!');



var salarioMultiplica = prompt('Digite seu salário:');
salarioMultiplica = parseFloat(salarioMultiplica);

var valor = 1;
while(valor <=100){

document.write(salarioMultiplica + ' x ' + valor + ' = ' + (salarioMultiplica) + ' <br> ');

valor = valor + 1;
}
document.write('Saiu do calculo!');





var ano = 2002;
while(ano <= 2050){
    document.write(ano + '<br>');
    ano += 4;
}