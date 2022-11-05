/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("nav").classList.toggle("flex");
  document.getElementById("nav").classList.toggle("hide");
  document.getElementById("modile-header").classList.toggle("hide");
  document.getElementById("modile-header").classList.toggle("flex");
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
document.getElementById("nav").classList.toggle("hide");
document.getElementById("nav").classList.toggle("flex");
document.getElementById("modile-header").classList.toggle("flex");
document.getElementById("modile-header").classList.toggle("hide");
}