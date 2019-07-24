var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log('blinky: ' + this);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.type = 'blinky';
  this.$node.css("background-image", 'url("https://www.pngkey.com/png/full/56-566109_pikachu-transparent-background-pokmon-pikachu.png")');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};
