const button = document.getElementById('button');
const priceItm = document.getElementById('priceItm');

button.onclick = function () {
    let price = document.getElementById('price').value;
    let amount = document.getElementById('amount').value;
    let perItm = price / amount;
    priceItm.innerHTML = `<strong>price per item: </strong> ${perItm} `;
};