const burgerMenu = document.querySelector(".fa-solid.fa-bars");
const hiddenMenu = document.querySelector(".header__nav__navbar");

burgerMenu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("shown");
  });

