const content = document.querySelector('.content-wrapper');
const tabButton = document.querySelectorAll('.tab-button');
const description = document.querySelectorAll('.content');

let imageURL = document.getElementById('content-image');

const handleButtonClick = (event) => {
  const id = event.target.dataset.id;

  if (id) {
    description.forEach((desc) => {
      desc.classList.remove('display');
    });

    const element = document.getElementById(id);
    element.classList.add('display');
    element.childNodes[1].style.color = id;

    if (id === 'green')
      imageURL.src = 'https://i.pinimg.com/564x/95/c4/b5/95c4b5d8eea0e1bf7c3600fbb462cd13.jpg';
    if (id === 'blue')
      imageURL.src = 'https://i.pinimg.com/564x/b0/54/4b/b0544b2d4ea706c325c8dd5fbeb6de0f.jpg';
    if (id === 'pink')
      imageURL.src = 'https://i.pinimg.com/originals/f9/50/5f/f9505f91049a44c18874833bee79579b.jpg';
  }
};

content.addEventListener('click', handleButtonClick);
