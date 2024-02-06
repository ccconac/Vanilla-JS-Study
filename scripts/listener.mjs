import { showAnimal } from './showAnimal.mjs';
import { carousel, getCurrentAnimal } from './carousel.mjs';

export const addCarouselListener = (button, step) => {
  button.addEventListener('click', () => {
    carousel(step);
    showAnimal(getCurrentAnimal());
  });
};
