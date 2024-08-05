// const coding = ["JS", "Java", "C++", "C#", "Swift"]

// coding.forEach(function (value) {
// //    console.log(`${value}`)
// })


// // Arrow function 
// coding.forEach((item) =>{
//     // console.log(`${item}`)
// })


// function printMe(item){
//     // console.log(`${item}`)
// }

// coding.forEach(printMe) //calling printMe from her


// coding.forEach((item, index, arr) => {
//     // console.log(item, `,`, index, `,`, arr)
// })

const coding = [
    {
        languageName : "Java",
        languageversion : "8.0"}, 
    {
        languageName : "Python",
        languageversion : "9.0"
    },
    {
        languageName : "C++",
        languageversion : "10"
    }]

    coding.forEach((item) => {
        console.log(`${item.languageversion}`)
    })