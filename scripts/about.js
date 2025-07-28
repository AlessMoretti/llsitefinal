
document.addEventListener('DOMContentLoaded', () => {
  const playCard = document.getElementById('playCard');
  const grid = document.getElementById('rolesGrid');
  playCard.addEventListener('mouseenter', () => grid.classList.add('play-hovered'));
  playCard.addEventListener('mouseleave', () => grid.classList.remove('play-hovered'));
});
