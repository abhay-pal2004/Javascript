const coding = ["js", "python", "java" ]
coding.forEach(function (val) {
    console.log(val);
})

coding.forEach( (val) => {
    console.log(val);
})

function printMe(val){
    console.log(val);
}

coding.forEach(printMe)

coding.forEach((val, index, arr)=>{
    console.log(val, index, arr );

})

const myCodeing = [{
    languageName: "javascript",
    languageFileName:"05.js"},
    {
    languageName: "java",
    languageFileName:".java"
    }
]

myCodeing.forEach( (item) => {
    console.log(item.languageName);
})
