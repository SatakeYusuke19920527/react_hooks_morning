import React, { useState } from 'react'
import './App.css'

const App = props => {
  const [state, setState] = useState(props)

  const { name, price } = state

  const increment = () => {
    setState({ ...state, price: state.price + 1 })
  }

  const decrement = () => {
    setState({ ...state, price: state.price - 1 })
  }

  const reset = () => {
    setState(props)
  }

  return (
    <div>
      <h1>
        現在の{name}の値段は{price}です。
      </h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <input onChange={e => setState({ ...state, name: e.target.value })} />
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}

App.defaultProps = {
  name: null,
  price: 1000
}

export default App
