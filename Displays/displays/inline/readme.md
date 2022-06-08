# _Display : inline_;
### O transformador  "em palavras".
___
## _Usando_
O display inline tem que ser colocado principalmente no componente filho

```html
<div> <!--Eu sou pai de 2 "p-pzinhos"-->
	<p class="p-div p-1">Hello world</p> <!--Eu sou filho da div-->
	<p class="p-div p-2">Illaoi best champ!!!</p> <!--Eu tambem :) -->
</div>
```



___
## _Suas propriedades_

Quando você coloca essa propriedade a um componente, ele perde a possibilidade de trabalhar com a width e o height e recebe características de palavra, ou seja caso o componente pai tenha 2 filhos com inline ele pode usar a propriedade
```css
div{
	text-aling: center;
}
```

___

## _Porque tem aquele espaço?_

Caso você crie uma "parada" tipo assim:

### html:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="resets.css">
        <title>Display inline</title>
    </head>
    <body>
        <ul class="example">
            <li class="example-item example-item_first">Primeiro</li>
            <li class="example-item example-item_second">Segundo</li>
            <li class="example-item example-item_third">Terceiro</li>
        </ul>
    </body>
</html>
```

### css:resets

````css
* {
    margin: 0;
    padding: 0;
    border: 0;
}
body {
    font-family: "Open Sans", sans-serif;
}
    ul, ol, li {
        list-style: none;
    }
````

### css:style

````css
.example {
    color: #FFF;  
    display: block;
    text-align: center;
}
    .example-item {
        width: 33.333%;
        height: 150px;
        display: inline;
    }
    .example-item_first {
        background-color: #FAA116;
    }
    .example-item_second {
        background-color: #57C7C3;
    }
    .example-item_third {
        background-color: #3B97D3;
    }
````

Você vera que entre cada texto tem um espaço esse espaço ocorre porque os objetos filhos(no caso os li) estão sendo tratados como texto ou seja caso você queira deixá-los todos juntos pode ser retirado a quebra de linha do html 

````html

<body>
        <ul class="example">
            <li class="example-item example-item_first">Primeiro</li><li class="example-item example-item_second">Segundo</li><li class="example-item example-item_third">Terceiro</li>
        </ul>
</body>
<!--Não faz isso, o código fica feio >_< -->
````

Bem como pode se ver o código fica TOTALMENTE ilegível ou quase... dai você tem o plano b que é ao invés de simples mente apagar as linhas, colocar comentários.

````html
<body>
        <ul class="example">
            <li class="example-item example-item_first">Primeiro</li><!--
            --><li class="example-item example-item_second">Segundo</li><!--
            --><li class="example-item example-item_third">Terceiro</li>
        </ul>
</body>
<!--tá bem melhor :3 -->
````

Dessa forma seu código permanece legível :ok_hand:

___

## _Posicionamento_

A parte mais interessante de se usar o _"diplay:inline"_ é utilizar o componente _"text-aling:center"_ e para que isso ocorra de uma maneira correta, use a propriedade de alinhamento(_text-aling_) no componente pai 



 
