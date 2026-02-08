let index = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 20;

  index += direction;

  if (index < 0) index = 0;
  if (index > cards.length - 1) index = cards.length - 1;

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}
