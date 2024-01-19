'use strict';
// IIFE - immediately invoked function expression - is apetter created by developers to exectute function only once.
(function() {
    console.log('this function wil exceute once');
    const a=23;
})();
// console.log(a); cant access values inside IIFE beacuse it is local scopr,private,encapsulated.in modern js we use let,const for local scope or private access
{let a=56;var b=34} console.log(b);
(()=>console.log('this will also execute once'))();

