const digit = document.getElementById('digit');
const decreaseBtn = document.getElementById('decrease');

let count = 0;

const decrease = () => {
  count -= 1;
  digit.textContent = count;

  if (count < 0) digit.style.color = 'red';
  if (count === 0) digit.style.color = 'black';
};
