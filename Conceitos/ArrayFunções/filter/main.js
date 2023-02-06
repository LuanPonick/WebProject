//filter()

const valores =[1,43,5,4,3,12,1,5,3,45,12,1,1,34,56,12,6,1,2,];
const filtrados = valores.filter( (elem,plate,valls) => valls.indexOf( elem ) == plate )

console.log(valores);
console.log(filtrados);

const nomes = ["luan","micael","luan","micael"];
const luans = nomes.filter( (nome) => nome == "luan" );

console.log(luans);