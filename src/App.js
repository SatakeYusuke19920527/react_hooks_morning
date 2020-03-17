import React, { useState } from 'react'
import './App.css'

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const increment = () => {
    setPrice(price + 1)
  }

  const decrement = () => {
    setPrice(price - 1)
  }

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <div>
      <h1>
        現在の{name}の値段は{price}です。
      </h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <input onChange={e => setName(e.target.value)} />
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}

App.defaultProps = {
  name: null,
  price: 1000
}

export default App
