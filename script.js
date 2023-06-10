const accecckey ="ED6L6eSmariHasI7YWoj-1q_2j7w5clFge3lQFYVoVY"

constformEl= document.querySelector("form");
const inputEl = document.getElementById("Search-input");
const SearchResults = document.querySelector(".search-results");
const showMoere = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
 inputData = inputEl.ariaValue;
 const url = 'https//api.unsplash.com/search/photos?page=${page}&query=${inputData}$client id=${accesskey}';

const response = await fetch(url);
const data = await response.json();

const results = data.results;

if (page===1){
    searchResolts.innerHTML ="";
}

results.map((results)=>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add ('search-result');
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html; 
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;


    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    imageWrapper.appendChild(imageWrapper);
});

page++
if(page > 1){
    showMoere.style.display = "block"
}
}

formEL.addEventListener("submit", (event) =>{
    event.preventDefault()
    page -1;
    searchImages()
})

showMore.addEventListener("click", () =>{
   searchImages()
})