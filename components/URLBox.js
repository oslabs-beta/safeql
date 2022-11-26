import { useState, useContext } from "react";
import { Context } from "../src/context";

 
export const URLBox = () => {
  const { url, setUrl } = useContext(Context)

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  }

  return (
    <div className="urlBox">
      <label>graphQL endpoint URL</label>
      <input onChange={handleUrlChange}></input>
    </div>
  )
}