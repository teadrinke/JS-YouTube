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

//----------OPERATIONS--------------------
let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " shanks"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2")
//numbers after string are converted to string
//where as numbers before string are added normally

// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter)
