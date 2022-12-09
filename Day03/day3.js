import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const testInput = convertTestInputFile("03").split(/\r\n/);
const input = convertInputFile("03").split(/\r\n/);

const priorities = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
const calcPriority = (item) => {
  if (priorities[item]) {
    return priorities[item];
  }
  return priorities[item.toLowerCase()] + 26;
};

const part1 = (compartments) => {
  let firstCompartments = [];
  let secondCompartments = [];
  let commonItems = [];
  let priorityTotal = 0;
  compartments.forEach((compartment) => {
    let middleIndex = Math.ceil(compartment.length / 2);
    firstCompartments.push(compartment.substring(0, middleIndex));
    secondCompartments.push(
      compartment.substring(middleIndex, compartment.length)
    );
  });
  let found = false;
  for (let index = 0; index < firstCompartments.length; index++) {
    found = false;
    firstCompartments[index].split("").forEach((item) => {
      if (secondCompartments[index].includes(item.toString()) && !found) {
        commonItems.push(item);
        found = true;
      }
    });
  }

  commonItems.forEach((item) => {
    priorityTotal += calcPriority(item);
  });
  console.log("priority total: ", priorityTotal);
};

const divideCompartments = (compartments) => {
  const chunks = [];
  const chunkSize = 3;
  for (let index = 0; index < compartments.length; index += chunkSize) {
    const chunk = compartments.slice(index, index + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};
const checkGroupPriority = (group) => {
  let found = false;
  let foundItem;
  group[0].split("").forEach((item) => {
    if (group[1].includes(item) && !found) {
      if (group[2].includes(item) && !found) {
        found = true;
        foundItem = item;
      }
    }
  });
  return foundItem;
};
const part2 = (compartments) => {
  let dividedCompartments = divideCompartments(compartments);
  let priorities = [];
  let priorityTotal = 0;
  dividedCompartments.forEach((group) => {
    priorities.push(checkGroupPriority(group));
  });
  priorities.forEach((priority) => {
    priorityTotal += calcPriority(priority);
  });

  console.log(priorityTotal);
};

part1(testInput);
part1(input);

part2(testInput);
part2(input);
