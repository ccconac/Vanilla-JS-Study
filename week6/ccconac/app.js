const openButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal-background');

openButton.addEventListener('click', () => {
  modal.classList.add('visible-modal');
});
