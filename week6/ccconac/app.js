const openButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal-background');
const closeButton = document.querySelector('.close-modal');

openButton.addEventListener('click', () => {
  modal.classList.add('visible-modal');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('visible-modal');
});
