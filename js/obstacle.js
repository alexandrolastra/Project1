class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 750 + 2);
    this.top = -100;
    this.width = 100;
    this.height = 100;
    this.element = document.createElement("img");

    this.element.src = "images/pblue.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move(increaseObstacleSpeedMultiplier) {
    // Move the obstacle down by 6px
    this.top += 3 * increaseObstacleSpeedMultiplier ;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}
