const today = new Date();
const date = new Date ('2062-10-19');

console.log(date.getMonth()); // Months are 0-indexed, so 10 is November
console.log(date.getDay());

const specificDate = new Date(2023, 9, 19); // October is month 9 (0-indexed)
console.log(specificDate);
specificDate.setMonth(10); // Set to November
console.log(specificDate.toLocaleDateString('en-GB')); // Outputs the date in a readable format


//unix epoch time

const unixEpoch = new Date(0); // January 1, 1970
console.log(unixEpoch.toLocaleDateString('en-GB')); // Outputs the date in a readable format    