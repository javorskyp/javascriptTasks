const engine1 = {price: 1000}
const engine2 = {price: 1500}
const discount = 10;

let result = engine1.price + engine2.price;

console.log(typeof result);


const totalDiscount = result -10;


console.log(`
Cena przed obnizka: ${result}
Cena po obnizce ${totalDiscount}`)