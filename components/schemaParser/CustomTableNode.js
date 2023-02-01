import React, { memo } from 'react';

const testData = [
    {
      name: 'Cohort',
      fields: [
        {
          nodeId: 1,
          name: 'id',
          type: 'ID'
        },
        {
          nodeId: 2,
          name: 'id2',
          type: 'ID2'
        }
      ]
    }
  ]

  // function SchemaDispla(props) {
  //   const { name, fields } = props;

  //each schema field as a node
  function SchemaField({ key, name, type }){
    return (
        <>
          <table className='border-solid border-white bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
                <tr key={key} >
                  <td>{name}</td>
                  <td>{type}</td>
                </tr>
          </table>
        </>
      );
    };

  //combine all the fields from SchemaFields into one node, and have Schema Name in this one

  function CustomNode({name, fields}){
    return (
      <>
        <div>${name}</div>
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

  export default memo(CustomNode);

  // function CustomNode({name, fields}){
  //   return (
  //     <>
  //       <div>${name}</div>
  //        {fields.map((val, key) => {
  //         return (
  //           <SchemaField 
  //             key={key} 
  //             name={val.name}
  //             type={val.type}
  //           />
  //         );
  //       })}
  //     </>
  //   )