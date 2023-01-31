const arr = ['!', 'JS', 'люблю', 'Я'];

let newArr = '';
for (let i = (arr.length - 1); i >= 0; i--) {
    newArr += arr[i];
    newArr += ' ';
}

console.log(newArr);