const overlay = document.getElementById('fullscreen-overlay');
const fullscreenImg = document.getElementById('fullscreen-img');

document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImg.src = img.src;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  fullscreenImg.src = '';
  document.body.style.overflow = '';
});