// script.js
// https://alexandrolastra.github.io/project1/
//https://github.com/alexandrolastra/project1.git 
//
$(document).ready(function() {
    $('#button').click(function() {
      alert('This is a pause buttom!');
    });
  });
////
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const scapeButton = document.getElementById("scape-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  scapeButton.addEventListener("click", function () {
    // Call the endGame function when the button is clicked
    endGame();
  });
  

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();

  }

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }

  function endGame() {
    game.endGame();  function restartGame() {
    this.game.endGame();
  }
  }

  // Function that handles KEYDOWN event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "Shift",
      "0"
     /* "ArrowLeft" && "ArrowRight",
      "ArrowUp" && "ArrowDown" */
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
          // This case sends and Alert window in order to pause the game that can continue by pressing Enter key or Click Ok 
          case "0":
            alert('You Scape from Hyperspace');
            endGame();
            break
          case "Shift":
          alert('Shift is a Time Pause in Hyperspace');
          break
    
        case "ArrowRight":
          game.player.directionX = 9;
          break;
        case "ArrowDown":
          game.player.directionY = 9;
          break;
          case "ArrowLeft":
            game.player.directionX = -9;
            break;
          case "ArrowUp":
            game.player.directionY = -9;
            break;
      }
      /*
      if (possibleKeystrokes["ArrowRight"] && possibleKeystrokes["ArrowLeft"]) {
        game.player.directionX = 0;
           // This cases should stops movements from the ship on X or Y directions
      }
      if (possibleKeystrokes["ArrowUp"] && possibleKeystrokes["ArrowDown"]) {
        game.player.directionY = 0;
        // This cases should stops movements from the ship on X or Y directions
      }
        */

    }
  }
  // Add the handleKeydown function as an event listener for the keydown event
  
  window.addEventListener("keydown", handleKeydown);
 // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keyup", (event) => {
    if (possibleKeystrokes = "ArrowLeft" ||  "ArrowRight" ) {
      game.player.directionX = 0; 
    }
    if (possibleKeystrokes = "ArrowUp" ||  "ArrowDown") {
      game.player.directionY = 0; 
    }
   
  });

  };





