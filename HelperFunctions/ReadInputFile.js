import { readFileSync } from "fs";

export function convertInputFile(fileName) {
  return readFileSync(fileName, "utf-8").toString();
}
