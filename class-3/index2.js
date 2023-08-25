"use strict";
//1::write a program to convert the temperature from celcius to farenheit.
var temperature = 38;
var tempFarenheit = temperature * 9 / 5 + 32;
console.log("Temperature convert into farenheit");
console.log(tempFarenheit);
console.log("Temperature convert into celcius");
var tempcelcius = temperature - 32 * 5 / 9;
console.log(tempcelcius);
//2::write a program that calculates the percentage..
var marks = 90;
var percentage = marks / 100;
console.log("Percentage is " + percentage);
//3::write a program that converts given number of days in to weeks and days such as 17 days
//2 weeks and 3 days.
var days = 17;
var weeks = days / 7;
var days = days % 7;
console.log(weeks + " weeks and " + days + " days");
//3::Write a program that calculates the discount for a product based on its price.If the price
//is above the $100,apply a 10% discount; otherwise,apply a 5% discount.
var price = 100;
if (price > 100) {
    var discount = price * 0.1;
    console.log("Discount is " + discount);
}
else {
    var discount = price * 0.05;
    console.log("Discount is " + discount);
}
//4::Write a program that detrmines the category of a user-provided age.If the age is between
//0 and 12,print "Child".If the age is between 13 and 19,print "Teenager".Otherwise,print "Adult".
var Age = 27;
if (Age <= 12) {
    console.log("Child");
}
else if (Age > 12 && Age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
//5:: - Write a program that takes temperature and check it.
// If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 38;
if (temperature < 0) {
    console.log("It is cold");
}
else {
    console.log("It is warm");
}
//6:: Write a program that checks if the given number is  divisible 
//by 3 or 5 or both or not divisible by anyone show output accordingly.
var number = 22;
if (number % 3 == 0 && number % 5 == 0) {
    console.log("Number is divisible by 3 and 5");
}
else if (number % 3 == 0) {
    console.log("Number is divisible by 3");
}
else if (number % 5 == 0) {
    console.log("Number is divisible by 5");
}
else {
    console.log("Number is not divisible by 3 or 5");
}
//7:: - Write a program that checks if the given year is leap year or not.
var year = 2000;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year + " is a leap year");
}
else {
    console.log(year + " is not a leap year");
}
//8::- Develop a program that determines the day of the week. Ask the user for a number 
//(1-7) and use nested if statements to print the corresponding day's name.
var day = 2;
if (day == 1) {
    console.log("Monday");
}
else if (day == 2) {
    console.log("Tuesday");
}
else if (day == 3) {
    console.log("Wednesday");
}
else if (day == 4) {
    console.log("Thursday");
}
else if (day == 5) {
    console.log("Friday");
}
else if (day == 6) {
    console.log("Saturday");
}
else if (day == 7) {
    console.log("Sunday");
}
else {
    console.log("Invalid day");
}
//9:: - Write a program that takes the number of units consumed by a user if it is greater than
// 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500
// then add 25% of tax.
//Where the tax amount will be calculated by the amount of bill.
var units = 100;
var priceOfUnit = 40;
var calculated = (units * priceOfUnit);
if (units >= 100) {
    //formula to add tax
    var billCalculation = units + (10 / 100) * units;
    console.log(`Total units consumed:${units} is the total bill with 10%tax:${billCalculation}`);
}
else if (units > 100 && units <= 200) {
    //formula to add tax
    var billCalculation = calculated + (15 / 100) * calculated;
    console.log(`Total units consumed:${units} is the total bill with 15%tax:${billCalculation}`);
}
else if (units > 200 && units <= 500) {
    //formula to add tax
    var billCalculation = calculated + (25 / 100) * calculated;
    console.log(`Total units consumed:${units} is the total bill with 25%tax:${billCalculation}`);
}
else {
    //formula to add tax
    var billCalculation = calculated + (35 / 100) * calculated;
    console.log(`Total units consumed:${units} is the total bill with 35%tax:${billCalculation}`);
}
