const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");

const digiClock = document.querySelector(".digital-clock");

function getHandPos(time, hr) {
  const timePercent = hr ? time / 12 : time / 60;
  return timePercent * 360 + 90;
}

function setTime() {
  const time = new Date();

  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hr = time.getHours();

  if (sec === 0) secHand.classList.add("no-transition");
  else secHand.classList.remove("no-transition");

  secHand.style.transform = `rotate(${getHandPos(sec)}deg)`;
  minHand.style.transform = `rotate(${getHandPos(min)}deg)`;
  hrHand.style.transform = `rotate(${getHandPos(hr, true)}deg)`;

  digiClock.textContent = `${String(hr).padStart(2, "0")} : ${String(
    min
  ).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`;
}

setInterval(setTime, 1000);
