//changed my header from being created in js to being already created in HTML so that i could querySelect the element and manipulate it from here
const newHeader = document.querySelector("h1");
newHeader.textContent = `Welcome!`;
newHeader.addEventListener("click", (event)=>{
    newHeader.style.color = "cornflowerblue";
});

const blogDiv = document.getElementById("blog-paragraph")
blogDiv.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."








// 
// console.log(userName)

 