//  method 1 
// function clickBtn(){
//     alert("button clicked ")
// }

// method 2 

//  no need of onclick

//  let btn = document.getElementById("btn");

//  btn.addEventListener('click',  clickBtn )
 
 //  method 3 
//  by using ananemous  function
 
//  let btn = document.getElementById("btn");

//  btn.addEventListener('click', function(){
//     console.log('clicked')
//  } )


// note ---- ye we can implemet multiple events of one element at a same time 
//  let btn1 = document.getElementById("btn");

//  btn1.addEventListener('mouseover', function(){
//     console.log('mouse over ')
//  } )

// combined method  || professional method

// let btn2 = document.getElementById('btn').addEventListener('click',function(){

//     alert('Clicked');

// }, false)


// on more important thing is 'e'

let btn2 = document.getElementById('btn').addEventListener('click',function(e){

    console.log(e);

}, false)