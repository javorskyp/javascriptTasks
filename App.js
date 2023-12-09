const engine1 = {price: 1000}
const engine2 = {price: 1500}
const discount = 10;


const itemsContainer = document.querySelector('#items');
let counter = 1;
function addItem(item) {
  itemsContainer.innerHTML += `<tr>
          <td>${counter++}</td>
          <td>${item.title}</td>
          <td>1</td>
          <td>${item.price}</td>
        </tr>`;
}
addItem(product1);
addItem(product2);

// String(), Number(), Boolean() !!
if (isNaN(+product2.price)) {
  console.log('Podano niepoprawny typ danych');
}

const total = Number(product1.price) + Number(product2.price);
const totalWithDiscount = total - 10;

// cena całkowita
document.querySelector('#total-price').innerHTML = total;

console.log(`
  Cena przed zniżką: ${total}
  Cena po zniżce: ${totalWithDiscount}
`);