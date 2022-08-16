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

const container = document.querySelector(".container");
const button = document.querySelector("button");

createGrid(16);
