// *************************Stack and Heap*****************

// Stack stores all the primitives datatypes

let myName = "Farzan"
let myName2 = myName

myName2 = "Mohammed"

console.log(myName);
console.log(myName2);

// Heap stores all the non-primitives datatypes

let user = {
    userId: 1,
    userName: "Farzan"
}

let user2 = user;

user.userName = "Mohammed Farzan"

console.log(user.userName);
console.log(user2.userName);