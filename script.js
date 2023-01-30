const url = 'https://purpleschool.ru/course/javascript';

function cut(url) {
    const [protocol, _, domen, ...way] = url.split('/');

    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Домен: ${domen}`);
    console.log(`Путь: /${way.join('/')}`);
}

cut(url);