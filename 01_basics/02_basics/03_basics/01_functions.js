function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return number1 + number2
    return result 
}

const result = addTwoNumbers(3,5)
console.log("Result:", result);
 
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

loginUserMessage("Abhay")

const user = {
    username: "Abhay",
    email: "abhay47@gmail.com",
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}    

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
