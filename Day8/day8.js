import {
  convertTestInputFile,
  convertInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const input = convertInputFile(8);
const testInput = convertTestInputFile(8);

const checkVisibility = (treeY, treeX, y, x, grid, visibleTrees) => {
  setVisible(treeY, treeX, visibleTrees);
  let maximum = grid[treeY][treeX];
  while (true) {
    treeY += y;
    treeX += x;
    if (
      treeY < 0 ||
      treeY >= grid.length ||
      treeX < 0 ||
      treeX >= grid[treeY].length
    ) {
      break;
    }
    if (grid[treeY][treeX] > maximum) {
      maximum = grid[treeY][treeX];
      setVisible(treeY, treeX, visibleTrees);
    }
  }
};

const setVisible = (y, x, visibleTrees) => {
  visibleTrees.add(`${y}-${x}`);
};

const part1 = (input) => {
  const grid = input.split(/\r\n/).map((x) => {
    return x.split("").map(Number);
  });
  let visibleTrees = new Set();
  //check columns
  for (let i = 0; i < grid[0].length; i++) {
    checkVisibility(0, i, 1, 0, grid, visibleTrees);
    checkVisibility(grid.length - 1, i, -1, 0, grid, visibleTrees);
  }
  //check rows
  for (let i = 0; i < grid.length; i++) {
    checkVisibility(i, 0, 0, 1, grid, visibleTrees);
    checkVisibility(i, grid[0].length - 1, 0, -1, grid, visibleTrees);
  }
  console.log(visibleTrees.size);
};

part1(testInput);
part1(input);

const countVisibleTrees = (treeY, treeX, y, x, grid) => {
  let visibleTrees = 0;
  let maximum = grid[treeY][treeX];
  while (true) {
    treeY += y;
    treeX += x;
    if (
      treeY < 0 ||
      treeY >= grid.length ||
      treeX < 0 ||
      treeX >= grid[treeY].length
    ) {
      break;
    }
    visibleTrees++;
    if (grid[treeY][treeX] >= maximum) {
      break;
    }
  }
  return visibleTrees;
};

const part2 = (input) => {
  const grid = input.split(/\r\n/).map((x) => {
    return x.split("").map(Number);
  });
  let scenicScores = [];
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid[0].length; i++) {
      let scenicScore =
        countVisibleTrees(j, i, 0, 1, grid) *
        countVisibleTrees(j, i, 0, -1, grid) *
        countVisibleTrees(j, i, 1, 0, grid) *
        countVisibleTrees(j, i, -1, 0, grid);
      scenicScores.push(scenicScore);
    }
  }
  console.log(Math.max(...scenicScores));
};
part2(testInput);
part2(input);
