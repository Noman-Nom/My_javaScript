// set timeout -- itne time k bad is kam ko karna he 


// ----method 1 

setTimeout(function(){
        // console.log("Muhammad Noman")
},2000)

// method 2 
const PrintName = ()=>{
    // console.log('NOMAN')
}
setTimeout(PrintName ,2000)

// 
const container = document.querySelector('#container')
const sayHi = setTimeout(()=>{
        container.innerHTML ="Hello Muhammad Noman"
},2000)

//  if we want to stop this 

// clearTimeout(sayHi) 
//  not efficient 

 document.querySelector('#btn')
 .addEventListener( "click",function(){
    clearTimeout(sayHi)
    console.log("Stop")
 })
// ............... extra work ..............

// const start = document.querySelector('#start')
// const stop = document.querySelector('#stop')
// const container = document.querySelector(".container")
// let msg;

// const changeName = ()=>{
//     container.innerHTML="Hello Raza...."
// }

// start.addEventListener('click',()=>{
//  msg= setTimeout(changeName,2000)
// })

// stop.addEventListener("click",()=>{
//     clearTimeout(msg)

// })
