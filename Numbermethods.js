'use strict';

const nums='123'
// change string to number
console.log(Number(nums))
// change string to number using any numeric system like binary,hexadecimal,decimal
console.log(parseInt(nums,10));
console.log(parseInt(nums,2));
console.log(parseInt(nums,16));

console.log(parseFloat('2.3rem'))
console.log(parseInt('30px'))

// checking value is Nan
console.log(Number.isNaN(12))

// checking value is number
console.log(Number.isFinite(12))
console.log(Number.isInteger(12))

// Date methods
const now = new Date();
console.log(now);

console.log(new Date('Tue Dec 9 2023 19:57:13 GMT+0530' ))
console.log(new Date(2022,11,13,4,56,9));
console.log(new Date(3 * 24 * 60 * 60 * 1000))
const future = new Date('Tue Dec 19 2033 19:57:13 GMT+0530')
console.log(future);
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.getMilliseconds())
console.log(future.toISOString())
console.log(future.toDateString())
console.log(future.getTime())
console.log(new Date(2018615233000))

console.log(Date.now()) /*will get milliseconds of current time */

console.log(new Date(1702996841955)) /*will get complate time details from milliseconds */

future.setFullYear(2043)
console.log(future)

// Set timeout ,set interval

// setTimeout execute after speicific seconds
// setInterval execute after each interval specific seconds

setTimeout(()=>console.log('Here is ur pizza 🍕🍕'),3000);

console.log('Pizza is on the way..🍕')
// settimeout will execute in the back before reaching 3 seconds and will begin to execute other functions on the meantime

//if u wan to stop timeout function use below
const ingredients = ['olives','spinach'];
const pizzaTimer = setTimeout((ing1,ing2)=>{
    console.log(`Here is ur pizza 🍕🍕 using ${ing1} and ${ing2}`);
},3000,...ingredients);

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval  will execute after every 1 second
// setInterval(()=>{
//     const timeStamp = Date.now()
//     const currDate = new Date(timeStamp)
//     console.log(currDate)
// },1000);

