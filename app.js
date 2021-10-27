const ham = document.querySelector('#nav-toggle');
const nav = document.querySelector('.nav');

ham.addEventListener('click', () => {
  nav.classList.toggle('show');
})