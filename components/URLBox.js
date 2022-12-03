<<<<<<< HEAD
import { useState, useContext } from "react";
import { Context } from "../src/context";
import { checkIntrospection } from "../src/queryService"
 
export const URLBox = () => {
  const { url, setUrl, setIsSecurity, setIntrospectionOn, introspectionOn } = useContext(Context)
=======
import { useState, useContext } from 'react';
import { Context } from '../src/context';

export const URLBox = () => {
  const { url, setUrl } = useContext(Context);
>>>>>>> dev

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const runAnalysis = () => {
    setIsSecurity(false)
  }

  const securityCheck = async () => {
    setIntrospectionOn(await checkIntrospection(url) ? true : false)
    setIsSecurity(true)
  }

  return (
<<<<<<< HEAD
    <div className="urlBox">
      <label>graphQL endpoint URL</label>
      <input onChange={handleUrlChange}></input>
      <div>
        <button onClick={securityCheck}>Security Check</button>
        <button onClick={runAnalysis}>Metrics Analysis</button>
      </div>
=======
    <div className='bg-blue-200 py-2 rounded-lg-1 flex justify-evenly justify-center align-middle content-center mb-3'>
      <label className='px-1 text-xl font-bold justify-center align-middle content-center p-1'>
        URL
      </label>
      <input
        onChange={handleUrlChange}
        className='bg-blue-100 rounded-lg-1 w-95p text-xl p-1 pl-3 pr-3 font-light focus:border-none focus:outline focus:outline-2 focus:outline-blue-300'
      ></input>
>>>>>>> dev
    </div>
  );
};
