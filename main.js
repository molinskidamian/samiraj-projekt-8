const body = document.querySelector('body');
const box = document.querySelector('p');

let divX = 150;
let divY = 50;

function positionXY(e) {
  console.log(`${e.clientX}, ${e.clientY}`);
  divX = `${e.clientX}`;
  divY = `${e.clientY}`;
  box.style.left = `${divX - 50}px`;
  box.style.top = `${divY - 50}px`;
}

function selectElement(e) {
  box.classList.toggle('selected');
  box.addEventListener('mousemove', positionXY);
}

function unselectElement(e) {
  box.classList.remove('selected');
  box.removeEventListener('mousemove', positionXY);
}

function setElementPosition() {
  console.log('koniec');
}

box.addEventListener('mousedown', selectElement);
box.addEventListener('mouseup', unselectElement);

body.removeEventListener('mouseup', setElementPosition);

box.style.left = `${divX}px`;
box.style.top = `${divY}px`;
