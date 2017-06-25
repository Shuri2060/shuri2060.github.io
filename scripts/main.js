//localStorage.setItem("name", prompt("Please enter your name."));

var p;

if ((p = prompt("Please enter your name.")) === null) {

  document.querySelector("p").textContent = p;
}