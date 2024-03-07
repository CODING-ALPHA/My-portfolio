let menuOpen = document.querySelector("#menu-open-icon");
let menuClose = document.querySelector("#menu-close-icon");
let navbar = document.querySelector(".navbar2");
let navLinks = document.querySelectorAll(".navbar2 a");
let background = document.querySelector(".navbar2-backgrnd");
let backgroundClose = document.querySelector(".navbar2-backgrnd");

// // CODE FOR NAVBAR
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navbar.style.transform = "translateX(500px)";
  });
}

menuOpen.addEventListener("click", () => {
  navbar.style.transform = "translateX(0px)";
});

menuClose.addEventListener("click", () => {
  navbar.style.transform = "translateX(500px)";
});

// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

// -------------------TYPEWRITER ANIMATION FOR SPAN TAG NAMED:"#TYPING"-----------------
var options = {
  strings: ["Web Developer.", "Software Engineer."],
  typeSpeed: 100,
  startDelay: 100,
  backSpeed: 100,
  backDelay: 500,
  // startDelay: 1000,
  loop: true,
};

var typed = new Typed("#typing", options);

// function togglePopup() {
//   document.getElementById("popup-1").classList.toggle("active");
// }

// function togglePopup2() {
//   document.getElementById("popup-2").classList.toggle("active");
// }

// function togglePopup3() {
//   document.getElementById("popup-3").classList.toggle("active");
// }

// const modal = document.querySelector(".popup");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");
// const openModal = function () {
//   modal.classList.add("active");
// };

// const closeModal = function () {
//   modal.classList.remove("active");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);

//   // if (e.key === "Escape") {
//   //   closeModal();
//   // }
// });

const modals = document.querySelectorAll(".popup");
const btnCloseModals = document.querySelectorAll(".close-modal");
const btnsOpenModals = document.querySelectorAll(".show-modal");

const openModal = function (modal) {
  modal.classList.add("active");
};

const closeModal = function (modal) {
  modal.classList.remove("active");
};

btnsOpenModals.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    openModal(modals[index]);
  });
  // btnCloseModal.addEventListener("click", closeModal);

  btnCloseModals[index].addEventListener("click", () => {
    closeModal(modals[index]);
  });

  modals[index].addEventListener("click", () => {
    closeModal(modals[index]);
  });
});
