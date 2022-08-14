$('#box1').on('mouseover', function() {
    $(this).stop().animate({
        backgroundPositionY : "100%"
    }, 20000);
})
$('#box1').on('mouseleave', function() {
    $(this).stop().animate({
        backgroundPositionY : 0
    })
})