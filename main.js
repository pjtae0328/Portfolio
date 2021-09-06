'use strict';

//넷바 이동 이벤트
const navbar = document.getElementById('navbar');
document.addEventListener('scroll', () => {
    if(window.scrollY >= navbar.getBoundingClientRect().height) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});

//넷바 버튼 스크롤 핸들링
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    scrollTo(link);
});

function scrollTo(link) {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

//Contact 버튼 핸들링
const btnContact = document.querySelector('.welcome__contact');
btnContact.addEventListener('click', () => scrollTo('#contact'));