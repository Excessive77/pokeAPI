import React from 'react'

const Child = ({value, handlerValue}) => {
  return (
    <button onClick={() => handlerValue (value + 1)}>Increment</button>
  )
}

export default Child