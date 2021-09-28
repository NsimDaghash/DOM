let currentTimer = 0,
    interval = 0,
    lastUpdateTime = new Date().getTime(),
    ss = document.querySelector(".stopwatch"),
    start = document.querySelector(".start"),
    stop = document.querySelector(".stop"),
    mins = document.querySelector(".minutes"),
    secs = document.querySelector(".seconds"),
    cents = document.querySelector(".milliseconds");

function pad(n) {
  return ("00" + n).substr(-2);
}

function update() {
  let now = new Date().getTime(),
    dt = now - lastUpdateTime;

  currentTimer += dt;

  let time = new Date(currentTimer);

  mins.innerHTML = pad(time.getMinutes());
  secs.innerHTML = pad(time.getSeconds());
  cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

  lastUpdateTime = now;
}

function startTimer() {
  if (!interval) {
    lastUpdateTime = new Date().getTime();
    interval = setInterval(update, 1);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = 0;
}



start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
