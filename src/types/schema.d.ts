export type ForeignKey = {
  foreignSchemaName: string;
  foreignTableName: string;
  foreignColumnName: string;
  constrained: boolean;
};

export type Column = {
  name: string;
  type:
    | "binary"
    | "number"
    | "boolean"
    | "text"
    | "datetime"
    | "hierarchical"
    | "geometric"
    | "money"
    | "other";
  foreignKeys: ForeignKey[];
};

export type Table = {
  name: string;
  primaryKey: string;
  columns: Column[];
};

export type SchemaType = {
  name: string;
  tables: Table[];
};
