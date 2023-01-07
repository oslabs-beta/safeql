const { buildSchema, parse, visit, print } = require('graphql');

const schema = `
  type Cohort {
    id: ID
    studentCount: Number
    region: String
  }
  `

  //how are we traversing this code?
    //treat it like a string, turning the whole thing into one string
    //basing separations on spaces, new lines

  
// console.log(JSON.stringify(`type Cohort {
// id: ID
// studentCount: Number
// region: String
//     }`))

    //we need to ignore the spaces after a \n , to account for different peoples formatting
    //looking for the 'type' keyword
    //looking for an open bracket
      //after \n, give everything before the colon
      //space will separate the key's value/type (which we are ignoring for now)
      //when we reach another \n, give everything before the colon to next object
      //repeat
      const allSchema = []
      parse(schema).definitions.forEach((ast) => {
        let i = 1;
        const objectAST = {};
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
        console.log('allSchema: ', allSchema)
      });


    // [
    //{name: Cohort, fields:[{name: id, type: ID}, {name: studentCount, type:Number}, {name: region, type: String}]},
    // ]