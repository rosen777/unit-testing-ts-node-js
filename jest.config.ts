import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/doubles";
const baseTestDir = "<rootDir>/src/__test__/doubles";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
  testEnvironment: "node",
};

export default config;
