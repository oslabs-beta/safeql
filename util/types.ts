import { Edge, Node } from "reactflow";

export type RelationType = "1-1" | "1-n" | "m-n";
// 1-1 one to one, 1-n one to none, m-n many to none

export interface SchemaError {
  reason: string;
  row: string;
}

export interface EnumNodeData {
  type: "enum";
  name: string;
  dbName?: string | null;
  documentation?: string;
  values: string[];
}

export interface ModelNodeData {
  type: "model";
  name: string;
  dbName?: string | null;
  documentation?: string;
  columns: Array<{
    name: string;
    type: string;
    displayType: string;
    kind: string;
    documentation?: string;
    isList: boolean;
    isRequired: boolean;
    relationName?: string | null;
    relationFromFields?: string[] | null;
    relationToFields?: string[] | null;
    defaultValue?: string | null;
    relationType?: RelationType | null;
  }>;
}



