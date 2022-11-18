import { useState, useContext } from "react";
import Context from "../src/context";
 
export const URLBox = () => {
  const [ endpoint, setEndpoint] = useState('');
  const { setUrl } = useContext(Context)

  const handleUrlChange = (e) => {
    setEndpoint(e.target.value)
  }

  return (
    <div className="urlBox">
      <label>graphQL endpoint URL</label>
      <input onChange={handleUrlChange}></input>
    </div>
  )
}