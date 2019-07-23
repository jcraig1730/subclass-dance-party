// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log(this);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.step(timeBetweenSteps);
  this.top = top;
  this.rotation = 0;
  this.isRotating = false;
  this.left = left;
  this.distance = Math.sqrt(top**2 * left**2);
  this.setPosition();
  this.checkCollisions();

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  $(this).on('click', function(e){
    console.log('hiiiiii')
  })
  if (this.isRotating) {
    this.rotation += 20;
    this.$node.css(`transform`, `rotate(${this.rotation}deg)`)
  }
  this.setPosition();
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
};

makeDancer.prototype.checkCollisions = function() {
  for (var i = 0; i < window.dancers.length-1; i++) {
    var distance = Math.sqrt((this.top-window.dancers[i].top)**2 + (this.left-window.dancers[i].left)**2);
    console.log(distance);
    if (distance < 50) {
      this.isRotating = true;
      window.dancers[i].isRotating = true;
    }
  }
}

makeDancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // var topPercent = this.top/946 + '%';
  // var leftPercent = this.left/408 + '%';
  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);
  // this.$node.css("top", this.top);
  // this.$node.css("left", this.left);
  // console.log(this.$node.css("top"));

};

// var a = new makeDancer(0, 0, 1000);

// console.log(a)