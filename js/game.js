class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.backgroundScreen = document.getElementById("background");
   this.scoreElement = document.getElementById('score');
    this.player = new Player(
      this.gameScreen,
      50,
      125,
      50,
      75,
      "images/x wing.png"
    );
    this.height = 580;
    this.width = 900;
    this.obstacles = [];
    this.stars = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps  
    this.frameCount = 0;
    this.scoreMultiplier = 1;
    this.increaseObstacleSpeedMultiplier = 1 ;
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
    
    this.frameCount += 1;
    this.scoreElement.innerText = 
   " frameCount :" + this.frameCount +"  "
   +"score:"+ this.score +"  "
   +"gameLoopFreq:"+ this.gameLoopFrequency +" ";
    
   //1condition
    if (this.frameCount % (60 * 1) === 0) { // This condition % (60 * 30) === 0 will occur once every 30 seconds because we have 60 frames per second
     this.score +=1;
     //this.gameLoopFrequency=this.gameLoopFrequency * 2;
     //this.gameLoopFrequency * 2;
     this.obstacles.push(new Obstacle(this.gameScreen));
      
    
    this.increaseObstacleSpeedMultiplier *= 1.30;
     
    //this.increaseObstacleSpeedMultiplier * 2;
    //}
    }
    //2condition
     if (this.frameCount  === (60 * 5)) { // This condition === (60 * 30) will occur only once after 30 seconds
      // Do something
      this.increaseObstacleSpeedMultiplier = 0.5;

 
     // if (this.frameCount % (60 /(Math.ceil(Math.random() * 0.2))) === 0) {
        //this.stars.push(new star(this.gameScreen));
       // this.obstacles.push(new Obstacle(this.gameScreen));
     }

    // If the lives are 2, end the game
     if (this.lives == 2) {
      this.gameLoopFrequency = Math.round(1000 /60); // 60fps 
      //this.player.directionX += 0.00;
      this.score = this.score += 1000000;
      this.scoreElement.innerText = " frameCount :"+ this.frameCount +"  "+"score:"+ this.score +  " Light years" +  " 2 " + "lives left";
      this.increaseObstacleSpeedMultiplier = 1;
    }   

      if (this.frameCount % (60 /(Math.ceil(Math.random() * 1))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.stars.push(new Star(this.gameScreen));
      }



    if (this.frameCount % 60 === 0) { // This condition  % 60 === 0 will occur once every second because we have 60 frames per second
    /*  this.score += 1 * this.scoreMultiplier;
      this.scoreMultiplier *= 1;
      this.gameLoopFrequency **= 1; */
    }
    if (this.frameCount % (60 * 300) === 0) { // This condition % (60 * 30) === 0 will occur once every 30 seconds because we have 60 frames per second
      // Do something
      this.score = this.score += 3000000;
  
    }
    if (this.frameCount  === (60 * 30)) { // This condition === (60 * 30) will occur only once after 30 seconds
      // Do something

    }
    this.update();

    // requestAnimationFrame(updateScore);

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      // add score to local storage
    }
  }

  update() {
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move(this.increaseObstacleSpeedMultiplier);

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
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }

 // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move(this.increaseObstacleSpeedMultiplier);

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
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
 // Check for collision and if an STAR is still on the screen
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      star.move(this.increaseObstacleSpeedMultiplier);

      // If the player's car collides with an obstacle
      if (this.player.didCollide(star)) {
        // Remove the obstacle element from the DOM
        star.element.remove();
        // Remove obstacle object from the array
        this.stars.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (star.top > this.height) {
        // Remove the obstacle from the DOM
        star.element.remove();
        // Remove obstacle object from the array
        this.stars.splice(i, 1);
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
      
    }

    // Create a new star based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.97 && this.stars.length < 1) {
      this.stars.push(new Star(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  endGame() {

    this.scoreElement.innerText = " frameCount :"+ this.frameCount +"  "+"score:"+ this.score ;
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