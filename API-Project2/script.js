// https://www.themealdb.com/api/json/v1/1/filter.php?i=egg

const SearchBtn =document.querySelector('#search-btn')
const row = document.querySelector(".row")


const getData= async()=>{
    const SearchInput= document.querySelector('#search-el').value.trim()
    console.log(SearchInput)
    
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${SearchInput}`

  const  response = await fetch(url)
  const data = await response.json()
  console.log(data.meals)

            if (data && data.meals){
                row.innerHTML=""
                data.meals.map((meal)=>{

     const imageWrapper= document.createElement('div')
        imageWrapper.classList.add("col")
        const image = document.createElement('img')
        const heading = document.createElement('h4')
        heading.innerHTML=meal.strMeal
        image.src= meal.strMealThumb
        image.alt= meal.strMeal
        const imageLink = document.createElement('a')
        imageLink.href=meal.strMeal
        imageLink.target="_blank"
        imageLink.textContent= meal.strMeal

                imageWrapper.appendChild(image)
                imageWrapper.appendChild(heading)
                imageWrapper.appendChild(imageLink)
              row.appendChild(imageWrapper)


                });
            }



           


}


SearchBtn.addEventListener('click', ()=>{
    
getData()
})