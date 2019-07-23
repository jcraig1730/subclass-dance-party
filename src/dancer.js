// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log(this);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  this.step(timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.setPosition();

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.setPosition();
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
};

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