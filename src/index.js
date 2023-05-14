console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", runAfterLoading);

function runAfterLoading(){
   fetchImages()
   fetchImagesAll()
   dropdown()
}

function fetchImages() {
   fetch("https://dog.ceo/api/breeds/image/random/4")
   .then((response) => response.json())
   .then((data) => {
      handleImageData(data)
   })
}

function handleImageData(data) {
   let arr = data.message
   arr.forEach(element => {
      let p = document.createElement('p')
      let div = document.getElementById("dog-image-container")
      let img = document.createElement("img");
      img.src = element;
      p.append(img);
      div.appendChild(p);
   })
}

function fetchImagesAll(){
   fetch("https://dog.ceo/api/breeds/list/all")
   .then((response) => response.json())
   .then((data) => {
   // showSelectedData(data, "all")
   handleBreedData(data)
   })
}

function handleBreedData(data){
   let arr = Object.keys(data.message)
   arr.forEach(element => {
      let ul = document.getElementById("dog-breeds")
      let li = document.createElement("li")
      li.textContent = element
      ul.appendChild(li);
   })
let liColor = document.querySelectorAll("li")
//console.log(foo)
liColor.forEach((element) => {
   element.addEventListener("click", colorChange)
})
}

function colorChange(){
   console.log(" I was clicked")
}

function dropdown(){
document.querySelector("#breed-dropdown").addEventListener("change", grabValue)
console.log(document.querySelector("#breed-dropdown"))
}


//

function grabValue(breed){
//   let selection = breed.option[breed.selectedIndex].innerHTML
//   let selectedValue = breed.value
   console.log(breed)
}



//

//foo.forEach(element => 
//   console.log(element)
//   )


let letter = "b";

function showSelectedData(data, letter){
   let arr = Object.keys(data.message)
   arr.forEach(element => {
      if (element.charAt(0) === letter){
         let ul = document.getElementById("dog-breeds")
         let li = document.createElement("li")
         li.textContent = element
         ul.appendChild(li);
      } else {
         let ul = document.getElementById("dog-breeds")
         let li = document.createElement("li")
         li.textContent = element
         ul.appendChild(li);
      }
   })
}


/* 
 need to revisit Challenge 3 & 4

Challenge 3
Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.

Challenge 4
Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdownLinks to an external site..

For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.

*/