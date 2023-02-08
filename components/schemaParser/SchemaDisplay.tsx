// this too is old and will be deleted

import { SchemaDisplayProps } from '../../src/types'

function SchemaDisplay(props: SchemaDisplayProps) {
  const { name, fields } = props;

/*
type Cohort {
  id: ID 
  studentCount: Number
  region: String
}
*/

  return (
    <>
      <table className='border-solid border-white bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
        <tbody>
        <tr>
          <th>{name}</th>
        </tr>
        {fields.map((val, key) => {
          return (
            <tr key={key} >
              <td>{val.name}</td>
              <td>{val.type}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}

export default SchemaDisplay;
