const priceMacBook = 2000;

const credit = (age, job) => {
    if ((age > 24) && (job == true)) {
        return 500;
    } else if (age > 24) {
       return 100;
    } return 0;
}

function canBuy (money) {
    if (money >= priceMacBook) {
        console.log('Можно купить и без кредита');
    } else if (money < priceMacBook) {
        (money + credit(25, false)) >= priceMacBook ? console.log('Выдадут кредит и можно покупать') : console.log('Купить не получится')
    }
}

console.log(canBuy(1900));