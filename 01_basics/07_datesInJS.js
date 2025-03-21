// Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("09-01-2069")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

//console.log(myCreatedDate.getTime())

//convert milliseconds time to seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()); //starts from 0(Jan)

console.log(newDate.toLocaleString('default', {
    weekday : "long"
}))



