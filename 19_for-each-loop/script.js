const myArr = ['js', 'cpp' ,'c#', 'py']

// callback fn dena hota he 
myArr.forEach(function(item){
    // console.log(item)
})
myArr.forEach((val)=>{
// console.log(val)
})

function printArr(item){
    // console.log(item)
}
myArr.forEach(printArr)

// arry with objects 

const programming = [
    {
        programminglanguage: "javascript",
        languageFileName : "js"
    },
    {
        programminglanguage: "python",
        languageFileName : "py"
    },
    {
        programminglanguage: "c++",
        languageFileName : "cpp"
    }
]

programming.forEach((item)=>{
        console.log(item.programminglanguage)
})