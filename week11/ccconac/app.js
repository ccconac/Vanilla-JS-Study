const content = document.querySelector('.content-wrapper');
const tabButton = document.querySelectorAll('.tab-button');
const description = document.querySelectorAll('.content');

const handleButtonClick = (event) => {
  const id = event.target.dataset.id;

  if (id) {
    description.forEach((desc) => {
      desc.classList.remove('display');
    });

    const element = document.getElementById(id);
    element.classList.add('display');

  }
};

content.addEventListener('click', handleButtonClick);
