
// destructuring..
// it helps to unpack values in an object or arrays in a much faster and easier way.

const person = ['head', 'shoulders', 'toes', 'feet']

const [top, midtop, midbot, bottom] = person;

console.log(top); /* head */

console.log(top, midtop); /* head shoulders */

console.log(top, midtop, midbot, bottom); /* head shoulders toes feet */