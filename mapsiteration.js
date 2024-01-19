// Map values are array of arrays.
const question = new Map([
    ['question', 'what is your fav. color?'],
    [1,'red'],
    [2,'blue'],
    [3,'orange'],
    ['answer',1],
    [true,'Correct'],
    [false,'Wrong']
]);
console.log(question);

// if you have an object u can include that object as values to the map by
//  using Object.entries(objname)
const Openinghoursobj={
    'mon':12,
    "tue":11,
    "wed":10,
    "thu":12,
    "fri":14
}
console.log(Object.entries(Openinghoursobj));

const Openingtimemap = new Map(Object.entries(Openinghoursobj));
console.log(Openingtimemap);

// map is ierable , but object is not iterable if we have to loop over object 
// we use Object.entries(objname), for eg. for([key,value] of Object.entries(objname))

// Quiz app
// for map,
console.log(question.get('question'));
for([key,value] of question){
  if(typeof key === 'number')console.log(`Option ${key} : ${value}`);
//   const answer=Number(prompt('Your Answer'));
const answer =1;
//   console.log(answer);
  console.log(question.get(question.get('answer')===answer));
}

// similar to sets u can convert map into array using[...mapname]
console.log([...question])
console.log([...question.keys()])
console.log([...question.values()]);