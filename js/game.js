class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScapeScreen = document.getElementById("scape-end");
    this.gameContainerScreen = document.getElementById("game-container");
    this.backgroundScreen = document.getElementById("background");
    this.scoreElement = document.getElementById('score');
    this.scoreElement2 = document.getElementById('score2');
    this.player
    this.gameContainerScreen.height = 580;
    this.gameContainerScreen.width = 900;
    this.height = 600;
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
    this.increaseObstacleSpeedMultiplier = 1;
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
    // Hide the scape screen
    this.gameScapeScreen.style.display = "none";
    this.player = new Player(
      this.gameScreen,
      this.gameScreen.clientHeight - 50,
      this.gameScreen.clientHeight - 100,
      50,
      75,
      "images/x wing.png",
    );


    // Executes the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency);
  }


  gameLoop() {
    console.log("in the game loop");
    this.frameCount += 1;
    this.scoreElement.innerText =
      " Lightsecs : " + this.frameCount + "  "
      + " Score :" + this.score + " ";
    // +" Energy Shield Hits Capacity : " +  this.lives + " ";
    this.scoreElement2.innerText = " Energy Shield Hits Capacity : " + this.lives + " ";
    //+"gameLoopFreq :"+ this.gameLoopFrequency +" ";
    //this.increaseObstacleSpeedMultiplier *= 1;


    // 1 frame condition

    if (this.frameCount % 60 === 0) { // This condition % (60 * 30) === 0 will occur once every 30 seconds because we have 60 frames per second
      this.score += 1;

      this.obstacles.push(new Obstacle(this.gameScreen));

      this.increaseObstacleSpeedMultiplier *= 1.07;
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 1))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 3))) === 0) {
        this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
 
    }
    //2 frame condition
    if (this.frameCount === (60 * 5)) { // This condition === (60 * 30) will occur only once after 30 seconds
      // Do something
     // this.increaseObstacleSpeedMultiplier *= 1.1;


      // if (this.frameCount % (60 /(Math.ceil(Math.random() * 0.2))) === 0) {
      //this.stars.push(new star(this.gameScreen));
      // this.obstacles.push(new Obstacle(this.gameScreen));
    }
    //3 frame condition
    if (this.frameCount === (60 * 5)) { // This condition === (60 * 30) will occur only once after 30 seconds
      // Do something
      this.increaseObstacleSpeedMultiplier = 0.9;
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 0.7))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }
      // 20.000 frame condition
    if (this.frameCount === (60 * 15)) { // This condition === (60 * 30) will occur only once after 30 seconds
      // Do something
      this.increaseObstacleSpeedMultiplier = 0.9;
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 0.5))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }

    if (this.lives == 4) {

      this.scoreElement.innerText = " Score : " + this.score + " " + " Lightsecs : " + this.frameCount + " " + " " + this.lives + " Energy shield left";
      this.scoreElement2.innerText = " " + "FULL ENERGY " + " SHIELD FULL";
      this.scoreElement2.style.color = "blue";
      // this.scoreElement.innerText.style .color = "red";
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 4))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 0.5))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 0.5))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
    }
    // If the lives are 2, end the game
    if (this.lives == 3) {
      //this.gameLoopFrequency = Math.round(1000 /60); // 60fps 
      //this.scoreElement.innerText =" "+ this.score +  " " + " Lightsecs :"+ this.frameCount +" "+ "Warning " +  this.lives + "Energy shield left";
      this.scoreElement2.style.color = "black";
    }

    if (this.lives == 2) {
      //this.gameLoopFrequency = Math.round(1000 / 60); // 60fps 
      //this.player.directionX += 0.00;
      this.score = this.score += 0;
      this.scoreElement.innerText = " Score : " + this.score + " " + " Lightsecs : " + this.frameCount + "  " + " Energy Shield left : " + this.lives;
      this.scoreElement2.style.color = "black";
      //this.increaseObstacleSpeedMultiplier *= 1.3;
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 4))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 0.5))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen)); 
    }
  }

    if (this.lives == 1) {

      this.scoreElement.innerText = " Score : " + this.score + " " + " Lightsecs : " + this.frameCount + " " + " " + this.lives + " Energy shield left";
      this.scoreElement2.innerText = " " + "Warning " + " NO ENERGY LEFT";
      this.scoreElement2.style.color = "red";
      // this.scoreElement.innerText.style .color = "red";
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 1))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
      if (this.frameCount % (60 / (Math.ceil(Math.random() * 0.5))) === 0) {
        //this.stars.push(new star(this.gameScreen));
        this.obstacles.push(new Obstacle(this.gameScreen));
        //this.stars.push(new Star(this.gameScreen));
      }
    }

    if (this.frameCount % 60 === 0) { // This condition  % 60 === 0 will occur once every second because we have 60 frames per second
      /*  this.score += 1 * this.scoreMultiplier;
        this.scoreMultiplier *= 1;
        this.gameLoopFrequency **= 1; */
    }
    if (this.frameCount % (60 * 30) === 0) { // This condition % (60 * 30) === 0 will occur once every 30 seconds because we have 60 frames per second
      // Do something

    }
    if (this.frameCount === (60 * 30)) { // This condition === (60 * 30) will occur only once after 30 seconds
      // Do something

    }
    this.update();

    // requestAnimationFrame(updateScore);

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      if(this.lives > 0 ) {
        this.scapeGame()
      } else {
        this.endGame()
      }
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
        // Add Player's score by 1
        this.score -= 250;
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
    }
    // Check for collision and if an STAR is still on the screen
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      star.move(this.increaseObstacleSpeedMultiplier);

      // If the player's car collides with an obstacle
      if (this.player.didCollide(star) &&    this.lives<4 ) {
        // Remove the obstacle element from the DOM
        star.element.remove();
        // Remove obstacle object from the array
        this.stars.splice(i, 1);
        //  Player's lives by 1
        this.lives++;
        // Add Player's score by 1
        this.score += 1000;
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
    if (this.lives <= 0) {
      this.gameIsOver = true;
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    if (Math.random() > 0.98 && this.obstacles.length < 3) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    
    // Create a new star based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.stars.length < 1) {
      this.stars.push(new Star(this.gameScreen));
    }
  }


  // Create a new method responsible for ending the game
  endGame() {

    this.scoreElement.innerText = " " + "You became a Trillion pieces of Star Dust" + " at " + Math.ceil(this.frameCount / 60) + " Lightyears ! ";
    this.scoreElement2.remove();
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();

    });
    // Hide game container
    this.gameContainerScreen.style.display = "none";
    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }

  // Create a new method responsible for SCAPE ending the game
  scapeGame() {

    this.scoreElement.innerText = " Score " + this.score + " & Scaped A LIVE at " + Math.ceil(this.frameCount / 60) + " Lightyears ! ";
    this.scoreElement2.remove();
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();

    });
    // Hide game container
    this.gameContainerScreen.style.display = "none";
    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameScapeScreen.style.display = "block";

  }
}