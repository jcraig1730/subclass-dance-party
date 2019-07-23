var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.css("background-image", 'url("http://www.sclance.com/backgrounds/charmander-transparent-background/charmander-transparent-background_521639.png")');
}

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  if (this.top > 664) {
    this.top = Math.random() * 664;
  }
  if (this.isRotating) {
    this.rotation += 20;
    this.$node.css(`transform`, `rotate(${this.rotation}deg)`)
  }
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
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);

  // this.$node.css("border", "10px solid pink");

}