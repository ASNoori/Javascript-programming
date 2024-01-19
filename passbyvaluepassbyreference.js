'use strict';
// in javascript,there is no pass by refernevn though passing an object in function is refernce creates a mempry address its still a value.
// number,string,boolean,null,undefined,symbol-promotive data type
// object -non primitive data type
const restaurantname = 'Delicious';
const menulist= {
    name:'noodles',
    price:100
}

const orderFood = function(resname,order){
   resname='Cookd';
  order.name='schezwan'+ order.name;
  if(order.price===100){
    alert('coupon applied')
  }
  else{
    alert('coupon not applied')
  }
} 

// orderFood(restaurantname,menulist);
// here u will get coupon applied output
console.log( restaurantname,menulist);

const newPrice = function(newprice){
   newprice.price= newprice.price * 3;
}
newPrice(menulist);
orderFood(restaurantname,menulist);
// here u will get coupon not applied output

// if we try change passed value pnly object value wil change the original because it is refernce it make change in original but in other primitive datatypes it pass copy od that value so it wont change original.