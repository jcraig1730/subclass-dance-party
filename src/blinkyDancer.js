var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log('blinky: ' + this);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.type = 'blinky';
  this.$node.css("background-image", 'url("https://www.pngkey.com/png/full/56-566109_pikachu-transparent-background-pokmon-pikachu.png")');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// var b = BlinkyDancer(2,2,3000);