let a = 5; 
let b = 7;

console.log('Before swap: a =', a, ', b =', b);

const temp = a;
a = b;
b = temp;


console.log('After swap: a =', a, ', b =', b);

//------------------------
console.log('-------------------------');
let x = 5;


let y = 7;
console.log('Before swap using destructuring: x =', x);
[x,y] = [y,x];

console.log('After swap using destructuring: x =', x, ', y =', y);