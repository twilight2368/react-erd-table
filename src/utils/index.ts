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

export function mapper(
  models: ModelType[] | undefined
): SchemaType[] | undefined {
  if (!models) {
    return undefined;
  }
  return [
    {
      name: "default_schema", // Default schema name
      tables: models.map((model) => ({
        name: model.name,
        primaryKey: "id", // Assumed default
        columns: model.permissions.map((permission) => ({
          name: permission.fieldName,
          type: mapToSimpleType(permission.fieldType),
          foreignKeys: [],
        })),
      })),
    },
  ];
}
