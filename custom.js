// this is clock ver.2 
/* let clock = document.querySelector('#clock');

function getClock() {
  let date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

setInterval(getClock, 1000); */

let clock = document.querySelector('#clock');

function getClock() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);