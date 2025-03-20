let score = "33abc";
score = null
score = undefined

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" -> NaN
// true/false -> 1/0

let isLoggedIn = 1 
isLoggedIn = ""
isLoggedIn = "Shanks"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1-> true
// "" => false; 
// "Shashank" => true

let someNumber = 33

let stringNumber = String(33)
console.log(typeof stringNumber)