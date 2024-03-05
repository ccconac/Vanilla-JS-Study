const questions = document.querySelectorAll('.question-card');

questions.forEach((questionCard) => {
  const button = questionCard.querySelector('.card-button');

  button.addEventListener('click', () => {
    const answer = questionCard.childNodes[3];
    const question = questionCard.childNodes[1];

    answer.classList.toggle('show-answer');

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'flex';
      question.style.paddingBottom = '20px';
      button.innerHTML = '<i class="far fa-minus-square"></i>';
    } else {
      answer.style.display = 'none';
      question.style.paddingBottom = '0';
      button.innerHTML = '<i class="far fa-plus-square"></i>';
    }
  });
});
