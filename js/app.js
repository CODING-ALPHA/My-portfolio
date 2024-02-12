let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar2");
let background = document.querySelector(".navbar2-backgrnd");
let backgroundClose = document.querySelector(".navbar2-backgrnd");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  background.classList.toggle("reveal");
};

// function scrollvalue(){
//    var navbar = document.getElementById('nav-fixed');
//    var scroll = window.scrollY;
//    if (scroll > 120) {
//       navbar.classList.add('bgcolor');
//    } else {
//       navbar.classList.remove('bgcolor');
//    }
//  }

//  window.addEventListener('scroll', scrollvalue);

// document.addEventListener('scroll', () => {
//    // const header = document.querySelector('header');
//    var header = document.getElementById('nav-fixed');

//    if (window.scrollY > 0) {
//       header.classList.add('bgcolor');
//    } else{
//       header.classList.remove('bgcolor')
//    }
// });

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// // -------------------TYPEWRITER ANIMATION FOR SPAN TAG NAMED:"#TYPING"-----------------
// var options = {
//   strings: ['yomide.', 'kinbinu.'],
//   typeSpeed: 100,
//   // startDelay: 100,
//   backSpeed: 200,
//   // backDelay: 500,
//   // startDelay: 1000,
//   loop: true,
// };

// var typed = new Typed('#logo-typo', options);

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

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);

//   // if (e.key === "Escape") {
//   //   closeModal();
//   // }
// });
