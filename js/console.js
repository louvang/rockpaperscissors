const computerPlay = () => {
  let compsChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  switch (compsChoice) {
    case 1:
      compsChoice = "rock";
      break;
    case 2:
      compsChoice = "paper";
      break;
    case 3:
      compsChoice = "scissors";
      break;
  }

  return compsChoice;
};

const playRound = (playerSelection, computerSelection) => {
  let msg = "";

  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        msg = "You both played ROCK. It's a tie.";
        break;
      case "paper":
        msg = "You played ROCK. Computer played PAPER. You lost.";
        break;
      case "scissors":
        msg = "You played ROCK. Computer played SCISSORS. You won!";
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        msg = "You played PAPER. Computer played ROCK. You won!";
        break;
      case "paper":
        msg = "You both played PAPER. It's a tie.";
        break;
      case "scissors":
        msg = "You played PAPER. Computer played SCISSORS. You lose!";
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        msg = "You played SCISSORS. Computer played ROCK. You lost.";
        break;
      case "paper":
        msg = "You played SCISSORS. Computer played PAPER. You won!";
        break;
      case "scissors":
        msg = "You both played SCISSORS. It's a tie.";
    }
  } else {
    msg = "You need to input rock, paper, or scissors to play.";
  }

  return msg;
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
