import React, { memo } from 'react';

// CustomTableNode will return a unique node for each SchemaDisplayReactFlow Custom Nodes

function DataField(props){

  return(
    <>
      <table className='border-solid border-white bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
        <tr>
          <td>{props.fieldName}</td>
          <td>{props.fieldType}</td>
        </tr>
      </table>
    </>
  );
};

  function CustomNode(props){

    const dataArray = Object.entries(props.data);

    return (
       <>
        <div>{props.data.tableName}</div>

        {dataArray.map((pair) => {
          return(
            < DataField
              fieldName = {pair[0]}
              fieldType= {pair[1]}
            />
          )
        })}
       </>
    )
  }


  export default memo(CustomNode);