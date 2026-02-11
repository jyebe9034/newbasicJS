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
