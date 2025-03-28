import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayinput = form.querySelector('.delay');
const radioFulfilled = form.querySelector('input[value="fulfilled"]');
const radioRejected = form.querySelector('input[value="rejected"]');

form.addEventListener('submit', Create);
function Create(event) {
  event.preventDefault();
  const delay = Number(delayinput.value);

  const Fulfilled = radioFulfilled.checked;
  const Rejected = radioRejected.checked;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Fulfilled) {
        resolve(`promise in ${delay}ms`);
      } else if (Rejected) {
        reject(`promise in ${delay}ms`);
      }
    }, delay);
  })
    .then(message =>
      iziToast.show({
        title: 'Fulfilled',
        titleColor: 'white',
        backgroundColor: 'green',
        message: message,
        messageColor: 'white',
        position: 'topRight',
        close: false,
        iconUrl: '../img/success.svg',
      })
    )
    .catch(error =>
      iziToast.show({
        title: 'Rejected',
        titleColor: 'white',
        backgroundColor: 'red',
        message: error,
        messageColor: 'white',
        position: 'topRight',
        close: false,
        iconUrl: '../img/error.svg',
      })
    );
}
