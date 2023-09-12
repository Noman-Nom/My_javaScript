const form = document.querySelector('form')

// console.log(form)
form.addEventListener('submit', (e)=>{
        e.preventDefault()

       const weight= parseInt(document.querySelector('#weight').value)
       const height= parseInt(document.querySelector('#height').value)
       const result = document.querySelector('#result')


    //    console.log(weight)
    //    console.log(height)

    if(height=== '' || height<= 0 || isNaN(height)){
        console.log(`plese enter a valid height`)
        alert(`plese enter a valid height !! ${height} is not valid`)
    }
    else if(weight=== '' || weight<= 0 || isNaN(weight)){
    
        console.log(`plese enter a valid height`)
        alert(`plese enter a valid weight !! ${weight} is not valid`)
    }else{
        const bmi =(weight /((height*height/10000)).toFixed(3))
        result.innerHTML= `<span>${bmi}</span>`
    }
    

})