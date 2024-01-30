const digit = document.getElementById('digit');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

let count = 0;

const decrease = () => {
  count -= 1;
  digit.textContent = count;

  if (count < 0) digit.style.color = 'red';
  if (count === 0) digit.style.color = 'black';
};

const reset = () => {
  count = 0;
  digit.textContent = 0;
  digit.style.color = 'black';
};

const increase = () => {
  count += 1;
  digit.textContent = count;

  if (count > 0) digit.style.color = 'green';
  if (count === 0) digit.style.color = 'black';
};
