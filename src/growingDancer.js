var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.height = 40;
  this.width = 40;
  this.$node.css("background-image", 'url("https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png")';
}

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(()=> {
    this.width += 20;
    this.height += 20;
    this.setPosition();
  }, 100);
  setTimeout(()=> {
    this.width -= 20;
    this.height -= 20;
    this.setPosition();
  }, 200);
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
}

makeGrowingDancer.prototype.setPosition = function() {
  var styleSettings = {
    height: this.height,
    width: this.width
  };
  
  this.$node.css(styleSettings);
}

  

