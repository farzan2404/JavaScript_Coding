let marvel_heros = ['IronMan', 'Thor', 'Captain America']
let dc_heros = ['Superman', 'Batman', 'Flash']

// Bad practics, array will store array only. Dc_heros will acts as 4th element.
// marvel_heros.push(dc_heros)  

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);



// Concat function.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);



// this ... function will concatenate the arraes into into array. This is called spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// Flat function is used to merge the sub array in to parent array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))

// This .from converts the string into an array format.
console.log(Array.from("Hitesh"))


// In this objects will be converted into an array
const obj = { name: "hitesh" };
const keysArray = Object.values(obj);
console.log(keysArray); 




// this .of method will convert variables into an array.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));