import { convertInputFile } from "../HelperFunctions/ReadInputFile.js";
const input = convertInputFile("input.txt")
  .split(/\r\n\r\n/)
  .map((x) => {
    return x.split(/\r\n/).map((y) => {
      return parseInt(y);
    });
  });
const sumUpCalories = (calories) => {
  return calories.map((x) => {
    return x.reduce((a, b) => {
      return a + b;
    }, 0);
  });
};
const part1 = (calories) => {
  let sumOfCalories = sumUpCalories(calories);
  console.log(`Part 1: \nMost calories: ${Math.max(...sumOfCalories)}`);
};

const part2 = (calories) => {
  let sortedCalories = sumUpCalories(calories).sort((a, b) => b - a);
  let sumTopThree = sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
  console.log(`Part 2: \nTotal calories top three: ${sumTopThree}`);
};

part1(input);
part2(input);
