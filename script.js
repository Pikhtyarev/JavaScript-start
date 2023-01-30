const url = 'https://purpleschool.ru/course/javascript';

function cut() {
const protocol = url.split(':');
const protocolRes = protocol.splice(0, 1);
const pro = protocolRes.join('');

const domen = url.split('/');
const domenRes = domen.splice(2, 1);
const dom = domenRes.join('');

domen.splice(0, 1);
const wayRes = domen.join('/');

console.log('Была строчка URL: ' + url);
console.log('Протокол: ' + pro);
console.log('Домен: ' + dom);
console.log('Путь внутри сайта: ' + wayRes);
}

cut();