import { runFizzBuzz } from "./js/fizzbuzz.js";
import { playGame } from "./js/rockpaperscissors.js";

document.addEventListener("DOMContentLoaded", () => {
    const fbButton = document.getElementById("runFb");
    if (fbButton) {
        fbButton.addEventListener("click", runFizzBuzz);
    }

    const rpsButton = document.getElementById("runRps");
    if (rpsButton) {
        rpsButton.addEventListener("click", playGame);
    }
});