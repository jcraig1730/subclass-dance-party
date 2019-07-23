var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.css("background-image", 'url("https://clipart.info/images/ccovers/1528080667Charmander-pokemon-transparent.png")'); 
}

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(()=> {
    this.top += 10;
    // this.left += 20;
    this.setPosition();
  }, 100);
  setTimeout(()=> {
    this.top += 10;
    // this.left += 20;
    this.setPosition();
  }, 200);
  setTimeout(()=> {
    this.top -= 10;
    // this.left += 20;
    this.setPosition();
  }, 300);
  setTimeout(()=> {
    // this.left -= 20;
    this.top -= 10;
    this.setPosition();
  }, 400);
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);

  // this.$node.css("border", "10px solid pink");
  
}