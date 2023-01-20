import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
let delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(e) {
  e.preventDefault();
  let firstDelay = Number(delayEl.value);
  let stepDelay = Number(stepEl.value);
  for (i = 0; i < amountEl.value; i++) {
    createPromise(i + 1, i * stepDelay + firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
