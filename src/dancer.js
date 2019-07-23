// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log(this);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  $(this.$node).on('click', () => {
    // console.log(this,t)
    this.$node.css("background-image", 'url("https://ui-ex.com/images600_/vector-cloud-smoke-3.png")')
    setTimeout(() => {
      switch (this.type) {
        case 'jumpy':
          this.$node.css("background-image", 'url("https://png2.kisspng.com/sh/07ea7b8f4db1980861764ff2cde9e70f/L0KzQYm3WcIyN6ZwfZH0aYP2gLBuTgBwc550hp9DLXHxdH7CTfNpaaNyedDtZYKwc7nokv1mdJZ0hp95aXvkc7n8TgNyfV46RdVxYYLwdb3sjB4ub5D5jNM2dILkc7a6WfVuNZJxhJ9reT32eLF5lQl3d146etM9NnXpQbbsVBFnO187T6U8OEm8RIK8U8c2OGMATqMEN0a7PsH1h5==/kisspng-pokmon-x-and-y-charmander-charmeleon-pikachu-squ-5-charmeleon-gotta-trace39em-all-by-shortyvo-5ba46ef1ee7af3.6733899415375029619768.png")');
          break;
        case 'shaky':
          this.$node.css("background-image", 'url("https://vectors.pro/wp-content/uploads/2017/09/ivysaur-pokemon-character-vector-art.png")');
          break;
        case 'blinky':
          this.$node.css("background-image", 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f405c526-fbf1-4d1c-99c6-8cd3a8ad3315/d5cxttu-00cbedfc-b49c-40c9-a50f-d4887d014e56.png/v1/fill/w_900,h_765,strp/26__raichu__vector__by_inkomingvirus_d5cxttu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY1IiwicGF0aCI6IlwvZlwvZjQwNWM1MjYtZmJmMS00ZDFjLTk5YzYtOGNkM2E4YWQzMzE1XC9kNWN4dHR1LTAwY2JlZGZjLWI0OWMtNDBjOS1hNTBmLWQ0ODg3ZDAxNGU1Ni5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pDBg1jdGblUCce7zMs4GDnN6r6XxjqCom-d8dXCRIwQ")');
          break;
        case 'growy':
          this.$node.css("background-image", 'url("https://pngimage.net/wp-content/uploads/2018/06/wartortle-png-7.png")');
          break;
      }
      this.$node.css("width", "80px");
      this.$node.css("height", "80px");
    }, 500);
  })

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.step(timeBetweenSteps);
  this.top = top;
  this.rotation = 0;
  this.isRotating = false;
  this.left = left;
  this.distance = Math.sqrt(top**2 * left**2);
  this.isEvolved = false;
  this.setPosition();
  this.checkCollisions();

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step


  if (this.isRotating) {
    this.rotation += 20;
    this.$node.css(`transform`, `rotate(${this.rotation}deg)`)
  }
  this.setPosition();
  setTimeout(() => { this.step(timeBetweenSteps) }, timeBetweenSteps);
};

makeDancer.prototype.checkCollisions = function() {
  for (var i = 0; i < window.dancers.length-1; i++) {
    var distance = Math.sqrt((this.top-window.dancers[i].top)**2 + (this.left-window.dancers[i].left)**2);
    console.log(distance);
    if (distance < 50) {
      this.isRotating = true;
      window.dancers[i].isRotating = true;
    }
  }
}

makeDancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // var topPercent = this.top/946 + '%';
  // var leftPercent = this.left/408 + '%';
  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);
  // this.$node.css("top", this.top);
  // this.$node.css("left", this.left);
  // console.log(this.$node.css("top"));

};

// var a = new makeDancer(0, 0, 1000);

// console.log(a)