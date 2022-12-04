import { readFileSync } from "fs";

export function convertInputFile(day) {
  return readFileSync(`Day${day.toString()}/input.txt`, "utf-8").toString();
}
export function convertTestInputFile(day) {
  return readFileSync(`Day${day.toString()}/testInput.txt`, "utf-8").toString();
}
