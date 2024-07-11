// singleton

// object literals

const mySym = Symbol("key1")
const Jsuser = {
name: "Abhay",   
[mySym]: "mykey1",
age: 18,
location: "Adipur",
email: "abhaypa@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.mySym)

Juser.email = "abhaypal93286@gmail.com"
Object.freeze(JsUser)
JsUser.email = "abhaypal2004@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log{"Hello JsUser"};
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);

}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
