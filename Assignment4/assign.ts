//write a ts program that print the table of 5..
// let loop:number=1;
// while(loop<=10){
// let result=loop*5;
// console.log("5*",loop,"=",result);
// loop+=1;
// }


//Write a ts program that print the table of 9..
// let loop2:number=1;
// while(loop2<=10){
//     let result2=loop2*9;
//     console.log("9*",loop2,"=",result2);
//     loop2+=1;
// }

//Q#1; - Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified index 
//in the array. Return the modified array.
function insertValue(arr:number[], index:number, value:number):number[] {
    arr.splice(index, 0, value);
    return arr;
}
let arr:number[]=[1,2,3,4,5];
console.log(insertValue(arr, 2, 10));

//Q#2; - - Implement a simple shopping cart program using an array. Create functions to add
// items, remove items, and update quantities using the splice method.
// Print the cart's contents after each operation..
let cart:string[]=["mango","apple","banana","grapes"];
function addItems(cart:string[]){
    cart.splice(3,0,"dates");
    return cart;
}
function removeItems(cart:string[]){
    cart.splice(2,1);
    return cart;
}
function updateItems(cart:string[]){
    cart.splice(1,0,"peach");
    return cart;
}
console.log("fruits",cart);
console.log(addItems(cart));
console.log(removeItems(cart));
console.log(updateItems(cart));

//Q#3; - Write a program that uses a while loop to print the first 25 integers.

// let loop3:number=1;
// while(loop3<=25){
//     console.log(loop3);
//     loop3+=1;
// }

//Q#4; - Write a program that uses a while loop to print the first 10 even numbers.

let loop4:number=1;
while(loop4<=10){
    if(loop4%2==0){
        console.log(loop4);
    }
    loop4++;
}

//Q#5; - - Create a function that takes a positive integer as parameter
 //and uses a while loop to calculate and return the factorial of that number.
 function factorial(integer:number):number{
    if (integer<0){
      console.log("Integer is positive");
      return -1;
    }
    let factorialNum:number=1;
    let currentNum:number=1;
    while(currentNum<=integer){
      factorialNum*=currentNum;
      currentNum++;
  
    }
    return factorialNum;
  }
  let integer:number=5;
  let result:number=integer;
  console.log(result);

  //Q#6; -  - Write a program having an array of numbers
 //if the number is negative it should remove the negative number from the array.

 let arr3:number[]=[1,-2,3,4,-5];
 console.log(arr3);
 for(var i:number=1;i<arr3.length;i++){
    if(arr3[i]<0){
        arr3.splice(i,1)
    }
 } 
 console.log("array remove the negative numbers",arr3);

 //Q#7;   create a function that takes an array of numbers as parameter.use a while loop 
//to calculate and return the sum of all the numbers in the array.
function calculateSum(arr4: number[]): number {
    let sum: number = 0;
    let i: number = 0;
    while(i < arr4.length) {
        sum += arr4[i];
        i++;
    }
    return sum;
}
let arrayNum:number[] = [10,15,20,25,30,35,40];
let result2:number = calculateSum(arrayNum);
console.log(result2);

//Q#8; Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the
// converted temperatures in an array.
//Use a while loop to perform the conversion for each temperature.

let temp:number[]=[10,20,30,40];
let num1:number=0;
let num2:number=0;
while(num1<temp.length){
    num2=(temp[num1]*9/5)+32;
    temp[num1]=num2;
    num1++
}

console.log("temperature in celcius",temp);


//ALHUMDULILAH ASSIGNMENT COMPLETE


