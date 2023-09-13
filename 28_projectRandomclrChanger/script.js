const body = document.querySelector('body')


const randomColor=()=>{

    const hex = "0123456789ABCDEF"
    let color ="#";
    for(i=0; i<6 ;i ++ ){
            color +=Math.floor(Math.random()*9)
    }
    // console.log(color)
    return color
  

}


const  startChangingColor=()=>{
setInterval(bgChanger,1000)
    const bgChanger =()=>{
        body.style.backgroundColor= randomColor()
    } 
}


const stopChangingColor = ()=>{

}
document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)



