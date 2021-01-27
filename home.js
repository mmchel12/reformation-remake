/*jshint esversion: 6 */
/* jshint browser: true */
/* global console */


// NAVIGATION BAR -------

const burger = document.querySelector('.burger-wrapper');
const search = document.querySelector('.search');
const bagIcon = document.querySelector('.bag');
const bag = document.querySelector('.normalizebag');
const menuBar = document.querySelector('.navmenu');
const header = document.querySelector('.header');
const navBar = document.querySelector('nav');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    menuBar.classList.toggle('nav-active');
    search.classList.remove('active');
    bagIcon.classList.remove('bag-active');
});

search.addEventListener('click', function(){
    search.classList.toggle('active');
    bagIcon.classList.remove('bag-active');
    burger.classList.remove('active');
    menuBar.classList.remove('nav-active');
});

bag.addEventListener('click', function(){
    bagIcon.classList.toggle('bag-active');
    burger.classList.remove('active');
    menuBar.classList.remove('nav-active');
    search.classList.remove('active');
});


// make nav stick to top
const options = { };
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navBar.classList.add('scrolled');
      header.style.marginBottom = '43px';
    } else {
      navBar.classList.remove('scrolled');
      header.style.marginBottom = '0';
    }
  });
}, options);

observer.observe(header);


// FILTER POPUP

const filterTypes = document.querySelectorAll('.filter-type');

filterTypes.forEach.addEventListener('click', function() {
    filterTypes.forEach.style.backgroundColor = 'blue';
});