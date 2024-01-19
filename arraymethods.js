const arr1=['a','b','c','d','e'];
// slice method - use to remove elemnt from array,does not change original array
// from which position need to remove element
console.log(arr1.slice(2));
// from position 2 to 3 index. 
console.log(arr1.slice(2,4));
console.log(arr1.slice(-1));
console.log(arr1.slice(1,-2));
console.log(arr1);

// splice method -used to remove element from array , it will change original array
// from this index,count of elemnts
// console.log(arr1.splice(2,2));
// console.log(arr1.splice(-1));
// console.log(arr1);

// reverse method - will change original array
const arr2=['j','i','h','g','f']
console.log([...arr1,...arr2.reverse()]);

// concat method - will not change original array
console.log(arr1.concat(arr2))
console.log([...arr1,...arr2]);

// join method
console.log(arr1.concat(arr2).join('*'));

// at method - is a new ES2022 
// at method can be used in both string and array
// at method can be use to find elemen tof and array by index and method chaining
const number = [12,23,34,45,76]
console.log(number[0]);
console.log(number.at(0));
// to find last element of an array
console.log(number[number.length-1]);
console.log(number.slice(-1)[0]);
console.log(number.at(-1));

// in string at mehod
console.log('javascript'.at(2));

// find method - used to find first element in the array which satisy the condition
// findIndex method - used to find index of first element in the array which satisy the condition
// indexOf method just find index of provided value from array

const category= ['electronics','clothes','shoes','watches','shoes'];

const val = prompt('Enter your search to delete');
// we use splice bcoz it will change value of original array
console.log(category.indexOf(val))
const catname = category.find(el=>el===val);
console.log(catname);
const categ=category.findIndex((el)=>val===el)
category.splice(categ,1);
console.log(category)


// Sort method-will sort original array

// string sort
category.sort();
console.log(category);

// numbers sort
// The function takes two parameters (a and b) representing two elements of the array. The function returns a negative value if a should be sorted before b, a positive value if b should be sorted before a, and zero if they are equal. In this case, a - b ensures ascending numeric sorting.
// ascending order
const num = [10,2,5,3,1];
num.sort((a,b)=>a-b)
console.log(num);
num.sort((a,b)=>b-a)
console.log(num);

// some,every method - similar like includes method but with condition

const anygt5 = num.some(n=>n>5);
console.log(anygt5);

const allgt5 = num.every(n=>n>5);
console.log(allgt5);

console.log(num.includes(5));

// flat,flatmap method used in ndested array to flat the array
// flat method
const numarr=[[1,2],3,4,5,[6],7,8]
numarr.flat();
console.log(numarr.flat());

// for deep nested array we can use depth in flat method

const numarr1=[[[1,2],3],4,5,[6],7,8];
console.log(numarr1.flat(2));

// -----flatMap method---------
// Example 1: Mapping and Flattening Arrays
const numbersarr = [1, 2, 3, 4];

const squaredAndDoubled = numbersarr.flatMap((num) => [num * num, num * 2]);

console.log(squaredAndDoubled);
// Output: [1, 2, 4, 4, 9, 6, 16, 8]

// Example 2: Flattening Arrays of Arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArrays.flatMap((arr) => arr);

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6]

// Example 3: Using map and flat in separate steps
const numbers2 = [1, 2, 3, 4];

const squaredAndDoubledSeparate = numbers2
  .map((num) => [num * num, num * 2])
  .flat();

console.log(squaredAndDoubledSeparate);
// Output: [1, 2, 4, 4, 9, 6, 16, 8]

// Creating arrays programmatically using fill

// both are similar
const narray= [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7))

// Empty arrays + fill method
// new Array is a constructor
const x= new Array(7);
console.log(x);

// console.log(x.map()=>5) will not work or display anything

// will fill all 7 empty elements to 1
// x.fill(1);
// console.log(x);

// will fill from 3rd index as 1
// x.fill(1,3);
// console.log(x);

// will fill from 2nd index to 3rd index as 23
x.fill(23,2,4)
console.log(x);

// Array.from - creates a new array from iterables such as string,map,set

// will fill all 7 elements
const y=Array.from({length:7},()=>1);
console.log(y);

const z=Array.from({length:7},(_,i)=>i+1);
console.log(z);

// Math.floor or Math.trunc
const roleDice100 = Array.from({length:100},()=>Math.trunc(Math.random()*100+1));
console.log(roleDice100);

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];*/


