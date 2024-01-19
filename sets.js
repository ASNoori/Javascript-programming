const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);
console.log(orderSet);

console.log(new Set('Jammu'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Pizza');
console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);

for(const order of orderSet) console.log(order);

// Example
const staff=['waiter','manager','chef','waiter','manager','waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// To Covert set into an array 
console.log([...new Set(['a','a','b','c','b'])]);
console.log([...new Set(staff)]);
console.log([...staffUnique ]);

console.log(new Set(staff).size);
console.log(new Set(['l','o','v','v','e']).size);
console.log(new Set('love').size);