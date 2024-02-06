import { ANIMALS } from './animals.mjs';
import { showAnimal } from './showAnimal.mjs';

const previousButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const surpriseButton = document.getElementById('surprise-btn');

let currentAnimal = 0;

previousButton.addEventListener('click', () => {
  currentAnimal -= 1;
  if (currentAnimal < 0) currentAnimal = ANIMALS.length - 1;

  showAnimal(currentAnimal);
});

nextButton.addEventListener('click', () => {
  currentAnimal += 1;
  if (currentAnimal > ANIMALS.length - 1) currentAnimal = 0;

  showAnimal(currentAnimal);
});

surpriseButton.addEventListener('click', () => {
  currentAnimal = Math.floor(Math.random() * ANIMALS.length);
  showAnimal(currentAnimal);
});
