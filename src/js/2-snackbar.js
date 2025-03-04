import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const delay = document.querySelector(".delay>input");
const fulfilled = document.querySelector(".fulfilled>input");
const rejected = document.querySelector(".rejected>input");


 form.addEventListener('submit', event => {
 event.preventDefault();
let time = delay.value; 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilled.checked) 
        {resolve (time)} 
      else {reject(time)}
    }, time)
  })

  .then((delay) => {
    iziToast.success({
      position: 'topRight',
      message: `✅ Fulfilled promise in ${delay} ms`,
  });})


  .catch(delay => {
    iziToast.error({
      position: 'topRight',
      message: `❌ Rejected promise in ${delay} ms`,
  });}) 

    .finally (()=> {    
      delay.value = "";
      rejected.checked = false;
      fulfilled.checked = false;})

});