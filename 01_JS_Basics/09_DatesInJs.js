
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getDay());

console.log(newDate);

newDate.toLocaleString('default', {
    weekday: "narrow"
})

console.log(newDate.toLocaleString());

// My toLocalestring
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());