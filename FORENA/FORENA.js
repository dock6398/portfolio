document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('#menu');
    const box = document.querySelector('#gnb');
    const nav = document.querySelector('nav');

    // 햄버거 메뉴 버튼 클릭 부분
    menu.addEventListener('click', () => {
    box.classList.toggle('box');
    })

    // 스크롤 배경색 변경 부분
    window.addEventListener('scroll', function() {
        const top = window.scrollY
        || window.pageXOffset
        if(top > 1) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });

});