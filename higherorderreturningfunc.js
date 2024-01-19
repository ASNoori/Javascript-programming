'use strict';

// const greeting = function(greet){
//    return function(name){
//     console.log(`${greet} ${name}`);
//    }
// }
const greeting = greet => name=> console.log(`${greet} ${name}`);
const greethey=greeting('Hey');
greethey('Noori');

greeting('hey')('xyz');