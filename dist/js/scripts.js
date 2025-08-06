const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

const openMenu = () => {
  mobileMenu.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
};

const closeSlideMenu = () => {
  mobileMenu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
};

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeSlideMenu);
overlay.addEventListener("click", closeSlideMenu);
