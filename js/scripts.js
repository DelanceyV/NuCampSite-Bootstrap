$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("#icon").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("#icon").removeClass("fa-pause");
            $("#carouselButton").children("#icon").addClass("fa-play");
        } else {
/* In the lesson she had "$(.carousel).carousel("cycle");" here. I tried it on my own to see if i could figure 
it out and the code worked fine. Is the "cycle" code necessary?? */
            $("#carouselButton").children("#icon").removeClass("fa-play");
            $("#carouselButton").children("#icon").addClass("fa-pause");
        };
    });

    $('#reserveBtn').click(function(){
        $('#reserveModal').modal('show');
    });

    $('#loginBtn').click(function(){
        $('#loginModal').modal('show');
    });

    $('.closeModal').click(function(){
        $('#reserveModal').modal('hide');
        $('#loginModal').modal('hide');
    });
});

