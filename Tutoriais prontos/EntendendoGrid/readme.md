# Entendendo a como usar o grid
Esse estudo esta sendo feito acompanhando o video da [Rocketseat](https://www.youtube.com/watch?v=HN1UjzRSdBk&ab_channel=Rocketseat)
---  
## O que é um grid
O grid é um elemento css que serve para "fatiar" o site e com isso pode se montar sites mais dinamicos de forma mais simples usando ele [Como nesse exemplo](https://miro.medium.com/max/880/1*L-udJojk8cUUCXMyKB1IKQ.png)
---
Como se pode ver um elemento grid, diferente de um elemento flex box, trabalha com duas dimensoes que seriam __linha__ e __coluna__
e enquanto o grid trabalha com apenas uma dimenção sendo coluna ou linha
---
## Usando ele na pratica 
Alguns dos principais codigos para configurar seu __CONTAINER__(o container nesse contexto é o lugar onde ficara o seu grid)
```
*display-grid           //Isso dira que é um grid
*grid-template-coluns   //Isso dira a quantidade de colunas que havera
*grid-template-rows     //Isso dira a quantidade de linhas que havera
*gap                    //Isso dira a distancia de cada selula no grid e esse comando sendo um "ShortHand"
    *row-gap            //Isso dira a distancia de cada selula da linha
    *column-gap         //Isso dira a distancia de cada selula da coluna
*grid-template-areas    //Isso ira delimitar areas do grid
```

E mais 4 outras propriedades de **alinhamento**...
OBS01:Diante a constante atualização da linguagem css a propriedade grid-gap __NÃO EXISTE MAIS__ porem, foi substituida/simplificada para apenas gap:;
---
Agora a configuração do conteudo ,ites ou Selulas 
```
*grid-column            //Isso é uma shortHand dos codigos abaixo
    *grid-column-start  //Isso diz em que coluna a selula vai começar
    *grid-column-end    //Isso diz em que coluna a selula vai terminar
*grid-row               //Isso é uma shortHand dos codigos abaixo 
    *grid-row-start     //Isso diz em que linha a selula vai começar    
    *grid-row-end       //Isso diz em que linha a selula vai terminar
*grid-area              //Isso ira delimita a area da selula
```
E mais 2 outrs propriedades de **Alinhamento**...
---
# Para ficar mais simples a comprienção, veja o index1.html dessa pagina!!!
---
## Passos
### Primeiro crie seus objetos
A primeira coisa a se fazer é colocar seus "objetos" no html
### Segundo passo comece seu grid 
Agora onde é o seu "conteiner" coloque a propriedade de conteiner nele _display:grid;_
### Terceiro passo hora de coratar
Agora no seu conteiner adicione as propriedades de "corte" _grid-template-coluns_ e a _grid-template-row_ e para uma facilitação dos cortes pode ser usado o metodo de medida _fr{Number};_.
E tambem se vocêquiser pode fazer os "gaps"
### Quarto passo organize os
Agora indo para a parte de organização, você ira ir nas suas celulas que estão dentro desse grid e colocara eles onde eles devem começar "_grid-{colum or row}-star_" e onde eles deve terminar"_grid-{row or column}-end_". 
---
## O que aconteceu até agora?
No momento em que você "corta" você na verdade cria linhas e colunas virtuais, para você conseguir velas é muito simples com seu ou o "meu" exeplo aberto (index1.html) você pode abrir o dev tools apertando f12 (no google chrome) e procure pela div.container ou {div class="conteiner"} nesse momento se você colocar o mause em cima você vera todos as linhas virtuais ou "cortes" se preferir.

_Voltando_.
---
### Quinto passo simplificação simples
Você pode tanto usar a propridade grid-column-star e a "end" para fazer essa tarefa porem é muito ruim escrever tudo isso porque para mim alem de ficar super complicado a escrita a leitura do codigo acaba por ficar muito poluida entâo a recomedação da shorthand 
---
O metodo para utilizala é um tanto quanto estranha porem é simples
```
main{
    grid-colun 1/2; /*Nesse caso esta escrito que o main vai da coluna virtua 1 até a 2*/
}
```
### Sexto passo.A uma simplificação realmente simples
O metodo passado anteriormente realmente simplifica bastante porem é possivel simplificar mais ainda utilizando o _"grid-area:;"_ e o _"grid-template-area:;"_
---
# A partir de agora o exeplo a ser utilizado será o {index2.html} 

_continuando_
---

Para fazer isso eu vou explicar de uma maneira que ficou mais claro para mim, imaginemos que cada parte de dentro do conteiner ira entrar dentro de uma variavel (ou id se você preferir) e para fazer isso é só usar o codigo _grid-area:{nome_area}_.
E para organizalos em uma forma que você queira é so você ir para o conteiner (ou o lugar onde esta o seu grid) e usar o componente grid-template-areas:...
---
### Sexto passo.B como usar o grid-template-areas:;?
Isso é super simples basta você já ter as "variaveis" setadas e apenas utilizar assim: 
```
.container{
    grid-template-area:"H H" "M A" "F F";
    /*
    Com o codigo de cima eu acabei de falar que a primeira coluna sera ocupada na linha 1 e 2 pelo meu H (ou header) e que na minha coluna 2 na linha 1 sera ocupada pelo meu M (ou main) e a minnha linha 2 sera ocupada pelo meu A (ou asside)
    */
}
header{
    background-color: pink;
    grid-area: h;
}
main{
    background-color: rgb(62, 62, 255);
    grid-area: m;
}
aside{
    background-color: red;
    grid-area: a;
}
footer{
    background-color: yellow;
    grid-area: f;
}
```
---
# Finalização 
Bem ainda não acabou por completo porem a parte mais "iportante já chegou ao fim"
apartir de agora é uma parte mais específica que eu vou comentar e que é a respeito de alinhamento de grid
---
# Apartir de agora é o index3.html
_continuando_
---
## Grid e seu alinhamento
Para comçar o alinhamento do grid é dividido em 6 propriedades sendo elas:
```
*`justify-content`
*`justify-itens`
*`justify-self`
*`aling-content`
*`aling-itens`
*`aling-self`
```
---
Essas propriedades so podem ser usadas caso o noso grid seja menor que o tamanho da tela.

O justify é o eixo X do grid e o aling o eixo Y do grid
---
## justify, aling -content:
Ao total você pode utilizar 7 valores sendo eles:
*start

*end

*center

*stretch

*space-between

*space-around

*space-evenly


Ambos (justify e o aling) tem essas todas propridades, sendo a unica diferença o eixo 
---
## justify, aling -itens:
O itens tem esses valores:
*start
*end
*center
*stretch

O itens ele serve para alinhar o conteudo das ]celulas, caso o conteudo não ocupem 100% delas.
--- 
## justify, aling -self
Até agora as propriedas listadas acima são para usar no **container** (ou o lugar onde esta o grid) mas agora essa propriedade _-self_ é para se usar diretamente na celula podendo fazer alterações pontuais
e seus valores são os mesmos dos -itens
*start
*end
*center
*stretch
