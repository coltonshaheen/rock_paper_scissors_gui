let playerCount = 0;
let computerCount = 0;
let roundCounter = 0;

function userPlay() {
    let selection = prompt("Please enter Rock, Paper, or Scissors.");

    if (selection === null) {
        return 0;
    }

    selection = selection.toLowerCase();

    while (selection == "" || selection != "rock" && selection != "paper" &&
        selection != "scissors") {
        selection = prompt("Round " + roundCounter + "! " + playerCount + " to " + computerCount +
            ". Please enter Rock, Paper, or Scissors.");
    }

    return selection;
}

function computerPlay() {
    let rpsBase = Math.floor(Math.random() * 3) + 1;
    if (rpsBase === 1) {
        return "rock";
    } else if (rpsBase === 2) {
        return "paper";
    } else if (rpsBase === 3) {
        return "scissors";
    }
}

function playRound() {
    let playerSelection = userPlay();
    let computerSelection = computerPlay();

    if (playerSelection === 0) {
        return 0;
    }

    if (playerSelection === 'rock' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'scissors') {
        alert("Tie! " + playerSelection + " and " + computerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        alert("You Lose! " + computerSelection + " beats " + playerSelection);
        playerCount++;
        roundCounter++;
    } else {
        alert("You Win! " + playerSelection + " beats " + computerSelection);
        computerCount++;
        roundCounter++;
    }
    return 1;
}

function game() {
    for (roundCounter = 0; roundCounter < 5;) {
        let getOut = playRound();
        if (getOut === 0) { return; }
    }

    if (playerCount > computerCount) {
        alert("You WIN the game " + playerCount + " to " +
            computerCount + "!");
    } else if (playerCount < computerCount) {
        alert("You LOSE the game " + computerCount + " to " +
            playerCount + "!");
    }

    playerCount = 0;
    computerCount = 0;
}

document.getElementById("rpsButton").addEventListener("click", game)