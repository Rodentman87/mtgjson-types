import { Project } from "ts-morph";
import { join } from "path";
import { addAllEnums } from "./addEnums";
import { EnumValuesFile } from "../Files";

(async () => {
	const project = new Project({
		tsConfigFilePath: join(process.cwd(), "tsconfig.json"),
	});

	// Make sure the Enums file is up to date
	// Get the enums file
	let enumsFile = project.getSourceFile("Enums.ts");
	if (!enumsFile) {
		enumsFile = project.createSourceFile("src/Enums.ts");
	}
	// Download the latest enum values
	const response = await fetch("https://mtgjson.com/api/v5/EnumValues.json");
	const data = (await response.json()) as EnumValuesFile;
	// Clear the file
	enumsFile.getStatementsWithComments().forEach((statement) => {
		statement.remove();
	});
	// Add the enum values to the file
	addAllEnums(data, enumsFile);

	// Save all the files
	await project.save();
})();
