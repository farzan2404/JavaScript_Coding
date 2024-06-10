const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// this keyword refers to the current context. In objects we see, this is useful, but not in functions
// because this in functions may return undefined for any accessed variables.


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// Way 1 of declaring the function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// Way 2 of declaring the function, we hold the function in a variable.

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai() // By calling we get {} in the terminal because global context is empty.


// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )
// Implicit return.


// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()