import { useContext } from 'react';
import Security from './Security';
import Metrics from './Metrics';
import { Context } from '../src/context';
import { checkIntrospection } from '../src/queryService';

export const ResultsBox = () => {
  const { url, isSecurity, setIsSecurity, setIntrospectionOn, introspectionOn } =
    useContext(Context);

  const runAnalysis = () => {
    setIsSecurity(false);
  };

  const securityCheck = async () => {
    setIntrospectionOn((await checkIntrospection(url)) ? true : false);
    setIsSecurity(true);
  };

  //isSecurity is initialized as false so that the Metrics page is initially displayed
  return (
    <section>
      <div>
        <button onClick={securityCheck} className='bg-gray-600 py-3.5 rounded-tl-lg'>Security Check</button>
        <button onClick={runAnalysis} className='bg-gray-700 py-3.5 rounded-tr-lg'>Metrics Analysis</button>
      </div>
      {isSecurity ? <Security /> : <Metrics />}
    </section>
    
  );
};
