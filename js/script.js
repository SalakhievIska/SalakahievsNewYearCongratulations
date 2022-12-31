$(document).ready(function() {
  const $clickMe = $('.click-icon');
  const $card = $('.card');

  $card.on('click', function() {
    $(this).toggleClass('is-opened');
    $clickMe.toggleClass('is-hidden');
  });
});
