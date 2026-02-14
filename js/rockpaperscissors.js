let humanScore = 0;
let computerScore = 0;
let maxPoint = 5;
const rps = ["rock", "paper", "scissors"];

export function getComputerChoice() {
  const computerSelected = rps[Math.floor(Math.random() * rps.length)];
  return computerSelected;
}

export function playRound(humanSelected, computerSelected) {
  if (humanSelected === rps[0]) {
    // human choice 'rock'
    if (computerSelected === rps[0]) {
      humanScore++;
      computerScore++;
    } else if (computerSelected === rps[1]) {
      // computer choice 'paper'
      computerScore++;
    } else if (computerSelected === rps[2]) {
      // computer choice 'scissors'
      humanScore++;
    }
  } else if (humanSelected === rps[1]) {
    // human choice 'paper'
    if (computerSelected === rps[1]) {
      humanScore++;
      computerScore++;
    } else if (computerSelected === rps[0]) {
      // computer choice 'rock'
      humanScore++;
    } else if (computerSelected === rps[2]) {
      // computer choice 'scissors'
      computerScore++;
    }
  } else {
    // human choice 'scissors'
    if (computerSelected === rps[2]) {
      humanScore++;
      computerScore++;
    } else if (computerSelected === rps[0]) {
      // computer choice 'rock'
      computerScore++;
    } else if (computerSelected === rps[1]) {
      // computer choice 'paper'
      humanScore++;
    }
  }
  showResult();
}

export function playGame(playerSelected) {
  if (humanScore >= maxPoint || computerScore >= maxPoint) {
    alert("Please restart the game");
    return;
  }
  const computerSelection = getComputerChoice();
  if (playerSelected) {
    playRound(playerSelected, computerSelection);
  }
}

export function showResult() {
  const result = document.getElementById("rpsResult");
  if (humanScore === 5) {
    result.textContent = `You Win!`;
  } else if (computerScore === 5) {
    result.textContent = `You Lose!`;
  } else {
    result.textContent = `Your score is ${humanScore} / Computer score is ${computerScore}`;
  }
}

export function restartRpsGame() {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("rpsResult").textContent = "";
}
