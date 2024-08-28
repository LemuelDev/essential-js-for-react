const graham = ['cracker', 'condensed', 'evap']

// push - insert an element to the last index of an array.
graham.push('mango')
// [ 'cracker', 'condensed', 'evap', 'mango' ]

// pop - remove the last index of an array.
graham.pop()
// [ 'cracker', 'condensed', 'evap' ]

// splice - add or remove an element in an array in any order you want to place.

const months = ['jan', 'feb', 'april', 'june']

months.splice(2, 0, 'march') /* [ 'jan', 'feb', 'march', 'april', 'june' ]*/

months.splice(4, 1, 'may' ) /* [ 'jan', 'feb', 'march', 'april', 'may' ]*/


// includes - check whether a certain value is included in an object or array and returns a boolean.

const isFebIncluded = months.includes('feb')
console.log(isFebIncluded); /* true */

// slice - returns a shallow copy of an array by indicating what index you will start to copy and the index of the last element you want to copy.

const reducearray = months.slice(1, 4) 
//  [ 'feb', 'march', 'april' ]

console.log(months.slice(1, 3));
//  [ 'feb', 'march']
console.log(months.slice(2));
// [ 'march', 'april', 'may' ]


// there's more to learn something new about this topic so better to read, research, and apply all those array methods.