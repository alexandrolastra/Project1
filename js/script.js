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

  /*
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");
  */

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
    scapeGame();
  });
  
  /*
  leftButton.addEventListener("click", function () {
    // Call the endGame function when the button is clicked
    game.player.directionX = -27;
  });

  rightButton.addEventListener("click", function () {
    // Call the endGame function when the button is clicked
    game.player.directionX = 27;
  });
*/
document.addEventListener('DOMContentLoaded', function() {
  const backgroundMusic = document.getElementById('backgroundMusic');

  // Example: Pause the music
  backgroundMusic.pause();

  // Example: Play the music
  backgroundMusic.play();

  // Example: Change the volume
  backgroundMusic.volume = 0.0; // Volume ranges from 0.0 to 1.0
});


  function startGame() {
    console.log("start game");
    
    backgroundMusic.play();
     backgroundMusic.volume = 0.2;

    game = new Game();

    game.start();

  }

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
    backgroundMusic.volume = 0.0;
  }

  function endGame() {
    backgroundMusic.pause();
    game.endGame();
    backgroundMusic.play(); 
  }
  function scapeGame() {
    backgroundMusic.pause();
    game.gameIsOver = true; 
    backgroundMusic.play(); 
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
      "0",
    //  "Alt"
     /* "ArrowLeft" && "ArrowRight",
      "ArrowUp" && "ArrowDown" */
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
          // This case sends and Alert window in order to pause the game that can continue by pressing Enter key or Click Ok 
          case "Shift":
            alert('You Scape alive from Hyperspace');
            scapeGame();
            break
         // case "Alt":
         //   alert('To Restart Press Enter or Click Ok');
         //  If(  ){ startGame();}
        //    break
          case "0":
          alert('Shift is a Time Pause in Hyperspace');
          break
    
        case "ArrowRight":
          game.player.directionX = 27;
          break;
        case "ArrowDown":
          game.player.directionY = 27;
          break;
          case "ArrowLeft":
            game.player.directionX = -27;
            break;
          case "ArrowUp":
            game.player.directionY = -27;
            break;
      }
 
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





