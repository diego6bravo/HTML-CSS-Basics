$('body').addClass('main');
$(window).load(function(){
    if ($('div').is('#white-slider')) {
        $("#white-slider").slick({
            autoplay:!1,
            infinite:!1,
            slidesToShow:1,
            slidesToScroll:1,
            variableWidth:!0,
            arrows:!1
        });
    }
    if ($('div').is('#results-slider')) {
        $("#results-slider").slick({
            autoplay:!1,
            infinite:!1,
            slidesToShow:1,
            slidesToScroll:1,
            variableWidth:!0,
            arrows:!1
        });
    }
    updSlideWidth();
    $('#desc').addClass('finished');
});
$(window).resize(function(){
    updSlideWidth();
});