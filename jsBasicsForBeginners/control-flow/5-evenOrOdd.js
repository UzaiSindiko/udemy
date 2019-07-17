// Exercise - Even and Odd
// JavaScript Basics for Beginners

console.time('Performance')
showNumbers(10)
console.timeEnd('Performance')

function showNumbers (limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    console.log(i, message)
  }
}
