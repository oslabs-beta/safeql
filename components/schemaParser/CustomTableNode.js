import React, { memo } from 'react';

// CustomTableNode will return a unique node for each SchemaDisplayReactFlow Custom Nodes

function customNodeFormat(props){
console.log('customNodeFormat props', props)

  return(
    <>
      <table className='border-solid border-white bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
        <tr key={id}>
        
        {/* loop through data props to make key */}
        {/* loop through data props to make value of that key */}

        </tr>
      </table>
    </>
  );
};

  function CustomTableNode(props){
    console.log('props in CustomTableNode',props)
    const { tableName } = props.data;

    return (
       <>
        <div>{tableName}</div>

        <customNodeFormat
          id = {props.id}
        />
        <table>
          <tr>
            <td>{props.data.id}</td>
            <td>{props.data.id}</td>
          </tr>
          <tr>
            <td>{props.data.tableName}</td>
            <td>{props.data.tableName}</td>
          </tr>
          <tr>
            <td>{props.data.studentCount}</td>
            <td>{props.data.studentCount}</td>
          </tr>
          <tr>
            <td>{props.data.region}</td>
            <td>{props.data.region}</td>
          </tr>
        </table>
       
       </>
    )
  }


  export default memo(CustomTableNode);