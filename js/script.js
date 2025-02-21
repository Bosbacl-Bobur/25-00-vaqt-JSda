let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let container = document.querySelector(".container");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const changeBackgroundColor = (colorClass) => {
  document.body.classList.remove("focus", "short-break", "long-break");
  document.body.classList.add(colorClass);
};

changeBackgroundColor('focus');

reset.addEventListener("click", () => {
  pauseTimer();
  
  if (active === "long") {
    minCount = 14;
  } else if (active === "short") {
    minCount = 4;
  } else {
    minCount = 24;
  }
  
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

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
  container.style.backgroundColor="#C15C5C";
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
  container.style.backgroundColor="#4C9196";
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
  container.style.backgroundColor="#4D7FA2";  
});

pause.addEventListener("click", (pauseTimer = () => {
  paused = true;
  clearInterval(set);
  startBtn.classList.remove("hide");
  pause.classList.remove("show");
  reset.classList.remove("show");
}));

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
