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


//프로젝트 상세보기
const tayoView = document.querySelector('.tayo-view');
const sunnyTodayView = document.querySelector('.sunnytoday-view');
const kakaoView = document.querySelector('.kakao-view');
const woosungView = document.querySelector('.ws-view');

const projectViewBackground = document.createElement('div');
projectViewBackground.classList.add('project-background');

const projectDetailWrap = document.createElement('div');
projectDetailWrap.classList.add('project-wrap');
projectViewBackground.appendChild(projectDetailWrap);

const projectDetailExit = document.createElement('i');
projectDetailExit.classList.add('fas');
projectDetailExit.classList.add('fa-times-circle');
projectDetailWrap.appendChild(projectDetailExit);

projectDetailExit.addEventListener('click', ()=> {
    document.body.removeChild(projectViewBackground);
});

const projectDetail = document.createElement('iframe');
projectDetail.classList.add('project-detail');
projectDetailWrap.appendChild(projectDetail);

tayoView.addEventListener('click', () => showProjectDetail('tayo'));
sunnyTodayView.addEventListener('click', () => showProjectDetail('sunnyToday'));
woosungView.addEventListener('click', () => alert('준비 중 입니다.'));
kakaoView.addEventListener('click', () => alert('준비 중 입니다.'));

function showProjectDetail(project) {
    document.body.appendChild(projectViewBackground);

    switch(project) {
        case 'tayo':
            projectDetail.src = 'https://pjtae0328.tistory.com/37';
            break;
        case 'sunnyToday':
            projectDetail.src = 'https://pjtae0328.tistory.com/36';
            break;
    }
}