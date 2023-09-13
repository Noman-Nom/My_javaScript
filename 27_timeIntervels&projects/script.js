const h1 = document.querySelector('h1')
const start = document.querySelector('#start')
const stop1 = document.querySelector('#stop')
let intervelId;


const startMsg = ()=>{
    h1.innerHTML = "Hello Raza"
    console.log("hello")

}

start.addEventListener('click', function(){
      intervelId = setInterval(startMsg , 1000)
    console.log("start")
})

stop1.addEventListener('click', function(){
    // h1.innerHTML = "Hello Raza"
   clearInterval(intervelId)
    console.log("stop")
})


