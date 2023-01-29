const tasks = ['Task 1', 'Taks 2'];

function AddInEnd(elem) {
    tasks.push(elem);
}

function DeleteByName(elem) {
    const indexElem = tasks.indexOf(elem);
    if (indexElem === -1) {
        return;
    }
    tasks.splice(indexElem, 1);
}

function Prioritize(elem) {
    const indexElem = tasks.indexOf(elem);
    if (indexElem === -1) {
        return;
    }
    const oldElem = tasks[indexElem];
    tasks.splice(indexElem, 1);
    tasks.unshift(oldElem);
}

AddInEnd('Task 3');
AddInEnd('Task 4');
console.log(tasks);

DeleteByName('Task 3');
console.log(tasks);

Prioritize('Task 4');
console.log(tasks);