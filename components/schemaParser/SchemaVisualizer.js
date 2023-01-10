//import our schema parser function


function SchemaVisualizer(props) {
  //LOGIC TO TRANSFORM SCHEMA INTO VISUALIZATION COMPONENTS
  //1. Pass our props.schema from our input into our parser function
  //SchemaParser(props.schema) => out comes our array of objects 
  //2. then display all this into visualization components
  // const postParsing = parseSchema(props.schema);

//displaySchema component: (array logic done in Visualizer)
    //take each object and display each subfield with Type
    //table
//stretch - massive visualization with a vis library

  return (
    <div>
        <h1>Visualizer </h1>
        {JSON.stringify(props.parsedSchema)}
    </div>
  );
}

export default SchemaVisualizer;