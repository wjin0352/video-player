$(document).ready(function() {
  console.log('ready');

  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $('.popover-dismiss').popover({
    trigger: 'focus'
  });

  // $('#popover').popover(options)
});
