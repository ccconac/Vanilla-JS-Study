import { CLOTHES } from './clothes.mjs';
import displayClothes from './displayClothes.mjs';

const buttonSection = document.querySelector('.buttons-wrap');

const displayButtons = () => {
  const category = ['ALL'];

  CLOTHES.map((item) => {
    if (category.includes(item.category)) return;
    category.push(item.category);
  });

  let buttons = category.map((category) => {
    return `<button class="filter-button">${category}</button>`;
  });

  buttonSection.innerHTML = buttons.join('\n');

  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const category = e.target.innerHTML;

      const clothesCategory = CLOTHES.filter((clothes) => {
        if (clothes.category === category) {
          return clothes;
        }
      });

      if (category === 'ALL') {
        displayClothes(CLOTHES);
      } else {
        displayClothes(clothesCategory);
      }
    });
  });
};

export default displayButtons;
