$(document).ready(function (){
    $("#a.about").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#about").offset().top + offset
    }, 2000);
});
});
