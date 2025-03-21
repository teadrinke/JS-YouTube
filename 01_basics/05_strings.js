const name = "Shanks "
const repoCount = 10

console.log(name + repoCount); //old method
console.log(`my name is ${name} and my repo count is ${repoCount}`); //modern method --> string interpolation

const gameName = new String("Shanks")

console.log(gameName[0])
console.log(gameName.__proto__);
//the above dunder method helps to get the various methods of the string

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

//substring() doesnot allow negative values as parameters
const newString = gameName.substring(0,4);
console.log(newString)

//slice() allows negative values as parameters
const anotherString = gameName.slice(0,2);
console.log(anotherString)

const newStrinOne = "   shanks   "
console.log(newStrinOne);
console.log(newStrinOne.trim())

const url = "https://shashank.com/shashank%20rathi"

console.log(url.replace('%20', '-'))

//returns true if string contains the given string;
//otherwise false
console.log(url.includes('haxh'));
