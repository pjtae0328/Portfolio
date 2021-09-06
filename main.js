'use strict';

//넷바 스크롤 이벤트
const home = document.getElementById('home');
const navbar = document.getElementById('navbar');
document.addEventListener('scroll', () => {
    if(window.scrollY >= navbar.getBoundingClientRect().height) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});
