const score = 400

const balance = new Number(100)
console.log(balance)

console.log(typeof balance.toString())
console.log(balance.toString().length)
//toFixed() used to fix the precision of number
console.log(balance.toFixed(2))

const otherNumber = 23.8979
const otherNumberTwo = 1123.8979

//takes the first parameter number of digits.
console.log(otherNumber.toPrecision(3));
console.log(otherNumberTwo.toPrecision(3));

const hundreds = 1000000
//converts into readable format-depends on country
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++ MATHS ++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(-4.8));
// console.log(Math.ceil(-4.8));
// console.log(Math.floor(-4.8));

//gives float random values between 0 and 1 by default
console.log(Math.random());
console.log((Math.random()*10) + 1);

//to have value between a range
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1)) + min);




