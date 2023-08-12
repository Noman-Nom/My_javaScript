//  let img1 = document.getElementById("img1").addEventListener('click', function(e){

//     // alert('clicked')
//     console.log(e.target.parentNode)

//     let removeIt = e.target.parentNode;
//     removeIt.remove()
    
// }, false)

//  one more simple method
//  let img1 = document.getElementById("img1").addEventListener('click', function(e){

//     // alert('clicked')
//     console.log(e.target.parentNode)
    
//     let removeIt = e.target.parentNode;

//     removeIt.style.display ="none";
// }, false)


// yahan par to hamre pas 4 images hen hm is trha se ak aka ko select kaar k remove karenge to ye useful method nhi he agar hamre pas 500 images hoti to ye method blkl bhi useful na hota is lie ab hum ak new method ko use karne wale hen 

document.querySelector("#items").addEventListener('click',function(e){

    console.log(e.target.parentNode)
    let removeIt = e.target.parentNode;

    removeIt.remove();
}, false)

//