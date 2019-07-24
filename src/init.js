$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $(".dancefloor").height() * Math.random() + 20,
      $(".dancefloor").width() * Math.random(),
      Math.random() * 500
    );

    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineupButton').on('click', function(event) {
    var spacing = $('.dancefloor').width()/(window.dancers.length+1);
    var nextSpace = 0;
    window.dancers.forEach(dancer => {
      console.log(nextSpace)
      nextSpace += spacing;
      $(dancer).animate({top: $(".dancefloor").height()/2, left: nextSpace}, 1000);
    })
  })

  $('.spinButton').on('click', function() {
    window.dancers.forEach(dancer => dancer.isRotating = true);
  })

  $('body').on('click', '.dancefloor', function(event) {
    window.dancers.forEach(dancer => {
      var randomTop = $(".dancefloor").height() * Math.random() + 20;
      var randomLeft = $(".dancefloor").width() * Math.random();
      $(dancer).animate({top: randomTop, left: randomLeft}, 500);
    })
  })

});

