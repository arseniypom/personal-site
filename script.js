$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger,.header_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.html_img').hover(function(event) {
    $('.html_img').toggleClass('active');
    $('.html_p').toggleClass('active');
  });

  $('.css_img').hover(function(event) {
    $('.css_img').toggleClass('active');
    $('.css_p').toggleClass('active');
  });

  $('.js_img').hover(function(event) {
    $('.js_img').toggleClass('active');
    $('.js_p').toggleClass('active');
  });

  $('.jq_img').hover(function(event) {
    $('.jq_img').toggleClass('active');
    $('.jq_p').toggleClass('active');
  });

  $('.bootstrap_img').hover(function(event) {
    $('.bootstrap_img').toggleClass('active');
    $('.bootstrap_p').toggleClass('active');
  });

  $('.ps_img').hover(function(event) {
    $('.ps_img').toggleClass('active');
    $('.ps_p').toggleClass('active');
  });
});
