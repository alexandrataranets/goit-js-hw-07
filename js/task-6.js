const controlsDiv = document.getElementById("controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", () => createBoxes(input.value));
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesDiv.innerHTML = "";
  boxesDiv.appendChild(fragment);
  input.value = "";
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}