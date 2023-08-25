"use strict";
//loops:
//1)while loop
let i = 1;
while (i < 10) {
    console.log("name", i);
    i++;
}
//2)for while loop
// let i2:number=11;
// for (let i2=1;i<10;i++){
//     console.log("seerat",i2);
// }
//3)do while loop ----run at least once whether conditions using;
// let i3:number=1;
// do{
//     console.log("name");
//     i3++;
// }while(i<10);
//write a typescript program that calculates sum of even numbers in between 1 and 1000.
var sum = 0;
var list = [];
for (let number = 1; number <= 1000; number++) {
    if (number % 2 == 0) {
        sum = sum + number;
        list.push(number);
    }
}
console.log("sum", sum, list);
//when we write (!=) it given result in  odd number and other all method is same as upper question.
