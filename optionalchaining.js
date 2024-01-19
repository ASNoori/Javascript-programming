const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingTime = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurantInfo = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingTime
}
// for deep object, arrays use optional chaining '?.'
console.log(restaurantInfo.openingTime?.[weekday[0]]?.open ?? 'closed');
// ?? nullish collaesicing operator - if value is null or undefined it restrurn another value eg. null ? 'closed'
// || , && short circuting - if value is falsy 0,'',null,defined - || returns next value
// if value is true- && returns next value