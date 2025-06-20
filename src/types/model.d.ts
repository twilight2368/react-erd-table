export type ModelType = {
  id: number;
  name: string;
  meaning: string;
  domains: string[];
  status: number;
  permissions: Permission[];
};

export type Permission = {
  fieldName: string;
  fieldType: string;
  meaning: string;
  modelId: number;
  status: number; 
  refField?: string;
  refTable?: string;
  refType?: string;
};
