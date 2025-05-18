import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Cart from './Cart'
import Report from './Report'

function App() {
  const [count,setCount] = useState([])
  function getCount(count){
    setCount(count)
  }
  return (
    <>
      <Nav count={count}/>
      <Cart getCount={getCount}/>
      <Report count={count}/>
    </>
  )
}

export default App
