let flag: boolean;
let yes = true;
let no  = false;

let x : number;
let y = 0;
let z : number = 123.456;
let big: bigint = 100n;

let s : String;
let empety = "";
let abc = 'abc';

//exemplo de `${var}` ;

let nome : string = "Luan";
let apresentacao : string = "Olá me chamo";
let frazeCompleta : string = `${apresentacao} ${nome}`;

//todos os logs() ;
console.error("as variaveis `flag` `number` `s` não é possível de mostrar por ela nao ser definida na sua inicialização");

console.log("\n");


console.log(frazeCompleta);

console.log("\n");

console.log(`${yes} ${no}`);

console.log(`\n`);
console.log(`${y} ${z} ${big}`);

console.log("\n");
console.log(`${empety} ${abc}`);
