var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
        1: {
            slidesPerView: 1,
        }
    }
});

// Получаем все карточки в карусели
var swiperSlides = document.querySelectorAll('.swiper-slide');

// Находим максимальную высоту среди всех карточек
var maxHeight = 0;
swiperSlides.forEach(function (slide) {
    var slideHeight = slide.clientHeight;
    maxHeight = Math.max(maxHeight, slideHeight);
});

// Применяем максимальную высоту ко всем карточкам
swiperSlides.forEach(function (slide) {
    slide.style.height = maxHeight + 'px';
});


$(document).ready(function () {
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true // Включает галерею изображений (если у вас есть несколько изображений)
        }
    });
});