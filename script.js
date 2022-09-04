"use strict";

function eraseGrid() {
  const squares = document.querySelectorAll(".grid div");
  squares.forEach((square) => square.style.backgroundColor = "#dadada");
}

function changeGridSize() {
  let n = prompt("Enter number of squares per side of new grid");
  if (n === null) return;

  while (isNaN(n) || n < 1 || n > 100) {
    n = prompt("Make sure the input is a number from 1 to 100");
    if (n === null) return;
  }

  gridSize = parseInt(n);

  removeGrid();
  createGrid();
}

function removeGrid() {
  while (grid.hasChildNodes()) {
    grid.firstChild.remove();
  }
}

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = getRandomColor();
      });
      grid.appendChild(cell);
    }
  }

  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

const grid = document.querySelector(".grid");

let gridSize = 16;
createGrid(gridSize);

const erase = document.querySelector(".erase");
erase.addEventListener("click", eraseGrid);

const change = document.querySelector(".change");
change.addEventListener("click", changeGridSize);
