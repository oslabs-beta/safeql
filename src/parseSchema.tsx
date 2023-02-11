const { buildSchema, parse, visit, print } = require('graphql');

/*
type Cohort {
  id: ID
  studentCount: Number
  region: String
}
*/

type ObjectAST = {
  name: { value: string };
  node: { value: number };
  fields: [];
};

export const parseSchema = (schema: string) => {
  const allSchema: [] = [];
  parse(schema).definitions.forEach((ast: ObjectAST, index: number) => {
    const objectAST: { name?: string; node?: number; fields?: [] } = {};
    objectAST.name = ast.name.value;
    objectAST.node = index;
    objectAST.fields = [];

    visit(ast, {
      FieldDefinition(node) {
        const nodeObject = { name: null, type: null };
        let node2 = print(node);
        const elements = node2.split(': ');
        nodeObject.name = elements[0];
        nodeObject.type = elements[1];
        objectAST.fields.push(nodeObject);
      },
    });
    allSchema.push(objectAST);
  });
  return allSchema;
};

// [
//{name: Cohort, fields:[{name: id, type: ID}], {name: studentCount, type:Number}, {name: region, type: String}]},
// ]
