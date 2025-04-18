const text = document.getElementsByTagName("p");
const heading = document.getElementsByTagName("h1")[0];
const button = document.getElementById("addElement");
const container = document.getElementById("container");

// Change heading text
heading.textContent = "Welcome Eddie";

// Style each <p> element
for (let i = 0; i < text.length; i++) {
    text[i].style.color = "black";
    text[i].style.fontSize = "1.5rem";
}

button.addEventListener("click", () => {
  
    const message = document.createElement("h2");
    message.textContent = "h2 element created successfully!";
    message.style.color = "green";

    container.appendChild(message); 
     setTimeout (()=> {
        container.removeChild(message);
    }, 2000);
});
