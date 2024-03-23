var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

document.addEventListener('DOMContentLoaded', function () {
    var phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('focus', function () {
        var currentValue = this.value.replace(/\D/g, '');
        if (currentValue.length === 0) {
            this.value = '+7 (';
        }
    });
    phoneInput.addEventListener('input', function () {
        var x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        this.value = !x[2] ? x[1] : '+' + x[1] + ' (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });
});

// email JS
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function (response) {
                console.log('Письмо успешно отправлено!', response.status, response.text);
                alert('Письмо успешно отправлено!');
                form.reset(); // Очистить форму после успешной отправки
            }, function (error) {
                console.error('Ошибка при отправке письма:', error);
                alert('Ошибка при отправке письма!');
            });
    });
});