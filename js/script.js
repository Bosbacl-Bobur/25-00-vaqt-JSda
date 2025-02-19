const starEl = document.getElementById("start") 
const stopEl = document.getElementById("stop") 
const timerEl = document.getElementById("timer") 

const pomodoro = document.getElementById('pomodoro')
const shortBreak = document.getElementById('short')
const longBreak = document.getElementById('long')
const body = document.querySelector('body')
const div = document.getElementById('container')

starEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)


let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = ` ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}
function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
        }
    }, 1000)
}
function stopTimer(){
    clearInterval(interval); 
}


pomodoro.addEventListener('click',()=>{
    body.style.backgroundColor="#BA4949"
    div.style.backgroundColor="#C15C5C"
    
})
shortBreak.addEventListener('click',()=>{
    body.style.backgroundColor="#38858A"
    div.style.backgroundColor="#4C9196"
    body.style.transition="background-color 1s ease"
    div.style.transition="background-color 1s ease" 
})
longBreak.addEventListener('click',()=>{
    body.style.backgroundColor="#397097"
    div.style.backgroundColor="#4D7FA2"
})