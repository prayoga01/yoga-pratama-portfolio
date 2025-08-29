//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNAV = header.offsetTop;
  if (window.pageYOffset > fixedNAV) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamberger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Tab filter logic
const tabBtns = document.querySelectorAll(".tab-btn");
const projectCards = document.querySelectorAll(".project-card");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active style from all tabs
    tabBtns.forEach((b) => b.classList.remove("bg-teal-500", "text-white"));
    tabBtns.forEach((b) => b.classList.add("bg-white", "text-teal-500"));
    // Add active style to clicked tab
    this.classList.remove("bg-white", "text-teal-500");
    this.classList.add("bg-teal-500", "text-white");

    const category = this.getAttribute("data-category");
    projectCards.forEach((card) => {
      if (card.getAttribute("data-category") === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
