const TAX_RATE = 0.07;
const BASE_PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_LIMIT = 50;
var funds = 4400;
var phonesBought = 0;
var accessoriesBought = 0;
var fundsSpentOnAccessories = 0;

while (funds > BASE_PHONE_PRICE) {
    funds -= addTax(BASE_PHONE_PRICE, TAX_RATE);
    phonesBought++;
}

while (funds > ACCESSORY_PRICE && fundsSpentOnAccessories < SPENDING_LIMIT) {
    funds -= addTax(ACCESSORY_PRICE, TAX_RATE);
    accessoriesBought++;
}

console.log("Phones purchased: " + phonesBought
+ "\nPrice of phones: " + phonesBought * BASE_PHONE_PRICE + "\nAccessories bought: " +
accessoriesBought)

function addTax(base, taxRate) {
    return base * (1 + taxRate)
}

function formatMoney(amount) {
    return "$" + amount.toFixed(2);
}