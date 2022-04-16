import React from 'react'

const Child2 = ({value, handlerValue}) => {
  return (
    <button onClick={() => handlerValue(value - 1)}>Decrement</button>
  )
}

export default Child2