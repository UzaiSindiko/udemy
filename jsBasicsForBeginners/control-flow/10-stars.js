// Exercise - Stars
// JavaScript Basics for Beginners

console.time('Performance')
showStars(5)
console.timeEnd('Performance')

function showStars (rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = ''
    for (let i = 0; i < row; i++) { pattern += '*' }
    console.log(pattern)
  }
}
