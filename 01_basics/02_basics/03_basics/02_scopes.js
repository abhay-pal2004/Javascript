//var c = 300
let a = 300
if(true){
    let a =10
    const b =20
    console.log("Inner:", a);
}
console.log(a);
//console.log(b);
//console.log(c);

if (true){
    const username="Abhay"
    if (username=="Abhay"){
        const website = "youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);
// *******************

function addone(num){
    return num +1
}

addone(6)


const addTwo = function(num){
    return num + 0
}