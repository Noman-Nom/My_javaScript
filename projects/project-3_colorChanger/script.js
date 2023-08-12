const clrChnger = document.getElementById('red');
console.log(clrChnger);
const body = document.querySelector('body');

clrChnger.addEventListener('click', function(){
    body.style.backgroundColor ="red"; 
})