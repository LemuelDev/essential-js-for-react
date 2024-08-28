// array_iterators 
// looping through an array but with a specific task to do..
// built-in functions in js. (map, filter, some, reduce, )

let students = [
    {
        name: 'lemuel',
        age: 18,
        isMale: true,
        status: "single",
        paid: 500
    },
    {
        name: 'clarence',
        age: 19,
        isMale: true,
        status: "single",
        paid: 0
    },
    {
        name: 'yesha',
        age: 18,
        isMale: false,
        status: "single",
        paid: 500
     }
]

//  map- 
// const newStudents = students.map((student, index) => {
//      console.log( index, student);
// })
/*0 { name: 'lemuel', age: 18, isMale: true, status: 'single', paid: 500 }
1 {
  name: 'clarence',
  age: 19,
  isMale: true,
  status: 'single',
  paid: 500
}
2 { name: 'yesha', age: 18, isMale: false, status: 'single', paid: 500 }
 */


// filter - filtering out the uneccesary values inside an array. 

 const ageIsAbove18 = students.filter((student) => student.age > 18)
/* [
  {
    name: 'clarence',
    age: 19,
    isMale: true,
    status: 'single',
    paid: 500
  }
] */

const paidStudents = students.filter((student) => student.paid)
/*[
  {
    name: 'lemuel',
    age: 18,
    isMale: true,
    status: 'single',
    paid: 500
  },
  {
    name: 'yesha',
    age: 18,
    isMale: false,
    status: 'single',
    paid: 500
  }
] */




//  some - it will return a boolean value if he sees the argument is in the array or not

const students_below_25 = students.some((students) => students.age == 20)
 /* false */


// find - it will return the first value it will see if the argument is true.
const above18 = students.find((students) => students.age == 18);
/*{ name: 'lemuel', age: 18, isMale: true, status: 'single', paid: 500 } */


// reduce - it is like a loop but it is used mostly when calculating total.

const total = students.reduce((accumulator, student) => {
    accumulator += student.paid
    return accumulator
}, 0) 
// 1000
console.log(total);