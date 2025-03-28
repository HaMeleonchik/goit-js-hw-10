// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
// span
const spanDays = document.querySelector('[ data-days]');
const spanHours = document.querySelector('[ data-hours]');
const spanMinutes = document.querySelector('[ data-minutes]');
const spanSeconds = document.querySelector('[ data-seconds]');

startBtn.disabled = true;

let userSelectedDate;
let timerid = null;
// bibl

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    const dateNow = new Date();
    if (dateNow > userSelectedDate) {
      iziToast.show({
        title: 'Error',
        titleColor: 'white',
        backgroundColor: 'red',
        iconUrl: './img/error.svg',
        message: 'Please choose a date in the future',
        messageColor: 'white',
        position: 'topRight',
        close: false,
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr(input, options);

// Btn

startBtn.addEventListener('click', StartTimer);
function StartTimer(event) {
  event.preventDefault();

  startBtn.disabled = true;
  input.disabled = true;

  timerid = setInterval(() => {
    const dateNow = new Date();
    const deltaTime = userSelectedDate - dateNow;

    if (deltaTime <= 0) {
      clearInterval(timerid);
      updateTimer({ days: '00', hours: '00', minutes: '00', seconds: '00' });

      startBtn.disabled = false;
      input.disabled = false;

      return;
    }

    const time = convertMs(deltaTime);
    updateTimer(time);
  }, 1000);
}

// updateTimer
function updateTimer({ days, hours, minutes, seconds }) {
  spanDays.textContent = ` ${days}`;
  spanHours.textContent = `${hours}`;
  spanMinutes.textContent = `${minutes}`;
  spanSeconds.textContent = `${seconds}`;
}

// convert

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //  days
  const days = addLeadingZero(Math.floor(ms / day));
  //  hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  //  minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  //  seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
// pad
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
