$(document).ready(function() {

  setScrollButtons();
  $('#my-carousel').carousel();


  function setScrollButtons() {
    $('#services-button').click(function() {
      $('html, body').animate({
        scrollTop: $('#about').offset().top - $('.navbar').height()
      }, 500);
    })
    $('#gallery-button').click(function() {
      $('html, body').animate({
        scrollTop: $('#gallery').offset().top - $('.navbar').height()
      }, 500);
    })
  }

});
