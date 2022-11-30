import { useContext } from 'react';
import { Context } from '../src/context';

function Security (){
  const { introspectionOn } = useContext(Context)

  return (
    <section>
    <h1>Security</h1>
    <div>Introspection: {introspectionOn ? 'On' : 'Off'}</div>
    </section>
  )
}

export default Security;