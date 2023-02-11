import {  useState, useContext } from 'react'
import { Context } from '../../src/context'

function QueryAttack (props) {
  const [qInput, setQInput] = useState('')
  const { queryText } = props

  function handleClick () {
    setQInput(queryText)
  }

  return (
    <>
    <button onClick={handleClick} className='border-2'>Construct Query Attack</button>
    <input value={qInput} className='w-full text-black text-xs'></input>
    </>
  )
}

export default QueryAttack;