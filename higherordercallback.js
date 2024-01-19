'use strict';

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}

const UpperFirstLetter = function(str){
    const[First,...others]= str.split('');
    return[First.toUpperCase(),...others].join('');
}
// higher order function
const transformer = function(str,fn){
   console.log(`Original string,${str}`);
   console.log(`transformed string,${fn(str)}`);
   console.log(`function name,${fn.name}`)
console.log(`${fn(str)}`)
}
transformer('Javascript is the best !',oneWord)
transformer('javascript is the best!',UpperFirstLetter);

// JS callbacks all the time
const hi5 = function() {
    console.log('✋');
}
document.body.addEventListener('click',hi5);