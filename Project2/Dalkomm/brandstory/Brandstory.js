// header 효과
$(function() {
    var lastScrollTop = 0,
        delta = 15;
    
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return;
    
    if((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
        $("header").css("top", "-200px");
    } else {
        $("header").css("top", "0px");
    }
    lastScrollTop = scrollTop;
    });
});
// 햄버거 메뉴 toggle 효과
const button = document.querySelector('.button')
const nav = document.querySelector('nav')

button.addEventListener('click', () => {
    nav.classList.toggle('toggle')
});

// 서브메뉴 
$('.menuButton').click(function() {
    const index = $('.menuButton').index(this);

    $('.menuButton').removeClass('trun')
    $('.menuButton').eq(index).toggleClass('trun')
    $('.subMenu').removeClass('click')
    $('.subMenu').eq(index).toggleClass('click')
})