$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
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
      $(dancer).animate({top: $(".dancefloor").height()/2, left: nextSpace}, 500);
    })
  })

  $('.spinButton').on('click', function() {
    window.dancers.forEach(dancer => dancer.isRotating = true);
  })

  // $('body').on('click', '.dancefloor', function(event) {
  //   window.dancers.forEach(dancer => {
  //     var randomTop = $(".dancefloor").height() * Math.random() + 20;
  //     var randomLeft = $(".dancefloor").width() * Math.random();
  //     $(dancer).animate({top: randomTop, left: randomLeft}, 500);
  //   })
  // })

});

