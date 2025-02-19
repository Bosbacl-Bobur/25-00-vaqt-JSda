const starEl = document.getElementById("start") 
const stopEl = document.getElementById("stop") 
const timerEl = document.getElementById("timer") 

starEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)


let interval;
let timeLeft = 300;

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