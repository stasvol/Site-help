var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

 //  ЗАМІНА НАЗВИ КНОПКИ
const btn = document.querySelector('.btn7 > span');
btn.addEventListener  ('click', toggleMenu, true);

function toggleMenu(){
    if (btn.className==='navbar-toggler-icon') {
        btn.innerHTML = 'X';
        btn.setAttribute('class','icon_x');
    }
    else {
        btn.setAttribute('class', 'navbar-toggler-icon');
        btn.innerHTML=''
    }
}

//  SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav_toggle").style.top = "0";
        document.getElementById("btn_box").style.top = "20px";
    } else {
        document.getElementById("nav_toggle").style.top = "-500px";
        document.getElementById("btn_box").style.top = "-500px";
    }
    prevScrollpos = currentScrollPos;
};

    // Пробував сам зробити
// let toggle = document.getElementById('nav_toggle');
// window.addEventListener('scroll',function () {
//
// if (window.scroll === scrollTop ('top')) {
//     toggle.style.display='none';
//
// }
// else {
//     toggle.show
// }
// });

// const btn = document.querySelector('.btn > span');
// btn.addEventListener('click', function() {
//     btn.innerHTML =
//         (btn.innerHTML === 'Показать всё') ? btn.innerHTML = 'Скрыть всё' : btn.innerHTML = 'Показать всё';
// })

// const btn = document.querySelectorAll('.btn > span');
// for (let i = 0; i < btn.length; i++) {
//
//     btn[i].addEventListener('click', function() {
//         this.innerHTML =
//             (this.innerHTML === 'Показать всё') ? this.innerHTML = 'Скрыть всё' : this.innerHTML = 'Показать всё';
//     })
//
// }
