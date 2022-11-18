import { createContext, useState } from "react";

//Initialize the context
const Context = createContext();

//Setup state for context
const contextProvider = () => {

  //declare hooks as initial state
  const [url, setUrl] = useState('');


  //declare State
  const contextState = {
    url
  };

  return (
    <Context.Provider value={contextState}>
      {children}
    </Context.Provider>
  )
}

export {
  contextProvider,
}

export default Context;