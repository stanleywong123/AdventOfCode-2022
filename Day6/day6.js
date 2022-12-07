import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";
const testInput = convertTestInputFile(6);
const input = convertInputFile(6);

const findMarker = (dataStreamBuffer) => {
  return /(.).*\1/.test(dataStreamBuffer);
};
const part1 = (dataStream) => {
  for (let i = 0; i < dataStream.length - 4; i++) {
    if (!findMarker(dataStream.substring(i, i + 4))) {
      console.log(i + 4);
      i = dataStream.length;
    }
  }
};

part1(testInput);
part1(input);

const part2 = (dataStream) => {
  for (let i = 0; i < dataStream.length - 14; i++) {
    if (!findMarker(dataStream.substring(i, i + 14))) {
      console.log(i + 14);
      i = dataStream.length;
    }
  }
};

part2(testInput);
part2(input);
