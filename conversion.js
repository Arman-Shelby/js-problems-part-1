// 12 inch  = 1 feet 

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const shuvoHeight = inchToFeet(75);
console.log('Shuvo height in feet is:' , shuvoHeight);

     
function inchToFeet2(inch) {
    const feetFraction =inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch';
    return result;

}

const shuvoHeight2 = inchToFeet2(75);

console.log('Shuvo height in feet and inch is:', shuvoHeight2);


function mileToKm(miles) {
    const km = miles * 1.60934;
    return km;
}

const distance = mileToKm(5);
console.log('Distance in km is:', distance);


function kmToMile(km) {
    const miles = km / 1.60934;
    return miles;
}  
const distanceInMile = kmToMile(8);
console.log('Distance in miles is:', distanceInMile);


function meterToCm(meters) {
    const cm = meters * 100;
    return cm;
}   
const heightInCm = meterToCm(1.75);
console.log('Height in cm is:', heightInCm);


function cmToMeter(cm) {
    const meters = cm / 100;
    return meters;
}   
const heightInMeter = cmToMeter(175);
console.log('Height in meters is:', heightInMeter); 


function kgtoGram(kg) {
    const gram = kg * 1000;
    return gram;
}   
const weightInGram = kgtoGram(70);
console.log('Weight in grams is:', weightInGram);
