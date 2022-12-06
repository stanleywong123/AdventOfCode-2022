import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const testInput = convertTestInputFile(5).split(/\r\n\r\n/);
const input = convertInputFile(5).split(/\r\n\r\n/);

const [stack, ...moves] = testInput;
// console.log(testInput);

stack.split(/\r\n/).forEach((x) => {
  x.split(" ");

  console.log(x);
});

const divideMovements = (movements) => {
  const chunks = [];
  const chunkSize = 3;
  for (let index = 0; index < movements.length; index += chunkSize) {
    const chunk = movements.slice(index, index + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};
let movements = divideMovements(
  moves[0].replace(/\D+/g, " ").trim().split(" ")
);
console.log(movements);
