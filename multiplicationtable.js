'use strict';
const multiplyTable = (n) =>{ 
let tableNumber = 1;
 while(tableNumber <= n){
    for(let i=1;i<=10;i++){
        console.log(`${i} * ${tableNumber} = ${i*tableNumber}`);
    } 
    // console.log(tableNumber+1);
    tableNumber++;
  }

}
multiplyTable(5);
