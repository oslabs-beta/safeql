import { useContext } from 'react';
import { Context } from '../src/context';

function Security() {
  const { introspectionOn } = useContext(Context);

  return (
    <section className='mx-2'>
      <h1 className='text-center mb-5 font-bold'>Security Analysis</h1>
      <div>Introspection: {introspectionOn ? 'On' : 'Off'}</div>
      <div>
        <h3>Suggestions</h3>
        <ul>
          <li>
            {!introspectionOn ? null : 'Turn on introspection to secure schema'}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Security;
