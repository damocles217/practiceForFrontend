import type { Config } from "@jest/types";

const config = async (): Promise<Config.InitialOptions> => {
	return {
		roots: ["<rootDir>"],
		verbose: true,
		preset: "ts-jest",
		testEnvironment: "node",
		coverageProvider: "v8",
		setupFilesAfterEnv: ["./jest.setup.ts"],
		moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	};
};

export default config;
