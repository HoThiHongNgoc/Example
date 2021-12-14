var RED = document.getElementById("RED");
var GREEN = document.getElementById("GREEN");
var BLUE = document.getElementById("BLUE");
var RED1 = document.getElementById("RED1");
var GREEN1 = document.getElementById("GREEN1");
var BLUE1 = document.getElementById("BLUE1");
var TEXT = document.getElementById("TEXT")
var Apply = document.getElementById("Apply")
function backgroundChange() {
    var color = "#" + RED.value + GREEN.value + BLUE.value;
    TEXT.style.backgroundColor = color;
}
Apply.addEventListener("click", backgroundChange)
function colorChange() {
    var color = "#" + RED1.value + GREEN1.value + BLUE1.value;
    TEXT.style.color = color;
}
Apply.addEventListener("click", colorChange)