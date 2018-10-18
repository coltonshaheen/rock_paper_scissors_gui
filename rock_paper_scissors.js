let playerCount = 0;
let computerCount = 0;
let roundCounter = 0;
let computerSelection;
let playerSelection;
let resetButton;
let previousUl = null;

const scoreList = document.querySelector('#score-list');

let playRock = () => playRound("Rock");
let playPaper = () => playRound("Paper");
let playScissors = () => playRound("Scissors");

let rockBtn = document.getElementById("rock").addEventListener("click", playRock, false);
let paperBtn = document.getElementById("paper").addEventListener("click", playPaper, false);
let scissorsBtn = document.getElementById("scissors").addEventListener("click", playScissors, false);

function printScore(result) {
    let scoreDiv = document.querySelector('#score-div')
    let roundUl = document.createElement('ul');
    roundUl.classList.add('round-ul');

    if (previousUl === null) {
        scoreDiv.appendChild(roundUl);
    } else {
        scoreDiv.insertBefore(roundUl, previousUl);
    }

    let roundDisplay = "Round " + roundCounter;
    let roundOutcome = '';

    if (result === 'tie') {
        roundOutcome = "Tie! " + playerSelection + " and " + computerSelection + ".";
    } else if (result === 'lose') {
        roundOutcome = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    } else if (result === 'win') {
        roundOutcome = "You Win! " + playerSelection + " beats " + computerSelection + ".";
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

    previousUl = roundUl;
}

function scoreCheck() {
    if (playerCount === 5 || computerCount === 5) {
        return true;
    }

    return false;
}

function whoWon() {
    return (playerCount > computerCount) ? "player" : "computer";
}

function declareWinner(winner) {
    let scoreDiv = document.querySelector('#score-div')
    let winnerUl = document.createElement('ul');

    winnerUl.classList.add('winner-ul');
    scoreDiv.insertBefore(winnerUl, previousUl);

    let winnerDisplay = (winner === 'player') ? "YOU WON!!!" : "YOU LOSE!!!";

    let gameWinnerLi = document.createElement('li');
    gameWinnerLi.classList.add('game-winner-li');
    gameWinnerLi.textContent = winnerDisplay;
    winnerUl.appendChild(gameWinnerLi);

    let finalScore = "Player: " + playerCount + " - Computer: " + computerCount;

    let finalScoreLi = document.createElement('li');
    finalScoreLi.classList.add('final-score-li');
    finalScoreLi.textContent = finalScore;
    winnerUl.appendChild(finalScoreLi);

    previousUl = winnerUl;

    resetGame();
}

function resetGame() {
    let scoreDiv = document.querySelector('#score-div');
    let resetButton = document.createElement('button');

    resetButton.id = "reset-button";
    resetButton.textContent = "Reset Game";
    scoreDiv.insertBefore(resetButton, previousUl);

    resetButton = document.getElementById("reset-button").addEventListener("click", function () {
        window.location.reload(true);
    }, false);
}

function computerPlay() {
    let rpsBase = Math.floor(Math.random() * 3) + 1;
    if (rpsBase === 1) {
        return "Rock";
    } else if (rpsBase === 2) {
        return "Paper";
    } else if (rpsBase === 3) {
        return "Scissors";
    }
}

function playRound(playerInput) {
    computerSelection = computerPlay();
    playerSelection = playerInput;

    if (playerSelection === 'Rock' && computerSelection === 'Rock' ||
        playerSelection === 'Paper' && computerSelection === 'Paper' ||
        playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        roundCounter++;

        printScore('tie');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerCount++;
        roundCounter++;

        printScore('lose');
    } else {
        playerCount++;
        roundCounter++;

        printScore('win');
    }
    let gameOver = scoreCheck();

    if (gameOver) {
        document.getElementById("rock").removeEventListener("click", playRock, false);
        document.getElementById("paper").removeEventListener("click", playPaper, false);
        document.getElementById("scissors").removeEventListener("click", playScissors, false);

        let winner = whoWon();
        declareWinner(winner);
    }
}