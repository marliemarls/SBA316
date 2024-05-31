//changed my header from being created in js to being already created in HTML so that i could querySelect the element and manipulate it from here
const newHeader = document.querySelector("h1");
newHeader.textContent = `Harawiq Records`;

newHeader.addEventListener("click", (event)=>{
    const newColor = window.prompt("What is your favorite color?").replace(/\s/g, '');
    newHeader.style.color = `${newColor}`;
    setTimeout(()=>window.alert("You found the hidden feature, congratulations!"),3000)
});


// const navBar = document.createElement("div");
// navBar.innerHTML = "navbar"


const photoParagraph = document.getElementById("photo-paragraph")
photoParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



 