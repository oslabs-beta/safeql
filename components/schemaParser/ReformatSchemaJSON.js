//import our schema parser function
import CustomTableNode from "./CustomTableNode";



function ReformatSchemaJSON(props) {
  
  let schemas = [];

  for (let i = 0; i < props.parsedSchema.length; i++) {
    const {name, fields} = props.parsedSchema[i]
    schemas.push(<CustomTableNode name={name} fields={fields} key={i}/>)
    // console.log('in for loop, schemaVisualizer');
  }
  console.log('schemas array', schemas)
  
  return (
    <div>
        {schemas}
    </div>
  );
}

export default ReformatSchemaJSON;