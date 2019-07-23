var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.type = 'growy';
  this.height = 40;
  this.width = 40;
  this.$node.css("background-image", 'url("https://www.seekpng.com/png/full/147-1475004_squirtle-transparent-cute-squirtle-transparent-background.png")');
}

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.step = function(timeBetweenSteps) {
  if (this.isRotating) {
    this.rotation += 20;
    this.$node.css(`transform`, `rotate(${this.rotation}deg)`)
  }
  setTimeout(()=> {
    this.width = 50;
    this.height = 50;
    this.setPosition();
  }, 100);
  setTimeout(()=> {
    this.width = 60;
    this.height = 60;
    this.setPosition();
  }, 200);
  setTimeout(()=> {
    this.width = 50;
    this.height = 50;
    this.setPosition();
  }, 300);
  setTimeout(()=> {
    this.width = 40;
    this.height = 40;
    this.setPosition();
  }, 400);
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
}

makeGrowingDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left,
    height: this.height,
    width: this.width
  };

  this.$node.css(styleSettings);
}



