import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

//create type for Context
type ContextType = {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  response: string;
  setResponse: Dispatch<SetStateAction<string>>;
  introspectionOn: boolean;
  setIntrospectionOn: Dispatch<SetStateAction<boolean>>;
  analysisData: AnalysisType;
  setAnalysisData: Dispatch<SetStateAction<AnalysisType>>;
  isSecurity: boolean;
  setIsSecurity: Dispatch<SetStateAction<boolean>>;
};

type AnalysisType = {
  querySpeed: number | null;
};

//create context
const Context = createContext<ContextType>({});
Context.displayName = 'Query Context';

//add context provider
const ContextProvider = ({ children }) => {
  //create state variables
  const [url, setUrl] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [introspectionOn, setIntrospectionOn] = useState<boolean>(true);
  const [analysisData, setAnalysisData] = useState<AnalysisType>({
    querySpeed: null,
  });
  const [isSecurity, setIsSecurity] = useState<boolean>(false);

  //Initialize the state
  const initialState = {
    url,
    setUrl,
    response,
    setResponse,
    introspectionOn,
    setIntrospectionOn,
    analysisData,
    setAnalysisData,
    isSecurity,
    setIsSecurity,
  };

  return (
    // this is the provider providing state
    <Context.Provider value={initialState}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
