import { runFizzBuzz } from "./js/fizzbuzz.js";
import { playGame } from "./js/rockpaperscissors.js";
import { restartRpsGame } from "./js/rockpaperscissors.js";

document.addEventListener("DOMContentLoaded", () => {
  const fbButton = document.getElementById("runFb");
  if (fbButton) {
    fbButton.addEventListener("click", runFizzBuzz);
  }

  // const rock = document.getElementById("rock");
  // if (rock) {
  //     rock.addEventListener("click", playGame("rock"));
  // }

  // const paper = document.getElementById("paper");
  // if (paper) {
  //     paper.addEventListener("click", playGame("paper"));
  // }

  // const scissors = document.getElementById("scissors");
  // if (scissors) {
  //     scissors.addEventListener("click", playGame("scissors"));
  // }

  const rps = document.getElementsByClassName("runRps");
  for (const selected of rps) {
    selected.addEventListener("click", (event) => {
      playGame(event.target.id);
    });
  }

  const restartButton = document.getElementById("restartGame");
  if (restartButton) {
    restartButton.addEventListener("click", restartRpsGame);
  }
});
