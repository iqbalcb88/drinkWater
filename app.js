const smallCups = document.querySelectorAll('.cup-small');
// console.log(smallCups);
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlighted(idx));
});

function highlighted(id) {
  console.log(id);
  if (
    (smallCups[id].classList.contains('full') &&
      smallCups[id].nextElementSibling === null) ||
    (smallCups[id].classList.contains('full') &&
      !smallCups[id].nextElementSibling.classList.contains('full'))
  ) {
    id--;
  }
  smallCups.forEach((cup, idx) => {
    if (idx <= id) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}
