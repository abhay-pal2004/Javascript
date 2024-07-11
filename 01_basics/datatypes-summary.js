//primitive
// 7 types : String, Number, Boolean, null, undefined, symbol,BigInt


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id==anotherId);

const bigNumber = 3333344456665012355n



//Reference (Non primitive)

//Array, Objects, Functions

const name=["Abhay","Krishna"];
let myObj={
    name:"Abhay",
    age: 20,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "abhaypaldotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "abhay@gmail.com"

console.log(userOne.email);
console.log(userOne.email);



