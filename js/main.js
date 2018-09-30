import './jquery-3.1.1.min.js';

//togle menu
$('.menu-toggle').on('click', function(){
  $(this).toggleClass('menu-toggle__active')
  $('.menu-toggle--items').toggleClass('menu-toggle--items__active')
});


//check mail form
let mailValid = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$('#formFeedback').on('submit', function(){

//check mail
  let mailInput = $('[name="formFeedbackEmail"]')

  if(mailValid.test(mailInput.val())){
    mailInput.css('border-color', '#e7e8ea')
  } else {
    mailInput.css('border-color', '#ff0000')
  }

//check name length
  let nameInput = $('[name="formFeedbackName"]')

  if(nameInput.val().length < 3){
    nameInput.css('border-color', '#ff0000')
  } else {
    nameInput.css('border-color', '#e7e8ea')
  }

//check text length
  let textInput = $('[name="formFeedbackText"]')

  if(textInput.val().length < 10){
    textInput.css('border-color', '#ff0000')
  } else {
    textInput.css('border-color', '#e7e8ea')
  } 

console.log(textInput.val().length)
  return false;
});

//anchour
$('a[href^="#"]').click(function(){
  let target = $(this).attr('href');

  $('html, body').animate({scrollTop: $(target).offset().top}, 800);

  return false;
});

//header fixed
$(document).scroll(function(){

  if($(document).scrollTop() > 10) {
    $('.header').addClass('header_fixed')
  } else {
    $('.header').removeClass('header_fixed')
  }

})

//media
let windowW = $(document).width()

if(windowW < 768) {
  $('.menu-toggle--items').append($('nav'))
  console.log(1)
}