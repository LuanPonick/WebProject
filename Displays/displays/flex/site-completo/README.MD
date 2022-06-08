# _Display : Flex;_

### _O organizador_.

___

## _Usando._

A sua usabilidade é bem simples de ser entendida, essa propriedade(" display:flex ") deve ser usada no **objeto pai** para que os objetos filhos possam ser organizados de uma forma satisfatória. 

___

## _Disposição vertical e horizontal._

No momento em que os objetos filhos são postos no objeto pai tipo assim

```html
<div class="father">
     <div class="child">Hello</div>
     <div class="child">Hi</div>
     <div class="child">:3</div>
     <div class="child">SZ</div>
</div>
```

E você for ver os objetos estarão em uma disposição assim:

````css
Hello

Hi

:3

sz 

````



até mesmo se o objeto pai possua uma largura e altura determinada. E caso você coloque a propriedade de "display:flex" para o objeto pai ele fara o com que os objetos ao invés de se posicionarem na horizontal eles fiquem todos dispostos a vertical, assim:

````
Hello hi :3 sz
````

isso ocorre devido que a propriedade flex permite que você use uma propriedade denominada de "Flex-direction" e por padrão essa propriedade vem aposta como "Flex-direction:row" (row=en, fileira=pt-br), ou seja por padrão ele sempre ficara como fileira, e caso você queria alterar esse valor para que volte a ficar quebrando em linha é só usar o "colum" no lugar do row.

___

## Order:-122;

*__Eu escolho a ordem!!! __*:rage:

O "Order:0" é uma propriedade para ser colocadas nas chields do objeto father que recebeu a propriedade flex, o order serve para forçar uma organização via css por exemplo:

````html
<div class="father" style="display:flex;">
     <div class="child" style="order:2">Hello</div>
     <div class="child" style="order:3">Hi</div>
     <div class="child" style="order:4">:3</div>
     <div class="child" style="order:1">SZ</div>
</div>
````

fazendo isso eu estou mudando a posição dos meu chields sem a necessidade de eu mexer no meu html.

_Como fica o resultado :_

````html
SZ Hello Hi :3 
<!--Lembre se, Com o display flex por padrão os elemntos filhos irão se comportar colocando se para a horizontal-->
````

*__Obs1:__*O número do "order" não precisa seguir uma sequencia indo do 0 para cima, ou seja pode se usar números negativos.

*__Obs2:__*No caso de essa propriedade ser usada ("order") todos os elementos por padrão é "0"

___

## _flex-wrap:wrap_

Antes de explicar o que é o wrap em si você precisa entender um conceito do "flex", você faça um código onde os elementos do pai são maiores que o pai por exemplo: caso você coloque um pai e dentro desse pai ele tem 4 filhos e esses 4 filhos ganham um width de 50% os objetos filhos não receberam 50% da largura do pai e sim 25% cada um, por que? isso ocorre devido a que os objetos que estão dentro de um objeto flex não conseguem ser maiores que o objeto pai, porem caso você queria que isso ocorra basta usar no objeto pai "flex-wrap:wrap;".



___

## _Alinhamento dos conteúdos vertical e horizontal._

para se fazer um alinhamento tanto vertical quanto horizontal primariamente você precisa que o objeto pai tenha um tamanho e altura já definidos. E para fazer um alinhamento **horizontal** você usa **justfy-content : center** 

//quer entender mais sobre o justfy-content? veja mais sobre nesse repositorio!!! (#)[fazendo...] 

e caso você queria fazer um alinhamento **vertical** você devera usar o **aling-itens : center**

//quer entender mais sobre o justfy-content? veja mais sobre nesse repositorio!!! (#)[fazendo...] 

___

## _Configurando os espaços das linhas_

_Recomendo a visualização do index.html dessa pasta._

Caso tenha um bloco acima do outro você pode usar a propriedade __Space-around__ com essa propriedade você consegue alterar o espaçamento de um conteúdo para o outro.

___

## _Configuração de tamanho sem witdh_

essa propriedade é para ser usada nos conteúdos/filhos, __Flex-grow__.







