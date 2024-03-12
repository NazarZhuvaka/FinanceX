// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: '3.6',
//     speed: '500',
//     spaceBetween: '30',
//     grabCursor: 'true',
//     centeredSlides: 'auto',
    
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-custom-button-next',
//       prevEl: '.swiper-custom-button-prev',
//     },
  
//   });

  
  
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

// Початкова конфігурація Swiper
const initialSwiperConfig = {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3.6,
  speed: 500,
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: 'auto',
  navigation: {
    nextEl: '.swiper-custom-button-next',
    prevEl: '.swiper-custom-button-prev',
  },
};

// Створення екземпляру Swiper з початковою конфігурацією
const swiper = new Swiper('.swiper', initialSwiperConfig);

// Функція для оновлення конфігурації Swiper при зміні розміру вікна
function updateSwiperConfig() {
  const screenWidth = window.innerWidth;

  // Перевірка розміру екрана і оновлення slidesPerView відповідно
  if (screenWidth <= 1350) {
    swiper.params.slidesPerView = 2;
  } 
  if (screenWidth <= 768) {
    swiper.params.slidesPerView = 1;
  }  
  // else {
  //   swiper.params.slidesPerView = initialSwiperConfig.slidesPerView;
  // }

  // Оновлення конфігурації Swiper
  swiper.update();
}

// Виклик функції при завантаженні сторінки та при зміні розміру вікна
window.addEventListener('load', updateSwiperConfig);
window.addEventListener('resize', updateSwiperConfig);

