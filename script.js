'use strict';

const addEventOnElement=function(elements,eventType,callback){
    for(let i=0, len = elements.length;i<len;i++){
        elements[i].addEventListener(eventType,callback);
    }
}



const nav=document.querySelector("[data-navbar]");
const navtoggle=document.querySelector("[data-nav-toggle-btn]");
const overlay=document.querySelector("[data-overlay");
const toggleNavbar=function(){
    nav.classList.toggle("active");
    navtoggle.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}
addEventOnElement([navtoggle,overlay],"click",toggleNavbar)


// parallax 
const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
    for (let i = 0; i < parallaxElements.length; i++) {
        const momentX = (event.clientX / window.innerWidth) * parseFloat(parallaxElements[i].getAttribute('data-parallax-speed'));
        const momentY = (event.clientY / window.innerHeight) * parseFloat(parallaxElements[i].getAttribute('data-parallax-speed'));
        
        parallaxElements[i].style.transform = `translate(${momentX}px, ${momentY}px)`;
    }
});



// .scrool-container 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// slider 2
let slideIndex1 = 0;
let timeoutId1 = null;
const slides1 = document.getElementsByClassName("Slides");
const dots1 = document.getElementsByClassName("pot");

showSlides1();

function currentSlide1(index1) {
  slideIndex1 = index1;
  showSlides1();
}

function showSlides1() {
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
    dots1[i].classList.remove('act');
  }

  if (slideIndex1 >= slides1.length) {
    slideIndex1 = 0;
  }

  slides1[slideIndex1].style.display = "block";
  dots1[slideIndex1].classList.add('act');

  slideIndex1++;

  if (timeoutId1) {
    clearTimeout(timeoutId1);
  }

  timeoutId1 = setTimeout(showSlides1, 3000); // Change image every 3 seconds
}
