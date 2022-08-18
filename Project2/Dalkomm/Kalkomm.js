// header 효과
$(function() {
var lastScrollTop = 0,
    delta = 15;

$(window).scroll(function() {
    const scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return;

    if((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
        $("header").css("top", "-100px");
    } else {
        $("header").css("top", "0px");
    }
    lastScrollTop = scrollTop;
    });
});

// 윈도우 사이즈에 맞춰 마진값 변경
const section = document.querySelector('.section_wrap')
const widthSize = window.innerWidth

if(widthSize < 376) {
    section.style.marginTop="40vw"
}

// 햄버거 메뉴 toggle 효과
const button = document.querySelector('.button')
const nav = document.querySelector('nav')

button.addEventListener('click', () => {
    nav.classList.toggle('toggle')
})

// 서브메뉴 
$('.menuButton').click(function() {
    const index = $('.menuButton').index(this);

    $('.menuButton').removeClass('trun')
    $('.menuButton').eq(index).toggleClass('trun')
    $('.subMenu').removeClass('click')
    $('.subMenu').eq(index).toggleClass('click')
})

// 슬라이더 효과
const swiper = new Swiper('.swiper', {
    loop : true,
    pagination : {
        el: '.swiper-pagination',
    },
})


// section_wrapper에 Fadein효과
const fadein = document.querySelector('.section_wrapper')

let height = fadein.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY > height2 - 600) {
        fadein.classList.add('fadein')
    } else if(scrollY < height2) {
        fadein.classList.remove('fadein')
    }
})

// stroy 영역에 Fadein효과
const fadein2 = document.querySelector('.dal_story')

let height2 = fadein2.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY - 200 > height2) {
        fadein2.classList.add('fadein')
    } else if(scrollY < height2) {
        fadein2.classList.remove('fadein')
    }
})

// play 영역에 Fadein 효과
const fadein3 = document.querySelector('.play_fade')

let height3 = fadein3.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY > height3 + 2600) {
        fadein3.classList.add('fadein')
    } else if(scrollY < height3) {
        fadein3.classList.remove('fadein')
    }
})

// 커피메뉴에 Fadein 효과
const fadein4 = document.querySelector('.color_fade')

let height4 = fadein4.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY > height4 + 200) {
        fadein4.classList.add('fadein')
    } else if(scrollY < height4) {
        fadein4.classList.remove('fadein')
    }
})

// 앱 소개 영역 fadein 효과
const fadein5 = document.querySelector('.new_fade')

let height5 = fadein5.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY > height5 + 200) {
        fadein5.classList.add('fadein')
    } else if(scrollY < height5) {
        fadein5.classList.remove('fadein')
    }
})

// 서포터 영역
const fadein6 = document.querySelector('.support_fade .support_title')

let height6 = fadein6.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY > height6 + 100) {
        fadein6.classList.add('fadein')
    } else if(scrollY < height6) {
        fadein6.classList.remove('fadein')
    }
})

const fadein7 = document.querySelector('.support_fade p')

let height7 = fadein7.offsetTop - document.documentElement.clientHeight;

addEventListener('scroll', () => {
    if(scrollY > height7 + 100) {
        fadein7.classList.add('fadein')
    } else if(scrollY < height7) {
        fadein6.classList.remove('fadein')
    }
})


// 마우스 클릭에 움직이는 효과 GSAP
$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.5, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

$(document).bind("mousemove touchmove", function(e){
    $(".circle_img").parallax(10, e);
    $(".circle_big").parallax(15, e);
    $(".circle_small").parallax(-10, e);
});

// footer 메뉴 
$('.menuButton2').click(function() {
    const index = $('.menuButton2').index(this);

    $('.menuButton2').removeClass('trun')
    $('.menuButton2').eq(index).toggleClass('trun')
    
    $('.ico').removeClass('click')
    $('.ico').eq(index).toggleClass('click')
})