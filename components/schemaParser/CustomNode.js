import React, { memo } from 'react';
import { Handle } from 'reactflow';

// CustomTableNode returns a unique node for each SchemaDisplayReactFlow Custom Node

function DataField(props) {
  return (
    <>
      <tbody className='border-solid border-white bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
        <tr>
          <td className='pl-3 pr-4'>{props.fieldName}</td>
          <td className='pl-3 pr-4'>{props.fieldType}</td>
        </tr>
      </tbody>
    </>
  );
}

function CustomNode(props) {
  const dataArray = Object.entries(props.data);

  return (
    <table className='rounded-md bg-blue-100 border-separate border-spacing-.5 w-48'>
      <tbody className='text-center'>
        <tr>
          <th className='pt-1'>{props.data.tableName}</th>
        </tr>
      </tbody>
      <Handle
        type='target'
        position='left'
      />
      <Handle
        type='source'
        position='bottom'
      />
      {dataArray.map((pair, index) => {
        if (pair[0] !== 'tableName') {
          return (
            <DataField
              fieldName={pair[0]}
              fieldType={pair[1]}
              key={`${props.data.tableName}${index}`}
            />
          );
        }
      })}
    </table>
  );
}

export default memo(CustomNode);
