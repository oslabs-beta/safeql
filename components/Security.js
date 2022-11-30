import { useContext } from 'react';
import { Context } from '../src/context';

function Security (){
  const { introspectionOn } = useContext(Context)

  return (
    <section>
    <h1>Security</h1>
    <div>Introspection: {introspectionOn ? 'On' : 'Off'}</div>
    <div>
      <h3>Suggestions</h3>
      <ul>
        <li>{introspectionOn ? null : 'Turn on introspection to secure schema'}</li>
        </ul>
      </div>
    </section>
  )
}

export default Security;