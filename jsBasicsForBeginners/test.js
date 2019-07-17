// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number' message

/*
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') return NaN
    else if (input%3 === 0 && input%5 === 0) return 'FizzBuzz';
    else if(input%3 === 0) return 'Fizz';
    else if(input%5 === 0) return 'Buzz';
    else return input;
}*/

// Speed Limit = 70
// 5--> 1 point
// more than 12 points -> suspended
checkSpeed(74);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (typeof speed !== 'number') return NaN
    else if (speed < speedLimit + kmPerPoint){
        console.log('Ok');
    }
    else {
        const points = Math.floor((speed-speedLimit)/kmPerPoint);
        if (points>=12)
            console.log('License suspended');
        else {
            console.log('Points: ', points);
        };
    };
}
