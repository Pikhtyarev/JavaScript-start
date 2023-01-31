const operations = [1000, -700, 300, -500, 10000];

let result = 100;
for (let element of operations) {
    result += element;
    if (result < 0) {
        console.log(false);
    }
}

let counterP = 0;
let pos = 0;
for (let i = 0; i < operations.length; i++) {
    if (operations[i] > 0) {
        pos += operations[i];
        counterP++;
    }
}

let counterN = 0;
let neg = 0;
for (let i = 0; i < operations.length; i++){
    if (operations[i] < 0) {
        neg -= operations [i];
        counterN++;
    }
}

console.log(`Итоговый баланс $${result}`);
console.log(`Средний доход $${pos/counterP}`);
console.log(`Средний расход $${neg/counterN}`);