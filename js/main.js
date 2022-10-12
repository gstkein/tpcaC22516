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
      
function validarFormJS(field) {
  field.addEventListener('change', (event) => {validateField(event.target)});

  if (field.getAttribute('listener') !== 'true') {
    field.addEventListener('input', function (e) {
      field.setAttribute('listener', 'true');
        validateField(field);
   });
  }

  return validateField(field);
}

function validateField(x) {
  if (x.value == "") {
    x.classList.add('is-invalid');
    x.classList.remove('is-valid');
    x.classList.remove('valid');
    x.setCustomValidity("Invalid field.");
    return false;
  } else {
    x.classList.remove('is-invalid');
    x.classList.add('is-valid');
    x.setCustomValidity("");
  }
}

// JavaScript para validar formulario
// Campos Asuntos y Mensaje validados como no vacios por JS
// nombre requerido y campo email validados con html5 al igual que tamaño minimo de mensaje
(function () {
    'use strict' 
    // Aplicar Bootstrap validation styles a todos los forms
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over forms and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          let htmlVal = form.checkValidity();
          let jsVal = validarFormJS(document.forms["form_contacto"]["subject"]);
          let jsVal2 = validarFormJS(document.forms["form_contacto"]["message"]);

          if (!htmlVal || !jsVal  || !jsVal2) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

});