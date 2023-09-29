
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const gameContainer = document.querySelector('.game-container')
const userChoice = document.querySelector('.user-pick')
const computerChoice = document.querySelector('.computer-pick')
const winner = document.querySelector('.game-winner')
const showGameWinner = document.querySelector('.winner')
const playAgain = document.querySelector('.play-again')
const game = document.querySelector('.game')


// const computerOptions = [ '/images/icon-paper.svg', '/images/icon-rock.svg', '/images/icon-scissors.svg' ]

let computerOptions = [ rock, paper, scissors ]

let score = document.querySelector('#score')
let trackScore = 0

score.innerHTML = `${trackScore}`

const runGame = (e) => {

  const gameDecision = document.querySelector('.game-decision')
  let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)].cloneNode(true)
  const userPick = e.target.cloneNode(true)


  console.log({
    user: userPick,
    computer: computerPick
  })
  
  computerPick.style.position = 'unset'
  userPick.style.position = 'unset'

  computerChoice.appendChild(computerPick)

  userChoice.appendChild(userPick)

  game.classList.add('hide')

  showGameWinner.classList.remove('hide')

  showGameWinner.classList.add('show')

  decideWinner(userPick, computerPick)


}

const decideWinner = (user, computer) => {

  const decision = document.createElement('h1')
  
  if(user.src === computer.src) {
    decision.innerHTML = 'Tie Game'
  }

  if(user.id === 'paper' && computer.id === 'rock') {
    trackScore += 1
    score.innerHTML = `${trackScore}`
    decision.innerHTML = 'You win!'
  }

  if(user.id === 'rock' && computer.id === 'paper') {
    trackScore -= 1
    score.innerHTML = `${trackScore}`
    decision.innerHTML = 'Computer win :('
  }

  if(user.id === 'scissors' && computer.id === 'rock') {
    trackScore -= 1
    score.innerHTML = `${trackScore}`
    decision.innerHTML = 'Computer win :('
  }

  if(user.id === 'rock' && computer.id === 'scissors') {
    trackScore += 1
    score.innerHTML = `${trackScore}`
    decision.innerHTML = 'You win!'
  }

  if(user.id === 'paper' && computer.id === 'scissors') {
    trackScore -= 1
    score.innerHTML = `${trackScore}`
    decision.innerHTML = 'Computer win :('
  }

  if(user.id === 'scissors' && computer.id === 'paper') {
    trackScore += 1
    score.innerHTML = `${trackScore}`
    decision.innerHTML = 'You win!'
  }

  winner.appendChild(decision)

}


const restartGame = () => {
  game.classList.remove('hide')

  showGameWinner.classList.add('hide')

  showGameWinner.classList.remove('show')

  computerChoice.removeChild(computerChoice.firstChild)
  userChoice.removeChild(userChoice.firstChild)
  winner.removeChild(winner.firstChild)
}


rock.addEventListener('click', (e) => runGame(e))
scissors.addEventListener('click', (e) => runGame(e))
paper.addEventListener('click', (e) => runGame(e))

playAgain.addEventListener('click', restartGame)

