// method  1
// const body = document.querySelector('body')


// const randomColor=()=>{

//     const hex = "0123456789ABCDEF"
//     let color ="#";
//     for(i=0; i<6 ;i ++ ){
//             color +=Math.floor(Math.random()*9)
//     }
//     console.log(color)
//     return color

// }
// randomColor()

// let intervelId;

// const bgChanger=()=>{
//     body.style.backgroundColor = randomColor()
// }

// const  startChangingColor = ()=>{
//     intervelId= setInterval(bgChanger,1200)
    
// }
//  const stopChangingColor = ()=>{
//         clearInterval(intervelId)
//  }

// document.querySelector("#start").addEventListener('click', startChangingColor)
// document.querySelector("#stop").addEventListener('click', stopChangingColor)


// method 2

const body = document.querySelector('body')
const stop = document.querySelector('#stop')
const start = document.querySelector('#start')
let intervelId;

const randomColor=()=>{
    const hex = "0123456789ABCDEF"
    let  color = "#"
    for (let i = 0; i <6 ; i++) {
        color += hex[Math.floor(Math.random()*9)]
        
    }
    console.log(color)
    return color
}
randomColor()

start.addEventListener("click", ()=>{
    // setInterval(bgChanger,1100)

 intervelId =   setInterval(bgChanger,1100)
})
const bgChanger = ()=>{
    body.style.backgroundColor=randomColor()
}

stop.addEventListener('click',()=>{
    clearInterval(intervelId)
})

