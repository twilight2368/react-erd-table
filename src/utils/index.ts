import type { ModelType } from "../types/model";
import type { SchemaType } from "../types/schema";

function mapToSimpleType(
  input: string
): "number" | "boolean" | "text" | "other" {
  const lower = input.toLowerCase();

  // Check for numeric types
  if (["int", "integer", "long", "double"].some((t) => lower.includes(t))) {
    return "number";
  }

  // Check for boolean types
  if (lower === "boolean" || lower === "bool") {
    return "boolean";
  }

  // Check for string/text types
  if (lower === "string") {
    return "text";
  }

  // Everything else is "other"
  return "other";
}

export function mapper(models: ModelType[]): SchemaType {
  return {
    name: "default_schema",
    tables: models.map((model) => ({
      name: model.name,
      primaryKey: "id", // Defaulting to 'id' unless there's logic to determine otherwise
      columns: model.permissions.map((permission) => ({
        name: permission.fieldName,
        type: mapToSimpleType(permission.fieldType),
        foreignKeys:
          permission.refField && permission.refTable
            ? [
                {
                  foreignSchemaName: "default_schema",
                  foreignTableName: permission.refTable,
                  foreignColumnName: permission.refField,
                  constrained: true,
                },
              ]
            : [],
      })),
    })),
  };
}
