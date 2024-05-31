//changed my header from being created in js to being already created in HTML so that i could querySelect the element and manipulate it from here
const newHeader = document.querySelector("h1");
newHeader.textContent = `Harawiq Records`;

newHeader.addEventListener("click", (event)=>{
    const newColor = window.prompt("What is your favorite color?").replace(/\s/g, '');
    newHeader.style.color = `${newColor}`;
    setTimeout(()=>window.alert("You found the hidden feature, congratulations!"),2000)
});


// const navBar = document.createElement("div");
// navBar.innerHTML = "navbar"


const photoParagraph = document.getElementById("video-paragraph")
photoParagraph.innerText = "We Are Still Here, is a music video for the song written by artist, Bobby Sanchez. This short film features many other trans, Indigenous, Two-Spirit folks from Oakland, California. Filmed by Marlie Martinez."

const navDiv = document.getElementsByClassName("nav_and_header")
console.log(navDiv)
for(let i = 0; i < navDiv.length; i++){
    const newNav = document.createElement("a")
    
}


 