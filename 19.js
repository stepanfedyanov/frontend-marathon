"use strict"

let list = {};

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
        console.log(`Задаче ${task} изменен статус на ${status}`);
    } else {
        console.log(`Задачи ${task} не существует!`);
    }
    
}

function addTask(task) {
    if (!(task in list)) {
        list[task] = 'Todo';
        console.log(`Задача ${task} создана!`);
    } else {
        console.log(`Задача ${task} уже существует!`);
    }
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
        console.log(`Задача ${task} удалена!`);
    } else {
        console.log(`Задачи ${task} не существует!`);
    }
}

// если честно, мне не нравится данная функция. я хотел бы сделать так, чтобы у пользователя была возможность самому писать, в каком состоянии задача, и вывод был не по заготовленным значениям, а по тем, что есть в объекте
// правда я не знаю как это сделать. думал через 3 переменную, но я как то заморочился, что не сделал. хотел бы узнать мнение других по этому поводу

function showList() {
    console.log('Todo:')
    for (let key in list) {
        if (list[key] === 'Todo') {
            console.log('   ' + key);
        }
    }
    console.log('In progress:')
    for (let key in list) {
        if (list[key] === 'In progress') {
            console.log('   ' + key);
        }
    }
    console.log('Done:')
    for (let key in list) {
        if (list[key] === 'In progress') {
            console.log('   ' + key);
        }
    }
}


// проверка - правильными данными и неправильными
addTask('задача 1');
showList();
changeStatus('задача 1', 'In progress');
showList();
changeStatus('задача 2', 'сделана');
deleteTask('задача 1');
showList();
deleteTask('задача 2');




