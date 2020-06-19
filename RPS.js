const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      return 'Error'
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber)
    {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const userWins = 'You win!';
  const computerWins = 'The computer wins';
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It is a tie.'
    }
    else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return computerWins;
      }
      else if (computerChoice === 'scissors') {
        return userWins;
      }
    }
    else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return userWins;
      }
      else if (computerChoice === 'scissors') {
        return computerWins;
      }
    }
    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return computerWins;
      }
      else if (computerChoice === 'paper') {
        return userWins;
      }
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw' + userChoice);
    console.log('Your opponent threw ' + computerChoice);
  
    return determineWinner(userChoice, computerChoice);
  }
  
  console.log(playGame());