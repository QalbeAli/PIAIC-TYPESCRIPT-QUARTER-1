"use strict";
//no space in variables
var userName = "hello world";
console.log(userName);
//dollar sign and underscore are applicable
var $userName = "hello world";
var _userName = "hello world";
console.log("$userName hello world:");
console.log("_userName hello world:");
//if u wanna know the type of variable then use 'typeof'
var userName = "marie curie";
console.log("typeof userName marie curie");
//camelcase
var itIS = "an assignment";
console.log("itIs an assignment");
//pascalcase
var ItIs = "assignment2";
console.log("ItIs an assignment2");
//template literals
var nationality_1 = "Pakistani";
var nationality_2 = 'Europe';
var nationality_3 = `USA`;
console.log("nationality_1 : Pakistani");
console.log("nationality_2 : 'Europe'");
console.log("nationality_3 : `USA`");
//ARITHMETIC OPERATORS
var num1 = 11;
var num2 = 19;
var addition = num1 + num2;
console.log("addition:");
console.log(11 + 19);
var subtraction = num2 - num1;
console.log("subtraction:");
console.log(19 - 11);
var product = num1 * num2 * num1 * num2;
console.log("product:");
console.log(11 * 19 * 19 * 11);
var division = num1 / num2;
console.log("division:");
console.log(19 / 11);
var comparison = num1 + num2 - num1 * num2 / num1;
console.log("comparison:+,-,*,/");
console.log(11 + 19 - 11 * 19 / 11);
var modulus = num1 % num2;
console.log("modulus:");
console.log(11 % 19);
//comparison operators returs BOOLEAN TYPE operator
var num1 = 15;
var num2 = 25;
//less than operator
var output = num1 < num2;
console.log("less than operator:boolean");
console.log(15 < 25);
//grater than operator
var output = num1 > num2;
console.log("greater than operator:boolean");
console.log(num1 > num2);
//greater than and equal to operator
var output = num2 >= num1;
console.log("greater than and equal to operator:boolean");
console.log(num2 >= num1);
//less than and equal to operator
var output = num1 <= num2;
console.log("less than and equal to operator:boolean");
console.log(num1 <= num2);
//not equal to operator
var output = num1 != num2;
7;
console.log("not equal to operator:boolean");
console.log(num1 != num2);
//equals to operator
var output = num1 == num2;
console.log("equals to operator:boolean");
console.log(num1 == num2);
