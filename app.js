const ham = document.querySelector('#ham');
const menu = document.querySelector('#menu');
let menuOpen = false;

ham.addEventListener('click', () => {
  if (!menuOpen) {
    menu.style.display = 'flex';
    menuOpen = true;
  } else {
    menu.style.display = 'none';
    menuOpen = false;
  }
})