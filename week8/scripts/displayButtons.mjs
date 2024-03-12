import { CLOTHES } from './clothes.mjs';
import displayClothes from './displayClothes.mjs';

const buttonSection = document.querySelector('.buttons-wrap');

const createCategoryArray = () => {
  const category = ['ALL'];

  CLOTHES.map((item) => {
    if (!category.includes(item.category)) {
      category.push(item.category);
    }
  });

  return category;
};

const filterClothesItem = (category) => {
  if (category === 'ALL') {
    displayClothes(CLOTHES);
  } else {
    const clothesCategory = CLOTHES.filter(
      (clothes) => clothes.category === category
    );

    displayClothes(clothesCategory);
  }
};

const displayButtons = () => {
  const category = createCategoryArray();

  let buttons = category.map((category) => {
    return `<button class="filter-button">${category}</button>`;
  });

  buttonSection.innerHTML = buttons.join('\n');

  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const category = e.target.innerHTML;
      filterClothesItem(category);
    });
  });
};

export default displayButtons;
