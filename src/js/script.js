const userScoreDiv = document.querySelector('.user')
const computerScoreDiv = document.querySelector('.computer')

const paper = document.querySelector('.paper')
const rock = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')

const verdict = document.querySelector('.verdict')
    
//Computer Selection 
const computerSelection = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }    
}

//Player Selection 
paper.addEventListener('click', (target) => {
    console.log('target');
    letsPlay('paper',computerSelection())
})

rock.addEventListener('click', (target) => {
    letsPlay('rock',computerSelection())
})


scissors.addEventListener('click', (target) => {
    letsPlay('scissors',computerSelection())
})

// Score
let userScore = 0
let computerScore = 0

// Actual game
function letsPlay (playerSelection,computerSelection) {
        
        if (playerSelection === computerSelection) {
            verdict.innerHTML = 'It\'s a tie' 
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            verdict.innerHTML = 'Yay! You beat the computer with your rock! You won.' 
            userScore ++
            userScoreDiv.innerHTML = userScore
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            verdict.innerHTML = 'Yay! Paper made rock soft. You won!'
            userScore ++
            userScoreDiv.innerHTML = userScore
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            verdict.innerHTML = 'You cut their paper to pieces. You won!'
            userScore ++
            userScoreDiv.innerHTML = userScore
        } else {
            verdict.innerHTML = 'Soorrrryy...You lost!'
            computerScore ++
            computerScoreDiv.innerHTML = computerScore
        }
    }



