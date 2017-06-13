$(document).ready(function() {

    $(".player").mb_YTPlayer();


    //menu fixed scroll 

    var nav = $('#nav-cerco');
    var form = $('#form-contacto');
    $(window).scroll(function() {
        //muestra menu al hacer scroll
        if ($(this).scrollTop() > 148) {
            nav.addClass("f-nav");
            form.addClass('form-fixed');
        } else {
            nav.removeClass("f-nav");
            form.removeClass("form-fixed");
        }




    });


    $('#carousel-example-generic').carousel({
        interval: 2000,
        pause: "false"
    });
    $('#playButton').click(function() {
        $('#carousel-example-generic').carousel('cycle');
    });
    $('#pauseButton').click(function() {
        $('#carousel-example-generic').carousel('pause');
    });


    if ($(window).width() < 640) {

        $('#nav-items').hide();

        $('.navbar-toggle').click(function() {
            // $('').slideDown();
            $('#nav-items').slideToggle("slow", function() {

            });
        });
        $('#nav-items li').click(function() {
            $('#nav-items').slideUp();
        });

    }

});
