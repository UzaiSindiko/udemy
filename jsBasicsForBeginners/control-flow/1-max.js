// Exercise - Max of Two Numbers
// JavaScript Basics for Beginners

let number = max(5, 3)
console.time('Performance')
console.log(number)
console.timeEnd('Performance')

function max (a, b) {
  return (a > b) ? a : b
}
