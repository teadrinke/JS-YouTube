const user = {
    username : "Shanks",
    price : 999, 

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

//scope represents the current context(the braces; what variables are there inside it; what values it contain); 'this' keyword is used to represent it

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); //gives empty since in node environment

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username); //this.username works only for the objects
// }
// chai()

// const chai = function(){
//     let username = 'Shashank'
//     console.log(this.username);
// }


const chai = () => {
    let username = 'Shashank'
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {return num1+num2} //explicit return

//implicit return statements
// const addTwo = (num1, num2) => num1+num2

//if curly braces are used then we have to use return 
//but if parenthesis is used no need of 'return' writing
// const addTwo = (num1, num2) => (num1+num2)


const addTwo = (num1, num2) => ({username : "shanks"})
console.log(addTwo(3,4));
