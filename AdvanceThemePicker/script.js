const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const clrCode = document.querySelector('#clrCode')
const container = document.querySelector(".container")
const body = document.querySelector("body")

let color;
let intervelId;

const randomColor = ()=>{
    // let hex ="0123456789ABCDEF"
     color = "#"
    for (let i = 0; i < 6;  i++) {
        color = color+ Math.floor(Math.random()*9)
    }
    // console.log(Math.floor(Math.random()*9))
    // console.log(color)
    return color
}
randomColor()

const bgChanger=()=>{
    body.style.backgroundColor= randomColor();
    clrCode.innerHTML= color
}

start.addEventListener('click',()=>{
   intervelId=  setInterval(bgChanger,2000)


})
// console.log(stop)
stop.addEventListener('click',()=>{
    clearInterval(intervelId)
})

