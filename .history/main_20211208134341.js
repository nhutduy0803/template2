function openmenu() {
  var openmenu = document.querySelector(".sub-menu");
  openmenu.classList.add("openmenu");
}

function closemenu() {
  var openmenu = document.querySelector(".sub-menu");
  openmenu.classList.remove("openmenu");
}

function subhomemenu() {
  var opensubmenu = document.querySelector(".sub-home-menu");
  opensubmenu.classList.toggle("opensubmenu1");
}
