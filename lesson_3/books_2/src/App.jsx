import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    setNum1(200);
    // setNum2(1000);
    console.log("from useEffect");

    /*
    memory clean-up
    */
    return () => {
      console.log("memory cleaned");

      setNum1(100);
    };

  }, [num1, num2]);
  // console.log(num1);

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setNum1(num1 => num1 + 1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => setNum2(num2 => num2 + 1)}>Add</button>
    </div>
  )
}

export default App