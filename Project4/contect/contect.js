// 대메뉴

const button = document.querySelector('.button')
const menu = document.querySelector('#gnb')
const header = document.querySelector('header')

button.addEventListener('click' , () => {
    button.classList.toggle('button')
    button.classList.toggle('chancel')
    menu.classList.toggle('open')
    header.classList.toggle('up')
})



// 슬라이더 효과

const swiper = new Swiper('.swiper', {
    pagination : {
        el: '.swiper-pagination',
        clickable : true,
    },
})

document.querySelector('.swiper-slide').removeAttribute('style');


// footer 메뉴

const select = document.querySelector('.select')
const list = document.querySelector('#down')

select.addEventListener('click', () => {
    select.classList.toggle('trun')
    list.classList.toggle('up')
})