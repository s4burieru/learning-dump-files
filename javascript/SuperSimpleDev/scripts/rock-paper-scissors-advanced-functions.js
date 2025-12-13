let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function updateElementScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updateElementScore();

let isAutoPlaying = false;
let intervalD;

function autoPlay() {
  if (!isAutoPlaying) {
    IntervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalD);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors');
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let Result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Scissors") {
      Result = "Tie";
    } else if (computerMove === "Rock") {
      Result = "You lose";
    } else if (computerMove === "Paper") {
      Result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Paper") {
      Result = "Tie";
    } else if (computerMove === "Scissors") {
      Result = "You lose";
    } else if (computerMove === "Rock") {
      Result = "You win";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      Result = "Tie";
    } else if (computerMove === "Paper") {
      Result = "You lose";
    } else if (computerMove === "Scissors") {
      Result = "You win";
    }
  }

  if (Result === "You win") {
    score.wins += 1;
  } else if (Result === "You lose") {
    score.losses += 1;
  } else if (Result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateElementScore();
  document.querySelector(".js-result").innerHTML = Result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You picked <img src="images/${playerMove}-emoji.png"/>  Computer picked <img src="images/${computerMove}-emoji.png"/>`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}
