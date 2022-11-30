import { useState, useContext } from "react";
import { Context } from "../src/context";
import { checkIntrospection } from "../src/queryService"
 
export const URLBox = () => {
  const { url, setUrl, setIsSecurity, setIntrospectionOn, introspectionOn } = useContext(Context)

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  }

  const runAnalysis = () => {
    setIsSecurity(false)
  }

  const securityCheck = async () => {
    setIntrospectionOn(await checkIntrospection(url) ? true : false)
    setIsSecurity(true)
  }

  return (
    <div className="urlBox">
      <label>graphQL endpoint URL</label>
      <input onChange={handleUrlChange}></input>
      <div>
        <button onClick={securityCheck}>Security Check</button>
        <button onClick={runAnalysis}>Metrics Analysis</button>
      </div>
    </div>
  )
}