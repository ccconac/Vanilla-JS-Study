const switchButton = document.querySelector('.switch-button');
const video = document.querySelector('.video-container');
const loading = document.querySelector('.loading');

const hideLoadingIcon = () => {
  loading.classList.add('hide-loading');
};

window.addEventListener('load', hideLoadingIcon);
