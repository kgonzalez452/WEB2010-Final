const viewDog = document.querySelector("#viewDog")
const selectBreed = document.querySelector("#selectBreed")

let ajaxSearch = () => {

 const DOG_TYPE_API = 'https://dog.ceo/api/breeds/list'

 $.ajax({
   type: "GET",
   url: DOG_TYPE_API,
   async: true,
   dataType: "json",
   success: (data) => {
     console.log(data);

     for(let k in data.message){
       // console.log(data.message[k]);
       selectBreed.innerHTML += 
       `<option value="${data.message[k]}">${data.message[k]}</option>`
     }
   },
   error: (err) => {
     console.log("There was an Error");
   }

 })
}

window.onload = ("load", ajaxSearch)

viewDog.addEventListener("click", function () {
 let breedName = selectBreed.options[selectBreed.selectedIndex].text
//  console.log(breedName);

 const random_dog_pics = `https://dog.ceo/api/breed/${breedName}/images/random`

 $.ajax({
   typr: "GET",
   url: random_dog_pics,
   async: true,
   dataType: "json",
   success: (data) => {
     console.log(data.message);

     document.getElementById("breedImage").setAttribute("src", `${data.message}`)
   },
   error: (err) => {
     console.log("There was an Error");
   }
 })
})



// FINAL ALTERNATIVE
/*  Number 8 on Final Exam Alternative

    Node.js is an open-source server side runtime environment. It provides an event driven, asynchronous runtime environment for building scalable server-side application using JavaScript.


    Number 9
    HTTP sessions is an industry standard feature that allows Web servers to maintain user identity and to store user-specific data during multiple request/response interactions between a client application and a Web application.

    Number 10


*/