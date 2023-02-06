//Map() 
const valores = [1, 4, 56, 78, 23, 7]; 
const newValores = valores.map( function(vall){
    return vall * 2;
}) 

console.log(valores);
console.log(newValores);

const nomes = ["carlos","joao","Micaela"]
const nomesEspaco = nomes.map(function(nome){
    test = ""
    for(i = 0; i< nome.length ;i++){
        if(i == 0){
            test = nome.charAt(0).toUpperCase();
        }else{
            test += nome.charAt(i);
        }
    }
    return test;
})

console.log(nomes);
console.log(nomesEspaco);

function calcs(num){
    return num * 2;
}

const numbers = [12, 43, 56, 75];
const numbers2x = numbers.map(calcs)

console.log(numbers);
console.log(numbers2x);

const vals = [12,43,65,87,654]
const doble = vals.map(resultados => resultados *2);