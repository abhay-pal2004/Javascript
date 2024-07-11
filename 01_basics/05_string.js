const name = "Abhay"
const repocount = 50

//console.log(name+ repocount+ "Value");


console.log(`Hello my name is  ${name} and my repoCount is ${repoCount}`);

const gameName = new String('AbhayPal')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,14)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne=" Abhay "
console.log(newStringOne);
console.log(newStringOne.trim());
  
const url ="http://abhay.com/abhay%10"

console.log(url.replace('%10', '-'))

console.log(url.includes('PAl'))