'use strict';
const evenNumber = (n) =>{
    const evenArray =[];
 for(let i=0;i<=n;i++){
    if(i%2===0){
       evenArray.push(i);
    }
 }
 return evenArray;
}

console.log(evenNumber(50));
