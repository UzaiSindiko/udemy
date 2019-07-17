// Exercise - Demerit Points
// JavaScript Basics for Beginners

function checkSpeed (speed) {
  const speedLimit = 70
  const kmPerPoint = 5
  if (typeof speed !== 'number') return NaN
  else if (speed < speedLimit + kmPerPoint) {
    console.log('Ok')
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) { console.log('License suspended') } else {
      console.log('Points: ', points)
    }
  }
}

// Speed Limit = 70
// 5--> 1 point
// more than 12 points -> suspended
console.time('Performance')
checkSpeed(74)
console.timeEnd('Performance')
