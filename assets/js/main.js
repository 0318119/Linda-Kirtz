$(document).ready(function () {
    $('.exploreItems').slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        centerPadding: false,
        centerMargin: false,
        speed: 1000,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    });

    $(".ringModal .imgModal span").click( function () {
        $(".ringModal").css("display","none")
    })
});