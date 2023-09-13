const body = document.querySelector('body')


const randomColor=()=>{

    const hex = "0123456789ABCDEF"
    let color ="#";
    for(i=0; i<6 ;i ++ ){
            color +=Math.floor(Math.random()*9)
    }
    console.log(color)
    return color

}
randomColor()

let intervelId;

const bgChanger=()=>{
    body.style.backgroundColor = randomColor()
}

const  startChangingColor = ()=>{
    intervelId= setInterval(bgChanger,1200)
    
}
 const stopChangingColor = ()=>{
        clearInterval(intervelId)
 }

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)



