import { useState, useContext } from 'react';
import { Context } from '../src/context';

export const URLBox = () => {
  const { url, setUrl } = useContext(Context);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className='bg-blue-200 py-2 rounded-lg-1 flex justify-evenly justify-center align-middle content-center mb-3'>
      <label className='px-1 text-xl font-bold justify-center align-middle content-center p-1'>
        URL
      </label>
      <input
        onChange={handleUrlChange}
        className='bg-blue-100 rounded-lg-1 w-95p text-xl p-1 pl-3 pr-3 font-light focus:border-none focus:outline focus:outline-2 focus:outline-blue-300'
      ></input>
    </div>
  );
};
