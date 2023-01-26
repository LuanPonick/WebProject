# Principais anotações :
## Pasta module01 :

### Sobre o que é :
Nesse modulo foi falado principalmente sobre a inicialização do projeto e de como configurar o ambiente.

### Pricipais comandos :
```shell
   tsc
    // faz a compilação de todos os arquivos .ts;

   tsc nome_arquivo.ts
   // faz a compilação só desse arquivo;

```
### Principais configurações :
```json
/*52*/" outDir": "build",       //diz o local de onde vai ficar o arquivo compilado;
```
---
## Pasta modele02 : 
Tipos primitivos

- bigint ,
- boolean ,
- number ,
- string ;

### Enum

- _O uso de enumerações :_

   Ajuda a reduzir erros causados pela transposição ou digitação incorreta de números.
Torna mais fácil alterar valores no futuro.
Torna o código mais fácil de ler, o que significa que é menos provável que os erros possam surgir nele.
Garante a compatibilidade com o futuro. Com as enumerações, o código será menos propenso a falhar se, posteriormente, alguém alterar os valores correspondentes aos nomes dos membros.

- _Sintaxe :_
```TypeScript
   enum NomeEnumerador {
     estado1,
     estado2,
     estado3
   }
   let nomeVarivel : NomeEnumerador = NomeEnumerador.estado1

```
caso seje criado dessa forma o <font color ="geen">_nomeVariavel_</font> estara valendo 0 nesse momento mas caso o estado do <font color ="geen">_nomeVariavel_</font> mude para o estado **2** ele estara valendo **1** 

## Pontos extras :

1. aso execute o comando dessa forma :
```TypeScript
   console.log(nomeEnum[nomeVarivel])
```
Ele provavelmente ira retornar o __NOME__ do esdado que se encontra o nomeVariavel e nao o valor da posição dele.

2. O valor do enum pode ser setado dentro do enum :
```TypeScript
   enum NomeEnum{
      estado1 = 1,
      estado2,
      estado3
   }
```
Caso seja feito desta forma o <font color=#90ee90> _estado1_ </font> vale <font color="red">1</font> e o <font color=#90ee90>_estado2_</font> vale <font color="red">2</font> e por fim o<font color=#90ee90> _estado3_</font> vale <font color="red">3</font>
### any
   O tipo any permite a troca do seu valor primitivo sem nenum problema sendo seu unico problema de que ele é que ele é mutavel e por isso não sendo muito recomendado a sua utilização :

```TypeScript
let varivel : any = 12;
console.log(varivel);

varivel = "a"
console.log(varivel);

varivel = true;
console.log(varivel);
```
### unknown
o unknown aceita qualquer valor assim como o any so que tendo uma unica diferenteça que seu valor não pode ser interagido.
```TypeScript
   let variavel : unknown = 66;
   console.log(varivel + 6);
```
nesse exemplo ira dar um erro porque o valor de <font color="geen">variavel</font> é inacessivel;
___
