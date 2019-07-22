var jumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
}

jumpyDancer.prototype = Object.create(makeDancer.prototype);
jumpyDancer.prototype.constructor = jumpyDancer;

jumpyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(()=> {
    this.top++;
    this.setPosition(top, left);
  }, 300);
  setTimeout(()=> {
    this.top++;
    this.setPosition(top, left);
  }, 300);
  
  this.top--;
  this.setPosition(top, left);
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
}