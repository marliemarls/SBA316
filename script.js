//changed my header from being created in js to being already created in HTML so that i could querySelect the element and manipulate it from here

const newHeader = document.querySelector("h1");
newHeader.textContent = `Harawiq Records`;

newHeader.addEventListener("click", (event)=>{
    const newColor = window.prompt("What is your favorite color?").replace(/\s/g, '');
    newHeader.style.color = `${newColor}`;
    setTimeout(()=>window.alert("You found the hidden feature, congratulations!"),2000)
});



const photoParagraph = document.getElementById("video-paragraph")
photoParagraph.innerText = "We Are Still Here, is a music video for the song written by artist, Bobby Sanchez. This short film features many other trans, Indigenous, Two-Spirit folks from Oakland, California. Filmed by Marlie Martinez."
const linksArr = ["Home", "About", "Suggestions"]
const navDiv = document.querySelector("nav");
for(let i = 0; i < linksArr.length; i++){
    const newLink = document.createElement("a")
    newLink.href = `/`;
    newLink.text = linksArr[i]
    navDiv.append(newLink)
}

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    console.log(event)
})

const goodByeHeader = document.querySelector(".goodbye")
goodByeHeader.addEventListener("click", (e) => {
    if (!e) return;
    const question = prompt("What is your name?")
    goodByeHeader.innerText = `Hello ${question}!`
})

function navigateBetweenElems(){
    const parentElem = document.get;
}