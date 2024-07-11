const myNumbers = [1, 2 ,3 , 4, 5]

// const myTotal = myNumbers.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
 
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart=[
        {
        itemName: "py course ",
        price: 3999},
        {
        itemName: "data science course ",
        price: 13999},
        
        {
        itemName: "java course ",
        price: 4999
        },
]

const Total = shoppingCart.reduce((acc, item) => acc +item.price, 0)
console.log(Total);