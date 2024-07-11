const accountId = 455555
let accountEmail ="abhaypal93584@gmail.com"
var accountPassword ="22224"
accountCity = "Gandhidham"

// accountId = 3 // not allowed

accountEmail ="abhaypal93286@gmail.com"
accountPassword ="00001"
accountCity="Rajkot"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])