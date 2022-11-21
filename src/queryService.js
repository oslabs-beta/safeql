import { useContext } from "react"
import { Context } from "./context"

//This will submit the typed query into the specified endpoint for basic functionality
export const queryEndpoint = (url, query) => {
  console.log('from queryEndpoint', url, 'query', query)
}