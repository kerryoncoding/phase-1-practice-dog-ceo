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
      li.addEventListener("click", ()=> {
         li.style="color: red"
      })
   })
}


function dropdown(){
document.querySelector("#breed-dropdown").addEventListener("change", grabValue)
console.log(document.querySelector("#breed-dropdown"))
}



function grabValue(breed){

   console.log(breed)
}




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

