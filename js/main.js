$(document).ready(function(){
    $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-show');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-show');
        });

    
});