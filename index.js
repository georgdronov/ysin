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


// Функция для отображения попапа
function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";

    // Закрытие попапа при клике на него
    popup.addEventListener("click", function () {
        hidePopup(popupId);
    });

    // Закрытие попапа при клике вне него
    document.addEventListener("click", function (event) {
        if (!popup.contains(event.target)) {
            hidePopup(popupId);
        }
    });

    // Автоматическое исчезновение через 5 секунд
    setTimeout(function () {
        hidePopup(popupId);
    }, 5000);
}

// Функция для скрытия попапа
function hidePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}

// Обработка отправки формы
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное действие формы

    // Отправляем данные формы
    var formData = new FormData(this);
    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                showPopup("success-popup"); // Показываем попап успешной отправки
            } else {
                showPopup("error-popup"); // Показываем попап ошибки
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
            showPopup("error-popup"); // Показываем попап ошибки
        });
});
