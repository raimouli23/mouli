let navbar=document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=()=>{
    navbar.classList.toggle('active');
}
let search=document.querySelector('.search');
document.querySelector('#search').onclick=()=>{
    search.classList.toggle('active');
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteracion:false,
    },
    pagination:{
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });
  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteracion:false,
    },
    pagination:{
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });