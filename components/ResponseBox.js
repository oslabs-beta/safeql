import { useContext } from "react"
import { Context } from "../src/context"

export const ResponseBox = () => {

  const { response } = useContext(Context)

  return (
    <div className="response">
      <h1>Response</h1>
      <div>
        
      </div>
    </div>
  )
}