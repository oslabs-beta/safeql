import {  useState, useContext } from 'react'
import { Context } from '../../src/context'


function QueryAttack (props) {
  const [input, setInput] = useState('')
  const [queryAttack] = useContext(Context)
  const { queryText } = props

  function handleClick () {
    setInput(queryText)
    // setInput(queryAttack)
  }

  return (
    <>
    <button onClick={handleClick} className='border-2'>Construct Query Attack</button>
    <input value={input} className='w-full text-black text-xs'></input>
    </>
  )
}

export default QueryAttack;