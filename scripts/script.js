const hamburgerMenuLine = document.querySelector(".hamburgerMenuLine");
const mobileNavMenu = document.querySelector(".mobileNavMenu")
let menuOpen = false;
hamburgerMenuLine.addEventListener("click", () => {
  if (!menuOpen) {
    hamburgerMenuLine.style.backgroundColor = "transparent";
    mobileNavMenu.style.display = "flex"
    hamburgerMenuLine.classList.add("open");

    menuOpen = true;
  } else {
    hamburgerMenuLine.style.backgroundColor = "#000";
    hamburgerMenuLine.classList.remove("open");
    mobileNavMenu.style.display = "none"

    menuOpen = false;
  }
});
