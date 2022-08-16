"use strict";

function createGrid(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cell = document.createElement("div");
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      });
      container.appendChild(cell);
    }
  }

  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}

function changeGridSize() {
  let n = prompt("Enter number of squares per side of new grid");
  if (n === null) return;

  while (isNaN(n) || n < 1 || n > 100) {
    n = prompt("Make sure the input is a number from 1 to 100");
    if (n === null) return;
  }

  removeGrid();
  createGrid(parseInt(n));
}

function removeGrid() {
  while (container.hasChildNodes()) {
    container.firstChild.remove();
  }
}

const container = document.querySelector(".container");

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", changeGridSize);
