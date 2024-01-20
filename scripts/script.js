const hamburgerMenuLine = document.querySelector(".hamburgerMenuLine");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const profileBtn = document.querySelector(".profileBtn");
const profileBtn2 = document.querySelector(".profileBtn2");
const linkedinIcon = document.querySelector(".linkedinIcon");
const githubIcon = document.querySelector(".githubIcon");
const arrow = document.querySelector(".arrow");
let menuOpen = false;
hamburgerMenuLine.addEventListener("click", () => {
  if (!menuOpen) {
    hamburgerMenuLine.style.backgroundColor = "transparent";
    mobileNavMenu.style.display = "flex";
    hamburgerMenuLine.classList.add("open");

    menuOpen = true;
  } else {
    hamburgerMenuLine.style.backgroundColor = "#000";
    hamburgerMenuLine.classList.remove("open");
    mobileNavMenu.style.display = "none";

    menuOpen = false;
  }
});
profileBtn.addEventListener("click", () => {
  window.open("./../assets/images/resume-example.pdf");
});
profileBtn2.addEventListener("click", () => {
  location.href = "./#contact";
});
linkedinIcon.addEventListener("click", () => {
  location.href =
    "https://www.linkedin.com/in/seyed-saleh-mirbagheri-426882233/";
});
githubIcon.addEventListener("click", () => {
  location.href = "https://github.com/salehMb1999";
});
arrow.addEventListener("click", () => {
  location.href = "./#experience";
});
