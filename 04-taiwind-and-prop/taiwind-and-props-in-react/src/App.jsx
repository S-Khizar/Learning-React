import { useState } from 'react'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0);
  let myobj={
    username:"hitesh",
    age:21
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Card username="aman mishra" btntext="click me"/>
    <Card username="khizar solkar" btntext="visit me"/>
    
    </>
  )
}

export default App
