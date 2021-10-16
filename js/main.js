// Mobile menu

const menu = document.querySelector(".navbar-mobile");
const menuItems = document.querySelectorAll(".mobile-menu__item");
const hamburger = document.querySelector(".menu-btn");
const closeIcon = document.querySelector(".menu-btn__close-icon");
const menuIcon = document.querySelector(".menu-btn__menu-icon");

function toggleMenu() {
  if (menu.classList.contains("navbar-mobile--visible")) {
    menu.classList.remove("navbar-mobile--visible");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("navbar-mobile--visible");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// Custom Dropdown
/* Resource:https://andrejgajdos.com/custom-select-dropdown/ */
//

for (const dropdown of document.querySelectorAll(".select-wrapper")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".select").classList.toggle("open");
  });
}

window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});

// Datepicker
$(function(){
	$("#datepicker").datepicker();
});
