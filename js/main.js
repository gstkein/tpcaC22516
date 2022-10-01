$(document).ready(function(){
    $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-show');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-show');


        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
          }else{
            $('header').removeClass('header-active');
          }
      
          $('section').each(function(){
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top -200;
            var top = $(window).scrollTop();
            if(top >= offset && top < offset + height){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find('[name="' + id + '"]').addClass('active');
            }
          });
      
        });
      


// JavaScript para validar formulario
(function () {
    'use strict' 
    // Aplicar Bootstrap validation styles a todos los forms
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

});