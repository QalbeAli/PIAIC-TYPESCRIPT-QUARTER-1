"use strict";
//No space in the variable name 
var myNameIs = "seerat";
console.log(myNameIs);
//Dollars sign and underscore are applicable
var $myNameIs = "seerathanif";
var myName_Is = "manobilli";
console.log($myNameIs);
console.log(myName_Is);
//apply camelcase
var itIs = "laptop";
console.log(itIs);
//apply pascalcase
var ItIs2 = "laptop";
console.log(ItIs2);
//apply template Literals
var $userName1 = "seeratHanif";
var $userName2 = 'MohammadHanif';
var $userName3 = `DrAbdulQadeer`;
console.log($userName1);
console.log($userName2);
console.log($userName3);
// (/* */) this is use for multiple line Comment
/*
var $userName1:string="seeratHanif";
var $userName2:string='MohammadHanif';
var $userName3:string=`DrAbdulQadeer`;
console.log($userName1);
console.log($userName2);
console.log($userName3);
*/
//if u wanna know the type of variable we use 'typeof'
var Age = 18;
var userName = "seerathanif";
console.log(typeof Age);
console.log(typeof userName);
//Operators
//Arithmetic operators
var num1 = 18;
var num2 = 26;
//ADDITION
var sum = num1 + num2;
//SUBTRACTION
var sub = num2 - num1;
//MULTIPLICATION
var product = num1 * num2;
//DIVISION
var division = num2 / num1;
//EXPONENT (raise to power ^)
var exponent = num1 ** num2;
// division(REMAINDER)
var remainder = num2 / 3;
console.log(sum);
console.log(sub);
console.log(product);
console.log(division);
console.log(exponent);
console.log(remainder);
//simple assignment operator
var Age = 18;
var num1 = 30;
//Addition and assignment operator
var addition = num1 += 10;
console.log(addition);
//Subtraction and assignment operator
var subtraction = num1 -= 10;
console.log(subtraction);
//multiply and assignment operator
var product = num1 *= 10;
console.log(product);
//division and assignment operator
var division = num1 /= 10;
console.log(division);
//apply modulus
var num1 = 9;
var num2 = 5;
var result = num1 % num2;
console.log(result);
//comparison
var num1 = 18;
var num2 = 22;
var num3 = 26;
var result1 = num1 + num2 - num3 * num2 / num1;
console.log(result1);
var num1 = 100;
var num2 = 200;
//Comparison operator returns BOOLEAN type Variable
//less than operator
var result2 = num1 < num2;
console.log(result2);
//greater than operator
var result3 = num1 > num2;
console.log(result3);
//equals to operator
//only value checked
var result4 = num2 == num2;
console.log(result4);
//value check and datatype check
var result5 = num2 === num1;
console.log(result5);
//not equal to operator
var result6 = num1 != num2;
console.log(result6);
//greater than and equals to operator
var result7 = num2 >= num1;
console.log(result7);
//less than and equals to operator
var result8 = num1 <= num2;
console.log(result8);
//LOGICAL OPERATORS(BOOLEAN TYPE)
/*
create table of AND OPERATOR(&&);
T && T=>T
T && F=>F
F && T=>F
F && F=>F
*/
/*
create table of OR OPERATOR(||);
T || T=>T
T || F=>T
F || T=>T
F || F=>F
*/
var num1 = 12;
var num2 = 16;
//now apply && operator
var output1 = num1 == num2 && num1 == num2;
console.log(output1);
//now apply || operator
var output2 = num2 == num1 || num1 == num2;
console.log(output2);
//Alhumdulilah ASSIGNMENT COMPLETE OF CLASS2
