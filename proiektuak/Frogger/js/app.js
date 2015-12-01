// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -150; //starting location x-axes
    this.y = this.startingPositionY();
    this.speed = this.getSpeed(); // speed of enemy
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //speed of enemy
    this.x = this.x + this.speed * dt;
    if (this.x > 480) { // Enemy returns to starting position
      this.x = -150;
      this.y = this.startingPositionY();
      this.speed = this.getSpeed(); // Change speed enemy after reaching end
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//
Enemy.prototype.startingPositionY = function(){
  var positions=[60, 140, 220];
  return positions[Math.floor(Math.random() * positions.length)];
}

Enemy.prototype.getSpeed = function() {
  var minSpeed = 150;
  var maxSpeed = 500;
  return Math.floor(Math.random() * (maxSpeed - minSpeed)) + minSpeed;
}


var Player = function(){
  this.sprite = 'images/char-boy.png';
  this.startPoint();
}

Player.prototype.update = function() {
  if (this.y == -20) {
      // player is on water, reset
      this.startPoint();
  } else if (this.y >= 60 && this.y <= 220) {
      var self = this;
      // player is on road rows, check collisions
      // loop through each bug
      allEnemies.forEach(function(enemy) {
          // is the bug on the same row as the player?
          if (enemy.y == self.y) {
              // is the bug on the player?
              if (enemy.x >= player.x - 30 && enemy.x <= player.x + 30) {
                  self.startPoint();
              }
          }
      });
  }
}

Player.prototype.startPoint = function(){
  this.x = 200;
  this.y = 380;
}

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {

  if (key == 'left' && this.x>0) {
      this.x = this.x - 101;
      this.update();
  } else  if (key == 'up' && this.y>0) {
      this.y = this.y - 80;
      this.update();
  } else if (key == 'right' && this.x<400) {
      this.x = this.x + 101;
      this.update();
  }else if(key == 'down' && this.y<360) {
      this.y = this.y + 80;
      this.update();
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
