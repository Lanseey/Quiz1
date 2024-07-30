const { add, subtract, multiply, divide } = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;
const taxRate = 0.10;
const sssDeduction = 1200;
const pagIbigDeduction = 300;
const philHealthDeduction = 400;

const totalHours = multiply(hoursPerDay, daysPerWeek);
const grossIncome = multiply(totalHours, ratePerHour);
const tax = multiply(grossIncome, taxRate);
const totalDeductions = add(add(tax, sssDeduction), add(pagIbigDeduction, philHealthDeduction));
const netIncome = subtract(grossIncome, totalDeductions);

console.log(`Gross Income: ${grossIncome}`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sssDeduction}`);
console.log(`Pag-Ibig fund: ${pagIbigDeduction}`);
console.log(`PhilHealth: ${philHealthDeduction}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Income: ${netIncome}`);
