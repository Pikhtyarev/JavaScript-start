const startMoney = 12000;
const percent = 0.07;
const finishMoney = (startMoney * (1 + percent) ** 24);
const housePrice = 13500;

if (finishMoney > housePrice) {
    console.log('Василий сможет купить дом за $13500');
} else {
    console.log('Ваcилий не сможет купить дом за $13500');
}

console.log(finishMoney);
console.log(`Остаток после покупки $${finishMoney - housePrice}`);