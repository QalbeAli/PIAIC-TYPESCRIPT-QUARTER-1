//1)Write a program that calculates the area of the rectangle?
var length: number=18;
var width: number=16;
var area: number=length*width;
console.log("Area of the rectangle is:");
console.log(area);

//2)Write a program that takes the input and calculates the volume of the cube??
var length: number=18;
var width: number=16;
var height: number=12;
var volume: number=length*width*height;
console.log("Volume of the cube is:");
console.log(volume);

//3)Write a program that checks if a given number is positive or negative or zero?

var num: number=10;
if(num>0){
    console.log("Positive number");
}
else if(num<0){
    console.log("Negative number");
}
else{
    console.log("Zero");
}

//4)Write a program that determines if a person is eligible to vote based on their age?

var age: number=18;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}

//5)Write a program that calculates the results of the mathematical expression.((10+5)*3-2)/(4%3)-7)?

var num1: number=10;
var num2: number=5;
var num3: number=3;
var num4: number=2;
var num5: number=4;     

var result: number=((num1+num2)*num3-num4)/(num5%num3)-7;

console.log("Result of the mathematical expression is:");

console.log(result);
