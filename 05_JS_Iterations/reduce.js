let nums = [1,2,3]

// let ans = nums.reduce((acc, item) => (acc + item), 0)

let ans = nums.reduce((acc, num) => {
    // console.log(`acc is ${acc} and num is ${num} `)
    return acc + num; 
}, 0)

const shoppingCart = [{
                    itemName: "js course",
                    price: 2999
                },
                {
                    itemName: "py course",
                    price: 999
                },
                {
                    itemName: "mobile dev course",
                    price: 5999
                },
                {
                    itemName: "data science course",
                    price: 12999
                },
                ]

                let final = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

                console.log(final)
