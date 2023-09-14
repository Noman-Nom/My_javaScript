

const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
 const height = parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#weight').value)

const calculate = document.querySelector('#calculate')

        // console.log(height)
        // console.log(typeof height)

        if(height==="" || isNaN(height) || height<=0){
            alert("invalid height")
        }
        else if(weight==="" || isNaN(weight) || weight<=0){
            alert("invalid Weight")
        }
        else{
            const bmi = (weight /((height*height/10000))).toFixed(3)
            console.log(bmi)
            const result = document.querySelector('#result')
            result.innerHTML = bmi
            
            
            
            
        }
       

})