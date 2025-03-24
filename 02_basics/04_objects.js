// const tinderUser = new Object()  --> singleton object
const tinderUser = {} // --> non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Shanks",
            lastname : "Rathi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//important <<<<<<<<<<<<<<<-->>>>>>>>>>>>>>>>>>>>> 
// const obj3 = Object.assign(obj1, obj2) // writes into the first parameter object the other objects
// const obj4 = Object.assign({},obj1, obj2) // writes into the first parameter object the other objects
const obj5 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);
// console.log(obj4);
// console.log(obj1);
console.log(obj5);

console.log(tinderUser);

console.log(Object.keys(tinderUser)) //give all keys of the given object
console.log(Object.values(tinderUser)) //give all values of the given object
console.log(Object.entries(tinderUser)) //makes an array of key-value pairs and returns whole array of such items
//returns array of keys/values

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//checks whether the object contains this type of property in it

const course = {
    coursename : "js in hindi ",
    price : "999",
    courseInstructor : "Maverick"
}

//de-structuring objects
//the first parameter is what property you want to extract and the second one is the alias name for the desired property ; the rhs of equal to is the object from which property has to be extracted
const {courseInstructor : instructor} = course

console.log(instructor);

//intro to json
// {
//     name : "Shanks",
//     coursename : "js in hindi",
//     price : "free"
// }
// OR WE GET ARRAY OF OBJECTS
// [
//     {},
//     {},
//     ...
// ]