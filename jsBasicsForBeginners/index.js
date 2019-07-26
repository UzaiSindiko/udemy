// This is my first JavaScript code!
console.log('Hello World')

// Variables
// 1. Cannot be a reserved keyword
// 2. Should be meaningful
// 3. Cannot start with a number (1name)
// 4. Cannot contain a space or hyphen (-)
// 5. Are case-sensitive
let name = 'Andreas' // String Literal
let firstName
let familyName = null
let age = 32 // Number Literal
let isApproved = true // Boolean Literal
const interestRate = 0.3 // Const value cannot be change

// Object
let person = {
  name: 'Andreas',
  age: '32'
}

// Dot Notation
person.name = 'John'

// Bracket Notation
let selection = 'name'
person[selection] = 'Mary'

console.log(person.name)

// Array
let selectedColors = ['red', 'blue']
selectedColors[2] = 'green'
console.log(selectedColors.length)

// Function - Performing a task
function greet (name, lastName) {
  // Display a message of a constant
  console.log('Hello ' + name + ' ' + lastName)
}

// Calculating a value
function square (number) {
  return number * number
}

greet('John', 'Smith')
console.log('Calculation: ' + square(2))

// Increment (++)
let x = 10
let y = 10
console.log(++x)
// Decrement (--)
console.log(--y)

// Relational operators
let compare = 1
console.log(compare > 0)
console.log(compare >= 1)
console.log(compare < 1)
console.log(compare <= 1)

// Equality operators
console.log(compare === 1)
console.log(compare !== 1)

// Strict Equality (Type + Value)
console.log(1 === 1)
console.log('1' === 1)

// Loose Equality (Value)
console.log(1 === 1)
console.log('1' == 1)
console.log(true == 1)

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110
// Ternary operators
let type = points > 100 ? 'gold' : 'silver'
console.log(type)

// Logical AND (&&) --> returns true if both operands are TRUE
let highIncome = true
let goodCreditScore = true
let eligibleForLoan = highIncome && goodCreditScore
console.log('Eligible', eligibleForLoan)

// Logical OR (||) --> returns true if one of the operands is TRUE
eligibleForLoan = highIncome || goodCreditScore

// NOT (!) --> would give us the opposite result
let applicationRefused = !eligibleForLoan
console.log('Application Refused', applicationRefused)

// Falsy value (false) --> undefined, null, 0, false, '', NaN
// Anything that is not Falsy -> Truthy

let userColor = 'red'
let defaultColor = 'blue'
let currentColor = userColor || defaultColor
console.log(currentColor)

// 1 = 00000001
// 2 = 00000010
// R = 00000011
console.log(1 | 2) // Bitwise OR
console.log(1 & 2) // Bitwise AND

// Use as permission --> Read, Write, Execute --> BitWise Operators
const readPermission = 4 // 00000100
const writePermission = 2 // 00000010
const executePermission = 1 // 00000001

let myPermission = 0
myPermission = myPermission | readPermission | writePermission

let message = (myPermission & readPermission) ? 'yes' : 'no'
console.log(message)

// If ... else
let hour = 10

if (hour >= 6 && hour < 12) {
  console.log('Good morning')
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon')
} else {
  console.log('Good evening')
}

// switch .. case
let role = 'guest'

switch (role) {
  case 'guest':
    console.log('Guest User')
    break
  case 'moderator':
    console.log('Moderator User')
    break
  default:
    console.log('Unknown User')
}

// For loops
for (let i = 0; i < 5; i++) {
  console.log('Hello Loop!', i)
}

// While loops
let u = 0
while (u <= 5) {
  if (u % 2 !== 0) console.log(u)
  u++
}

// do-while loops
let e = 0
do {
  if (e % 2 !== 0) console.log(e)
  e++
} while (e <= 5)

// for-in loops : to iterate the properties of an object
const entry = {
  name: 'Andreas',
  age: 32
}

for (let key in entry) {
  console.log(key, entry[key])
}

// for-of loops : to iterate items on an array
const colors = ['red', 'green', 'blue']
for (let color of colors) {
  console.log(color)
}

// Truthy & Falsy Value
const isTruthy = 'Andreas'
if (isTruthy) console.log('Hello')

// Object Literal - key-value pairs
const circle = {
  radius: 1, // properties
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function () { // function
    console.log('draw')
  }
}

circle.draw() // Method

// Factory Function (using Camel Notation) -> produce objects
function createCircle (radius) {
  return {
    radius, // if key-value pairs are same, you can write it radius, instead of radius: radius
    draw () { // another way to write function inside an object
      console.log('draw')
    }
  }
}

const circle1 = createCircle(1)
console.log(circle1)

// Constructor Function (using Pascal Notation) -> produce objects
function Circle (radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

// this operator creates an empty object, return the parameter of object from the function
const circle2 = new Circle(1)

// Two ways to iterating an array -> for-of and forEach()
let numbers = [1, 2, 3]
// Using for-of
for (let number of numbers) {
  console.log(number)
}
// Using forEach()
numbers.forEach((number, index) => { console.log(index, number) })

// Joining arrays
const joined = numbers.join(',')
console.log(joined)

// Split a string to an array
const messages = 'This is my first message'
const parts = messages.split(' ')
console.log(parts)

// How to sort an array -> use sort() or reverse()
numbers = [2, 3, 1]
console.log(numbers.sort())
console.log(numbers.reverse())

// How to sort object in an array
let courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javaScript' }
]
console.log(courses.sort(function (a, b) {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
}))

// Testing the elements of array using -> every() and some()
numbers = [1, -1, 2, 3]
const allPositive = numbers.every(function (value) { return value >= 0 })
console.log('every() -> all element must return true: ' + allPositive)

const atLeastOnePositive = numbers.some(function (value) { return value >= 0 })
console.log('some() -> one element is true is enough : ' + atLeastOnePositive)

// Filtering an array using filter()
numbers = [1, -1, 2, 3]
const filtered = numbers.filter(function (value) { return value >= 0 })
console.log('Filtered array: ' + filtered)
