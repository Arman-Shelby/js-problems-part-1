// Function takes an array as a parameter
// Returns the average of the odd numbers in the array

function oddaverage(numbers) {
    const odds = [];

    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }   
    }

    if (odds.length === 0) return 0;

    const sum = odds.reduce((acc, val) => acc + val, 0);
    return sum / odds.length;
}

const numbers = [6541, 462, 5443, 44, 5455, 556, 5457, 458, 954];

const avg = oddaverage(numbers);
console.log('Average of odd numbers is:', avg);
