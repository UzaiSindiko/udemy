// Exercise - FizzBuzz
// JavaScript Basics for Beginners

const output = fizzBuzz(15)
console.time('Performance')
console.log(output)
console.timeEnd('Performance')

function fizzBuzz (input) {
  if (typeof input !== 'number') { return NaN }
  // If the number is divisible by 3 & 5, we get 'FizzBuzz'
  if ((input % 3 === 0) && (input % 5 === 0)) { return 'FizzBuzz' }
  // If the number is divisible by 3, we get 'Fizz'
  if (input % 3 === 0) { return 'Fizz' }
  // If the number is divisible by 5, we get 'Buzz'
  if (input % 5 === 0) { return 'Buzz' }
  return input
}
