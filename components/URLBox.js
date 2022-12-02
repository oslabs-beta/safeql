import { useState, useContext } from 'react';
import { Context } from '../src/context';

export const URLBox = () => {
  const { url, setUrl } = useContext(Context);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className='bg-blue-200 py-3.5 rounded-tl-lg'>
      <label className='py-6 px-3.5 rounded-tl-lg text-2xl font-bold'>URL</label>
      <input
        onChange={handleUrlChange}
        className='ml-5 p-2 bg-blue-100 rounded-md w-92p'
      ></input>
    </div>
  );
};
