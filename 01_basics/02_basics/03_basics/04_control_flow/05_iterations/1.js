// for
for (let i = 0; i <=11; i++) {
    const element = i;
    if(element ==7 ){
       console.log("7 is best number");
    }

 // console.log(element);
}
for (let i= 0; i <=8; i++) {
    console.log(`Outer loop value:${1}`);
    for (let j = 0; j <=8; j++) {
        console.log(`Inner loop value${j} and inner loop ${i}`);
        //console.log(i + '*' + j +' =' +i*j);

    }
    
    
}
let myArray =["A","B","C"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue
for (let index = 1; index <=10; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break;
    }  
    console.log(`value of i is ${index}`);
}