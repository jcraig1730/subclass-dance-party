var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.css("background-image", 'url("http://www.sclance.com/backgrounds/charmander-transparent-background/charmander-transparent-background_521639.png")');

  this.type = 'jumpy';
}

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  setTimeout(()=> {
    this.top += 10;
    this.setPosition();
  }, 100);
  setTimeout(()=> {
    this.top += 10;
    this.setPosition();
  }, 200);
  setTimeout(()=> {
    this.top -= 10;
    this.setPosition();
  }, 300);
  setTimeout(()=> {
    this.top -= 10;
    this.setPosition();
  }, 400);

}