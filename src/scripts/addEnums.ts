import { EnumValuesFile } from "../Files";
import { SourceFile } from "ts-morph";
import { toPascalCase } from "js-convert-case";

export function addAllEnums(data: EnumValuesFile, file: SourceFile) {
	const types = data.data;
	for (const key in types) {
		const typeName = toPascalCase(key);
		file.insertStatements(
			file.getStatementsWithComments().length,
			`// ${typeName}`
		);
		addEnumListForType(types[key], file, typeName);
	}
}

function addEnumListForType(
	data: Record<string, Array<string>>,
	file: SourceFile,
	parentTypeName: string
) {
	for (const key in data) {
		// convert to PascalCase, prepend the parent type name if the key is "type"
		const typeName =
			key === "types" || key === "type"
				? parentTypeName + toPascalCase(key)
				: toPascalCase(key);
		file.addTypeAlias({
			name: typeName,
			type: data[key].map((value) => `"${value}"`).join(" | "),
			isExported: true,
		});
	}
}
