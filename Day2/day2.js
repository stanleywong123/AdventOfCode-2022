import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";

let winPoints = 6;
let drawPoints = 3;
const formatInputFile = (inputFile) => {
  return inputFile.split(/\r\n/);
};
const testInput = convertTestInputFile(2);
const input = convertInputFile(2);
const shapePoints = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};
const win = (shape) => {
  return shapePoints[shape] + 6;
};
const lose = (shape) => {
  return shapePoints[shape];
};
const draw = (shape) => {
  return shapePoints[shape] + 3;
};

const checkOutcome = (game) => {
  switch (true) {
    case game.includes("X") && game.includes("A"):
      return draw("X");
    case game.includes("X") && game.includes("B"):
      return lose("X");
    case game.includes("X") && game.includes("C"):
      return win("X");
    case game.includes("Y") && game.includes("A"):
      return win("Y");
    case game.includes("Y") && game.includes("B"):
      return draw("Y");
    case game.includes("Y") && game.includes("C"):
      return lose("Y");
    case game.includes("Z") && game.includes("A"):
      return lose("Z");
    case game.includes("Z") && game.includes("B"):
      return win("Z");
    case game.includes("Z") && game.includes("C"):
      return draw("Z");
  }
};
const provideOutcome = (game) => {
  switch (true) {
    case game.includes("X") && game.includes("A"):
      return lose("C");
    case game.includes("X") && game.includes("B"):
      return lose("A");
    case game.includes("X") && game.includes("C"):
      return lose("B");
    case game.includes("Y") && game.includes("A"):
      return draw("A");
    case game.includes("Y") && game.includes("B"):
      return draw("B");
    case game.includes("Y") && game.includes("C"):
      return draw("C");
    case game.includes("Z") && game.includes("A"):
      return win("B");
    case game.includes("Z") && game.includes("B"):
      return win("C");
    case game.includes("Z") && game.includes("C"):
      return win("A");
  }
};
const part1 = (games) => {
  let formattedInput = formatInputFile(games);
  let totalScore = 0;
  formattedInput.forEach((game) => {
    totalScore += checkOutcome(game);
  });
  console.log(`Player has ${totalScore} points`);
};

const part2 = (games) => {
  let formattedInput = formatInputFile(games);
  let totalScore = 0;
  formattedInput.forEach((game) => {
    totalScore += provideOutcome(game);
  });
  console.log(`Player has ${totalScore} points`);
};
part1(testInput);
part1(input);

part2(testInput);
part2(input);
