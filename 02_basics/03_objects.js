//singleton
//Object.create()

// object literals
const mySym = Symbol("key1")
// keys are processed as strings so need to explicitly mention it
const JSUser = {
    name: "Shanks" ,
    "full name" : "Shanks Rathi",
    [mySym] : "mykey1",
    age : 23,
    location : "California",
    email : "shanks@own.com",
    isLoggedIn : false,
    lastLoginDays: ["Mon", "Sat"]
}

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["full name"]);
//how to use symbol as key --> interview question
console.log(JSUser[mySym]);

JSUser.email = "hitesh@chatgpt.com" // we can change the value of email or any attribute
//how to lock the the values of the attributes
// Object.freeze(JSUser)
JSUser.email = "shanks@chatupi.com"
console.log(JSUser);

JSUser.greetings = function(){
    console.log("Hello JS User");
}
// const nam = JSUser["name"]
JSUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JSUser.greetings); //this gives refernce to function
console.log(JSUser.greetings()); // this executes function
console.log(JSUser.greetingsTwo());


