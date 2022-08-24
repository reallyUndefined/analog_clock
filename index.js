const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");

function getHandPos(time, hr) {
  const timePercent = hr ? time / 12 : time / 60;
  return timePercent * 360 + 90;
}

function setTime() {
  const time = new Date();
  if (time.getSeconds() === 0) secHand.classList.add("no-transition");
  else secHand.classList.remove("no-transition");

  secHand.style.transform = `rotate(${getHandPos(time.getSeconds())}deg)`;
  minHand.style.transform = `rotate(${getHandPos(time.getMinutes())}deg)`;
  hrHand.style.transform = `rotate(${getHandPos(time.getHours(), true)}deg)`;

  console.log({
    hr: time.getHours(),
    min: time.getMinutes(),
    sec: time.getSeconds(),
  });
}

setInterval(setTime, 1000);
