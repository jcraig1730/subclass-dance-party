var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.css("background-image", 'url("https://clipart.info/images/ccovers/1528080667Charmander-pokemon-transparent.png")'); 
}

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(()=> {
    this.top += 20;
    // this.left += 20;
    this.setPosition();
  }, 150);
  setTimeout(()=> {
    // this.left -= 20;
    this.top -= 20;
    this.setPosition();
  }, 300);
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);

  // this.$node.css("border", "10px solid pink");
  
}