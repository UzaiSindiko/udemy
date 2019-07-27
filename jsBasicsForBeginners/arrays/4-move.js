
const numbers = [1, 2, 3, 4]

const output = move(numbers, 1, 2)

console.log(output)

function move (array, index, offset) {
  const position = index + offset
  // Exception handling if the position is outside the array range
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.')
    return
  }
  // Clone of the original array using spread syntax (...)
  const output = [...array]
  // Remove the element of the array using splice() and store it on the variable 'element'
  const element = output.splice(index, 1)[0]
  // Put the element on the new position
  output.splice(position, 0, element)
  return output
}
