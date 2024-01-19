// A closure is a function having access to the parent scope, even after the parent function has closed.
// A close make sure a function doesnot loose connection tovariables that existed at the function;s birth place.

// we cant create closure manually , it is a internal property of a function
const passengerCount=function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(passengerCount);
    }
}
const count = passengerCount();
count();
count();
count();
console.dir(count);

// closure example 2, without returning function

let f;
const g= function(){
    let a=23;
    f=function(){
        console.log(a*2);
    }

}
g();
f();

const h= function(){
    let a=44;
    f=function(){
        console.log(a*2);
    }
}
h();
f();

console.dir(f);

// example3 - timer function
const boardPassengers = function(n,wait){
    const perGroup=n/3;
    setTimeout(function(){
     console.log(`we are now boarding all ${n} passengers`);
     console.log(`there are 3 groups each with ${perGroup} passengers`);
    },wait*1000);
    console.log(`will start boarding in ${wait} seconds`);
}
// const perGroup=1000;  it will take this value if pergroup ins not inside board passenger function
boardPassengers(180,3);

// coding challenge
(function(){
    const header =document.querySelector('h1');
    header.style.color='red';

    document.body.addEventListener('click',function(){
        header.style.color='blue';
    })
})();