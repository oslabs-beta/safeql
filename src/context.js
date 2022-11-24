import { createContext, useState } from "react";

//create context
const Context = createContext({});
Context.displayName = "Query Context"

//add context provider
const ContextProvider = ({children}) => {
  //create state variables
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  //Initialize the state
const initialState = {
  url,
  setUrl,
  response,
  setResponse
}

  return (
        // this is the provider providing state
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};