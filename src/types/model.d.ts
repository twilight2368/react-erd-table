export type ModelType = {
  domain: string[];
  id: number;
  name: string;
  permissions: Permission[];
  status: 0 | 1;
};

export type Permission = {
  fieldName: string;
  fieldType: string;
  meaning: string;
  modelId: number;
  status: 0 | 1;
};
