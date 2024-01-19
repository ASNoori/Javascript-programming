const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
}
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

for(item of menu){
    console.log(item); /*displays current element in loop*/ 
}

for([i,el]of menu.entries()){
    console.log(`${i} is ${el}`)
}


// Advanced object literals
const restaurantDetails = {
    name:'xxx',
    menu:'yyy',
} /*{} curly brace is object literals*/

// Enhanced object literals
const weekdays = ['mon','tue','wed','thu','fri'];
const openingHours={
    [weekdays[0]]:{
        open:12,
        close:22
    }
}
const restaurantDetails1 = {
    name:'xxx',
    menu:'yyy',
    openingHours,
    waitingtime(n){
        // function
    }
}
