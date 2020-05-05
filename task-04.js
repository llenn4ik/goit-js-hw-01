"use strict";

const userCredits = 23580;
const pricePerDroid = 3000;

let calk = prompt(`Введите количество дроидов:`);

const calktNum = Number(calk);

let totalPrice = calkNum * pricePerDroid;

const userBalance = userCredits - totalPrice;

if (calk === null) {
    message = `Отменено пользователем!`;
} else {
    if (totalPrice <= userCredits) {
        message = `Вы купили ${calkNum} дроидов, на счету осталось ${userBalance}кредитов.`;
    } else {
        message = "Недостаточно средств на счету!";
    }
}
allert(message);