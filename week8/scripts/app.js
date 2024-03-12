import { CLOTHES } from './clothes.mjs';
import displayClothes from './displayClothes.mjs';
import displayButtons from './displayButtons.mjs';

window.addEventListener('DOMContentLoaded', () => {
  displayClothes(CLOTHES);
  displayButtons();
});
