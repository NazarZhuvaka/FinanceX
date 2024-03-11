const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: '3.6',
    speed: '500',
    spaceBetween: '30',
    grabCursor: 'true',
    centeredSlides: 'auto',
    
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-custom-button-next',
      prevEl: '.swiper-custom-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}

window.onload = function() {
    window.setInterval(function(){
        var date = new Date();


        var years = date.getFullYear();
        

        var clock = years;

        document.getElementById("year-clock").innerHTML = clock; 
    }
    );
}

