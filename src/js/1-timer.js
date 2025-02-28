// import flatpickr from "flatpickr";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import "flatpickr/dist/flatpickr.min.css";



// const refs = {
//   startBtn: document.querySelector('datetime-picker'),
//   stopBtn: document.querySelector('[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// const timer = {
//   intervalId: null,
//   initTime: null,

//   start() {
//     console.log('START');
//     this.initTime = new Date('04.02.2025');
//     this.intervalId = setInterval(() => {
//       this.tick();
//     }, 1000);

//     refs.startBtn.disabled = true;
//     refs.stopBtn.disabled = false;
//   },

//   stop() {
//     console.log('STOP');
//     refs.startBtn.disabled = false;
//     refs.stopBtn.disabled = true;
//     clearInterval(this.intervalId);
//   },

//   tick() {
//     const currentTime = Date.now();
//     const ms = this.initTime - currentTime;
//     const time = getTimeComponents(ms);
//     const str = timeToSTR(time);
//     refs.clockface.textContent = str;

//     if (ms < 1000) {
//       this.stop();
//     }
//   },
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });