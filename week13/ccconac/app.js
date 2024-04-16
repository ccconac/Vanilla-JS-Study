import { LIPSUM } from './lipsum.mjs';

const generator = document.querySelector('.generator');
const paragraphsInput = document.querySelector('.paragraphs-input');
const lipsums = document.querySelector('.lipsums');

const generateLipsum = (event) => {
  event.preventDefault();

  const value = parseInt(paragraphsInput.value);
  const lipsum = LIPSUM.slice(0, value)
    .map((text) => `<p>${text}</p>`)
    .join('');

  lipsums.innerHTML = lipsum;
};

generator.addEventListener('submit', generateLipsum);
