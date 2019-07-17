// Exercise - Prime Numbers
// JavaScript Basics for Beginners

console.time('Performance')
showPrimes(10)
console.timeEnd('Performance')

function showPrimes (limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number)
  }
}

function isPrime (number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) { return false }
  }

  return true
}
