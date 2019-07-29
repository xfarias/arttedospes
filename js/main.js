
/* form */
$('body').on('click', '.tabs a', function (e) {
  e.preventDefault();

  $('.tabs a.active').removeClass('active');
  $(this).addClass('active');
  $('.tab-content .form.active').removeClass('active');
  $($(this).data('to')).addClass('active');
  $('#choose-form').val($(this).data('to'))
});

$(".accordion").on("click", ".accordion-header", function() {
  $(this).toggleClass("active").next().slideToggle();
});



$('body').on('change', '#choose-form', function (e) {
  $('.tabs a.active').removeClass('active');
  $('.tabs a[data-to="'+ $(this).val() +'"]').addClass('active');

  $('.tab-content .form.active').removeClass('active');
  $($(this).val()).addClass('active')

});


/* Sandwich Menu  */
$('body').on('click ', '.sandwich .icon', function(e) {
  $(this).toggleClass('opened');
  $('.menu-full').toggleClass('opened');
  $('body').toggleClass('closed');
});

/* Menu  link to sections*/
$('.menu a[href*="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 10
  }, 1350);
});

/* Toggle Menu*/

$(document).ready(function () {

  $(".menu-btn a").click(function () {
    $(".overlay").fadeToggle(200);
    $(this).toggleClass('btn-open').toggleClass('btn-close');
  });

  $('.menu-full a').on('click', function () {
    $(".overlay").fadeToggle(200);
    $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
  });

});




/* Form Change - Choose-Form 1 (Service) */
$('body').on('click', '.tabs1 a', function (e) {
  e.preventDefault();

  $('.tabs1 a.active').removeClass('active');
  $(this).addClass('active');
  // $('.tab-content-1 .form.active').removeClass('active');
  $('.tabb').removeClass('active');
  $($(this).data('to')).addClass('active');
  $('#choose-form1').val($(this).data('to'))
});



$('body').on('change', '#choose-form1', function (e) {
  $('.tabs1 a.active').removeClass('active');
  $('.tabs1 a[data-to="'+ $(this).val() +'"]').addClass('active');
  $('.tab-content-1 .form.active').removeClass('active');
  $($(this).val()).addClass('active')

});





