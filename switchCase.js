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
