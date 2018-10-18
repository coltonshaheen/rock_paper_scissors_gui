let playerCount = 0;
let computerCount = 0;
let roundCounter = 0;
let computerSelection;
let playerSelection;

const scoreList = document.querySelector('#score-list');

function printScore(result) {
    let scoreDiv = document.querySelector('#score-div')
    let roundUl = document.createElement('ul');
    roundUl.classList.add('round-ul');
    scoreDiv.appendChild(roundUl);

    let roundDisplay = "Round " + roundCounter;
    let roundOutcome = '';

    if (result === 1) {
        roundOutcome = "Tie! " + playerSelection + " and " + computerSelection;
    } else if (result === 2) {
        roundOutcome = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (result === 3) {
        roundOutcome = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    let roundScore = "Player: " + playerCount + " - Computer: " + computerCount;

    let roundLi = document.createElement('li');
    roundLi.classList.add('round-li');
    roundLi.textContent = roundDisplay;
    roundUl.appendChild(roundLi);

    let resultLi = document.createElement('li');
    resultLi.classList.add('result-li');
    resultLi.textContent = roundOutcome;
    roundUl.appendChild(resultLi);

    let scoreLi = document.createElement('li');
    scoreLi.classList.add('score-li');
    scoreLi.textContent = roundScore;
    roundUl.appendChild(scoreLi);
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

function playRound(playerInput) {
    computerSelection = computerPlay();
    playerSelection = playerInput;

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