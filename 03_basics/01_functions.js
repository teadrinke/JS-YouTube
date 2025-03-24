function sayMyName(){
    console.log("Shanks")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
//     return number1+number2;
// }

// const result = addTwoNumbers(1,null);
// console.log(`Result is ${result}`);

//undefined is equivalent to false

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in ;)`
}

// console.log(loginUserMessage("Shanks"))
console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500));
//200 goes to val1; 400 goes to val2 and rest of the things go to num1

const user = {
    username: "shanks",
    price : 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)