const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = ''; 
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    fragment.appendChild(box);
    size += 10;
  }
  boxes.appendChild(fragment);
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Введіть число від 1 до 100');
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = ''; 
});
