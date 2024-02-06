import { ANIMALS } from './animals.mjs';

const animalImage = document.getElementById('img');
const animalName = document.getElementById('animal-name');
const animalType = document.getElementById('animal-type');
const animalDescription = document.getElementById('description');

const previousButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentAnimal = 0;

const showAnimal = (current) => {
  const animal = ANIMALS[current];

  animalImage.src = animal.image;
  animalName.textContent = animal.name;
  animalType.textContent = animal.type;
  animalDescription.textContent = animal.text;
};

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
