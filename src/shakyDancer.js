var makeShakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.css("background-image", 'url("https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png")'); 
}

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(()=> {
    this.left += 10;
    this.setPosition();
  }, 100);
  setTimeout(()=> {
    this.left += 10;
    this.setPosition();
  }, 200);
  setTimeout(()=> {
    // this.left -= 20;
    this.left -= 10;
    this.setPosition();
  }, 300);
  setTimeout(()=> {
    // this.left -= 20;
    this.left -= 10;
    this.setPosition();
  }, 400);
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
  
}