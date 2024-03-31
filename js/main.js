const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector("nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => {
      item.classList.add("open");
    });

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    showMenu = false;
  }
}
/*
menuBtn.addEventListener("click", (e) => {
  // menuBtn.classList.toggle("open");
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  menuNav.classList.toggle("open");
  navItems.forEach((item) => {
    item.classList.toggle("open");
  });
});

*/

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the loader and image elements
  const loader = document.querySelector("#loader");
  /*
  // Show loader while the image is loading
  myImage.addEventListener("load", function () {
    loader.style.display = "none"; // Hide the loader once the image is loaded
  });

  myImage.addEventListener("error", function () {
    // Handle the case where the image fails to load
    console.error("Failed to load the image.");
    loader.style.display = "none"; // Hide the loader in case of an error
  });

  // Show loader initially (optional)
  loader.style.display = "block";
  */

  //An Asynchronous task --- is a non-blocking task.
  setTimeout(() => {
    loader.style.opacity = 0;
  }, 3000);
});

// Adding Copy Right date

const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();
