import { useContext } from 'react';
import Security from './Security';
import Metrics from './Metrics';
import { Context } from '../src/context';
import { checkIntrospection } from '../src/queryService';

export const ResultsBox = () => {
  const {
    url,
    isSecurity,
    setIsSecurity,
    setIntrospectionOn,
    introspectionOn,
  } = useContext(Context);

  const runAnalysis = () => {
    setIsSecurity(false);
  };

  const securityCheck = async () => {
    setIntrospectionOn((await checkIntrospection(url)) ? true : false);
    setIsSecurity(true);
  };

  //isSecurity is initialized as false so that the Metrics page is initially displayed
  return (
    <section className='bg-blue-300 mt-2 ml-1 rounded-t-lg-1 w-1/3 box-border min-w-fit'>
      <div className='flex justify-evenly font-bold h-15 px-2 py-2 content-center'>
        <button
          onClick={securityCheck}
          className='flex text-xl p-2'
        >
          Security
        </button>
        <button
          onClick={runAnalysis}
          className='flex text-xl p-2'
        >
          Metrics
        </button>
      </div>
      {isSecurity ? <Security /> : <Metrics />}
    </section>
  );
};
