'use strict';

//넷바 고정 이벤트
const navbar = document.getElementById('navbar');
document.addEventListener('scroll', () => {
    if(window.scrollY >= navbar.getBoundingClientRect().height) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});

//넷바 버튼 네비게이션 스크롤 핸들링
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



//Navbar button state
const navbarButtons = document.querySelectorAll('.navbar__menu__item');
let navbarActivedIndex = 0;

//위치 판단 후 active 변경
document.addEventListener('scroll', () => {
    const maxHeight = document.body.getBoundingClientRect().height - window.innerHeight;
    const scrollHeight = window.scrollY;
    let totalHeight = document.querySelector('#home').getBoundingClientRect().height - window.innerHeight / 2;

    //맨위, 아래 예외처리
    if(scrollHeight < totalHeight) {
        navbarButtons[navbarActivedIndex].classList.remove('active');
        return;
    }
    if(scrollHeight >= maxHeight - document.querySelector('#contact').getBoundingClientRect().height / 2) {
        navbarButtons[navbarActivedIndex].classList.remove('active');
        navbarButtons[navbarButtons.length - 1].classList.add('active');
        navbarActivedIndex = navbarButtons.length - 1;
        return;
    }

    for(let i = 0; i < navbarButtons.length; i++) {
        const targetHeight = document.querySelector(navbarButtons[i].dataset.link)
            .getBoundingClientRect().height;

        totalHeight += targetHeight;
        if(scrollHeight < totalHeight) {
            navbarButtons[navbarActivedIndex].classList.remove('active');
            navbarButtons[i].classList.add('active');
            navbarActivedIndex = i;
            return;
        }
    }
});