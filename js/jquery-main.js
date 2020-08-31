$(document).ready(function () {
    $('div').on('mouseover', function () {
        $(this).toggleClass('show-description');
    });
    $('div').on('mouseout', function () {
        $(this).toggleClass('show-description');
    });
});

