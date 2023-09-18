const key = "NiDhEnXNtbOWTueH0yzEr0xmZ2MCPfczCeZwmPZ-xwo"

const form = document.querySelector('form')
const inputSearch = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")

const searchResult = document.querySelector(".search-result")
const searchResults = document.querySelector(".search-results")
const showMoreBtn = document.querySelector("#show-more-btn")


// console.log(searchResults)
let inputData = ""
let page = 1;

async function searchImages(){

    inputData = inputSearch.value;
    // console.log(inputData)
    const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${key}`

    const response = await fetch(url)
    const data = await response.json()
 
    console.log(data)
    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""; 
        
    }
    results.map((result)=>{

        // searchResults.innerHTML=`<div class="search-result">
        // <div class="col">
        //     <img src=${result.urls.small} alt=${result.alt_description}>
        //     <h4><a href=${result.links.html} target="_blank">${result.alt_description}</a></h4>
        // </div>`
      
        
        const imageWrapper= document.createElement('div')
        imageWrapper.classList.add("col")
        const image = document.createElement('img')
        image.src= result.urls.small
        image.alt= result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href=result.links.html
        imageLink.target="_blank"
        imageLink.textContent= result.alt_description

                imageWrapper.appendChild(image)
                imageWrapper.appendChild(imageLink)
                searchResults.appendChild(imageWrapper)
              
            

    })

    page++
    if(page>1){
        showMoreBtn.style.display="block"
    }
}

form.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    page=1
    searchImages()
        inputSearch.value=""
        
      
    
        
    })
    showMoreBtn.addEventListener('click',(e)=>{
        
      
        
        searchImages()
        console.log("click")
        
})
