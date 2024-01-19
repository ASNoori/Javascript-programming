'use strict';

const orders=[]
const foodOrder = function(dish,count=1,price=count*25){
   const order = {
    dish,
    count,
    price
   }
   orders.push(order);
   console.log(orders);
}

foodOrder('briyani',2,500)
foodOrder('icecream',4,340)
foodOrder('dessert')
foodOrder('cake',3)
foodOrder('cake',undefined,30)