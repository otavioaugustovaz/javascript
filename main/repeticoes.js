var calculadora = prompt('Digite um numero:');
            calculadora = parseFloat(calculadora);

            var indice = 1;
            while(indice <=100){

            
            document.write(calculadora + ' x ' + indice +' = ' + (calculadora * indice)
            +' <br>');

            indice = indice + 1;
            }
           document.write('Saiu do loop!');