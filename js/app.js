// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images


  const verticalPlacement = [40, 130, 220];
  this.x= 0 - Math.floor(Math.random() * 3000);
  this.y= verticalPlacement[Math.floor(Math.random() * 3)];

  //adds randomness to bug's speed
  this.initspeed = 100 + Math.floor(Math.random() * 200)
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {


  this.x += this.initspeed *dt;


//checks for collisions and sends player back to starting point
  allEnemies.forEach(function print(element){

     if(((element.x > player.x -40) && (element.x < player.x + 40)) && ((element.y > player.y -40) && (element.y < player.y + 40)) ){

      player.x = 200;
      player.y = 400;
     }

  });



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// ----Now write your own player class

  var Player = function() {

      this.x=200;
      this.y=400;
      this.sprite = 'images/char-boy.png';
  };



  // ----This class requires an update(), render() and
Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

Player.prototype.update = function() {

//checks that player has got to the top!

  if (player.y == -50) {

    alert('Well done! You won!');
    player.y = 400;
    player.x = 200;
  }

};

  // ----a handleInput() method.

Player.prototype.handleInput = function(key) {
  const moveY = 90;
  const moveX = 100;
  switch(key){

  case 'up':
    if(this.y == -50){
      break;

    }
    this.y -= moveY;
    break;

  case 'right':
    if(this.x == 400){
      break;
    }
    this.x += moveX;
    break;

  case 'left':
    if(this.x == 0){
      break;
    }
    this.x -= moveX;
    break;

  case 'down':
  if(this.y == 400){
    break;

  }
    this.y += moveY;
    break;
  }

};





// Now instantiate your objects.



// Place all enemy objects in an array called allEnemies

const allEnemies= [ ];

for (i = 0; i <= 50; i++){
  const enemy = new Enemy();
  allEnemies.push(enemy);
}

// Place the player object in a variable called player
const player = new Player();



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
