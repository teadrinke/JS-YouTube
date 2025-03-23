const marvel_heroes = ['thor', 'ironman', 'spiderman']
const dc_heroes = ['superman', 'flash', 'batman']

// marvel_heroes.push(dc_heroes)
//push -> pushes the new element into the array in place
//concat -> merges the two arrays and returns the concatenated array
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

//'spread' operator
const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);

const another_array = [1,2,3, [4,5,6],7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shanks")) 
console.log(Array.from("Shanks")) 
console.log(Array.from({name : "Shanks"}))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));

