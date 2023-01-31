const operations = [1000, -700, 300, -500, 10000];
startingBalance = 100;

function getTotal(array, enterBalance) {
    let balance = enterBalance;
    for (let element of operations) {
        balance += element;
    }
    return balance;
}

function isBalanceNegative(array, enterBalance) {
    let balance = enterBalance;
    let isOk = true;
    for (let element of operations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

function averageSum(array) {
    let counterP = 0;
    let pos = 0;
    let counterN = 0;
    let neg = 0;
    for (element of operations) {
        if (element > 0) {
            pos += element;
            counterP++;
        }
        if (element < 0) {
            neg += element;
            counterN++;
        }
    }
    return [pos / counterP, neg / counterN];
}

console.log(`Итоговый баланс ${getTotal(operations, startingBalance)}`);
console.log(`${isBalanceNegative(operations, startingBalance)}`)
console.log(`Средний доход и расход ${averageSum(operations)}`);