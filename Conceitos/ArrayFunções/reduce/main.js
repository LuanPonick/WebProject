const nomesValores = [
    {nome: "Luan", idade: 20},
    {nome: "Luan", idade: 20},
    {nome: "Luan", idade: 20},
    {nome: "Luan", idade: 20},
];
somaIdades = nomesValores.reduce((valores,list)=> valores + list.idade,0)

console.log(somaIdades);