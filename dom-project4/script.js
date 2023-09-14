const inputBox = document.querySelector("#inputBox");
const addTask = document.querySelector("#addTask")
const tasks = document.querySelector("#tasks")


const todoTask = ()=>{
    const li = document.createElement("li")
    li.innerHTML=`${inputBox.value} <button class="delete" id="deleteBtn">Delete</button>`
    tasks.appendChild(li)
    inputBox.value=""
    const deleteBtn = document.querySelector('#deleteBtn')
    deleteBtn.addEventListener('click',(e)=>{
        console.log(e.target.parentNode)
        removeIt = e.target.parentNode
        removeIt.remove()
    
    })
}




addTask.addEventListener("click", ()=>{
    if(inputBox.value===""){
        alert("please add some task")
    }
    else{
        todoTask()
    }
    console.log(inputBox.value)
    
})

window.addEventListener('keydown',(e)=>{
if(e.key==="Enter"){
    if(inputBox.value===""){
        alert("please add some task")
    }
    else{
       todoTask()
     
    }
    
}

})



