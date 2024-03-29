document.addEventListener('DOMContentLoaded', () => {

    const textloop = new Typewriter('#looptext', {
        loop : true,
        deleteSpeed : 'natural',
        delay : 'natural'
    });

    textloop.typeString('DONGJAE like to watch videos')
        .pauseFor(1000)
        .deleteChars(21)
        .typeString(' like ice Americano')
        .pauseFor(1000)
        .deleteChars(19)
        .typeString(' love Chocolate')
        .pauseFor(1000)
        .deleteChars(15)
        .typeString(' have six really close friends')
        .deleteChars(30)
        .start();

    /* arrow 효과 */
    const box = document.querySelector('#arrow')

    box.animate({
        transform: [
            'translateY(0)',
            'translateY(50px) ',
        ]
    },
    {
        duration : 2000,// 시간
        iterations: Infinity,// 반복 횟수
        direction: 'normal', // 방향
        easing: 'ease',// 움직임 형태
        fill : 'forwards'
    })

    const bg1 = document.querySelector('#project1')
    const bg2 = document.querySelector('#project2')
    const bg3 = document.querySelector('#project3')
    const bg4 = document.querySelector('#project4')
    const body = document.querySelector('body')

    bg1.addEventListener('mouseover', () => {
        body.style.backgroundColor = '#F2A74B'
    })
    bg2.addEventListener('mouseover', () => {
        body.style.backgroundColor = '#F2CD5E'
    })
    bg3.addEventListener('mouseover', () => {
        body.style.backgroundColor = '#9CD9D9'
    })
    bg4.addEventListener('mouseover', () => {
        body.style.backgroundColor = '#3BB2BF'
    })
});