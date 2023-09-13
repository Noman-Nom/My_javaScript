const input = document.querySelector("#input-box")
const list = document.querySelector('#list-container')

const btn = document.querySelector("#addTask")

const addTask=()=>{
    if(input.value===""){
        alert("please write some task...")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7" 
        li.appendChild(span)

    }
    input.value = ""
}


list.addEventListener('click', (e)=>{
        // console.log(e.target)
            if(e.target.tagName==="LI"){
                e.target.classList.toggle("checked")
            }
            else if(e.target.tagName==="SPAN"){
                e.target.parentElement.remove()
            }
})
