console.log("Hello world")

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

let computerOptions = [ rock, paper, scissors ]

let score = document.querySelector('#score')
let trackScore = 0

score.innerHTML = `${trackScore}`

const runGame = () => {
  let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)]
  trackScore += 1
  
  score.innerHTML = `${trackScore}`

  console.log(computerPick)
  console.log(trackScore)
}


rock.addEventListener('click', runGame)
