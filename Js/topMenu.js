function toggleMenu(x) {
  x.classList.toggle("change");
  if(document.getElementById("topMenu").className == "null"){document.getElementById("topMenu").className = "open-top-menu"}else{if(document.getElementById("topMenu").className == "open-top-menu"){document.getElementById("topMenu").className = "close-top-menu"}else{document.getElementById("topMenu").className = "open-top-menu"}}
}
// css wasnt working
$(document).on("dragstart", function (e) {
  e.preventDefault();
});
