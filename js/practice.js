// selects the #container div
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2); // <div class="display"></div>

const div = document.createElement("div");
div.setAttribute("style", "color: blue; background: white;");
div.setAttribute("id", "theDiv");
console.log(div.getAttribute("id"));
div.removeAttribute("id");

div.classList.add("new");
console.log(div);
div.classList.remove("new");
div.classList.toggle("active");

div.textContent = "Hello World";

// select anotherContainer div
const anotherContainer = document.querySelector("#anotherContainer");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a new text-content!";

anotherContainer.appendChild(content);

// <p style="color: red;">Hey, I'm red!</p>
// <h3 style="color: blue;">I'm a blue h3!</h3>
// <div style="border-color: black; background-color: pink;"></div>

const newContainer = document.querySelector("#newContainer");

const p = document.createElement("p");
p.setAttribute("style", "color: red;");
p.textContent = "Hey, I'm red!";

const h3 = document.createElement("h3");
h3.setAttribute("style", "color: blue;");
h3.textContent = "I'm a blue h3!";

const newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
newDiv.setAttribute("style", "border-color: black; background-color: pink;");

const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div!"

const anotherP = document.createElement("p");
anotherP.textContent = "ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(anotherP);

newContainer.appendChild(p);
newContainer.appendChild(h3);
newContainer.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  e.target.style.background = "blue";
  e.target.style.color = "white";
  console.log(e.target);
});

