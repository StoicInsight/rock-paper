
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
let gameContainer = document.querySelector('.game-container')
const computerChoice = document.querySelector('.computer-pick')
const userPick = document.querySelector('.user-pick')
const showGameWinner = document.querySelector('.winner')
const playAgain = document.querySelector('.play-again')
const game = document.querySelector('.game')


// const computerOptions = [ '/images/icon-paper.svg', '/images/icon-rock.svg', '/images/icon-scissors.svg' ]

let computerOptions = [ rock, paper, scissors ]

let score = document.querySelector('#score')
let trackScore = 0

score.innerHTML = `${trackScore}`

const runGame = (e) => {
  // const computerChoice = document.querySelector('.computer-pick')
  const gameDecision = document.querySelector('.game-decision')
  // const userPick = document.querySelector('.user-pick')
  let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)].cloneNode(true)
  const userChoice = e.target.cloneNode(true)



  console.log({
    user: userChoice,
    computer: computerPick
  })

  trackScore += 1

  
  computerPick.style.position = 'unset'
  e.target.style.position = 'unset'
  showGameWinner.app

  computerChoice.appendChild(computerPick)

  userPick.appendChild(e.target)

  game.classList.add('hide')

  showGameWinner.classList.remove('hide')

  showGameWinner.classList.add('show')

  score.innerHTML = `${trackScore}`

}

const decideWinner = (house, yourPick) => {

}


const restartGame = () => {
  game.classList.remove('hide')

  showGameWinner.classList.add('hide')

  showGameWinner.classList.remove('show')

  // computerChoice.removeChild(child)
  // userPick.removeChild(child)
}

// const createComputerChoice = () => {
//   let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)]
//   const computerChoice = document.querySelector('.computer-pick')

//   const computerImg = document.createElement('img')
//   computerImg.src = computerPick

// }


// gameContainer.forEach(el => console.log('Game container element', el))



rock.addEventListener('click', (e) => runGame(e))
scissors.addEventListener('click', (e) => runGame(e))
paper.addEventListener('click', (e) => runGame(e))

playAgain.addEventListener('click', restartGame)

