let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar2');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');

}





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

function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
}



// var sidemenu = document.getElementById("sidemenu");

//     function openmenu(){
//         sidemenu.style.right = "0";
//     }
//     function closemenu(){
//         sidemenu.style.right = "-280px";
// }













//     function scrollvalue(){
//    var navbar = document.getElementById('nav-fixed');
//    var scroll = window.scrollY;
//    if (scroll > 120) {
//       navbar.classList.add('bgcolor');
//    } else {
//       navbar.classList.remove('bgcolor');
//    }
//  }

//  window.addEventListener('scroll', scrollvalue);
 
//     const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });

