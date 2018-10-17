let playerCount = 0;
let computerCount = 0;
let roundCounter = 0;


const scoreList = document.querySelector('#score-list');

function printScore(result) {
    let roundUl = document.createElement('ul');

    let roundLi = document.createElement('li');
    let resultLi = document.createElement('li');
    let scoreLi = document.createElement('li');
    
    let roundDisplay = "Round " + roundCounter;
let roundOutcomeTie = "Tie! " + playerSelection + " and " + computerSelection;
let roundOutcomeWin = "You Win! " + playerSelection + " beats " + computerSelection;
let roundOutcomeLose = "You Lose! " + computerSelection + " beats " + playerSelection;
let roundScore = "Player: " + playerCount + " - Computer: " + computerCount;

}

function scoreCheck() {
    if (playerCount === 5 || computerCount === 5) {
        return true;
    }

    return false;
}

function whoWon() {
    if (playerCount > computerCount) {
        playerCount = 0;
        computerCount = 0;
        roundCounter = 0;

        return "player won";
    }
    playerCount = 0;
    computerCount = 0;
    roundCounter = 0;

    return "computer won";
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

function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'scissors') {
        roundCounter++;

        printScore(1);
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        computerCount++;
        roundCounter++;

        printScore(2);
    } else {
        alert("You Win! " + playerSelection + " beats " + computerSelection);
        playerCount++;
        roundCounter++;

        printScore(3);
    }
    let gameOver = scoreCheck();

    if (gameOver) {
        let winner = whoWon();
        alert(winner);
        return winner;
    }
}

const rockBtn = document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
}, false);
const paperBtn = document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
}, false);
const scissorsBtn = document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
}, false);