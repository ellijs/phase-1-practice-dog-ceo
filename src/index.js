const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    fetchDogImages()
    fetchBreedNames()
    const dropDown = document.getElementById("breed-dropdown")
    dropDown.addEventListener("change", (e) => filterBreeds(e))
})

function fetchDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then (resp => resp.json())
    .then (json => renderDogImages(json.message))
}

function renderDogImages(images) {
    images.forEach(fetchDogImages)
}

function fetchDogImages(image) {
    const img = document.createElement("img")
    const container = document.querySelector("#dog-image-container")
    img.src = image
    img.alt = "dog"
    container.append(img)
}

function fetchBreedNames(filter) {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
    //    let obj = json.message
    //    for (const breed in obj) {
           
    //    }
       let breedArray = Object.keys(json.message)
       if(filter && filter !== "all") {
           breedArray = breedArray.filter(breed => breed[0] === filter)
       }
       renderBreeds(breedArray)
    })
}

function renderBreeds(breeds) {
    const ul = document.querySelector("#dog-breeds")
    ul.textContent = ""
    breeds.forEach(renderBreed)
}

function renderBreed(breed) {
    const ul = document.querySelector("#dog-breeds")
    const li = document.createElement("li")
    li.textContent = breed
    ul.appendChild(li)

    li.addEventListener("click", () => {
        if (li.style.color !== "blue") {
            li.style.color = "blue"
        } else {
        li.style.color = "black"
        }
        
    })
}

function filterBreeds(e) {
    fetchBreedNames(e.target.value)
}




// console.log("%c HI", "color: firebrick");
// document.addEventListener("DOMContentLoaded", () => {
//   fetchAllDogs();
//   fetchAllBreeds();
// });
// function renderDogs(dog) {
//   let divCard = document.createElement("div");
//   let imgFrame = document.createElement("div");
//   let img = document.createElement("img");
//   img.src = dog;
//   imgFrame.append(img);
//   divCard.append(imgFrame);
//   document.querySelector("#dog-image-container").append(divCard);
// }
// function fetchAllDogs() {
//   fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then((res) => res.json())
//     .then((json) => json.message.forEach(renderDogs));
// }


// function renderBreed(breed) {
//   breed.forEach((dog) => {
//     let list = document.createElement("li");
//     list.textContent = `${dog}`;
//     document.querySelector("#dog-breeds").append(list);
//     list.className = "list-color";
//     list.name = "name";
//     list.addEventListener("click", () => {
//       list.style.color = "yellow";
//     });
//   });

//   document.querySelector("#breed-dropdown").addEventListener("change", (e) => {

//     // Remove All Previous Lists Tags
//     document.querySelector("ul").innerText = "";  
    
//     // Create New Lists
//     let a = breed.filter((dog) => dog.charAt(0) === e.target.value);
//     renderBreed(a); 
//   });
// }

// function fetchAllBreeds() {
//   fetch("https://dog.ceo/api/breeds/list/all")
//     .then((res) => res.json())
//     .then((json) => renderBreed(Object.keys(json.message)));
// }
