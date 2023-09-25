const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let user;
let computer;
possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click', (e) => {
    user = e.target.id;
    userChoice.innerHTML = user; 
    generateComputerChoice();
    getResults();
}))

function generateComputerChoice()
{
    const choices = {
        1 : 'rock',
        2 : 'paper',
        3 : 'scissor'
    }

    pickRandomObject = Math.floor(Math.random() * possibleChoices.length) +1;

    computer = choices[pickRandomObject];
    computerChoice.innerHTML = computer;
}

function getResults()
{
    switch (user + computer) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          resultDisplay.innerHTML = 'You chose ' + user + ' and the computer chose ' + computer + ' , YOU WIN!'
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          resultDisplay.innerHTML = 'You chose ' + user + ' and the computer chose ' + computer + ' , YOU LOSE!'
          break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
          resultDisplay.innerHTML = 'You chose ' + user + ' and the computer chose ' + computer + ' , ITS A DRAW!'
          break
      }

}
