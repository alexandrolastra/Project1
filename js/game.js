class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.backgroundScreen = document.getElementById("background");
    this.player = new Player(
      this.gameScreen,
      50,
      125,
      50,
      75,
      "./images/x wing.png"
    );

    this.height = 580;
    this.width = 900;
    this.obstacles = [];
    this.stars = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60); // 60fps  
   // this.time = 0; // Want to introduce timer
   

  let frameCount = 0;
  let score = 0;
  const scoreElement = document.getElementById('score');
  
  function updateScore() {
    frameCount++;
  
    if (frameCount >= 60) {
      score++;
      scoreElement.textContent = score;
      frameCount = 0; // Reset the frame count
    }
    requestAnimationFrame(updateScore);
    console.log(score);
  }
  }
  
  
  
  // Start the animation frame loop
  


 /* if (this.frameNumber % 600 === 0) {
    this.increasePlayerSpeed()   
    this.increaseStarSpawnRate();
    this.increaseObstacleSpeed()
    this.increaseBackgroundSpeed()
  } */

  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide the start screen
    this.startScreen.style.display = "none";
   // Show the game screen
    this.gameScreen.style.display = "block";
    // Hide the end screen
   this.gameEndScreen.style.display = "none";


    // Executes the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
      }, this.gameLoopFrequency);  
      }
  

  gameLoop() {
    console.log("in the game loop");
      // If the lives are 2, end the game
      if (this.lives == 2) {
        this.gameLoopFrequency = Math.round(500/60); // 60fps 
        this.player.directionX += 0.00;
        this.score = this.score += 20;

      }
    this.update();
    
    requestAnimationFrame(updateScore);

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
    }
  }

  update() {
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // If the player's car collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }


    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.97 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
      this.stars.push(new star(this.gameScreen));
    }

    // Create a new star based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.05 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
      
    });

    this.gameIsOver = true;
   // Hide game screen
   this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
    }
}