const { buildSchema, parse, visit, print } = require('graphql');

/*
type Cohort {
  id: ID
  studentCount: Number
  region: String
}
*/

type objectAST = {
  name: { value: string },
  fields: []
}

export const parseSchema = (schema: string) => {
  const allSchema: [] = []
  parse(schema).definitions.forEach((ast: objectAST) => {
    const objectAST: {name?: string, fields?: []} = {};
    objectAST.name = ast.name.value
    objectAST.fields = [];
    // console.log('\n');
    // console.log(ast.name);

    visit(ast, {
      FieldDefinition(node) {
        const nodeObject = {name: null, type: null}
        let node2 = print(node)
        // console.log(i++, node2)
        const elements = node2.split(': ')
        // console.log(elements)
        nodeObject.name = elements[0]
        nodeObject.type = elements[1]
        objectAST.fields.push(nodeObject)
      },
    });
    allSchema.push(objectAST)  
  });
  return allSchema;
}

    // [
    //{name: Cohort, fields:[{name: id, type: ID}], {name: studentCount, type:Number}, {name: region, type: String}]},
    // ]