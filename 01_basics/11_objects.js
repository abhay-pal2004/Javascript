// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "xyz"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhay",
            lastname: "Pal"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",1: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = {obj1, obj2}
const obj3= object.assign({} ,obj1, obj2)
console.log(obj3);
 const users = [
    {
        id:1,
        email:"abhaypal02@gamil.com",
    },
 ]

 users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 
 console.log(tinderuser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename:"js in hindi",
    price: "555",
    courseInstructor: "Abhay"
 }

 // course.couirseInstructor

 const {courseInstructor}= course
console.log(courseInstructor);
{
    "name": "Abhay",
    "coursename": "HTML",
    "price": "free"
}