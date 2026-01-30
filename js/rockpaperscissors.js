
let humanScore = 0;
let computerScore = 0;
let round = 5;
let currentRound = 0;
const rps = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
    const computerInput = rps[Math.floor(Math.random() * rps.length)];
    console.log(`computerInput: ${computerInput}`);
    return computerInput;
}

export function getHumanChoice() {
    if (currentRound < round) {
        let input = prompt("Please enter rock, paper, or scissors : ");
        input = input.trim().toLowerCase();
        if (rps.includes(input)) {
            console.log(`humanInput: ${input}`)
            return input;
        }
        alert("Invalid input. Please try again.");
        return;
    }
    alert("Game is over. Please click the restart button!");
    return;
}

export function playRound(humanSelection, computerSelection) {
    currentRound++;
    if (humanSelection === rps[0]) { // human choice 'rock'
        if (computerSelection === rps[0]) {
            humanScore++;
            computerScore++;
            alert("This round is a draw.");
        } else if (computerSelection === rps[1]) { // computer choice 'paper'
            computerScore++;
            alert("You lost this round. Better luck next time!");
        } else if (computerSelection === rps[2]) { // computer choice 'scissors'
            humanScore++;
            alert("You won this round. Nice job!");
        }
    } else if (humanSelection === rps[1]) { // human choice 'paper'
        if (computerSelection === rps[1]) {
            humanScore++;
            computerScore++;
            alert("This round is a draw.");
        } else if (computerSelection === rps[0]) { // computer choice 'rock'
            humanScore++;
            alert("You won this round. Nice job!");
        } else if (computerSelection === rps[2]) { // computer choice 'scissors'
            computerScore++;
            alert("You lost this round. Better luck next time!");
        }
    } else { // human choice 'scissors'
        if (computerSelection === rps[2]) {
            humanScore++;
            computerScore++;
            alert("This round is a draw.");
        } else if (computerSelection === rps[0]) { // computer choice 'rock'
            computerScore++;
            alert("You lost this round. Better luck next time!");
        } else if (computerSelection === rps[1]) { // computer choice 'paper'
            humanScore++;
            alert("You won this round. Nice job!");
        }
    }
    showResult();
}

export function playGame() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    humanSelection ? playRound(humanSelection, computerSelection) : null;
}

export function showResult() {
    const result = document.getElementById("rpsResult");
    result.innerHTML = `Round : ${currentRound}, Your score is ${humanScore} / Computer score is ${computerScore}`;
}