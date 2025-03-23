
const myArr = [0,1,2,3,5]
//can contain different type of data items as well

const myarr2 = new Array(1,2,3,4)
console.log(myArr[0]);
//Js copy operations create shallow copies
//Shallow copy ==> a shallow copy of an object is a copy whose properties share the same references(point to the same underlying values)
//Deep copy ==> a deep copy of an object is a copy whose properties donot share the same references(point to the same underlying values) 

//Array methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop() //removes the last element

// myArr.unshift(9) // adds the value to the front; very bad method since we have to shift all the values by 1 place backwards
// myArr.shift() //removes the element at the start place

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() //binds all values of the array and returns in form of string
// console.log(newArr);
// console.log(typeof newArr);


//important operation --interview (difference between slice and splice)
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)//it returns the copy of section of the array 

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) //it removes the portion of start to end(included) from the array in place; hence array gets shortened
console.log(myn2)
console.log("C ", myArr);





