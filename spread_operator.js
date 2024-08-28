// spread operator...
// it copies all the values of an iterable data types like objects and arrays in a simply and easiest way..

const person = ['name', 'age', 'contact_number', 'civil_status', 'address'];
const duplicatePerson = [...person];
console.log(duplicatePerson); /* [ 'name', 'age', 'contact_number', 'civil_status', 'address' ] */

const subjects = {
    IT: 'programming',
    civil: 'calculus'
}

const allSubjects = {
    ...subjects,
    nursing: 'human anatomy'
}
console.log(allSubjects); /*{ IT: 'programming', civil: 'calculus', nursing: 'human anatomy' }*/

// spread operator in a function

const numbers = [1, 2, 3];
const sumation = sum(...numbers)
function sum(a, b ,c) {
    return a + b + c
}
console.log(sumation); /* 6 */