import React from 'react';

export const nodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      tableName: 'Cohort',
      id: 'ID',
      studentCount: 'Number',
      region: 'String'
    },
    position: {x:100, y: 100} 
  },
  {
    id: '2',
    type: 'custom',
    data: {
      tableName: 'Student',
      id: 'ID',
      teacher: 'Type',
      region: 'String'
    },
    position: {x:300, y: 150} 
  }
  
];

export const edges = [
  {
    id: '1-2',
    source: '1', //where edge begins
    target: '2', //where edge ends
    type: 'step'//default is curved line
  }
]

// //update to reformat SchemaJSON to look like custom nodes

// function ReformatSchemaJSON(props) {
  
//   for (let i = 0; i < props.parsedSchema.length; i++) {
//     const {name, fields} = props.parsedSchema[i]
//     schemas.push(<CustomTableNode name={name} fields={fields} key={i}/>)
//     // console.log('in for loop, schemaVisualizer');
//   }
//   console.log('schemas array', schemas)
  
//   return (
//     <div>
//         {schemas}
//     </div>
//   );
// }

// export default ReformatSchemaJSON;