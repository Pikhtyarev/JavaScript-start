let answer = prompt('Сколько будет 7+15 или 7-15?');

switch (true) {
    case Number(answer) === 22:
    case Number(answer) === -8:
    case answer === 'Я не робот':
        alert('Успех');
    break;
    default : alert('Вы робот');
}