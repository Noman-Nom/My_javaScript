
//  method 1 
const div = document.querySelectorAll(".colors");
// console.log(div)
const body = document.querySelector("body");

div.forEach((div) => {
  // console.log(div)
  div.addEventListener("click", (e) => {
    // console.log(e.target.id)
    if (e.target.id === "red") body.style.backgroundColor = "#e46161";
    if (e.target.id === "blue") body.style.backgroundColor = "#2F80ED";
    if (e.target.id === "black") body.style.backgroundColor = "#20002c";
    if (e.target.id === "green") body.style.backgroundColor = "#0f9b0f";
    if (e.target.id === "violet") body.style.backgroundColor = e.target.id;
    if (e.target.id === "brown") body.style.backgroundColor = e.target.id;
    if (e.target.id === "purple") body.style.backgroundColor = e.target.id;
    if (e.target.id === "skyblue") body.style.backgroundColor = e.target.id;
  });
});


//  method 2 

// const div = document.querySelectorAll('.colors')
// const div = document.getElementById('blue')
// console.log(div)

