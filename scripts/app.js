const colors = ['red', 'green', 'blue', 'purple'];

const button = document.getElementById('button');
const color = document.querySelector('.color');

button.addEventListener('click', function () {
  console.log(1);
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}