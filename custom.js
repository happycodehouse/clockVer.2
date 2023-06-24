let clock = document.querySelector('#clock');

function getClock() {
  let date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(getClock, 1000)