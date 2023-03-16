import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/pass_checker";
const baseTestDir = "<rootDir>/src/__test__/pass_checker";

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
