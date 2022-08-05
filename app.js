const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
// console.log(smallCups);
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlighted(idx));
});

function highlighted(id) {
  // console.log(id);
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
  updateBigCup();
}

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup.cup-small.full');
  // console.log(fullCups.length);

  if (fullCups.length === 0) {
    liters.innerText = 2000 / 1000 + 'L';
    percentage.style.visibility = 'hidden';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(330 * fullCups.length) / smallCups.length}px`;
    percentage.innerText = `${(100 * fullCups.length) / smallCups.length}%`;
    liters.innerText = `${((2000 - 250 * fullCups.length) / 1000).toFixed(2)}L`;
  }
  if (fullCups.length === smallCups.length) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
  }
};
