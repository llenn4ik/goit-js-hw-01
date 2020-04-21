"use strickt";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const rezult = prompt(`Введите пароль: `);

if (rezult !== null) {
    if (rezult === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!'
    } else {
        message = `Доступ запрещен, неверный пароль!`
    }
} else {
    message = `Отменено пользователем!`
}
allert(message);