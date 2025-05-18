import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Cart from './Cart'
import Report from './Report'

function App() {
  const [count,setCount] = useState([])
  const [price,setPrice] = useState([])
  const [delIndex,setDelIndex] = useState([])
  
  function getCount(count){
    setCount(count)
  }

  function getPrice(price){
    setPrice([price])
  }

  return (
    <>
      <Nav count={count}/>
      <Cart getCount={getCount} getPrice={getPrice} />
      <Report count={count} price={price} />
    </>
  )
}

export default App
