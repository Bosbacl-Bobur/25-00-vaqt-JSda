let buttons = document.querySelectorAll(".btn");
let focusButton = document.getElementById("focus");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let container = document.querySelector(".container");
let myBtn = document.getElementById("myBtn");
let myBtn2 = document.getElementById("myBtn2");
let myBtn3 = document.getElementById("myBtn3");
let green = document.getElementById("green");
let red = document.getElementById("red");
let dark = document.getElementById("dark");
let blue = document.getElementById("blue");
let body = document.querySelector("body");
let overlay2 = document.getElementById("overlay2");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;
// modal
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal'); 
let btnOpenModal = document.getElementById('myBtn2');


// modal
const openModal = () => {
  modal.style.display = 'block';
  overlay.style.display = 'block'; 

};

const closeModal = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  overlay2.style.display = 'none';
};

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

overlay2.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});


// vaqt

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

// rangi

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
  // changeBackgroundColor('focus');
  body.style.backgroundColor="#B94949"

  container.style.backgroundColor="#C15C5C";
  focusButton.style.backgroundColor="#A44E4E"
  longBreakButton.style.background="none"
  shortBreakButton.style.background="none"
  myBtn.style.backgroundColor="#C15C5C"
  myBtn2.style.backgroundColor="#C15C5C"
  myBtn3.style.backgroundColor="#C15C5C"
});

shortBreakButton.addEventListener("click", () => {
  active = "short";
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
  body.style.backgroundColor="#38858A"
  container.style.backgroundColor="#4C9196";
  focusButton.style.background="none"
  shortBreakButton.style.backgroundColor="#417B80"
  longBreakButton.style.background="none"
  myBtn.style.backgroundColor="#4C9196"
  myBtn2.style.backgroundColor="#4C9196"
  myBtn3.style.backgroundColor="#4C9196"
});


longBreakButton.addEventListener("click", () => { 
  active = "long";
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
  body.style.backgroundColor="#397097"
  container.style.backgroundColor="#4D7FA2";
  shortBreakButton.style.background="none"
  focusButton.style.background="none"
  longBreakButton.style.backgroundColor="#426C8A"
  myBtn.style.backgroundColor="#4D7FA2"
  myBtn2.style.backgroundColor="#4D7FA2"
  myBtn3.style.backgroundColor="#4D7FA2"
});
// body rangi

green.addEventListener("click", () => {
  focusButton.style.backgroundColor="#548059"
   longBreakButton.style.backgroundColor="none"
  shortBreakButton.style.backgroundColor="none"
  body.style.backgroundColor = "#518a58";
  container.style.backgroundColor = "#639669";
  myBtn.style.backgroundColor="#639669";
  myBtn2.style.backgroundColor="#639669";
  myBtn3.style.backgroundColor="#639669";
});

red.addEventListener("click", () => {
  body.style.backgroundColor = "#ba4949";
  container.style.backgroundColor="#C15C5C";
  focusButton.style.backgroundColor="#A44E4E"
  shortBreakButton.style.backgroundColor="none"
  longBreakButton.style.backgroundColor="none"
  myBtn.style.backgroundColor="#C15C5C"
  myBtn2.style.backgroundColor="#C15C5C"
  myBtn3.style.backgroundColor="#C15C5C"
});

blue.addEventListener("click", () => {
  focusButton.style.backgroundColor="#417B80"
  longBreakButton.style.backgroundColor="none"
  shortBreakButton.style.backgroundColor="none"
  body.style.backgroundColor = "#38858a";
  container.style.backgroundColor = "#4C9196";
  myBtn.style.backgroundColor="#4C9196";
  myBtn2.style.backgroundColor="#4C9196";
  myBtn3.style.backgroundColor="#4C9196";
});

dark.addEventListener("click", () => {
  body.style.backgroundColor = "#545764";
  focusButton.style.backgroundColor="#565963"
  longBreakButton.style.backgroundColor="none"
  shortBreakButton.style.backgroundColor="none"
  container.style.backgroundColor = "#646773";
  myBtn.style.backgroundColor="#646773";
  myBtn2.style.backgroundColor="#646773";
  myBtn3.style.backgroundColor="#646773";
});



// pause
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