"use strickt";

const userCredits = 23580;
const pricePerDroid = 3000;

let rezult = prompt(`Введите количество дроидов:`);

rezultNum = Number(rezult);

let totalPrice = rezultNum * pricePerDroid;

const userBalance = userCredits - totalPrice;

if (rezult === null) {
    message = `Отменено пользователем!`;
} else {
    if (totalPrice <= userCredits) {
        message = `Вы купили ${rezultNum} дроидов, на счету осталось ${userBalance}кредитов.`;
    } else {
        message = "Недостаточно средств на счету!";
    }
}
allert(message);