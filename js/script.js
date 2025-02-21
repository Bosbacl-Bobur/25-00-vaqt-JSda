// const starEl = document.getElementById("start") 
// const stopEl = document.getElementById("stop") 
// const timerEl = document.getElementById("timer") 

// const pomodoro = document.getElementById('pomodoro')
// const shortBreak = document.getElementById('short')
// const longBreak = document.getElementById('long')
// const body = document.querySelector('body')
// const div = document.getElementById('container')

// starEl.addEventListener("click", startTimer)
// stopEl.addEventListener("click", stopTimer)


// let interval;
// let timeLeft = 1500;

// function updateTimer(){
//     let minutes = Math.floor(timeLeft / 60);
//     let seconds = timeLeft % 60;
//     let formattedTime = ` ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

//     timerEl.innerHTML = formattedTime;
// }
// function startTimer(){
//     interval = setInterval(()=>{
//         timeLeft--;
//         updateTimer();
//         if (timeLeft === 0) {
//             clearInterval(interval);
//             alert("Time's up!");
//             timeLeft = 1500;
//         }
//     }, 1000)
// }
// function stopTimer(){
//     clearInterval(interval); 
// }


// pomodoro.addEventListener('click',()=>{
//     body.style.backgroundColor="#BA4949"
//     div.style.backgroundColor="#C15C5C"
    
// })
// shortBreak.addEventListener('click',()=>{
//     body.style.backgroundColor="#38858A"
//     div.style.backgroundColor="#4C9196"
//     body.style.transition="background-color 1s ease"
//     div.style.transition="background-color 1s ease" 
// })
// longBreak.addEventListener('click',()=>{
//     body.style.backgroundColor="#397097"
//     div.style.backgroundColor="#4D7FA2"
// })

let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

const changeBackgroundColor = (colorClass) => {
  document.body.classList.remove("focus", "short-break", "long-break");
  document.body.classList.add(colorClass);
};

changeBackgroundColor('focus');

reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 24;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
  active = "focus";
  changeBackgroundColor('focus'); 
});

shortBreakButton.addEventListener("click", () => {
  active = "short";
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
  changeBackgroundColor('short-break');
});

longBreakButton.addEventListener("click", () => {
  active = "long";
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
  changeBackgroundColor('long-break');
});

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hide");
    pause.classList.remove("show");
    reset.classList.remove("show");
  })
);

startBtn.addEventListener("click", () => {
  reset.classList.add("show");
  pause.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
});
document.getElementById('report-btn').addEventListener('click', function () {
    document.getElementById('report-modal').style.display = 'block';
});
document.getElementById('settings-btn').addEventListener('click', function () {
    document.getElementById('settings-modal').style.display = 'block';
});
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
