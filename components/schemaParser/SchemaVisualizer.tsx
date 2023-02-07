//This is old and will be deleted at the end of ReactFlow development

//import our schema parser function
import SchemaDisplay from "./SchemaDisplay";
import { SchemaVisualizerProps } from '../../src/types';



function SchemaVisualizer(props: SchemaVisualizerProps) {
  //LOGIC TO TRANSFORM SCHEMA INTO VISUALIZATION COMPONENTS
  //1. Pass our props.schema from our input into our parser function
  //SchemaParser(props.schema) => out comes our array of objects 
  //2. then display all this into visualization components
  // const postParsing = parseSchema(props.schema);

//displaySchema component: (array logic done in Visualizer)
    //take each object and display each subfield with Type
    //table
//stretch - massive visualization with a vis library
  //  console.log('props.parsedSchema', props.parsedSchema)
  let schemas = [];

  for (let i = 0; i < props.parsedSchema.length; i++) {
    const {name, fields} = props.parsedSchema[i]
    schemas.push(<SchemaDisplay name={name} fields={fields} key={i}/>)
    // console.log('in for loop, schemaVisualizer');
  }
  // console.log('schemas array', schemas)
  
  return (
    <div>
        {schemas}
    </div>
  );
}

export default SchemaVisualizer;