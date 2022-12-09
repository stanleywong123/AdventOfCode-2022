import {
  convertInputFile,
  convertTestInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const testInput = convertTestInputFile(5).replace(/\r/g, "").trimEnd();
const input = convertInputFile(5).replace(/\r/g, "").trimEnd();

const transpose = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }
  return arr;
};
const moveBlock = (amount, fromStack, toStack, stacks) => {
  let blocksToMove = [];

  for (let i = 0; i < amount; i++) {
    if (stacks[fromStack - 1].length >= amount) {
      stacks[fromStack - 1]
        .splice(0, 1)
        .forEach((stack) => blocksToMove.push(stack));
    } else {
      stacks[fromStack - 1]
        .splice(0, 1)
        .forEach((stack) => blocksToMove.push(stack));
    }
  }

  blocksToMove.forEach((block) => {
    if (stacks[toStack - 1].length) {
      stacks[toStack - 1].unshift(block);
    } else {
      stacks[toStack - 1].push(block);
    }
  });
};
const part1 = (input) => {
  const [stacks, moves] = input.split("\n\n");

  let parsedStacks = stacks.split("\n").map((line) => {
    return [...line].filter((value, index) => {
      return index % 4 === 1;
    });
  });
  const indexes = parsedStacks.pop();
  if (indexes.length != parsedStacks.length) {
    let spacer = Array(indexes.length + 1)
      .join(" . ")
      .split(" .");
    spacer.shift();

    parsedStacks.unshift(spacer);
  }
  transpose(parsedStacks);
  // console.log("parsed", parsedStacks);
  parsedStacks = parsedStacks.map((stack) => {
    stack = stack.filter((block) => {
      return block.trim() != "";
    });
    return stack;
  });
  // console.log("parsed", parsedStacks);

  let parsedMoves = moves.split("\n").map((move) => {
    return move.split(/\D+/g);
  });
  parsedMoves.map((move) => {
    move.shift();
  });
  parsedMoves = parsedMoves.map((moves) => {
    return moves.map((move) => {
      return parseInt(move);
    });
  });
  parsedMoves.forEach((move) => {
    moveBlock(move[0], move[1], move[2], parsedStacks);
  });
  let result = "";
  parsedStacks.forEach((stack) => {
    if (stack[0]) {
      result += stack[0];
    }
  });
  console.log("result", result);
};

part1(testInput);
part1(input);

const moveStack = (amount, fromStack, toStack, stacks) => {
  let blocksToMove = [];
  if (stacks[fromStack - 1].length >= amount) {
    blocksToMove = stacks[fromStack - 1].splice(0, amount);
  } else {
    blocksToMove = stacks[fromStack - 1].splice(
      0,
      stacks[fromStack - 1].length
    );
  }
  while (blocksToMove.length > 0) {
    stacks[toStack - 1].unshift(blocksToMove.pop());
  }
  blocksToMove.forEach((block) => {});
};
const part2 = (input) => {
  const [stacks, moves] = input.split("\n\n");

  let parsedStacks = stacks.split("\n").map((line) => {
    return [...line].filter((value, index) => {
      return index % 4 === 1;
    });
  });
  const indexes = parsedStacks.pop();
  if (indexes.length != parsedStacks.length) {
    let spacer = Array(indexes.length + 1)
      .join(" . ")
      .split(" .");
    spacer.shift();

    parsedStacks.unshift(spacer);
  }
  transpose(parsedStacks);
  // console.log("parsed", parsedStacks);
  parsedStacks = parsedStacks.map((stack) => {
    stack = stack.filter((block) => {
      return block.trim() != "";
    });
    return stack;
  });
  // console.log("parsed", parsedStacks);

  let parsedMoves = moves.split("\n").map((move) => {
    return move.split(/\D+/g);
  });
  parsedMoves.map((move) => {
    move.shift();
  });
  parsedMoves = parsedMoves.map((moves) => {
    return moves.map((move) => {
      return parseInt(move);
    });
  });
  parsedMoves.forEach((move) => {
    moveStack(move[0], move[1], move[2], parsedStacks);
  });
  let result = "";
  parsedStacks.forEach((stack) => {
    if (stack[0]) {
      result += stack[0];
    }
  });
  console.log("result", result);
};

part2(testInput);
part2(input);
