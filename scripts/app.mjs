import { ANIMALS } from './animals.mjs';
import { showAnimal } from './showAnimal.mjs';
import { setCurrentAnimal, getCurrentAnimal } from './carousel.mjs';
import { addCarouselListener } from './listener.mjs';

const previousButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const surpriseButton = document.getElementById('surprise-btn');

addCarouselListener(previousButton, -1);
addCarouselListener(nextButton, 1);

surpriseButton.addEventListener('click', () => {
  setCurrentAnimal(Math.floor(Math.random() * ANIMALS.length));
  showAnimal(getCurrentAnimal());
});
