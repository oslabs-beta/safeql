import React, { memo } from 'react';

// CustomTableNode will return a unique node for each SchemaDisplayReactFlow Custom Nodes

function customNodeFormat(props){
  console.log('customNodeFormat props',props)

}

  function CustomTableNode(props){
    console.log('props in CustomTableNode',props)
    const { tableName } = props.data;

    return (
       <>
        <div>{tableName}</div>

        <customNodeFormat
          region = {props.data.region}
        />
        <table>
          <tr>
            <td>{props.data.id}</td>
          </tr>
          <tr>
            <td>{props.data.id}</td>
          </tr>
          <tr>
            <td>{props.data.id}</td>
          </tr>
        </table>
       
       </>
    )
  }


  export default memo(CustomTableNode);