># Estudos relacionados a funçoes JS <br>
>># _Fontes_
>><strong> [Funções de Array JavaScript - dpw](https://www.youtube.com/watch?v=o8fdyYZDKA0&list=PLYgzkrmJnLwo-pTURSTti_ljhjWB9BF7-&ab_channel=dpw) </strong>
>>
>>---
>
>># ._Map()_
>>O map tem a função de executar uma determinada função em todos os calores do array seguindo essa sintaxe : 
>>~~~JavaScript
>>arrayname.map( funcition( elem){
>>  return elem * 2;
>>});
>>~~~
>>_Importante resaltar que ela não altera o vetor mas sim gera um novo_. 
>>## Criação de função separado
>>sepode criar uma função por fora sem a necissadade de criar dentro do map <br>
>>### EX :
>>~~~JavaScript
>>function calcs(num){
>>    return num * 2;
>>}
>>
>>const numbers = [12, 43, 56, 75];
>>const numbers2x = numbers.map(calcs)
>>~~~
>>## Arrow function
>>Se pode criar com um metodo super simplificado e menor 
>>~~~JavaScript
>>const vals = [12,43,65,87,654]
>>const doble = vals.map(resultados => resultados * 2);
>>~~~
>>
>>---
>
>># Filter
>> serve para remover itens indesejados 
>---