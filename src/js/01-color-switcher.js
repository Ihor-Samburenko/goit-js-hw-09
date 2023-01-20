const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyStyle = document.querySelector('body');

btnStop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

intevralChangeColor = null;

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopBtn);

function changeColor() {
  intevralChangeColor = setInterval(() => {
    bodyStyle.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

function stopBtn() {
  clearInterval(intevralChangeColor);
  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');
}
