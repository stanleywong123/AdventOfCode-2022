import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const testInput = convertTestInputFile("04").split(/\r\n/);
const input = convertInputFile("04").split(/\r\n/);

const sectionsCompletelyOverlap = (firstSection, secondSection) => {
  let firstStart;
  let firstEnd;
  let secondStart;
  let secondEnd;
  [firstStart, firstEnd] = firstSection.split("-").map((x) => {
    return parseInt(x);
  });
  [secondStart, secondEnd] = secondSection.split("-").map((x) => {
    return parseInt(x);
  });

  if (firstStart <= secondStart && firstEnd >= secondEnd) {
    return true;
  } else if (firstStart >= secondStart && firstEnd <= secondEnd) {
    return true;
  } else {
    return false;
  }
};
const part1 = (sections) => {
  let firstSection;
  let secondSection;

  let containedSections = 0;

  sections.forEach((section) => {
    [firstSection, secondSection] = section.split(",");
    if (sectionsCompletelyOverlap(firstSection, secondSection)) {
      containedSections++;
    }
  });
};

const sectionsOverlap = (firstSection, secondSection) => {
  let firstStart;
  let firstEnd;
  let secondStart;
  let secondEnd;
  [firstStart, firstEnd] = firstSection.split("-").map((x) => {
    return parseInt(x);
  });
  [secondStart, secondEnd] = secondSection.split("-").map((x) => {
    return parseInt(x);
  });

  if (secondStart <= firstStart && firstStart <= secondEnd) {
    return true;
  } else if (secondStart <= firstEnd && firstEnd <= secondEnd) {
    return true;
  } else if (firstStart <= secondStart && secondStart <= firstEnd) {
    return true;
  } else if (firstStart <= secondEnd && secondEnd <= firstEnd) {
    return true;
  } else {
    return false;
  }
};

const part2 = (sections) => {
  let firstSection;
  let secondSection;
  let containedSections = 0;

  sections.forEach((section) => {
    [firstSection, secondSection] = section.split(",");
    if (sectionsOverlap(firstSection, secondSection)) {
      containedSections++;
    }
  });
  console.log(containedSections);
};

part1(testInput);
part1(input);

part2(testInput);
part2(input);
