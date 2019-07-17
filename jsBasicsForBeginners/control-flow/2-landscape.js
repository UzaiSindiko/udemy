// Exercise - Landscape or Portrait
// JavaScript Basics for Beginners

console.time('Performance')
console.log(isLandscape(800, 700))
console.timeEnd('Performance')

function isLandscape (width, height) {
  return (width > height)
}
