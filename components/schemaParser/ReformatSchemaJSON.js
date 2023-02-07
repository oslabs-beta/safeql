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

// export const edges = [
//   {
//     id: '1-2',
//     source: '1', //where edge begins
//     target: '2', //where edge ends
//     type: 'step'//default is curved line
//   }
// ]

// //update to reformat SchemaJSON to look like custom nodes

function ReformatSchemaJSON(props) {
  console.log('ReformatSchemaJSON props', props)
//map through field part
let count = 1;
//in the map increase count each time at end of map
// {
//   type: 'custom',
//   position: {x:100, y: 100}
//   id: count,
//   data: {
//     tableName: 'Cohort',
//     id: 'ID',
//     studentCount: 'Number',
//     region: 'String'
//   },

// },

  console.log('nodes array', nodes)
  
  return (
    <div>
       
    </div>
  );
}

export default ReformatSchemaJSON;