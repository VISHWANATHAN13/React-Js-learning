import React, { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("count", count);

  }, [count]);

  console.log("rendered");



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(curr => curr + 1)}>Add</button>
    </div>
  )
}

export default App;