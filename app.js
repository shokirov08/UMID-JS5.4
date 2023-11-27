let btn = document.querySelector('.btn'),
    input = document.querySelector('.input'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__block'),
    time = 0,
    score = 0,
    interval = 0;
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})




function start() {
    btn.disabled = true
    timeOut.innerHTML = time
    interval = setInterval(() => {
        decrease()
    }, 1000);
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let coor = gameBox.getBoundingClientRect()
    let x = random(0, coor.width - randomSize(40,100))
    let y = random(0, coor.height - randomSize(40,100))
    
    ball.style.width =  randomSize(50,100) + 'px'
    ball.style.height = randomSize(50,100) + 'px'
    ball.style.background = `rgb(${randomColor(0,255)},${randomColor(0,255)},${randomColor(0,255)})`
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    
    gameBox.append(ball)
}

function random(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
} 
random(0,400)
function randomColor(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
random(0,225)

function randomSize(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
    
}
randomSize(40,100)
 
