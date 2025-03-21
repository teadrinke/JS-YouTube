// Primitive: these are call by value which means copy is made and then changes are made into that copy
// 7 types : String, Number, Boolean, null (it means empty doesnot refer to zero), undefined (means variable is declared but what value to be put inside it is not yet done), Symbol(to make component unique), BigInt

const id = Symbol('123')
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 324846961685257957n

// Reference (Non primitive) => they are called by reference
// Array, Objects, Functions

const ch = ["Thomas Shelby", "Micheal Corleone", "Ippo Makanouchi"] 
let myObj = {
    name: "Shanks",
    age: 23
}

const myfunc = function(){
    console.log("hello...");
}

console.log(typeof bigNumber);
console.log(typeof myfunc);
