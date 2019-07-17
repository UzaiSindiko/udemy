// Exercise - Count Truthy
// JavaScript Basics for Beginners

const array = [0, null, undefined, '', 2, 3]
console.time('Performance')
console.log(countTruthy(array))
console.timeEnd('Performance')

function countTruthy (array) {
  let count = 0
  for (let value of array) {
    if (value) { count++ }
  }
  return count
}
