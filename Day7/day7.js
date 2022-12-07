import {
  convertTestInputFile,
  convertInputFile,
} from "../HelperFunctions/ReadInputFile.js";

const input = convertInputFile(7);
const testInput = convertTestInputFile(7);

const createTree = (input) => {
  const tree = {
    name: "/",
    isDirectory: true,
    children: [],
    parent: [],
  }; //name, isDirectory, size, children, parent

  let currentNode = tree;
  let currentCommand = null;

  for (const line of input) {
    if (line[0] === "$") {
      //commands
      const commandMatch = /^\$ (?<command>\w+)(?: (?<arg>.+))?/.exec(line);
      currentCommand = commandMatch.groups.command;
      if (currentCommand === "cd") {
        const target = commandMatch.groups.arg;
        switch (target) {
          case "/":
            currentNode = tree;
            break;
          case "..":
            currentNode = currentNode.parent;
            break;
          default:
            currentNode = currentNode.children.find(
              (folder) => folder.isDirectory && folder.name === target
            );
        }
      }
    } else {
      if (currentCommand === "ls") {
        const fileMatch = /^(?<size>\d+) (?<name>.+)/.exec(line);
        if (fileMatch) {
          const node = {
            name: fileMatch.groups.name,
            size: fileMatch.groups.size,
            isDirectory: false,
            parent: currentNode,
          };
          currentNode.children.push(node);
        }
        const dirMatch = /^dir (?<name>.+)/.exec(line);
        if (dirMatch) {
          const node = {
            name: dirMatch.groups.name,
            isDirectory: true,
            children: [],
            parent: currentNode,
          };
          currentNode.children.push(node);
        }
      } else {
        throw new Error("unknown state");
      }
    }
  }
  return tree;
};

const printTree = (node, depth = 0) => {
  console.log(
    `${" ".repeat(depth * 2)}- ${node.name} (${
      node.isDirectory ? "dir" : `file, size=${node.size}`
    })`
  );
  if (node.isDirectory) {
    for (const child of node.children) {
      printTree(child, depth + 1);
    }
  }
};

const calcSize = (node, directoryCallback) => {
  if (!node.isDirectory) {
    return node.size;
  }

  const directorySize = node.children
    .map((child) => calcSize(child, directoryCallback))
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);

  directoryCallback(node.name, directorySize);
  return directorySize;
};

const part1 = (input) => {
  const tree = createTree(input.split(/\r\n/));
  printTree(tree);
  let sumSmallFolder = 0;
  calcSize(tree, (name, size) => {
    if (size < 100000) {
      sumSmallFolder += size;
    }
  });
  console.log("sum", sumSmallFolder);
};

// part1(testInput);
// part1(input);

const part2 = (input) => {
  const tree = createTree(input.split(/\r\n/));

  let largeFolders = [];
  let unusedSpace = 0;
  let neededSpace = 0;
  calcSize(tree, (name, size) => {
    if (name === "/") {
      unusedSpace = 70000000 - size;
      neededSpace = 30000000 - unusedSpace;
    }
  });
  console.log("needed space", neededSpace);
  //   printTree(tree);
  calcSize(tree, (name, size) => {
    if (size > neededSpace) {
      largeFolders.push(size);
    }
  });
  console.log(Math.min(...largeFolders));
};

part2(testInput);
part2(input);
