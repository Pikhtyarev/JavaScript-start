let balance = true;
let bonusBalance = true;
let isBanned = true;
let isExist = true;
let isSelling = true;

if ((balance || bonusBalance) && !isBanned && !isExist && isSelling) {
    console.log('Можно купить');
} else {
    console.log('Не купить');
}