var makeShakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.type = 'shaky';
  this.$node.css("background-image", 'url("https://www.pinclipart.com/picdir/big/52-522354_download-bart-simpson-png-and-clipart-images-bulbasaur.png")');
  this.$node.css("border", '4px solid #FF00')
}

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function(timeBetweenSteps) {
  if (this.isRotating) {
    this.rotation += 20;
    this.$node.css(`transform`, `rotate(${this.rotation}deg)`)
  }
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