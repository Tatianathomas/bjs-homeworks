"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
if (isNaN(percent)) {
  return `Параметр percent содержит неправильное значение ${percent}`;
}
if (isNaN(contribution)) {
    return `Параметр contribution содержит неправильное значение ${contribution}`;
} 
if (isNaN(contribution)) {
    return `Параметр amount содержит неправильное значение ${amount}`;
} 
if (isNaN(date)) {
    return `Параметр date содержит неправильное значение ${date}`;
} 
const sumBack = amount - contribution;
date = (new Date(date).getFullYear() - new Date().getFullYear()) * 12;
const conditions = sumBack * (percent / 1200 + percent / 1200 / (((1 + percent / 1200)** date) - 1));
let totalAmount = conditions * date;
return parseFloat(totalAmount.toFixed(2));
}
console.log(calculateTotalMortgage(10, 0, 50000, "2021-05-02"));



function getGreeting(name) {
    let greeting;
    return greeting = `Привет, мир! Меня зовут ${name || "Аноним"}`;
  }
  console.log(getGreeting(""));