// map is a data structure with key value pair like object
// diff. b/w object and map is object contain key mostly string but map key can ba any type

const rest = new Map();
// set method used to set values, and also can see values from map
rest.set('name','jammu');
rest.set(1,'noori');
rest.set(3,'ni');
console.log(rest.set(2,'sharfu'));

rest.set('categories',['Italian','Pizzeria','Vegan','Organic'])
     .set('open',11)
     .set('close',23)
     .set(true,'We are Open :D')
     .set(false,'We are Closed :C');

// get values from map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(2));

const time=8;
console.log(rest.get(time > rest.get('open')) && time < rest.get('close'));

// has method
console.log(rest.has('categories'));

// delete method
rest.delete(3)
console.log(rest);

// We can set array as key value
console.log(rest.set([1,2],'Test'));

console.log(rest.get([1,2]));  /* output in undefined coz it has two reference*/

const arr = [1,2];
console.log(rest.set(arr,'Testing'));
console.log(rest.get(arr)); /* because it has only one reference */

rest.set(document.querySelector('h1'),'heading');
console.log(rest);
console.log(rest.size);