//Year will be a leap year if it is divisible by 4
//except for end of century years, which must be divisible by 400

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  } 
    return false;   
}
const year = 2051;
const leapYearCheck = isLeapYear(year);
console.log(year + ' is a leap year:', leapYearCheck);  

//