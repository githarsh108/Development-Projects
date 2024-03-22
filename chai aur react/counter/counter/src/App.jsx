import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(2);

  const addValue = ()=>{
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }

  const subValue =()=>{
    setCounter(counter-1); 
  }

  
  return (
    <>
     
      <h1>Counter </h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addValue}>add value </button>
      <br />
      <button onClick={subValue}>decrease value </button>
    </>
  )
}

export default App
