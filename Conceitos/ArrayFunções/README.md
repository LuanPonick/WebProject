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
>># _Filter()_
>> serve para remover itens com determinadas condições sintaxe
>> ~~~JavaScript
>> nomearray.filter((arraynametemp) => arraynametemp == X)
>> ~~~
>>A ideia base é basicamente essa. A **ULTIMA** variavel criada no filter(nesse caso o _arraynametemp_ ) ele é o array _nomearray_.
>>
>
>># _Reduce()_
>>Ele tem uma ideia de reduzir a quantidade de valores de um array para apenas um valor
>>### _sintaxe_ :
>>~~~JavaScript
>>const reduced = arrayname.reduce((tempVall,arraySoma)=> tempVall + arraySoma,0) 
>>~~~
>>O tempVall simboliza a propria soma e o arraySoma o array que esta sendo "organizado" e o zero esta dizendo em que valor o calculo vai começar por exemplo na primara vez que ele chega ele chega valendo 0 porem caso seje colocado 10 a conta ira comçar com 10 e não com 0.
>>### List
>>~~~JavaScript
>>const nomesValores = [
>>  {nome: "Luan", idade: 20},
>>  {nome: "Luan", idade: 20},
>>  {nome: "Luan", idade: 20},
>>  {nome: "Luan", idade: 20},
>>];
>>const idadesSomada = nomesValores.reduce((numero,valores)=> numero + valores.idade, 0);
>>~~~
>>Unica diferença real é que no valores (que é o array/list nesse caso) eu tive que falar qual seria o atributo que eu quero usar e nao so colocar ela.
>>
>
>># Every()
>>Serve para quando deseja saber se um array respeita uma determinada regra/calculo retornando um valor boleano.
>>### Ex
>>~~~JavaScript
>>const array = [1, 3, 5, 7, 9];
>>var teste = array.every((valls)=> valls % 2 == 1);
>>// teste == true
>>~~~
>>
>
>># Some()
>>Serve para quando se quer testar se pelomenos um valor do array tem um valor determinado valor.
>>### Ex
>>~~~JavaScript
>>const array = [1, 3, 5, 7, 9];
>>var teste = array.some((valls)=> valls == 1);
>>// teste == true
>>~~~
>>
>>
>>---
>---