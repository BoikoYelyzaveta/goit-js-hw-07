
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = parseInt(controls.querySelector('input').value);
  if (amount < 1 || amount > 100 || isNaN(amount)) return;
  boxes.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    fragment.appendChild(box);
  }
  boxes.appendChild(fragment);
  controls.querySelector('input').value = '';
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
