$(document).ready(function () {
    $('div').on('mouseover', function () {
        $(this).toggleClass('show-description');
    });
    $('div').on('mouseout', function () {
        $(this).toggleClass('show-description');
    });

    $(function() {
        $(".Landing").hover(
            function() {
                $(this).attr("src", "../images/302.gif");
            },
            function() {
                $(this).attr("src", "../images/302.jpg");
            }                         
        );                  
    });
    
    $('img[usemap]').rwdImageMaps();

});

