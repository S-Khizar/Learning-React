import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    console.log("value added", counter);
    setCounter(counter + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button>Remove value {counter}</button>
      <p>Footer: {counter}</p>
      <button onClick={() => setCounter(counter < 20 ? counter +1 : 20 )}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>-</button>
    </>
  );
}

export default App;
