$(document).ready(function () {

    $('.project-card').hover(function () {

        $(this).find('.project-description, .project-technologies').toggleClass('d-none');
    });
});