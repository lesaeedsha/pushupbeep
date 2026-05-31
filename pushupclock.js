const beepSound = new Audio('success.mp3');
const endSound = new Audio('gtasa.mp3');

let limit = 0;
let setNum = 100;
let clock = null; // Store the interval reference

document.querySelector('#start').addEventListener('click', function () {
  // Clear any existing interval before starting a new one
  if (clock) {
    clearInterval(clock);
    clock = null;
  }
  
  limit = 0; // Reset limit when starting
  
  clock = setInterval(() => {
    if (limit < setNum) {
      beepSound.play();
      makeDivGreen(limit);
      limit++;
    } else {
      endSound.play();
      limit = 0;
      clearInterval(clock);
      clock = null; // Clear the reference
    }
  }, 6000);
});

// Stop button functionality
document.querySelector('#stop').addEventListener('click', function () {
  if (clock) {
    clearInterval(clock);
    clock = null;
    limit = 0; // Optional: reset the counter
    console.log('Beeping stopped');
    makeDivsGrey();
  }
});

function createDiv() {
  let div = document.createElement('div');
  return div;
}

function appendDivsToWrapper(number) {
  const wrapper = document.querySelector('.wrapper');
  let n = 1;
  while (n <= number) {
    let div = createDiv();
    div.textContent = n;
    wrapper.appendChild(div);
    n = n + 1;
  }
}

function makeDivGreen(num) {
  const divs = document.querySelectorAll('.wrapper div');
  divs[num].className = 'green';
}

function makeDivsGrey() {
  const divs = document.querySelectorAll('.wrapper div');
  divs.forEach(div => div.className = "");
}

appendDivsToWrapper(setNum);
