import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const testInput = convertTestInputFile("09")
  .split(/\r\n/)
  .map((move) => {
    let temp = move.split(" ");
    temp[1] = parseInt(temp[1]);
    return temp;
  });
const input = convertInputFile("09");

console.log(testInput);

const performMove = (move, startX, startY, tail) => {
  let dx = 0;
  let dy = 0;
  switch (move[0]) {
    case "U":
      dy += move[1];
      break;
    case "D":
      dy -= move[1];
      break;
    case "L":
      dx -= move[1];
      break;
    case "R":
      dx += move[1];
      break;
  }
  switch (true) {
    case dy > 0:
      for (let i = 0; i < dy; i++) {
        tail.add(`${startX}-${i}`);
      }
      break;
    case dy < 0:
      for (let i = dy; i < 0; i++) {
        tail.add(`${startX}-${startY + i}`);
      }
      break;
    case dx > 0:
      for (let i = 0; i < dx; i++) {
        tail.add(`${i}-${startY}`);
      }
      break;
    case dx < 0:
      for (let i = dx + 1; i < 0; i++) {
        tail.add(`${startX + i}-${startY}`);
      }
      break;
  }
};

const part1 = (moves) => {
  let head = new Set();
  let tail = new Set();
  let startX = 0;
  let startY = 0;
  moves.forEach((move) => {
    performMove(move, startX, startY, tail);
    if (move[0] === "R") {
      startX += move[1];
    } else if (move[0] === "L") {
      startX -= move[1];
    } else if (move[0] === "U") {
      startY += move[1];
    } else if (move[0] === "D") {
      startY -= move[1];
    }
  });
  console.log(tail.size);
  console.log(tail);
};

part1(testInput);
