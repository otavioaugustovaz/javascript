    //REFERENTE A AULA 14-Switch Case
    let permissao;
    permissao = 'diretor';

    switch (permissao){
    case 'comum' : 
    console.log('Usuário comum');
    break;

    case 'gerente' :
    console.log('Usuário gerente');
    break;

    case 'diretor' :
    console.log('Usuário diretor');
    break;

    defaut:
    console.log('Usuário não reconhecido')
    }


    let resultadoProva;
    resultadoProva = 'Graduação';

    switch(resultadoProva){
    case 'Fundamental':
    console.log('aluno ensino fundamental!');
    break;

    case 'Medio' :
    console.log('Ensino Medio!');
    break;

    case 'Graduação':
    console.log('Aluno universitário iniciando nos estudos!');
    break;

    default:
    console.log('Usuáŕio não encontrado');

    }


    let resultadoAno;
    resultadoProva = 9;

    switch(resultadoProva){
    case 4:
    console.log('Reprovado');

    case 3:
    console.log(Reprovado);

    case 8:
    console.log('Aprovado');

    default:
    console.log('Não encontramos sua nota no sistema.');
    } 

    var digiteNumero = prompt('Digite um numero de 1 a 6')
    digiteNumero = parseInt(digiteNumero);

    switch(digiteNumero){
    case 1:
    alert('Reprovado');
    break;

    case 2:
    alert('Reprovado');
    break;

    case 3:
    alert('Reprovado');
    break;

    case 4:
    alert('Reprovado');
    break;

    case 5:
    alert('Media');
    break;

    case 6:
    alert('Aprovado');
    break;

    default: 
    alert('Não deu!');

    }
      

    let financiaCasa = prompt('Digite o valor da entrada');
    financiaCasa = parseFloat(financiaCasa);

    switch (financiaCasa){
        case 500:
        alert('Crédito reprovado!')
        break;

        case 900:
        alert('Crédito insuficiente!');
        break

        case 1000:
        alert('Financiamento aprovado pelo banco!');
        break

        defaut:
        alert('Cadastro não encontrado!');
    }

