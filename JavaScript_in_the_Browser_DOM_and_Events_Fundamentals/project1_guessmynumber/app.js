let statusMsg = document.querySelector('.message')
let number = document.querySelector('.number')
let scoreBoard = document.querySelector('#score')
let userInput = document.querySelector('.inputContent')
let checkNum = document.querySelector('.check')
let bgColor = document.querySelector('.main-container')
let againBtn = document.querySelector('.again')
let highscoreBoard = document.querySelector('#highscore')

//secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20 // score or life
let highscore = 0

checkNum.addEventListener('click', () => {
    const guess = userInput.value
    if(!guess){
        statusMsg.textContent = "⛔ Please Insert your guess number!"
    }else if (guess == secretNumber) {
        statusMsg.textContent = "🎊 Congrats!!"
        number.textContent = secretNumber
        bgColor.style.backgroundColor = "green"
        if (score > highscore){
            highscore = score
            highscoreBoard.textContent = highscore
        }  
    }else if (guess != secretNumber){
        if(score > 1){
            statusMsg.textContent = guess > secretNumber ? "📈 To High!!" : "📉 To Low!!"
            score--;
            scoreBoard.textContent = score
        }else{
            statusMsg.textContent = "🥲 Try again!"
            number.textContent = secretNumber
        }
    }
    
})

againBtn.addEventListener('click', () => {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    scoreBoard.textContent = score
    bgColor.style.backgroundColor = "#282525"
    number.textContent = "?"
    statusMsg.textContent = "🤔 Start guessing ...."
})
