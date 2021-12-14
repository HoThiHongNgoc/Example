// set up the event handlers
var buttons = document.querySelectorAll("button.dropbtn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", showDiv);
}
// set up the mouseout handlers
var contents = document.querySelectorAll(".dropdown-content");
for (var i = 0; i < contents.length; i++) {
    contents[i].addEventListener("mouseleave", hideDiv);
}
function showDiv(e) {
    // remove "show" class from previously shown menu, if it exists.  
    var previous = document.querySelector(".dropdown-content.show");
    if (previous) previous.classList.remove("show");
    // add "show" class to new clicked menu, unless the clicked menu was already open in which case close it
    var dropdownContent = this.parentNode.querySelector(".dropdown-content");
    if (dropdownContent == previous) return;
    dropdownContent.classList.add("show");
}
function hideDiv() {
    this.classList.remove("show");
}