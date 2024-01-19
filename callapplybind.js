'use strict';

const branch1 = {
    branchname: 'crunch',
    foodorders:[],
    specialmenu:'sweet',
    // order:function() is same with below,
    order(name,price,cusname){
        console.log(`${name} ordered by ${cusname} for ${price} from ${this.branchname} their special is ${this.specialmenu}`);
        this.foodorders.push({orders:name});
        console.log(this.foodorders);
    }
}
branch1.order('plumcake',240,'noori')
branch1.order('blackforest',450,'noori')

const branch2 = {
    branchname:'munch',
   foodorders:[],
    specialmenu:'savouries'
   
}
const printfunc = branch1.order;

printfunc.call(branch2,'finger chips',150,'xyz')
console.log(branch2);

const branch3={
    branchname:'bunch',
    foodorders:[],
    specialmenu:'drinks'
}
printfunc.call(branch3,'banana milk shake',90,'uio');

// apply method
const orderData=['falooda',120,'hjgh'];
printfunc.apply(branch3,orderData);

// diifernce between call apply mehod apply method pass array as arguments

// in modern js we can use call wiith ... spread operator insted of apply method
printfunc.call(branch3,...orderData);

// call,apply method used to access method of another object

// bind methos used to create new function for an object from another object method

const orderBranch3 = printfunc.bind(branch3);
const orderBranchthree = printfunc.bind(branch3,'orange juice',50);
orderBranch3('orange juice',50,'sdf');
orderBranchthree('mary');
orderBranchthree('sara');

// Partial Application: You can use bind to create a partially applied function, where you pre-specify some arguments, and the function returned by bind is ready to take the remaining arguments when called.

// javascript
// Copy code
// function multiply(x, y) {
//     return x * y;
// }

// const multiplyByTwo = multiply.bind(null, 2);

// console.log(multiplyByTwo(5));  // 2 * 5 = 10

// challenge

const personDetail = {
    name:'steve',
    age:28,
    print(){
      console.log(`${this.name} age is ${this.age}`);
    }
}

personDetail.print();


