$('.pc').on('mouseover', function() {
    $(this).stop().animate({
        backgroundPositionY : "100%"
    }, 20000);
})
$('.pc').on('mouseleave', function() {
    $(this).stop().animate({
        backgroundPositionY : 0
    })
})