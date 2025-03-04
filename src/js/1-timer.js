import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const button = document.querySelector("[data-start]");
button.disabled = true;

const input = document.querySelector("#datetime-picker");
input.disabled = false;
const valueDays = document.querySelector("[data-days]");
const valueHours = document.querySelector("[data-hours]");
const valueMinutes = document.querySelector("[data-minutes]");
const valueSeconds = document.querySelector("[data-seconds]");



let userSelectedDate= null;
let intervalID = null;

// вибір валідної дати
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
if (selectedDates[0] > options.defaultDate) {
    button.disabled = false;
    userSelectedDate = selectedDates[0]; 
}
else {iziToast.error({
    position: 'topRight',
    titleColor: 'white',
    messageColor: 'white',
    color: '#EF4040',
    title: 'Error',
    message: 'Please choose a date in the future',
});
    button.disabled = true;
}},};

const countdown = () => {
    button.disabled = true;
    input.disabled = true;


intervalID = setInterval(()=>{
const deff = userSelectedDate - Date.now();


function convertMs(ms) {

    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {days, hours, minutes, seconds };

}
if (deff<0) {clearInterval(intervalID); 
    input.disabled = false;

 } else {

const content = convertMs(deff);

if (content.days<10) { content.days = `0` + content.days}; 
if (content.hours<10) { content.hours = `0` + content.hours}; 
if (content.minutes<10) { content.minutes = `0` + content.minutes}; 
if (content.seconds<10) { content.seconds = `0` + content.seconds}; 

valueDays.textContent=content.days; 
valueHours.textContent = content.hours; 
valueMinutes.textContent = content.minutes;
valueSeconds.textContent = content.seconds;


}}, 1000);
    
       
    }

button.addEventListener ("click", countdown);

flatpickr("#datetime-picker", options);