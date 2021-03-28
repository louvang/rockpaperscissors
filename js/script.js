const computerPlay = () => {
  let compsChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  switch (compsChoice) {
    case 1:
      compsChoice = 'rock';
      break;
    case 2:
      compsChoice = 'paper';
      break;
    case 3:
      compsChoice = 'scissors';
      break;
  }

  return compsChoice;
};

const playRound = (e) => {
  if (playerScore == 5 || compScore == 5) {
    return;
  }

  const playerSelection = e.currentTarget.selection;
  const computerSelection = computerPlay();

  if (playerSelection == 'rock') {
    yourPlayImg.setAttribute('src', 'img/rock.svg');
    switch (computerSelection) {
      case 'rock':
        msgDisplay.textContent = "It's a tie.";
        setCompPlayImg('rock');
        break;
      case 'paper':
        setCompPlayImg('paper');
        compWinRound();
        break;
      case 'scissors':
        setCompPlayImg('scissors');
        playerWinRound();
        break;
    }
  } else if (playerSelection == 'paper') {
    yourPlayImg.setAttribute('src', 'img/paper.svg');
    switch (computerSelection) {
      case 'rock':
        setCompPlayImg('rock');
        playerWinRound();
        break;
      case 'paper':
        setCompPlayImg('paper');
        msgDisplay.textContent = "It's a tie.";
        break;
      case 'scissors':
        setCompPlayImg('scissors');
        compWinRound();
        break;
    }
  } else if (playerSelection == 'scissors') {
    yourPlayImg.setAttribute('src', 'img/scissors.svg');
    switch (computerSelection) {
      case 'rock':
        setCompPlayImg('rock');
        compWinRound();
        break;
      case 'paper':
        setCompPlayImg('paper');
        playerWinRound();
        break;
      case 'scissors':
        setCompPlayImg('scissors');
        msgDisplay.textContent = "It's a tie.";
        break;
    }
  }
};

const playerWinRound = () => {
  msgDisplay.textContent = 'You won this round.';
  playerScore++;
  playerScoreDisplay.textContent = playerScore;
  if (playerScore == 5) {
    msgDisplay2.textContent = 'You win!';
    playAgainBtn.setAttribute('style', 'display: block');
  }
};

const compWinRound = () => {
  msgDisplay.textContent = 'Computer won this round.';
  compScore++;
  compScoreDisplay.textContent = compScore;
  if (compScore == 5) {
    msgDisplay2.textContent = 'Computer wins!';
    playAgainBtn.setAttribute('style', 'display: block');
  }
};

const setCompPlayImg = (play) => {
  compPlayImg.setAttribute('src', `img/${play}.svg`);
};

let playerScore = 0;
let compScore = 0;

const playerScoreDisplay = document.querySelector('#player-score');
playerScoreDisplay.textContent = playerScore;

const compScoreDisplay = document.querySelector('#comp-score');
compScoreDisplay.textContent = compScore;

const msgDisplay = document.querySelector('.message');
msgDisplay.textContent = 'Click on an item above to play a round.';

const msgDisplay2 = document.querySelector('.message2');
const playAgainBtn = document.querySelector('#play-again');
const yourPlayImg = document.querySelector('#your-play');
const compPlayImg = document.querySelector('#comp-play');

const playRock = document.querySelector('#rock');
playRock.addEventListener('click', playRound);
playRock.selection = 'rock';

const playPaper = document.querySelector('#paper');
playPaper.addEventListener('click', playRound);
playPaper.selection = 'paper';

const playScissors = document.querySelector('#scissors');
playScissors.addEventListener('click', playRound);
playScissors.selection = 'scissors';

playAgainBtn.addEventListener('click', () => {
  playerScore = 0;
  compScore = 0;
  playerScoreDisplay.textContent = playerScore;
  compScoreDisplay.textContent = compScore;
  msgDisplay.textContent = 'Click an item above to play a round.';
  msgDisplay2.textContent = '';
  playAgainBtn.setAttribute('style', 'display: none');
});
