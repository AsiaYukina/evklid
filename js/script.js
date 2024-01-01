// burger-menu

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function(){
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scrol');
  }
)

menuLink.forEach(function(el){
  el.addEventListener('click', function (){
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scrol');
  })
})


// search

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('header__form--active');
  })

  document.getElementById('search-form-back').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('header__form--active')
  })

  document.getElementById('search-form').addEventListener('submit-form', (e) => {
    e.preventDefault()
  })
})


// hero-swiper

var hero__swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// job-swiper

var job__swiper = new Swiper(".job__swiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-number",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + " шаг" + "</span>";
    },
  },
});


// questions-accordion

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion', {
  duration: 700,
  elementClass:	'accordion__item',
  triggerClass: 'accordion__title',
  panelClass: 'accordion__panel',
  // showMultiple: false,
  // openOnInit: [0],
  //   collapse: false
});
})
