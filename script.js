//changed my header from being created in js to being already created in HTML so that i could querySelect the element and manipulate it from here
const newHeader = document.querySelector("h1");
newHeader.textContent = `Welcome!`;
newHeader.addEventListener("click", (event)=>{
    newHeader.style.color = "cornflowerblue";
});

const photosDiv = document.getElementById("photos-div");
photosDiv.innerText = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";





// 
// console.log(userName)

 