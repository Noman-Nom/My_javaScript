const bgChanger= document.querySelector('#bgChanger')
const body = document.querySelector('body')

bgChanger.addEventListener('input',()=>{

    // console.log("changed")
    const chngeBgClr = bgChanger.value
    body.style.backgroundColor = chngeBgClr

})