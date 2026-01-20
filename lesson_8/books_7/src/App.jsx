import React, { useReducer, useState } from 'react'


function reducerFunction(state, action) {
  // return { count: state.count + 1 };
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
      break;

  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducerFunction, { count: 0 });

  // const [count, setcount] = useState(0);

  const increment = () => {
    // setcount(curr => curr + 1);
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    // setcount(curr => curr - 1);
    dispatch({ type: "decrement" });
  };

  console.log(state);


  return (
    <div style={{
      display: "flex",
      alignItems: "center",
    }}>
      <button onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App;