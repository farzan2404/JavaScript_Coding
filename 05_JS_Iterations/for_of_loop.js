
const superHeros = ['Flash', 'Superman', 'Batman', 'He-man', 'X-man']

for (const character of superHeros) {
    // console.log(`${character}`)
}


const greetings = "Hello! World!"

for (const greet of greetings) {
    // process.stdout.write(`${greet} `); // same printing in same line.
}


const map = new Map()

map.set("IN", "India")
map.set("USA", "United states of America")
map.set("UAE", "United Arab Emirates")

// for (const i of map) {
//     console.log(`${i}`)
// }

for(const [key, value] of map){
    // console.log(key, `:- `, value)
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}

// for of does not work on objects but works on array and string both.