import React, { memo } from 'react';

const testData = [
  {
    name: 'Cohorts',
    fields: [
      {
        nodeId: 1,
        name: 'id',
        type: 'ID'
      },
      // {
      //   nodeId: 2,
      //   name: 'id2',
      //   type: 'ID2'
      // }
    ]
  }
]

//each schema field as a node
  function SchemaField(props){
    console.log('props', props)

    return (
        <>
          <table className='border-solid border-white bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
                <tr key={props.nodeId} >
                  <td>{props.name}</td>
                  <td>{props.type}</td>
                </tr>
          </table>
        </>
      );
    };

//   //combine all the fields from SchemaFields into one node, and have Schema Name in this one

  function CustomTableNode({name, fields}){
    console.log('test data fields', testData.fields)
    // console.log('name', name)
    // console.log('fields', fields)

    return (
      <>
        <div>{testData.name}</div>
         {testData.map((val, key) => {
          return (
            <SchemaField 
              key={key} 
              name={val.name}
              type={val.type}
            />
          );
        })}
      </>
    )
  }

// function Table() {

//   return (
//     <div className="custom-node__select">
//       <div>Cohort</div>
//       <tr>
//         <td>id</td>
//         <td>Integer</td>
      
//       </tr>
//     </div>
//   );
// }

// function CustomTable() {
//   return (
//     <>
//       <div className="custom-node__header">
//         <strong>User</strong>
//       </div>
      
//       <div className="custom-node__body">
//           <CustomTableNode />
//       </div>
      
//     </>
//   );
// }


  export default memo(CustomTableNode);

