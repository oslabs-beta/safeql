import { useState, useContext } from 'react';
import { Context } from '../src/context';

export const URLBox = () => {
  const { url, setUrl } = useContext(Context);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className='bg-gray-600 py-3.5 rounded-tl-lg'>
      <label className='bg-gray-400 py-6 px-3.5 rounded-tl-lg '>URL</label>
      <input
        onChange={handleUrlChange}
        className='ml-5 p-2 bg-gray-400 rounded-md w-11/12'
      ></input>
    </div>
  );
};
