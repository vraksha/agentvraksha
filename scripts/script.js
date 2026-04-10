const btn = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
  });
});
